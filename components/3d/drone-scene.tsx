"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function createStarField() {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(700 * 3);

  for (let index = 0; index < 700; index += 1) {
    positions[index * 3] = (Math.random() - 0.5) * 30;
    positions[index * 3 + 1] = (Math.random() - 0.5) * 30;
    positions[index * 3 + 2] = (Math.random() - 0.5) * 30;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      color: "#f8f3ef",
      size: 0.04,
      transparent: true,
      opacity: 0.75,
    }),
  );
}

export function DroneScene() {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) {
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog("#050911", 6, 24);

    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0.58, 4.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(host.clientWidth, host.clientHeight);
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight("#f8f3ef", 1.1);
    scene.add(ambient);

    const tealKey = new THREE.DirectionalLight("#7df9ff", 3.1);
    tealKey.position.set(4, 3, 4);
    scene.add(tealKey);

    const indigoFill = new THREE.DirectionalLight("#016e8f", 1.15);
    indigoFill.position.set(-3, -1.5, -3);
    scene.add(indigoFill);

    const pulse = new THREE.PointLight("#7df9ff", 1.45, 12, 1.8);
    pulse.position.set(0, 0.55, 2.1);
    scene.add(pulse);

    const starField = createStarField();
    scene.add(starField);

    const heroGroup = new THREE.Group();
    scene.add(heroGroup);

    let droneWrap: THREE.Group | null = null;
    let droneTilt: THREE.Group | null = null;
    let droneSpin: THREE.Group | null = null;
    let droneRadius = 1.3;
    let baseCameraZ = 4.8;

    const getFitCameraDistance = (
      radius: number,
      cam: THREE.PerspectiveCamera,
    ) => {
      const vFov = THREE.MathUtils.degToRad(cam.fov);
      const hFov = 2 * Math.atan(Math.tan(vFov / 2) * cam.aspect);
      const distanceV = radius / Math.sin(vFov / 2);
      const distanceH = radius / Math.sin(hFov / 2);
      return Math.max(distanceV, distanceH) * 1.01;
    };

    const loader = new GLTFLoader();
    loader.load(
      "/drone.glb",
      (gltf) => {
        droneWrap = new THREE.Group();
        droneTilt = new THREE.Group();
        droneSpin = new THREE.Group();
        const droneModel = gltf.scene;

        droneModel.traverse((obj) => {
          if (obj instanceof THREE.Mesh) {
            obj.castShadow = true;
            obj.receiveShadow = true;
          }
        });

        const box = new THREE.Box3().setFromObject(droneModel);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxAxis = Math.max(size.x, size.y, size.z, 1);
        const fitScale = 5.4 / maxAxis;

        droneModel.scale.setScalar(fitScale);
        droneModel.updateMatrixWorld(true);

        const scaledBox = new THREE.Box3().setFromObject(droneModel);
        const scaledCenter = scaledBox.getCenter(new THREE.Vector3());
        const sphere = scaledBox.getBoundingSphere(new THREE.Sphere());
        droneRadius = sphere.radius;

        droneModel.position.sub(scaledCenter);
        droneModel.updateMatrixWorld(true);

        droneSpin.add(droneModel);
        droneTilt.add(droneSpin);
        droneWrap.add(droneTilt);
        heroGroup.add(droneWrap);

        baseCameraZ = getFitCameraDistance(droneRadius, camera);
        camera.position.z = baseCameraZ;
      },
      undefined,
      () => undefined,
    );

    const resize = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      baseCameraZ = getFitCameraDistance(droneRadius, camera);
      camera.position.z = baseCameraZ;
    };

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);
    resize();

    const focusSection =
      (host.closest("section#hero") as HTMLElement | null) ?? host;

    const sceneState = { progress: 0 };
    const scrollTween = gsap.to(sceneState, {
      progress: 1,
      ease: "none",
      scrollTrigger: {
        trigger: focusSection,
        start: "top 70%",
        end: "bottom 25%",
        scrub: 1.2,
      },
    });

    let frame = 0;
    let frameId = 0;

    const render = () => {
      frame += 0.008;
      const progress = THREE.MathUtils.clamp(sceneState.progress, 0, 1);

      heroGroup.rotation.x = 0;
      heroGroup.rotation.y = 0;
      heroGroup.rotation.z = 0;
      heroGroup.position.x = 0;
      heroGroup.position.y = 0;

      if (droneWrap) {
        // Fixed slight presentation tilt.
        if (droneTilt) {
          droneTilt.rotation.x = 0.08;
          droneTilt.rotation.y = 0;
          droneTilt.rotation.z = 0;
        }

        // Scroll-driven self rotation around model's own center.
        if (droneSpin) {
          droneSpin.rotation.x = 0;
          droneSpin.rotation.y = Math.PI / 2 + progress * Math.PI * 1.65;
          droneSpin.rotation.z = 0;
        }

        droneWrap.position.y = 0;
      }

      starField.rotation.y = -frame * 0.03;
      starField.rotation.x = progress * 0.06;

      pulse.intensity = 1.0 + Math.sin(frame * 2.6) * 0.16 + progress * 0.35;
      camera.position.z = baseCameraZ;
      camera.position.x = 0;
      camera.position.y = 0.58;
      camera.lookAt(0, 0.02, 0);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameId);
      scrollTween.scrollTrigger?.kill();
      scrollTween.kill();
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      host.removeChild(renderer.domElement);
      scene.clear();
    };
  }, []);

  return <div ref={hostRef} className="h-[520px] w-full lg:h-[700px]" />;
}

"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useRef } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Compass,
  GraduationCap,
  HeartHandshake,
  Mail,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Telescope,
  Users,
} from "lucide-react";
import { ScrollCanvas } from "@/components/scroll-canvas";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const explorerBullets = [
  "Students who want to understand what a career looks like and how it evolves.",
  "Students designing standout college applications.",
  "Content creators exploring interests and shaping stronger ideas.",
  "Students strengthening core functioning and executive functioning skills.",
  "Anyone seeking help in a subject they care about or feel stuck on.",
];

const changeDriverBullets = [
  "Subject matter experts and professionals exploring alternate careers.",
  "Entrepreneurs preparing to start their own venture.",
  "Mid-career and late-career professionals ready to drive a change.",
];

const howItWorks = [
  {
    number: "01",
    title: "Tell Us Where You Want To Go",
    description:
      "Share your goals, challenges, and timing. We keep the first conversation honest, light, and clear.",
  },
  {
    number: "02",
    title: "Start Moving. Track Your Progress.",
    description:
      "We shape a custom plan with milestones, accountability, and just enough structure to keep momentum real.",
  },
  {
    number: "03",
    title: "Get Matched With Your Navigator",
    description:
      "We pair you with a mentor whose experience, expertise, and approach align with your exact direction.",
  },
];

const programs = [
  {
    name: "SkyMakers",
    tag: "Build, Fly & Understand Aircraft",
    meta: "Manned Aircraft · UAVs · Drones",
    summary:
      "A 12-session aerospace engineering program where students move from understanding lift and thrust to assembling, wiring, configuring, and flying a real quadcopter drone.",
    bullets: [
      "Master the forces of flight: lift, drag, thrust, weight",
      "Explore drone applications in agriculture, defense, delivery, and surveillance",
      "Learn motors, ESCs, flight controllers, and LiPo batteries",
      "Assemble and wire a quadcopter from frame to flight-ready",
      "Configure flight software, calibrate sensors, and perform the first flight",
      "Complete a live mission challenge",
    ],
    details:
      "Grade 6–12 · 12 sessions · 60–90 min each · Online / STEM Lab · Hands-on build",
    href: "#contact",
    accent: "teal",
  },
  {
    name: "SpaceCadets",
    tag: "Build, Launch & Understand Satellites",
    meta: "CubeSats · Space Weather · Orbital Systems",
    summary:
      "A 12-session program following the real aerospace workflow used by NASA and ISRO — from mission design to building and testing a CubeSat prototype for space weather monitoring.",
    bullets: [
      "Understand orbital mechanics: LEO, MEO, GEO, and how satellites stay in orbit",
      "Explore satellite applications: communication, Earth observation, space weather",
      "Learn subsystems: power, onboard computer, ADCS, and communication",
      "Build a 1U CubeSat prototype with environmental sensors",
      "Program a microcontroller-based onboard computer for data logging",
      "Run a simulated space weather mission and present findings",
    ],
    details:
      "Grade 6–12 · 12 sessions · 60–90 min each · Online / STEM Lab · Hands-on build",
    href: "#contact",
    accent: "blue",
  },
];

const mentoringCategories = [
  {
    icon: GraduationCap,
    title: "College Applications",
    description: "Strategy, essays, school selection, interviews.",
  },
  {
    icon: BookOpen,
    title: "Academic Interventions",
    description:
      "All subjects, test prep, study systems, foundational readiness.",
  },
  {
    icon: Sparkles,
    title: "Co-curriculars & Competitive Readiness",
    description: "Clubs, science fairs, olympiads, leadership programs.",
  },
  {
    icon: Telescope,
    title: "Research Mentorship",
    description: "Projects, publications, lab readiness.",
  },
  {
    icon: Target,
    title: "Graduate & Fellowship Apps",
    description: "PhD, Masters, Fulbright, Rhodes, NSF.",
  },
  {
    icon: Rocket,
    title: "Career Transition",
    description: "Pivots, industry changes, positioning.",
  },
  {
    icon: Compass,
    title: "Professional Growth",
    description: "Leadership, skills, executive presence.",
  },
  {
    icon: Users,
    title: "Entrepreneurship",
    description: "Startup navigation, idea validation, fundraising.",
  },
];

const trustPillars = [
  {
    icon: HeartHandshake,
    title: "Mentors Who Shape You",
    description:
      "Every Tesserologist mentor has lived the path they are guiding you through. No theories, just first-hand experience.",
  },
  {
    icon: Target,
    title: "Matched To Your Specific Goal",
    description:
      "We do not assign generic coaching. We match based on your ambition, timeline, and context.",
  },
  {
    icon: ShieldCheck,
    title: "Structured For Real Progress",
    description:
      "Sessions are purposeful, milestones are tracked, and accountability is built in — not optional.",
  },
];

const faqs = [
  {
    question: "How does mentor matching work?",
    answer:
      "You tell us your goal, background, and timeline. We then match you with a mentor whose lived experience aligns with what you need next.",
  },
  {
    question: "Do you work with students and professionals?",
    answer:
      "Yes. The site is built around two entry paths: Explorer for students and Change Driver for professionals and career shifters.",
  },
  {
    question: "Are Summer 2026 programs beginner-friendly?",
    answer:
      "Yes. SkyMakers and SpaceCadets are designed for grades 6–12 and require curiosity more than prior experience.",
  },
  {
    question: "What does the first intro call cover?",
    answer:
      "We discuss your goals, blockers, fit, and whether you need mentoring, a summer program, or both.",
  },
  {
    question: "Can you support custom goals?",
    answer:
      "Yes. The site includes a custom goal path, including niche subjects, study support, and specific career questions.",
  },
];

const testimonials = [
  {
    quote:
      "Placeholder testimonial: this is where a student story about landing a stronger application would live.",
    name: "Future Student",
    role: "Grade 11 · Explorer",
    outcome: "Goal: college application strategy",
  },
  {
    quote:
      "Placeholder testimonial: this card can later be replaced with a mentor or parent quote about clarity and momentum.",
    name: "Future Professional",
    role: "Career pivot · Change Driver",
    outcome: "Goal: transition planning",
  },
  {
    quote:
      "Placeholder testimonial: reserve this space for proof of program outcomes and summer enrollment wins.",
    name: "Future Summer Parent",
    role: "SkyMakers / SpaceCadets",
    outcome: "Goal: hands-on aerospace growth",
  },
];

const programCountdown = [
  { label: "Days", value: "84" },
  { label: "Hours", value: "13" },
  { label: "Mins", value: "42" },
  { label: "Secs", value: "19" },
];

function SectionAnchor({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      {children}
    </section>
  );
}

function ProgramCard({ program }: { program: (typeof programs)[number] }) {
  return (
    <Card className="relative overflow-hidden border-white/10 bg-[linear-gradient(180deg,rgba(6,12,24,0.96),rgba(10,18,36,0.9))] p-0 shadow-glow">
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(125,249,255,0.1),rgba(125,249,255,0.9),rgba(1,110,143,0.25))]" />
      <div className="absolute right-4 top-4 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-paper/70">
        Summer 2026
      </div>
      <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 p-7 lg:p-8">
          <Badge className="border-white/10 bg-white/10 text-paper">
            {program.name}
          </Badge>
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.24em] text-paper/45">
              {program.tag}
            </p>
            <h3 className="font-display text-4xl leading-none text-paper">
              {program.meta}
            </h3>
          </div>
          <p className="max-w-xl text-base leading-8 text-paper/72">
            {program.summary}
          </p>

          <ul className="grid gap-3 sm:grid-cols-2">
            {program.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.035] p-4 text-sm leading-6 text-paper/72"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <p className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-paper/68">
            <span className="font-semibold text-paper">Program details:</span>{" "}
            {program.details}
          </p>

          <Button href={program.href} className="w-full sm:w-auto">
            Enroll in {program.name}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div
          className={`border-t border-white/10 p-7 lg:border-l lg:border-t-0 lg:p-8 ${
            program.accent === "teal"
              ? "bg-[radial-gradient(circle_at_top,rgba(1,110,143,0.22),transparent_40%),rgba(3,8,18,0.85)]"
              : "bg-[radial-gradient(circle_at_top,rgba(125,249,255,0.18),transparent_40%),rgba(3,8,18,0.85)]"
          }`}
        >
          <div className="flex h-full flex-col justify-between gap-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-paper/45">
                Hands-on path
              </p>
              <div className="mt-5 space-y-4">
                <div className="grid grid-cols-4 gap-2">
                  {programCountdown.map((segment) => (
                    <div
                      key={segment.label}
                      className="rounded-2xl border border-white/10 bg-ink/40 px-3 py-4 text-center"
                    >
                      <p className="font-display text-3xl text-paper">
                        {segment.value}
                      </p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-paper/45">
                        {segment.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-sm leading-7 text-paper/68">
                  Summer 2026 enrollment is framed as an action-first product
                  moment with a countdown-style urgency block.
                </p>
              </div>
            </div>
            <div className="space-y-3 rounded-2xl border border-white/10 bg-black/25 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-paper/45">
                Quick ask
              </p>
              <Button variant="secondary" href="#contact" className="w-full">
                Not sure which program? Talk to us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLElement | null>(null);

  const navLinks = useMemo(
    () => [
      { label: "Explorer", href: "#explorer" },
      { label: "Change Driver", href: "#change-driver" },
      { label: "About", href: "#belief" },
      { label: "Contact Us", href: "#contact" },
    ],
    [],
  );

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-badge, .hero-title, .hero-copy, .hero-cta",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
        },
      );

      gsap.to(".hero-grid", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1.4,
        },
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <main className="overflow-x-hidden bg-[#081124] text-paper">
      <SiteHeader links={navLinks} />

      <SectionAnchor id="hero">
        <section
          ref={heroRef}
          className="hero-grid relative min-h-[calc(100vh-72px)] overflow-x-hidden overflow-y-visible border-b border-white/5 bg-[radial-gradient(circle_at_top,rgba(1,110,143,0.2),transparent_35%),linear-gradient(180deg,#061022_0%,#06111f_36%,#050a12_100%)]"
        >
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.4)_100%)]" />
          <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-8 px-4 py-12 sm:px-5 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
            <Reveal className="relative z-10 space-y-6 sm:space-y-8">
              <Badge className="hero-badge border-white/15 bg-white/10 text-paper/90">
                Step Into Your Hyperspace
              </Badge>
              <div className="space-y-5">
                <h1 className="hero-title max-w-3xl font-display text-3xl leading-[0.98] text-paper sm:text-4xl md:text-6xl lg:text-7xl">
                  The distance between your dream and your reality is a
                  dimension we know how to cross.
                </h1>
                <p className="hero-copy max-w-2xl text-base leading-7 text-paper/78 sm:text-lg sm:leading-8 md:text-xl">
                  Tesserologist connects explorers and change drivers with
                  mentors who know how to shape you to get where you actually
                  belong.
                </p>
              </div>

              <div className="hero-cta flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button href="#explorer">
                  I&apos;m a Teleporter
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="#featured-programs" variant="secondary">
                  Explore Featured Programs
                </Button>
              </div>

              <div className="grid gap-3 pt-2 sm:pt-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  ["20+", "years supporting education and careers"],
                  ["200+", "mentors collaborating with us"],
                  ["2", "ways in: Explorer and Change Driver"],
                ].map(([value, label]) => (
                  <Card
                    key={label}
                    className="border-white/10 bg-white/[0.04] p-5"
                  >
                    <p className="font-display text-4xl text-paper">{value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.24em] text-paper/55">
                      {label}
                    </p>
                  </Card>
                ))}
              </div>
            </Reveal>

            <div className="relative z-10">
              <div className="pointer-events-none absolute -inset-4 sm:-inset-10 bg-[radial-gradient(circle_at_center,rgba(125,249,255,0.22),transparent_55%)] blur-3xl" />
              <div className="relative">
                <ScrollCanvas />
                <div className="pointer-events-none absolute left-4 top-4 max-w-[180px] rounded-full border border-white/10 bg-black/25 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-paper/65 backdrop-blur-md sm:left-5 sm:top-5 sm:max-w-[240px] sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.24em]">
                  3D drone focus animation on scroll
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionAnchor>

      <SectionAnchor id="belief">
        <section className="border-b border-[#e8dfd7] bg-[linear-gradient(180deg,#f8f3ef_0%,#f4ede5_100%)] px-4 py-16 text-ink sm:px-5 sm:py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <Badge className="border-ink/10 bg-ink/5 text-ink/70">
              Our Belief
            </Badge>
            <h2 className="mt-5 font-display text-3xl leading-[0.98] text-ink sm:text-4xl md:text-6xl lg:text-7xl">
              We believe every dreamer deserves a navigator.
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-ink/78 sm:text-lg sm:leading-9 md:text-xl">
              A tesseract exists beyond what the eye can see — it is a shape
              that folds space, collapsing impossible distances into a single
              step. That is what great mentorship does. It bends the distance
              between where you are and where you want to be. We are
              Tesserologists: the ones who map the dimensions, know the folds,
              and walk alongside you as you cross.
            </p>
          </div>
        </section>
      </SectionAnchor>

      <SectionAnchor id="teleporters">
        <section
          id="explorer"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 lg:px-8 lg:py-28"
        >
          <SectionHeading
            eyebrow="Who We Serve"
            title="Choose the path that fits your dimension."
            description="Visitors self-select into Explorer or Change Driver, then we route them toward the right mentor path and the right conversion flow."
          />

          <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-2 lg:gap-6">
            <Card className="space-y-6 border-white/10 bg-[linear-gradient(180deg,rgba(4,16,35,0.98),rgba(3,9,22,0.9))] p-0">
              <div className="border-b border-white/8 p-5 sm:p-6">
                <Badge className="border-white/12 bg-white/5 text-paper/90">
                  Explorer
                </Badge>
                <h3 className="mt-4 font-display text-3xl text-paper sm:text-4xl">
                  For students, creators, and curious builders.
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-paper/72 sm:text-base sm:leading-8">
                  Whether you are choosing your first AP class or finishing your
                  dissertation, we match you with mentors who have navigated
                  exactly where you are headed.
                </p>
              </div>
              <div className="space-y-4 p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.26em] text-paper/45">
                  We help with
                </p>
                <ul className="grid gap-3">
                  {explorerBullets.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.035] p-4 text-sm leading-6 text-paper/72"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button href="#contact" className="w-full sm:w-auto">
                  Explore Student Mentoring
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card
              id="change-driver"
              className="space-y-6 border-white/10 bg-[linear-gradient(180deg,rgba(1,24,34,0.98),rgba(3,9,22,0.9))] p-0"
            >
              <div className="border-b border-white/8 p-5 sm:p-6">
                <Badge className="border-white/12 bg-white/5 text-paper/90">
                  Change Driver
                </Badge>
                <h3 className="mt-4 font-display text-3xl text-paper sm:text-4xl">
                  For professionals, founders, and changemakers.
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-paper/72 sm:text-base sm:leading-8">
                  You have the drive. We help you get the direction. Our mentors
                  have made the pivots, led the teams, and built the expertise
                  you are reaching for.
                </p>
              </div>
              <div className="space-y-4 p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.26em] text-paper/45">
                  We help with
                </p>
                <ul className="grid gap-3">
                  {changeDriverBullets.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.035] p-4 text-sm leading-6 text-paper/72"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button href="#contact" className="w-full sm:w-auto">
                  Explore Professional Mentoring
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </SectionAnchor>

      <SectionAnchor id="how-it-works">
        <section className="border-y border-white/5 bg-[radial-gradient(circle_at_top,rgba(1,110,143,0.11),transparent_34%),#07111f] px-4 py-16 sm:px-5 sm:py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="How It Works"
              title="Three steps to your next dimension."
              description="The site uses a simple path to conversion: state the problem, create momentum, then land with the right mentor."
            />

            <div className="mt-10 grid gap-4 sm:gap-5 lg:mt-12 lg:grid-cols-3">
              {howItWorks.map((step) => (
                <Reveal key={step.number}>
                  <Card className="relative h-full border-white/10 bg-white/[0.04] p-5 sm:p-6">
                    <p className="font-display text-4xl text-teal/90 sm:text-5xl">
                      {step.number}
                    </p>
                    <h3 className="mt-4 font-display text-2xl text-paper sm:mt-5 sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-paper/70 sm:mt-4">
                      {step.description}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </SectionAnchor>

      <SectionAnchor id="featured-programs">
        <section className="border-b border-white/5 bg-[#050a14] px-4 py-16 sm:px-5 sm:py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-4 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Featured This Summer"
                title="Summer 2026 enrollment starts here."
                description="This summer, Tesserologist is bringing flagship hands-on aerospace programs to students in grades 6–12. No prior experience needed — just curiosity, ambition, and the willingness to build."
              />
              <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs text-paper/75 sm:px-5 sm:py-3 sm:text-sm">
                Launch urgency: Summer 2026 programs + mentoring sign-ups
              </div>
            </div>

            <div className="space-y-5 lg:space-y-6">
              {programs.map((program) => (
                <ProgramCard key={program.name} program={program} />
              ))}
            </div>
          </div>
        </section>
      </SectionAnchor>

      <SectionAnchor id="mentoring-categories">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="What We Mentor"
            title="Whatever your goal, we have a navigator for that."
            description="The grid below covers the recurring mentoring categories and stays flexible enough for custom goals like chemistry, thesis writing, novel study, language arts, philosophy, math-based programs, university selection, and teleporting strategies."
          />

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {mentoringCategories.map((item) => (
              <Card
                key={item.title}
                className="border-white/10 bg-white/[0.04] p-5"
              >
                <item.icon className="h-5 w-5 text-gold" />
                <h3 className="mt-4 font-display text-2xl text-paper">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-paper/68">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          <Card className="mt-5 border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-paper/72 sm:mt-6 sm:p-6">
            Any other custom goals are welcomed: Powerplant Chemistry, Thesis
            writing, Novel Study and English Language and Literature, Study
            western and oriental philosophies, STEM-Based programs, Math-Based
            Programs, university Selection, and teleporting strategies.
          </Card>
        </section>
      </SectionAnchor>

      <SectionAnchor id="mentor-promise">
        <section className="border-y border-white/5 bg-[linear-gradient(180deg,#06111f_0%,#08182b_100%)] px-4 py-16 sm:px-5 sm:py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="The Tesserologist Difference"
              title="Not just advice. A navigator who knows the terrain."
              description="Three trust pillars explain why the mentoring experience is different: lived experience, goal-based matching, and structured progress."
            />

            <div className="mt-10 grid gap-4 sm:gap-5 lg:mt-12 lg:grid-cols-3">
              {trustPillars.map((pillar) => (
                <Card
                  key={pillar.title}
                  className="h-full border-white/10 bg-white/[0.04] p-6"
                >
                  <pillar.icon className="h-6 w-6 text-teal" />
                  <h3 className="mt-4 font-display text-3xl text-paper">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-paper/70">
                    {pillar.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </SectionAnchor>

      <SectionAnchor id="testimonials">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="What Our Navigators Say"
            title="Testimonials placeholder for future social proof."
            description="This section is intentionally reserved for future proof. For now it ships as a horizontal scroll carousel on mobile and a three-column grid on desktop."
          />

          <div className="mt-10 flex gap-4 overflow-x-auto pb-2 sm:mt-12 lg:grid lg:grid-cols-3 lg:overflow-visible">
            {testimonials.map((item) => (
              <Card
                key={item.name}
                className="min-w-[290px] flex-1 border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-sm leading-7 text-paper/70">
                  “{item.quote}”
                </p>
                <div className="mt-6 border-t border-white/8 pt-4">
                  <p className="font-semibold text-paper">{item.name}</p>
                  <p className="text-sm text-paper/55">{item.role}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-teal">
                    {item.outcome}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </SectionAnchor>

      <SectionAnchor id="contact">
        <section className="border-t border-white/5 bg-[radial-gradient(circle_at_top,rgba(125,249,255,0.12),transparent_28%),#030812] px-4 py-16 sm:px-5 sm:py-20 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
            <div className="space-y-5 sm:space-y-6">
              <Badge className="border-white/10 bg-white/5 text-paper/85">
                Enrollment CTA
              </Badge>
              <h2 className="font-display text-4xl leading-[0.95] text-paper sm:text-5xl md:text-7xl">
                Your next dimension is one conversation away.
              </h2>
              <p className="max-w-xl text-base leading-7 text-paper/72 sm:text-lg sm:leading-8">
                Whether you are navigating college apps, career shifts, or
                building a satellite this summer — your Tesserologist is ready.
                Start with a free intro call.
              </p>

              <div className="space-y-3 sm:flex sm:flex-wrap sm:items-center sm:gap-3 sm:space-y-0">
                <Button className="w-full sm:w-auto">
                  Book a Free Intro Call
                  <Mail className="h-4 w-4" />
                </Button>
                <Button
                  href="#featured-programs"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Learn more about our summer programs
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Card className="border-white/10 bg-white/[0.04] p-4 sm:p-5 md:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-paper/70">
                  <span className="block text-xs uppercase tracking-[0.24em] text-paper/45">
                    Name
                  </span>
                  <Input placeholder="Your name" />
                </label>
                <label className="space-y-2 text-sm text-paper/70">
                  <span className="block text-xs uppercase tracking-[0.24em] text-paper/45">
                    Email
                  </span>
                  <Input type="email" placeholder="you@example.com" />
                </label>
                <label className="space-y-2 text-sm text-paper/70 sm:col-span-2">
                  <span className="block text-xs uppercase tracking-[0.24em] text-paper/45">
                    I am a
                  </span>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="parent">Parent / Guardian</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </label>
                <label className="space-y-2 text-sm text-paper/70 sm:col-span-2">
                  <span className="block text-xs uppercase tracking-[0.24em] text-paper/45">
                    My goal in one line
                  </span>
                  <Textarea placeholder="Tell us what you want to cross next..." />
                </label>
              </div>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button className="w-full sm:w-auto">Submit</Button>
                <p className="text-xs uppercase tracking-[0.24em] text-paper/45">
                  Free intro call request
                </p>
              </div>
            </Card>
          </div>
        </section>
      </SectionAnchor>

      <SectionAnchor id="faq">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions, answered fast."
            description="Keep this section close to the CTA so hesitation gets handled before the visitor leaves."
          />

          <Accordion
            type="single"
            collapsible
            className="mt-10 space-y-4 sm:mt-12"
          >
            {faqs.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 data-[state=open]:bg-white/[0.05]"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-paper no-underline hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-3xl pb-5 text-sm leading-7 text-paper/68">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </SectionAnchor>

      <footer className="border-t border-white/5 bg-[#030712] px-4 py-8 text-paper/70 sm:px-5 sm:py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold tracking-[0.28em] text-teal">
                T
              </div>
              <div>
                <p className="font-display text-2xl leading-none text-paper">
                  Tesserologist
                </p>
                <p className="text-xs uppercase tracking-[0.24em] text-paper/45">
                  Navigating dreamers to their next dimension.
                </p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-paper/60">
              Supporting education and career advancement over the past two
              decades with collaborative support from 200+ mentors.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.18em] text-paper/50 sm:text-sm sm:tracking-[0.2em]">
            <a href="#hero">Top</a>
            <a href="#belief">About</a>
            <a href="#featured-programs">Programs</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-white/5 pt-6 text-xs uppercase tracking-[0.24em] text-paper/38">
          © 2025 Tesserologist. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

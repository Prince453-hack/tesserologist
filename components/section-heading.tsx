import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <Badge>{eyebrow}</Badge>
      <h2 className="font-display text-4xl leading-none text-paper md:text-6xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-paper/68 md:text-lg">
        {description}
      </p>
    </div>
  );
}

import PageLayout from "@/components/PageLayout";

const rules = [
  "All visitors must hold a valid ticket for the respective event.",
  "Bags larger than A4 format are not permitted inside the arena.",
  "The following items are prohibited: weapons, glass bottles, cans, pyrotechnics, and laser pointers.",
  "Smoking is only permitted in designated areas.",
  "Animals are not allowed inside the arena, except for assistance dogs.",
  "Professional cameras and recording equipment require prior accreditation.",
  "Visitors must follow instructions from security and stewards at all times.",
  "Drinks may not be brought into the arena in glass containers.",
  "The arena management reserves the right to carry out body searches.",
  "Standing in aisles and gangways is not permitted during events.",
];

export default function StadiumByLawsPage() {
  return (
    <PageLayout
      title="Stadium by Laws"
      subtitle="Rules and regulations for visitors"
      image="/arena_night_hero_1782318185369.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Arena", href: "/arena" }]}
    >
      <div className="max-w-3xl mx-auto">
        <ol className="space-y-3">
          {rules.map((rule, i) => (
            <li key={i} className="flex gap-3 text-white/70">
              <span className="font-bold text-arena-primary shrink-0">{i + 1}.</span>
              <span>{rule}</span>
            </li>
          ))}
        </ol>
      </div>
    </PageLayout>
  );
}

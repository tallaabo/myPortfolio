export const metadata = { title: "Writings" };

const groups = [
  { label: "Poems — English", href: "/writing/poems/english" },
  { label: "Poems — Somali",  href: "/writing/poems/somali" },
  { label: "Stories — English", href: "/writing/stories/english" },
  { label: "Stories — Somali",  href: "/writing/stories/somali" },
];

export default function WritingOverview() {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-semibold">Writings</h1>
      <ul className="mt-6 grid gap-3">
        {groups.map((g) => (
          <li key={g.href} className="rounded-xl border border-white/20 bg-black/30 p-4">
            <a className="underline" href={g.href}>{g.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

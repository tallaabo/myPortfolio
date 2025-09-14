import Link from "next/link";
import { list } from "@/lib/content";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  const projects = list("projects"); // reads from content/projects/
  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <li
            key={p.slug}
            className="rounded-xl border border-white/20 bg-black/30 p-4"
          >
            <h2 className="text-lg font-semibold">{p.meta.title}</h2>
            {p.meta.summary && (
              <p className="mt-1 text-sm text-neutral-200">{p.meta.summary}</p>
            )}
            <div className="mt-2 flex flex-wrap gap-2">
              {(p.meta.tags ?? []).map((t: string) => (
                <span
                  key={t}
                  className="rounded-full border border-white/20 px-2 py-0.5 text-xs text-neutral-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-3 flex items-center gap-4 text-sm">
              {p.meta.github && (
                <a className="underline" href={p.meta.github} target="_blank">
                  GitHub
                </a>
              )}
              <Link className="underline ml-auto" href={`/projects/${p.slug}`}>
                Details →
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

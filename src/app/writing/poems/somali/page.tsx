import Link from "next/link";
import { list } from "@/lib/content";

export const metadata = { title: "Poems — Somali" };

export default function PoemsSomaliPage() {
  const items = list("writing", "poems", "somali");
  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-semibold">Poems — Somali</h1>
      <ul className="mt-4 space-y-2">
        {items.map((w) => (
          <li key={w.slug} className="rounded-lg border border-white/20 bg-black/30 p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{w.meta.title}</p>
                {w.meta.date && (
                  <p className="text-xs text-neutral-300">
                    {new Date(w.meta.date).toDateString()}
                  </p>
                )}
              </div>
              <Link className="underline text-sm" href={`/writing/poems/somali/${w.slug}`}>
                Read →
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

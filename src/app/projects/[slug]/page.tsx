import { getDoc } from "@/lib/content";

export default async function ProjectDetail({ params }: { params: { slug: string } }) {
  const { content, meta } = await getDoc(["projects"], params.slug);

  return (
    <main className="prose prose-invert mx-auto max-w-3xl p-6">
      <h1>{meta.title}</h1>
      {meta.summary && <p className="lead">{meta.summary}</p>}

      {meta.github && (
        <p>
          <a className="underline" href={meta.github} target="_blank">
            GitHub
          </a>
        </p>
      )}

      {content}
    </main>
  );
}

import { getDoc } from "@/lib/content";

export default async function StoryEnglishDetail({ params }: { params: { slug: string } }) {
  const { content, meta } = await getDoc(["writing", "stories", "english"], params.slug);
  return (
    <main className="prose prose-invert mx-auto max-w-3xl p-6">
      <h1>{meta.title}</h1>
      {content}
    </main>
  );
}

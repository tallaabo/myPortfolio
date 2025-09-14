export const metadata = { title: "Resume" };

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="text-2xl font-semibold text-white">Resume</h1>
      <p className="mt-2">
        <a className="underline text-yellow-300" href="/resume.pdf" download>
          Download PDF
        </a>
      </p>
      <object
        data="/resume.pdf"
        type="application/pdf"
        className="mt-4 h-[80vh] w-full rounded-xl border border-white/30 bg-black"
      />
    </div>
  );
}

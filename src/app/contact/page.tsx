export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl p-6">
      <h1 className="text-2xl font-semibold text-white">Contact</h1>
      <p className="mt-2">
        Prefer email?{" "}
        <a className="underline text-yellow-300" href="mailto:atallaabo@gmail.com">
          atallaabo@gmail.com
        </a>
      </p>
      <form
        action="https://formspree.io/f/YOUR_FORMSPREE_ID"
        method="POST"
        className="mt-6 grid gap-3"
      >
        <input
          className="rounded-lg border border-white/30 bg-black/40 text-neutral-100 placeholder:text-neutral-400 px-3 py-2"
          name="name"
          placeholder="Your name"
          required
        />
        <input
          className="rounded-lg border border-white/30 bg-black/40 text-neutral-100 placeholder:text-neutral-400 px-3 py-2"
          type="email"
          name="email"
          placeholder="Your email"
          required
        />
        <textarea
          className="rounded-lg border border-white/30 bg-black/40 text-neutral-100 placeholder:text-neutral-400 px-3 py-2 min-h-36"
          name="message"
          placeholder="Your message"
          required
        />
        <button
          className="rounded-lg bg-yellow-300 px-4 py-2 text-black font-semibold hover:bg-yellow-400"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}

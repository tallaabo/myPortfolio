import Image from "next/image";

// simple inline SVG icon components
function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.85 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.13-4.55-5 0-1.11.38-2.02 1.01-2.73-.1-.26-.44-1.31.1-2.73 0 0 .83-.27 2.73 1.04a9.2 9.2 0 0 1 2.49-.34c.85 0 1.71.11 2.49.34 1.9-1.31 2.73-1.04 2.73-1.04.54 1.42.2 2.47.1 2.73.63.71 1.01 1.62 1.01 2.73 0 3.88-2.34 4.74-4.57 4.99.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
    </svg>
  );
}
function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" {...props}>
      <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.41-2.08 2.86v5.49H9.47V9h3.4v1.56h.05c.47-.9 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.41v6.33zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
    </svg>
  );
}
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" {...props}>
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/>
    </svg>
  );
}

export default function Home() {
  return (
    <section
      className="relative flex min-h-[calc(100vh-4rem)] w-full items-center"
      aria-label="Hero background"
    >
      <div className="relative mx-auto flex max-w-6xl flex-col-reverse gap-8 px-6 pb-16 md:flex-row md:items-center md:gap-12">
        {/* Left side */}
        <div className="max-w-2xl text-white">
          <p className="text-sm uppercase tracking-wide text-neutral-300">Portfolio</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            I’m a <span className="text-yellow-300">Developer</span>
          </h1>
          <p className="mt-4 text-neutral-200">
            Computer Scientist by day, fiction writer by night, poet in between—
            solving bugs and life’s problems, one line of code (or verse) at a time.
          </p>

          {/* Social icons */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://github.com/tallaabo/"
              target="_blank"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/aman2has/"
              target="_blank"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:atallaabo@gmail.com"
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20"
            >
              <MailIcon />
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="flex w-full justify-center md:w-auto">
          <div className="relative h-56 w-56 overflow-hidden rounded-full border border-white/20 shadow-xl md:h-64 md:w-64">
            <Image
              src="/aman.jpg"
              alt="Abdirahman Hassan (Aman)"
              fill
              sizes="(min-width:768px) 256px, 224px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

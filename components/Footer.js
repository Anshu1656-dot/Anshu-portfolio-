import { personalInfo } from "@/data/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10 text-center sm:px-10 lg:px-16">
      <p className="font-display text-lg text-paper">{personalInfo.name}</p>
      <p className="mt-2 text-sm text-mist">
        © {new Date().getFullYear()} {personalInfo.name}. {personalInfo.tagline}
      </p>
    </footer>
  );
}

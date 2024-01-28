import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Features from "@/components/features";
import Events from "@/components/events";
import Reviews from "@/components/reviews";
import Gallery from "@/components/gallery";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Events />
      <Features />
      <Gallery />
      <Reviews />
      <Contact />
    </main>
  );
}

import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Features from "@/components/features";
import Events from "@/components/events";
import Reviews from "@/components/reviews";
import Gallery from "@/components/gallery";
import Keys from "@/components/keys";

export default function Home() {
  return (
    <main className="flex flex-col items-center mx-auto">
      <Intro />
      <Keys/>
      <About />
      <Events />
      <Features />
      <Gallery />
      <Reviews />
      <Contact />
    </main>
  );
}

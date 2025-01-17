import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <About />
          <Experience />
          <Projects />
          <Footer />
        </main>
      </div>
    </div>
  );
}

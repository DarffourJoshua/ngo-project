'use client';

import Header from "./components/header";
import Team from "./components/team";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import Contact from "./components/contact";
import ProjectOne from "./components/projectone";
import ProjectTwo from "./components/projecttwo";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="bg-slate-100 text-black p-4 border-box relative">
      <Header />
      <Hero />
      <ProjectOne />
      <ProjectTwo />
      <Contact />
      <Team />
      <FAQ />
      <Footer />
    </main>
  );
}

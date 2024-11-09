"use client";

// import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Emoji from "@/components/Emoji/Emoji";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Home() {
  useEffect (() => {
    AOS.init({
      easing:"ease-out-back",
      duration:1200,
      delay:100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,
    });
    AOS.refresh();

  },[])
  return (
    <main>
      <Hero />
      <Projects/>
      <Skills />
      <Contact />
      <About />
      <Emoji/>
      <br />
      <br /><br />
    </main>
    
  );
}

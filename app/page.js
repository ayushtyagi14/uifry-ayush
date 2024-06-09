"use client";

import Advantages from "@/components/Advantages";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Started from "@/components/Started";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <Hero />
      <Features />
      <Advantages />
      <Testimonial />
      <Faq />
      <Started />
      <Footer />
    </div>
  );
}

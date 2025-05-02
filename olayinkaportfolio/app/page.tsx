"use client";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <main className="flex items-center  flex-col justify-center">
      <Header />
      <Hero />
    </main>
  );
}

import BlogsComp from "@/components/blogs/blogs";
import HeroComp from "@/components/hero/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
      <HeroComp />
      <BlogsComp />
    </main>
  );
}

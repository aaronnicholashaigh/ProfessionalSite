import Image from "next/image";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
    
      <h1 className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
        Welcome to my, extremly, work in progress site.  This page is created with the help of Vercel and I use it to practice.  Essentially, this project
        provides me more experience with website design, general coding, and QA automation.  Stay tuned!
      </h1>
    </div>
    
  );
}

import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Navbar } from "./components/Navbar";
import { NewNavbar } from "./components/NewNavbar";
import { Hero } from "./components/Hero";

/*
Tutorials used for this project:
https://www.youtube.com/watch?v=pQ7tm_7S_Us
https://www.youtube.com/watch?v=W09K95djOy0
*/

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aaron Haigh's Professional Site</title>
      </Head>
      <NewNavbar />
      <Hero />
    </div>
    
  );
}

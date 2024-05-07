import Head from "next/head";
import { HobbiesNavbar } from "../components/HobbiesNavbar";

export default function Page(){
    
    return (
        <div>
            <HobbiesNavbar />
            <h1>This is the Hobbies page</h1>
        </div>
    )
  }
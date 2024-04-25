import Image from 'next/image'
import BlurArrow from '../../public/assets/blue-button.svg'
import Gradient from '../../public/assets/Gradient.svg'

export function Hero(){
    return(
        <div className="pt-4">
            <div className="px-[20px]">
                <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026]">Welcome to my, extremly, work in progress site.  This page is created with the help of Vercel and I use it to practice.  Essentially, this project
        provides me more experience with website design, general coding, and QA automation.  Stay tuned!</h1>
                <p className="text-center pt-6">In web design, a hero is a large image, video, illustration, or banner that appears at the top of a page, usually above the fold and below the header. Heroes are also known as "hero headers" or "hero sections". They are important because they can:
                <br />-Grab the users attention
                <br />-Provide a quick visual message about the pages content
                <br />-Set the emotional background of the user experience
                <br />-Help the user navigate to the right information
                </p>

                <div className="flex we-full pt-8">
                    <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px]"> 
                    Button 1
                    </button>

                    <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2"> 
                    Button 2 
                    <span>
                        <Image src={BlurArrow} alt="Learn more"/>
                    </span>
                    </button>
                </div>
            </div>

            <div className="relative flex h-full w-full justify-center">
                <Image src={Gradient} alt="Gradient" className="min-h-[500px]"/>
            </div>
        </div>
    )
}
import Image from 'next/image'
import BlurArrow from '../../public/assets/blue-button.svg'
import Gradient from '../../public/assets/Gradient.svg'
import HeroImage from '../../public/assets/MeAndKids.jpg'
import Vercel from '../../public/vercel.svg'

//features component discussion starts at 47:42

export function Hero(){
    return(
        <div className="pt-4 lg:pt-10">
            <div className="px-[20px] lg:px-[280px]">
                <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">Welcome to my, extremely, work in progress site.  This page is created with the help of Vercel and I use it to practice.  Essentially, this project
        provides me more experience with website design, general coding, and QA automation.  Stay tuned!</h1>
                <p className="text-center pt-6 lg:text-[18px] lg:leading-[72px]">In web design, a hero is a large image, video, illustration, or banner that appears at the top of a page, usually above the fold and below the header. Heroes are also known as "hero headers" or "hero sections". They are important because they can:
                <ul>
                    <li>-Grab the users attention also a code check</li>
                    <li>-Provide a quick visual message about the pages content</li>
                    <li>-Set the emotional background of the user experience</li>
                    <li>-Help the user navigate to the right information</li>
                </ul>
                </p>

                <div className="flex we-full pt-8 justify-center gap-x-6">
                    <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit"> 
                    Click here for a copy of my resume!
                    </button>

                    <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit"> 
                    Checkout the repository for this site!  
                    <span>
                        <Image src={BlurArrow} 
                        alt="Learn more"/>
                    </span>
                    </button>
                </div>
            </div>

            <div className="relative flex h-full w-full justify-center">
                <Image src={Gradient} 
                alt="Gradient" 
                className="min-h-[500px] w-full object-cover lg:h-auto"/>

                <div className="absolute bottom-5 flex w-full flex-col items-center">
                    <Image src={HeroImage} 
                    alt="hero image" 
                    className="-ml-4 h-[310px] sm:-mb-20 sm:h[400] lg:-mb-28 lg:h-auto xl:w-[70%]"/>
                </div>
            </div>
            <div className="flex w-full flex-col items-center">
                    <p className='text-center'>
                        Created using
                    </p>
                    <div className='flex w-full flex-col items-center'>
                        <Image src={Vercel} alt="Vercel" />
                    </div>
                </div>
        </div>
    )
}
import Image from 'next/image'
import BlurArrow from '../../public/assets/blue-button.svg'
import Gradient from '../../public/assets/Gradient.svg'
import HeroImage from '../../public/assets/MeAndKids.svg'
import Vercel from '../../public/vercel.svg'

//features component discussion starts at 47:42

export function Hero(){
    return(
        <div className="pt-4 lg:pt-10">
            <div className="px-[20px] lg:px-[280px]">
                <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[32px] lg:leading-[72px]">Welcome to my, extremely, work in progress site.  This page is created with the help of Vercel and I use it to practice.  Essentially, this project
        provides me more experience with website design, general coding, and QA automation.  Stay tuned!</h1>
                

                <div className="flex we-full pt-8 justify-center gap-x-6">
                    <a href="https://docs.google.com/document/d/e/2PACX-1vQa-viQiSnaA2BiQaLtvXiK8lJ4GnDUG8L6Slhtdp6l5feSy49igt6FIlDhBK3BtQ/pub"><button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit"> 
                    Click here for a copy of my resume!
                    </button></a>

                    <a href="https://github.com/aaronnicholashaigh/ProfessionalSite"><button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit"> 
                    Checkout the repository for this site!  
                    <span>
                        <Image src={BlurArrow} 
                        alt="Learn more"/>
                    </span>
                    </button></a>
                </div>
            </div>

            <div className="relative flex h-full w-full justify-center">
                <Image src={Gradient} 
                alt="Gradient" 
                className="min-h-[500px] w-full object-cover lg:h-auto"/>

                <div className="absolute bottom-5 flex w-full flex-col items-center">
                    <Image src={HeroImage} 
                    alt="hero image" 
                    className="flex"/>
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
import Image from "next/image";
import Logo from '../../public/assets/Logo.svg';
import Menu from '../../public/assets/Menu.svg';


export function ProfessionalSkillsNavbar(){
    return(
        <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
            <div className="flex items-center">
                <Image src={Logo} alt="Logo" />
                <div className="flex pl-[74px] gap-x-[56px]">
                    <a href="/">Home</a>
                    <a href="/about-me">About Me</a>
                    <a href="/hobbies">Hobbies</a>
                    <a href="/job-history">Job History</a>
                </div>
            </div>

            <div className="flex gap-x-5">
                <Image src = {Menu} alt ="Menu Button" className="lg:hidden" />
            </div>
        </nav>
    )
}
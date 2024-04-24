import Image from "next/image";
import Logo from '../../public/assets/Logo.svg';
import User from '../../public/assets/User.svg';
import Menu from '../../public/assets/Menu.svg';

export function Navbar(){
    return(
        <nav className="flex w-full items-center justify-between px-[20px] py-[16px]">
            <div>
                <Image src={Logo} alt="Logo" />
            </div>

            <div className="flex gap-x-5">
                <div>
                    <Image src={User} alt="User Profile" />
                </div>

                <Image src = {Menu} alt ="Menu Button" />
            </div>
        </nav>
    )
}
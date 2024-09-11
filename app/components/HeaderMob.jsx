'use client';
import { useState } from "react";
import { dark_grotesque } from "../fonts/fonts";
import Logo from "./Logo";
import Link from "next/link";
import Button from "./Button";
import ModalMenu from "./ModalMenu";

export default function HeaderMob() {
    const [activeSection, setActiveSection] = useState('Про нас');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navLinks = [
        {title:'Про нас', href: '#about'},
        {title:'Кейси', href: '#cases'},
        {title:'Контакти', href: '#contacts'}
    ];

    const handleOpen = () => {
        setMobileMenuOpen(true);
    };
    console.log(mobileMenuOpen);

    return(
        <header className={` ${dark_grotesque.className} relative w-full grid grid-cols-3 px-[10px] pt-10 `}>
            <div onClick={handleOpen} className="flex flex-col gap-[6px] justify-center">
                <div className="bg-[#F7F5F5] w-6 h-[2.67px] rounded-full"></div>
                <div className="bg-[#F7F5F5] w-6 h-[2.67px] rounded-full"></div>
                <div className="bg-[#F7F5F5] w-6 h-[2.67px] rounded-full"></div>
            </div>
            <div className="flex justify-center text-3xl text-[#F7F5F5]">
                <Logo />
            </div>
            {/* <div className="flex justify-end">
                <Button text={'Замовити'} className={`${dark_grotesque.className} font-extrabold py-6`}/>
            </div> */}
            {mobileMenuOpen && <ModalMenu itemsMenu={navLinks} setOpenModal={setMobileMenuOpen}/>}

        </header>
    )
}
'use client';
import { useState } from "react";
import { dark_grotesque } from "../fonts/fonts";
import Logo from "./Logo";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
    const [activeSection, setActiveSection] = useState('Про нас');

    const navLinks = [
        {title:'Про нас', href: '#about'},
        {title:'Кейси', href: '#cases'},
        {title:'Контакти', href: '#contacts'}
    ];

    const handleClick = () => {

    };

    return(
        <header className={` ${dark_grotesque.className}  w-full grid grid-cols-3 px-[10px] py-[28px]  lg:p-[28px]`}>
            <div className="flex flex-col gap-[24px] uppercase text-2xl font-semibold">
                {navLinks.map((item, index) => (
                    <div key={index} className="text-white/75 hover:text-[#F7F5F5]">
                        <Link href={item.href}>{item.title}</Link>
                    </div>
                ))}
            </div>
            <div className="flex justify-center text-6xl text-[#F7F5F5]">
                <Logo />
            </div>
            <div className="flex justify-end">
                <Button text={'Замовити'} className={`${dark_grotesque.className} font-extrabold py-6`}/>
            </div>

        </header>
    )
}
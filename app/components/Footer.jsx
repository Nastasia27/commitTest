import Logo from "./Logo";
import localFont from 'next/font/local';
import fb from '@/public/svg/Facebook.svg';
import inst from '@/public/svg/Instagram.svg';
import linkin from '@/public/svg/LinkedIn.svg';
import Image from "next/image";
import Link from "next/link";

const trans = localFont({
    src: '/TransformaMix_Trial-SemiBold.ttf',
    display: 'swap',
  });
  
  const mystica = localFont({
      src: '/MusticaPro-SemiBold.otf',
      display: 'swap',
  });

export default function Footer() {
    const textArr = [
        {
            title: 'Адреса',
            text: ['Київ, Україна', 'ТЦ Мармелад, вул. Борщагівська',' 154, офіс / блок 4-5']
        },
        {
            title: 'Телефони',
            text: ['+38 098-001-39-39', '+38 093-001-39-39', '+38 066-001-39-39']
        },
        {
            title: 'Месенджери',
            text: ['Email: gmail', 'Telegram: sales', 'Viber: sales']
        }
    ];

    const socialLinks = [
        { icon: inst, link:'/'},
        { icon: linkin, link:'/'},
        { icon: fb, link:'/'},
    ]

    return(
        <div id="contacts" className={` ${mystica.className} bg-[#171313] text-[#F7F5F5] w-full p-5 lg:p-[60px] lg:px-[100px] flex flex-col gap-10`}>
            <div>
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    <div className="text-[32px] flex flex-col text-[#F7F5F5]  justify-between">
                        <Logo/>
                        <div>
                            <h3 className="text-2xl">Комітимо мрії в реальність</h3>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-10 lg:px-5 ">
                        {textArr.map((item, index) => (
                            <div key={index} className="flex flex-col gap-[6px]">
                                <h3 className={`${trans.className} text-[20px]`}>{item.title}</h3>
                                <div className="text-[#606060]">
                                    {item.text.map((line, index) => (
                                        <p key={index} className={`${mystica.className} text-base`}>
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="h-[1px] bg-[#606060] w-full"></div>

            <div className="flex justify-between">
                <p className="text-[#606060]">Copyright © 2022 BRIX Templates | All Rights Reserved </p>
                <div className="flex gap-5">
                    {socialLinks.map((item, index) => (
                        <Link key={index} href={item.link}>
                            <Image src={item.icon} alt="social icon"/>
                        </Link>
                        
                    ))}
                </div>
            </div>

        </div>
    )
}
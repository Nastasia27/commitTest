import Logo from "./Logo";
import Link from "next/link";
import { useState } from "react";


export default function ModalMenu({itemsMenu, setOpenModal}) {
    const [closeModal, setModalClose] = useState(false);
    
    const handleClose = () => {

        setOpenModal(false);
    }



    return(
        <div>
                <div className="bg-red-950/10 h-screen fixed -left-0 -top-0 w-screen z-50 p-2 pt-10">
                <div className="bg-[#FFFFFF] border-2 border-[#171313] rounded-[40px] p-3 pt-10 z-50">
                    <div className="text-black text-3xl grid grid-cols-3 w-full items-center justify-center">
                        <div onClick={handleClose} className="relative">
                            <div className="bg-black h-[2px] w-8 rotate-45 absolute"></div>
                            <div className="bg-black h-[2px] w-8 -rotate-45 absolute"></div>
                        </div>
                        <Logo/>
                    </div>
                    <div className="flex flex-col gap-[24px] uppercase  text-2xl font-semibold py-[60px] px-5">
                        {itemsMenu.map((item, index) => (
                            <div onClick={handleClose} key={index} className="text-[#171313]/75 hover:text-[#171313]">
                                <Link href={item.href}>{item.title}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    )
}
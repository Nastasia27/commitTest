import Image from 'next/image';
import baner from '../../public/baner.png';
import banermob from '../../public/banermob.png'
import Header from './Header';
import HeaderMob from './HeaderMob';
import localFont from 'next/font/local';
 

const trans = localFont({
  src: '/TransformaMix_Trial-SemiBold.ttf',
  display: 'swap',
});

const mystica = localFont({
    src: '/MusticaPro-SemiBold.otf',
    display: 'swap',
});



export default function Hero() {
    return(
        <div className=' bg-[#FFFFFF] p-[10px] lg:p-[20px] flex items-center justify-center  w-full min-h-screen '>
            <div className='bg-[#E3000B] flex flex-col relative rounded-[40px] w-full min-h-[95vh] overflow-hidden'>
            <Image
                    src={baner}
                    alt="Background image"
                    placeholder="blur"
                    fill
                    
                    className=" object-cover absolute hidden lg:block inset-0 object-top"
                />
            <Image
                src={banermob}
                alt="Background image"
                placeholder="blur"
                fill
                
                className="object-cover absolute block lg:hidden inset-0 object-top"
            />
                <div className="relative min-h-[95vh] flex items-end pb-20 z-10">
                        <div className='hidden md:block absolute inset-0'>
                            <Header />
                        </div>
                        <div className='block md:hidden absolute inset-0'>
                            <HeaderMob />
                        </div>
                        <div className="z-20 text-[#F7F5F5] text-left px-[20px] flex flex-col gap-5 xl:px-[20px] mt-10">
                            <h1 className={`${trans.className} text-left text-[60px] lg:text-[100px] xl:text-[120px] leading-none 2xl:text-[120px]`}>
                                Сайти, що втілюють ваші ідеї
                            </h1>
                            <h3 className={`${mystica.className} text-[22px] lg:text-[30px] xl:text-[40px] lg:pr-40`}>
                                Ми спеціалізуємося на розробці, що поєднує передові технології та експертизи
                            </h3>
                        </div>
                </div>
            </div>
            
        </div>
    )
}
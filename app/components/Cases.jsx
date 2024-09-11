import Image from 'next/image';
import baner from '../../public/baner.png';
import Header from './Header';
import localFont from 'next/font/local';
import icon from '/public/svg/Icons.svg';
import hands from '/public/hands.png';
import paper from '/public/paper.png';
import man from '/public/man.png';
import CaseSwiper from './CaseSwiper';
import CaseSwiper2 from './CaseSwiper';

 
const trans = localFont({
  src: '/TransformaMix_Trial-SemiBold.ttf',
  display: 'swap',
});

const mystica = localFont({
    src: '/MusticaPro-SemiBold.otf',
    display: 'swap',
});



export default function Cases() {
    const aboutItems = [
        { number: '1250+', text: 'виконаних проектів'},
        { number: '10mln+', text: 'рядків коду'},
        { number: '99%', text: 'задоволених клієнтів'},
        { number: '85%', text: 'зростання бізнесу'}
    ]
    return(
        <div id='cases' className=' bg-[#FFFFFF]  flex items-center justify-center  w-full min-h-screen '>
            <div className=' flex flex-col relative  w-full min-h-[90vh] overflow-hidden gap-6 lg:gap-16 pb-10'>
                <div className='flex gap-6 lg:gap-20 min-w-10 items-start flex-col lg:flex-row p-[30px] lg:p-[100px] pb-5 lg:pb-5 '>
                    <div className='flex gap-2 items-center'>
                        <div className='h-6 w-6'>
                            <Image 
                                src={icon}
                                alt='red icon'
                                className='h-full w-full'
                            />
                        </div>
                        <h3 className={` ${trans.className} text-[#E3000B] uppercase text-[28px] xl:text-2xl text-nowrap`}>
                            Кейси
                        </h3>
                    </div>

                    <div>
                        <h3 className={` ${mystica.className} text-[28px] xl:text-[48px] text-[#171313] leading-none`}>
                            Реалізовані ідеї наших клієнтів
                        </h3>
                    </div>

                    <div>
                        <p className={`font-darkgrotes text-[#606060] text-base xl:text-xl`}>
                            Мрія створювати індивідуальні рішення, надаючи можливість реалізувати потенціал у цифровому світі, втілилась в наших кейсах. Ми віримо, що кожен бізнес унікальний, і допомагаємо розкрити це через вебсайти та онлайн-платформи.
                        </p>
                    </div>

                </div>
                <div className=''>
                    <CaseSwiper/>
                </div>
            </div>
            
        </div>
    )
}
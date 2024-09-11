import Image from 'next/image';
import baner from '../../public/baner.png';
import Header from './Header';
import localFont from 'next/font/local';
import icon from '/public/svg/Icons.svg';
import hands from '/public/hands.png';
import paper from '/public/paper.png';
import man from '/public/man.png';
 
const trans = localFont({
  src: '/TransformaMix_Trial-SemiBold.ttf',
  display: 'swap',
});

const mystica = localFont({
    src: '/MusticaPro-SemiBold.otf',
    display: 'swap',
});



export default function AboutUs() {
    const aboutItems = [
        { number: '1250+', text: 'виконаних проектів'},
        { number: '10mln+', text: 'рядків коду'},
        { number: '99%', text: 'задоволених клієнтів'},
        { number: '85%', text: 'зростання бізнесу'}
    ]
    return(
        <div id='about' className=' bg-[#FFFFFF] p-[10px] lg:p-[20px] flex items-center justify-center  w-full min-h-screen '>
            <div className=' flex flex-col relative  w-full min-h-[90vh] overflow-hidden p-5 lg:p-20 gap-6 lg:gap-16'>
                <div className='flex gap-6 lg:gap-20 min-w-10 items-start flex-col lg:flex-row'>
                    <div className='flex gap-2 items-center'>
                        <div className='h-6 w-6'>
                            <Image 
                                src={icon}
                                alt='red icon'
                                className='h-full w-full'
                            />
                        </div>
                        <h3 className={` ${trans.className} text-[#E3000B] uppercase text-[28px] xl:text-2xl text-nowrap`}>
                            Про нас
                        </h3>
                    </div>

                    <div>
                        <h3 className={` ${mystica.className} text-[28px] xl:text-[48px] text-[#171313] leading-none`}>
                            Індивідуальний підхід та гнучкість для створення цифрових рішень
                        </h3>
                    </div>

                    <div>
                        <p className={`font-darkgrotes text-[#606060] text-base xl:text-xl`}>
                            Наша команда працює над тим, щоб кожне рішення було максимально адаптивним, інтуїтивним і орієнтованим на вашого кінцевого користувача.
                        </p>
                    </div>

                </div>

                <div className='grid grid-cols-2 lg:grid-cols-3 grid-rows-4 lg:grid-rows-3 gap-5'>
                    <div className='hidden lg:flex overflow-hidden relative items-end col-span-2 rounded-[24px]'>
                        <Image 
                                src={paper}
                                alt='image of paper'
                                className='h-full w-full'
                            />
                            <div className=' absolute w-full z-10'>
                                <Image 
                                    src={hands}
                                    alt='hands on computer'
                                    className=' h-full'
                                />
                            </div>

                    </div>
                    <div className='col-span-2 row-span-2 lg:col-span-1 lg:row-span-3 bg-[#E3000B] flex items-end rounded-[24px] overflow-hidden lg:h-auto'>
                        <div className='max-h-[250px] lg:max-h-full lg:h-full w-full'>
                            <div className=' w-full lg:h-full overflow-hidden flex items-center justify-center'>
                                <Image 
                                    src={man}
                                    alt='man with laptop'
                                    className=' object-contain object-top lg:object-center w-3/4 lg:w-full lg:h-full'
                                />
                            </div>
                        </div>
                    </div>
                    {aboutItems.map((item, index) => (
                        <div key={index} className={`${mystica.className} rounded-[24px] bg-[#F7F5F5] p-5 leading-none flex flex-col gap-2 lg:gap-5 justify-center`}>
                            <h2 className={` text-[40px] lg:text-[68px] text-[#E3000B]`}>{item.number}</h2>
                            <p className='text-[#171313] text-[20px] lg:text-[34px]'>{item.text}</p>
                        </div>
                    ))}


                </div>
            

            </div>
            
        </div>
    )
}
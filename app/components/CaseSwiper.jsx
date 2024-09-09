'use client';

import { useRef, useState } from 'react';
import img1 from '@/public/case1.png';
import img2 from '@/public/case2.png';
import img3 from '@/public/case3.png';
import img4 from '@/public/case4.png';
import img5 from '@/public/case5.png';
import back from '@/public/Background.png';
import Image from 'next/image';
import { motion, useMotionValue } from "framer-motion";
import macpic from '@/public/iMac-24.png';
import localFont from 'next/font/local';

const mystica = localFont({
  src: '/MusticaPro-SemiBold.otf',
  display: 'swap',
});

const DRAG_BUFFER = 50;

export function SliderImage({item, images, image2, title, text}) {

    return(
        <div className='w-full h-full relative bg-[#E1040FCC] rounded-[24px] overflow-hidden flex'>
          <Image 
                src={back}
                alt='backgraund'
                width={1200}
                height={800}
                className='w-full h-full object-cover absolute  object-bottom'
            />  
            <div className='z-10 h-full w-full flex flex-col'>
              <div className='flex justify-center'>
                {images.map((image, index) => (
                  <div key={index} className={`relative pt-20 ${index > 0 ? 'hidden lg:block' : ''}`}>
                    <Image 
                        src={macpic}
                        alt='image of mac'
                        width={800}
                        height={500}
                        className='w-[300px] h-[200px] xl:w-[500px] xl:h-[380px] object-fill'
                    /> 
                    <div className='absolute top-[85px] left-[60px] lg: xl:top-[83px] xl:left-[97px] w-full'>
                      <Image 
                          src={image}
                          alt='image of mac'
                          width={800}
                          height={500}
                          className='w-[230px] h-[125px] xl:w-[394px] xl:h-[244px] object-fill '
                      /> 

                    </div>
                  </div>
                ))}
              </div>
              <div className='bg-[#00000033] p-5 lg:p-10 flex flex-col gap-5 xl:gap-10 '>
                  <h3 className={`${mystica.className} leading-none text-[40px]  xl:text-[64px]`}>{title}</h3>
                  <ul className='pl-5 list-disc  flex flex-col lg:flex-row lg:flex-wrap gap-3 xl:gap-8 font-darkgrotes text-base xl:text-3xl leading-none font-medium'>
                   {text.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
              </div>
            </div>  
            <div className='h-full w-full absolute z-20'>
            </div>        
        </div>
    )
}

export default function CaseSwiper() {
    const [imgIndex, setImageIndex] = useState(0);

    const dragX = useMotionValue();
    const ref = useRef(null);


    const onDragEnd = () => {
      const x = dragX.get();
      if (x <= -DRAG_BUFFER && imgIndex < imageList.length - 1) {
        setImageIndex((pv) => pv + 1)
      } else if (x >= DRAG_BUFFER && imgIndex > 0) {
        setImageIndex((pv) => pv - 1)
      }
    };
  
    const imageList = [img1, img2, img3];

    const dataCases = [
      {
        images: [img1, img2],
        title: '250+ Корпоративних сайтів',
        tetxt: ['стартапи', 'фінансові та юридичні послуги', 
          'медичні послуги', 'бізнес-конференції', 'туристичні послуги', 'сільськогосподарська продукція']
      },
      {
        images: [img3],
        title: '150+ Інтернет-магазинів',
        tetxt: ['техніка', 'ювелірні вироби', 
          'одяг та взуття', 'косметика та парфумерія', 'електроніка', 
          'продукти харчування', 'ювелірні вироби']
      },
      {
        images: [img4, img5],
        title: '300+ Лендінгів',
        tetxt: ['інтернет-маркетинг', 'вебінари', 
          'онлайн-тренінги', 'ІТ-послуги', 'освітні програми та івенти']
      },
    ];

    const totalImages = imageList.length;
    const progress = (imgIndex + 1) / totalImages;

    return(
        <div className='h-full w-full flex flex-col text-[#F7F5F5]' >
          <div className='relative overflow-hidden h-full w-full'>
            <motion.div className='flex gap-3 lg:gap-8 cursor-grab active:cursor-grabbing '  
              drag='x'
              dragConstraints={{
                left:0,
                right:0
              }}
              style={{x:dragX}}
              animate={{
                translateX:`-${imgIndex * 81}%`
              }}
              onDragEnd={onDragEnd}
              ref={ref}
            >
                {dataCases.map((item, index) => 
                    <div key={index} className={`w-[82%] lg:w-[85%] shrink-0 ${index === 0 ? 'p-0 ml-[20px]' : ''}`} >
                        <SliderImage images={item.images} title={item.title} text={item.tetxt}/>
                    </div>
                )}
            </motion.div>
          </div>

            <div className='w-full px-[20px]'>
              <div className="mt-8 flex relative  w-full h-[18px] lg:h-6">
                  <motion.div
                    className="absolute h-6 w-full bg-[#EFEFEF] rounded-full"
                  >
                  </motion.div>
                  <motion.div
                      className="h-full bg-[#E3000B] rounded-full lg:w-64 z-10"
                      animate={{ width: `${progress * 100}%`}}
                      transition={{type: "spring", stiffness: 50 }}
                    />
              </div>
            </div>
        </div>
    )
}
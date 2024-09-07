import { Syne, Darker_Grotesque, Roboto_Mono } from 'next/font/google';
import localFont from 'next/font/local';
 
export const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
})

export const dark_grotesque = Darker_Grotesque({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-dark-grotes'
  })
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const geistTransform = localFont({
    src: '/TransformaMix_Trial-SemiBold.ttf',
    variable: '--font-transform-mix',
    display:'swap'
  });
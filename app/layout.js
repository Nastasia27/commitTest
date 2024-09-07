import localFont from "next/font/local";
import "./globals.css";

const geistMustica = localFont({
  src: "./fonts/MusticaPro-SemiBold.otf",
  variable: "--font-geist-mustica",
  weight: "100 900",
});
const geistTransform = localFont({
  src: "./fonts/TransformaMix_Trial-SemiBold.ttf",
  variable: "--font-geist-transform",
  weight: "100 900",
});


export const metadata = {
  title: "Website for Test",
  description: "Website for Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body
        className={`${geistTransform.variable} ${geistMustica.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

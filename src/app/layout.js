import localFont from "next/font/local"
import "./globals.css"

const myFont = localFont({
  src: "../../public/fonts/Yanone_Kaffeesatz/YanoneKaffeesatz-VariableFont_wght.ttf",
  variable: "--my-font",
})

export const bodoni = localFont({
  src: "../../public/fonts/Bodoni_Moda/BodoniModa-Italic-VariableFont_opsz,wght.ttf",
  variable: "--bodoni-font",
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${myFont.className} antialiased`}>{children}</body>
    </html>
  )
}

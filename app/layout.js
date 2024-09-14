import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "WorldLab NGO",
  description: `WorldLab is a non-governmental organization established in 2021 to provide aid to countries with a high rate of COVID-19 patients. In 2023, after extensive research, our team discovered a growing need for emotional, financial, and mental support worldwide. We are committed to offering help to those in need.
  `,
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="An NGO to provide aid"/>
        <meta property="og:title" content="WorldLab NGO" />
        <meta property="og:url" content="https://worldlabngo.vercel.app" />
        <meta property="og:description" content="WorldLab is a non-governmental organization established in 2021 to provide aid to countries with a high rate of COVID-19 patients. In 2023, after extensive research, our team discovered a growing need for emotional, financial, and mental support worldwide. We are committed to offering help to those in need." />
        <meta property="og:image" content="https://www.clker.com/cliparts/9/5/7/0/1297286085795787133world-globe.jpg" />
        <meta name="twitter:card" content="A non governmental organisation to offer help to those in need" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

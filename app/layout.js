import localFont from "next/font/local";
import "./globals.css";

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
  description: "An NGO to provide aid",
  keywords: ["NGO", "WorldLab", "Aid", "Help", "Support"],
  authors: [{ name: "Darffour Joshua" }],
  openGraph: {
    type: "website",
    siteName: "WorldLab NGO",
    title: "WorldLab NGO",
    url: "https://worldlabngo.vercel.app",
    description: "WorldLab is a non-governmental organization established in 2021 to provide aid to countries with a high rate of COVID-19 patients. In 2023, after extensive research, our team discovered a growing need for emotional, financial, and mental support worldwide.",
    images: [
      {
        url: "https://www.clker.com/cliparts/9/5/7/0/1297286085795787133world-globe.jpg",
        alt: "WorldLab Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    description: "A non-governmental organization to offer help to those in need",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

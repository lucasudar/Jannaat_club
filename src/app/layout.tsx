import Header from "@/components/header";
import "./globals.css";
import { Raleway } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import SizeObserver from "@/context/size-observer";
import ScrollObserver from "@/components/scroll-observer";

const rw = Raleway({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata = {
  title: "Best Indian Nightclub in Pattaya Thailand | Biggest Indian Nightclub",
  description: "The Jannaat Club is one & only biggest Indian club in walking street, Pattaya.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${rw.className} bg-black text-white`}
      >

        <ActiveSectionContextProvider>
          <SizeObserver>
            <ScrollObserver>
              <Header />
                {children}
              <Footer />
              <Toaster position="top-right" />
            </ScrollObserver>
          </SizeObserver>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}

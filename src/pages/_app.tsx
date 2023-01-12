import { Open_Sans } from "@next/font/google";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { AppProps } from "next/app";

import Header from "components/Header";
import Navigation from "components/Navigation";
import { NavigationProvider } from "context/NavigationContext";

import "styles/globals.css";

gsap.registerPlugin(ScrollTrigger);
const openSans = Open_Sans({
    style: ["normal", "italic"],
    subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>
                {`
                    :root {
                        --open-sans-font: ${openSans.style.fontFamily};
                    }
                `}
            </style>
            <NavigationProvider>
                <Navigation />
                <div className="flex flex-1 flex-col md:pl-64">
                    <Header />
                    <main className="flex-1 mt-16 md:mt-0">
                        <Component {...pageProps} />
                    </main>
                </div>
            </NavigationProvider>
        </>
    );
}

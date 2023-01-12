import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html className="h-full md:scroll-smooth" lang="en">
            <Head />
            <body className="h-full bg-slate-100">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

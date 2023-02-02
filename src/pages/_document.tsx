import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html className="h-full motion-safe:scroll-smooth" lang="en">
            <Head />
            <body className="h-full bg-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

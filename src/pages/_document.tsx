import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html className="h-full motion-safe:md:scroll-smooth" lang="en">
            <Head>
                <meta
                    name="description"
                    content="Freelance software developer with over 15 years experience, based in the Toronto area."
                />

                <meta property="og:url" content="https://johnbaker.ca" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="John Baker" />
                <meta
                    property="og:description"
                    content="Freelance software developer with over 15 years experience, based in the Toronto area."
                />
                <meta
                    property="og:image"
                    content="https://www.johnbaker.ca/opengraph.jpg"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="johnbaker.ca" />
                <meta property="twitter:url" content="https://johnbaker.ca" />
                <meta name="twitter:title" content="John Baker" />
                <meta
                    name="twitter:description"
                    content="Freelance software developer with over 15 years experience, based in the Toronto area."
                />
                <meta
                    name="twitter:image"
                    content="https://www.johnbaker.ca/opengraph.jpg"
                />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <body className="h-full bg-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

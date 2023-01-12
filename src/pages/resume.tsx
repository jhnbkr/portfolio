import Head from "next/head";
import { useEffect } from "react";

import { useNavigation } from "context/NavigationContext";

export default function Resume() {
    const { setLocation } = useNavigation();

    useEffect(() => {
        setLocation("resume");
    }, [setLocation]);

    return (
        <>
            <Head>
                <title>John Baker | Resume</title>
            </Head>
            <section
                id="resume"
                data-location="resume"
                className="scroll-mt-22 md:scroll-mt-6"
            >
                <div className="mx-auto max-w-7xl p-6">
                    <h2 className="text-3xl mb-6">Resume</h2>
                    <p className="text-lg H">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
            </section>
        </>
    );
}

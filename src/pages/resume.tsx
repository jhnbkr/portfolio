import Head from "next/head";
import { useEffect } from "react";

import { useNavigation } from "context/NavigationContext";

export default function Resume() {
    const { setLocation } = useNavigation();

    useEffect(() => {
        setLocation("resume");
    }, [setLocation]);

    return (
        <section id="resume" className="scroll-mt-16">
            <div className="flex flex-col items-center justify-center mx-auto md:max-w-5xl px-6 py-10 md:px-8 md:py-16 space-y-6 md:space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Resume
                </h2>
            </div>
        </section>
    );
}

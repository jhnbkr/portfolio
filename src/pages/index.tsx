import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import { useEffect, useRef } from "react";

import About from "components/About";
import Clients from "components/Clients";
import Contact from "components/Contact";
import Work from "components/Work";
import { useNavigation } from "context/NavigationContext";

export default function Home() {
    const { setLocation } = useNavigation();

    const sectionRefs = useRef<(HTMLElement | null)[]>([]);
    function appendSectionRef(section: HTMLElement | null) {
        sectionRefs.current.push(section);
    }

    useEffect(() => {
        const triggers: ScrollTrigger[] = [];
        sectionRefs.current.forEach((section) => {
            if (!section || !section.dataset.location) {
                return;
            }

            const location: string = section.dataset.location;
            triggers.push(
                ScrollTrigger.create({
                    trigger: section,
                    start: "top center",
                    onEnter: () => {
                        setLocation(location);
                    },
                    onEnterBack: () => {
                        setLocation(location);
                    },
                })
            );
        });

        return () => {
            triggers.forEach((trigger: ScrollTrigger) => {
                trigger.kill();
            });
        };
    }, [setLocation, sectionRefs]);

    return (
        <>
            <Head>
                <title>John Baker</title>
            </Head>
            <About ref={(section) => appendSectionRef(section)} />
            <Work ref={(section) => appendSectionRef(section)} />
            <Clients ref={(section) => appendSectionRef(section)} />
            <Contact ref={(section) => appendSectionRef(section)} />
        </>
    );
}

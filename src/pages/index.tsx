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

    const refs = useRef<(HTMLElement | null)[]>([]);
    function appendRef(element: HTMLElement | null) {
        refs.current.push(element);
    }

    useEffect(() => {
        const triggers: ScrollTrigger[] = [];
        refs.current.forEach((ref) => {
            if (!ref || !ref.dataset.location) {
                return;
            }

            const location: string = ref.dataset.location;
            triggers.push(
                ScrollTrigger.create({
                    trigger: ref,
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
    }, [setLocation, refs]);

    return (
        <>
            <Head>
                <title>John Baker</title>
            </Head>
            <About ref={(element) => appendRef(element)} />
            <Work ref={(element) => appendRef(element)} />
            <Clients ref={(element) => appendRef(element)} />
            <Contact ref={(element) => appendRef(element)} />
        </>
    );
}

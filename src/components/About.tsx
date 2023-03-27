import Image from "next/image";
import Link from "next/link";
import { forwardRef, useEffect, useState } from "react";

import PortraitImage from "assets/images/portrait.png";
import PortraitBlinkImage from "assets/images/portrait-blink.png";
import DownArrowIcon from "assets/svg/icons/DownArrowIcon";
import useRandomInterval from "lib/useRandomInterval";

const About = forwardRef<HTMLElement>((props, ref) => {
    const openDelay: [number, number] = [3000, 4000];
    const closeDelay: [number, number] = [100, 200];
    const [blink, setBlink] = useState<boolean>(false);

    useRandomInterval(
        () => setBlink(!blink),
        ...(!blink ? openDelay : closeDelay)
    );

    return (
        <section
            ref={ref}
            id="about"
            data-location="about"
            className="scroll-mt-16"
        >
            <div className="bg-slate-100 border-b border-gray-200">
                <div className="flex flex-col items-center justify-center mx-auto md:max-w-5xl min-h-[calc(100vh-4rem)] md:min-h-screen px-6 py-10 md:px-8 md:py-16 space-y-6 md:space-y-8">
                    <div
                        className="group relative w-52 h-52 rounded-full bg-white border-[6px] border-white shadow-lg overflow-hidden"
                        data-blink={blink}
                    >
                        <Image
                            src={PortraitImage}
                            alt="Pixel portrait of John Baker"
                            className="block group-data-[blink=true]:hidden"
                            priority={true}
                        />
                        <Image
                            src={PortraitBlinkImage}
                            alt="Pixel portrait of John Baker"
                            className="hidden group-data-[blink=true]:block"
                            priority={true}
                        />
                    </div>
                    <div className="text-center">
                        <h2 className="heading mb-4">
                            Hello, I’m{" "}
                            <span className="underline whitespace-nowrap">
                                John Baker
                            </span>
                        </h2>
                        <h3 className="text-2xl md:text-3xl text-gray-600 font-semibold">
                            Software Developer
                        </h3>
                    </div>
                    <div className="hidden md:block">
                        <Link
                            href="/#intro"
                            scroll={false}
                            className="btn-primary"
                        >
                            Learn more
                            <DownArrowIcon
                                className="ml-2 -mr-1 h-6 w-6"
                                aria-hidden="true"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <section id="intro" className="scroll-mt-16">
                <div className="border-b border-gray-200">
                    <div className="wrapper">
                        <h2 className="heading">Nice to meet you!</h2>
                        <p className="text-lg md:text-xl text-gray-600">
                            Growing up I was the kid who asked questions. A lot
                            of questions. Today I&apos;m not much different. My
                            never ending curiosity to understand how everything
                            works and my passion for games got me started
                            programming in my early teens.
                        </p>
                        <p className="text-lg md:text-xl text-gray-600">
                            I excel at understanding situations and
                            collaborating to develop solutions big and small. My
                            development experiences include; backend, frontend,
                            application, games, AR/VR, and more.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
});

About.displayName = "About";
export default About;

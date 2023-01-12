import { forwardRef } from "react";

import BlastersOfTheUniverse from "./Projects/BlastersOfTheUniverse";
import GoogleDesign from "./Projects/GoogleDesign";
import StoryPlace from "./Projects/StoryPlace";

const Work = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section
            ref={ref}
            id="work"
            data-location="work"
            className="bg-slate-200"
        >
            <div className="flex flex-col justify-center mx-auto md:max-w-5xl px-4 py-8 md:px-8 md:py-16 space-y-4 md:space-y-8">
                <h2 className="text-4xl md:text-5xl md:mb-6 font-bold tracking-tight text-center">
                    Check out my work
                </h2>
                <p className="text-xl md:text-2xl text-gray-700">
                    Over my 15 year career I&apos;ve launched countless sites,
                    apps, and games with many incredible teams. Below are a
                    handful of my favorite and more recent projects.
                </p>
                <GoogleDesign />
                <StoryPlace />
                <BlastersOfTheUniverse />
            </div>
        </section>
    );
});

Work.displayName = "Work";
export default Work;

import { forwardRef } from "react";

import BlastersOfTheUniverse from "components/Projects/BlastersOfTheUniverse";
import CapitalOneMarchMadness from "components/Projects/CapitalOneMarchMadness";
import GoogleDesign from "components/Projects/GoogleDesign";
import HDReye from "components/Projects/HDReye";
import Loblaws from "components/Projects/Loblaws";
import MusiCounts from "components/Projects/MusiCounts";
import StoryPlace from "components/Projects/StoryPlace";
import Transpose from "components/Projects/Transpose";
import Spoonful from "./Projects/DisneySpoonful";

const Work = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section
            ref={ref}
            id="work"
            data-location="work"
            className="scroll-mt-16"
        >
            <div className="bg-slate-100 border-b border-gray-200">
                <div className="flex flex-col justify-center mx-auto md:max-w-5xl px-6 py-10 md:px-8 md:py-16 space-y-6 md:space-y-12">
                    <h2 className="text-4xl md:text-5xl md:mb-6 font-bold tracking-tight text-center">
                        Check out my work
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600">
                        Over my 15 year career I&apos;ve launched countless
                        sites, apps, and games with many incredible teams. Below
                        are a handful of my favorite and more recent projects.
                    </p>
                    <GoogleDesign />
                    <StoryPlace />
                    <HDReye />
                    <MusiCounts />
                    <CapitalOneMarchMadness />
                    <Transpose />
                    <BlastersOfTheUniverse />
                    <Loblaws />
                    <Spoonful />
                </div>
            </div>
        </section>
    );
});

Work.displayName = "Work";
export default Work;

import CapitalOneMarchMadnessImage from "assets/images/capital-one-march-madness.jpg";
import GlobeIcon from "assets/svg/icons/GlobeIcon";
import Project, { ProjectImage, ProjectLink } from "components/Projects";

const image: ProjectImage = {
    data: CapitalOneMarchMadnessImage,
    alt: "Capital One | March Madness 2020",
    url: "https://horse.johnbaker.ca",
};

const links: ProjectLink[] = [
    {
        name: "Website",
        url: "https://horse.johnbaker.ca",
        icon: GlobeIcon,
    },
];

export default function CapitalOneMarchMadness() {
    return (
        <Project
            name="Capital One | March Madness 2020"
            role="Lead Developer"
            image={image}
            links={links}
            year="2020"
        >
            <p className="text-lg md:text-xl text-gray-600">
                Challenge former NBA-great{" "}
                <span className="whitespace-nowrap">Charles Barkley</span> to a
                classic 16-bit style game of H.O.R.S.E.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
                Clocking in under 3MB this instant game can be embedded just
                about anywhere on the web. Built using HTML5 it is incredibly
                performant, even on the most constrained mobile devices.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
                Give it a try! It&apos;s not easy, but I promise you{" "}
                <span className="italic">can</span> beat Chuck. Best played on a
                mobile device.
            </p>
        </Project>
    );
}

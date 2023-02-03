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
            <p className="text-lg text-gray-600">
                A friendly competition between you and{" "}
                <span className="whitespace-nowrap">Charles Barkley</span>{" "}
                &#8212;{" "}
                <span className="italic">
                    &quot;Hello friend. Chuck is my name and H.O.R.S.E. is my
                    game. I sure hope you&apos;ve been practicing&quot;.
                </span>
            </p>
            <p className="text-lg text-gray-600">
                Clocking in under 3MB this instant game can be embedded just
                about anywhere on the web. Built using native web technologies
                it is incredibly performant, even on the most constrained mobile
                devices.
            </p>
        </Project>
    );
}

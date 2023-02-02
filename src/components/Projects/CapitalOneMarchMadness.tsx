import CapitalOneMarchMadnessImage from "assets/images/capital-one-march-madness.jpg";
import GlobeIcon from "assets/svg/icons/GlobeIcon";
import Project, { ProjectImage, ProjectLink } from "components/Projects";

const image: ProjectImage = {
    data: CapitalOneMarchMadnessImage,
    alt: "Capital One | March Madness",
    url: "https://www.todo.example",
};

const links: ProjectLink[] = [
    {
        name: "Website",
        url: "https://www.todo.example",
        icon: GlobeIcon,
    },
];

export default function CapitalOneMarchMadness() {
    return (
        <Project
            name="Capital One | March Madness"
            role="Lead Developer"
            image={image}
            links={links}
        >
            <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Project>
    );
}

import MusiCountsImage from "assets/images/musicounts.jpg";
import GlobeIcon from "assets/svg/icons/GlobeIcon";
import Project, { ProjectImage, ProjectLink } from "components/Projects";

const image: ProjectImage = {
    data: MusiCountsImage,
    alt: "MusiCounts",
    url: "https://www.musicounts.ca",
};

const links: ProjectLink[] = [
    {
        name: "Website",
        url: "https://www.musicounts.ca",
        icon: GlobeIcon,
    },
];

export default function MusiCounts() {
    return (
        <Project
            name="MusiCounts"
            role="Lead Developer"
            image={image}
            links={links}
            year="2021"
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

import LoblawsImage from "assets/images/loblaws.jpg";
import GlobeIcon from "assets/svg/icons/GlobeIcon";
import Project, { ProjectImage, ProjectLink } from "components/Projects";

const image: ProjectImage = {
    data: LoblawsImage,
    alt: "Loblaws",
    url: "https://www.loblaws.com",
};

const links: ProjectLink[] = [
    {
        name: "Websute",
        url: "https://www.loblaws.com",
        icon: GlobeIcon,
    },
];

export default function Loblaws() {
    return (
        <Project
            name="Loblaws"
            role="Senior Developer"
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
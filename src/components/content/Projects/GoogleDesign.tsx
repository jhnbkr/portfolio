import GoogleDesignImage from "assets/images/googledesign.jpg";
import GlobeIcon from "assets/svg/icons/GlobeIcon";
import Project, {
    ProjectImage,
    ProjectLink,
} from "components/content/Projects";

const image: ProjectImage = {
    data: GoogleDesignImage,
    alt: "Google Design",
    url: "https://www.design.google",
};

const links: ProjectLink[] = [
    {
        name: "Website",
        url: "https://www.design.google",
        icon: GlobeIcon,
    },
];

export default function GoogleDesign() {
    return (
        <Project
            name="Google Design"
            role="Lead Developer"
            image={image}
            links={links}
        >
            <p className="text-lg text-gray-700">
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

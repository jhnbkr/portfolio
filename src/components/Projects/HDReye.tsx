import HDReyeImage from "assets/images/hdreye.jpg";
import AppleIcon from "assets/svg/icons/AppleIcon";
import GlobeIcon from "assets/svg/icons/GlobeIcon";
import Project, { ProjectImage, ProjectLink } from "components/Projects";

const image: ProjectImage = {
    data: HDReyeImage,
    alt: "HDReye",
    url: "https://apps.apple.com/us/app/hdreye/id1566721813",
};

const links: ProjectLink[] = [
    {
        name: "Website",
        url: "https://www.hdreye.app",
        icon: GlobeIcon,
    },
    {
        name: "iOS",
        url: "https://apps.apple.com/us/app/hdreye/id1566721813",
        icon: AppleIcon,
    },
];

export default function HDReye() {
    return (
        <Project
            name="HDReye"
            role="Lead Developer & Co&#8209;Founder"
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

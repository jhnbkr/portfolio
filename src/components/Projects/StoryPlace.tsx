import StoryPlaceImage from "assets/images/storyplace.jpg";
import AppleIcon from "assets/svg/icons/AppleIcon";
import DocumentIcon from "assets/svg/icons/DocumentIcon";
import GlobeIcon from "assets/svg/icons/GlobeIcon";
import GoogleIcon from "assets/svg/icons/GoogleIcon";
import Project, { ProjectImage, ProjectLink } from "components/Projects";

const image: ProjectImage = {
    data: StoryPlaceImage,
    alt: "StoryPlace",
    url: "https://www.storyplace.com",
};

const links: ProjectLink[] = [
    {
        name: "Website",
        url: "https://www.storyplace.com",
        icon: GlobeIcon,
    },
    {
        name: "iOS",
        url: "https://apps.apple.com/app/storyplace/id1289523039",
        icon: AppleIcon,
    },
    {
        name: "Android",
        url: "https://play.google.com/store/apps/details?id=com.storyplace",
        icon: GoogleIcon,
    },
    {
        name: "API Documentation",
        url: "https://docs.storyplace.com",
        icon: DocumentIcon,
    },
];

export default function StoryPlace() {
    return (
        <Project
            name="StoryPlace"
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

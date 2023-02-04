import StoryPlaceImage from "assets/images/storyplace.jpg";
import AppleIcon from "assets/svg/icons/AppleIcon";
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
];

export default function StoryPlace() {
    return (
        <Project
            name="StoryPlace"
            role="Lead Developer"
            image={image}
            links={links}
            year="2018 - 2022"
        >
            <p className="text-lg md:text-xl text-gray-600">
                Storyplace is a social platform where you can write, read or
                listen to stories from people all around the world.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
                In my role I architected and developed StoryPlace&apos;s backend
                services and helped shape the platform to where it is today.
                StoryPlace web, iOS, and Android are all powered by a unified
                API that is performant, GIS enabled, and highly scalable.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
                We also developed a dashboard with many custom tools to monitor,
                manage, and moderate the platform.
            </p>
        </Project>
    );
}

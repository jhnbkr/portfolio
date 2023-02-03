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
            year={`2021 - ${new Date().getFullYear()}`}
        >
            <p className="text-lg text-gray-600">
                HDReye is the first and only iOS app for creating custom 360°
                HDRi images for realistic 3D lighting and compositing. HDReye is
                an essential app for combining 3D animation realistically with
                footage or capturing lightmaps of any location.
            </p>
            <p className="text-lg text-gray-600">
                My role at HDReye oversees the design and development of
                infrastructure that powers our application. These include our
                stitching pipeline, asset management, payments, user management,
                authentication and more.
            </p>
        </Project>
    );
}

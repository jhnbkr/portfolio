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
        name: "Website",
        url: "https://www.loblaws.com",
        icon: GlobeIcon,
    },
];

export default function Loblaws() {
    return (
        <Project
            name="Loblaws.com"
            role="Senior Developer"
            image={image}
            links={links}
            year="2014"
        >
            <p className="text-xl text-gray-600">
                Loblaws is Canada&apos;s largest food distributor and retailer.
                I joined the Publicis Sapient (then SapientNitro) team to help
                build Loblaw&apos;s breakout online grocery ordering platform.
            </p>
            <p className="text-xl text-gray-600">
                My roles on this project included developing interfaces and
                working closely with our backend teams to facilitate a smooth
                integration.
            </p>
        </Project>
    );
}

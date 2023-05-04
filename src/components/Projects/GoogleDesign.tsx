import GoogleDesignImage from "assets/images/google-design.jpg";
import GlobeIcon from "assets/svg/icons/GlobeIcon";
import Project, { ProjectImage, ProjectLink } from "components/Projects";

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
            year="2022 - 2023"
        >
            <p className="text-lg md:text-xl text-gray-600">
                Google Design is the home for inspiration and insights that move
                Google&apos;s product design forward. Get to know the breadth
                and craft of design and technology at Google.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
                I joined forces with Instrument and Google to reinvision and
                rebuild the platform. Working closely with Google engineers to
                ensure the application meets their high standards for
                accessibility and performance while managing a team of
                developers.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
                A highly customized CMS and API empowers a sophisticated design
                system developed in-house that utilizes Google&apos;s design
                principles. Hundreds of uniquely designed pages were translated
                into the new design system through a complex migration pipeline.
            </p>
        </Project>
    );
}

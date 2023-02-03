import DisneySpoonfulImage from "assets/images/disney-spoonful.jpg";
import GlobeIcon from "assets/svg/icons/GlobeIcon";
import Project, { ProjectImage, ProjectLink } from "components/Projects";

const image: ProjectImage = {
    data: DisneySpoonfulImage,
    alt: "Disney Spoonful",
    url: "https://en.wikipedia.org/wiki/Spoonful.com",
};

const links: ProjectLink[] = [
    {
        name: "Website",
        url: "https://en.wikipedia.org/wiki/Spoonful.com",
        icon: GlobeIcon,
    },
];

export default function Spoonful() {
    return (
        <Project
            name="Disney Spoonful"
            role="Senior Developer"
            image={image}
            links={links}
            year="2012"
        >
            <p className="text-lg text-gray-600">
                I joined the Disney Interactive team to rethink their Family Fun
                platform. An online resource for parents of arts & crafts,
                recipes, and party ideas.
            </p>
            <p className="text-lg text-gray-600">
                Spoonful was the first platform at Disney to be built on a new
                CMS. Our team helped define and build the CMS and workflows that
                would go on to power many Disney online properties for years to
                come.
            </p>
        </Project>
    );
}

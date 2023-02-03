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
            <p className="text-xl text-gray-600">
                MusiCounts is a Canadaian music education charity that believes
                music can transform the lives of young people.
            </p>
            <p className="text-xl text-gray-600">
                I lead the development behind the rebuild of MusiCounts&apos;
                online platform. This included a powerful CMS, content strategy,
                data migration, and design system. MusiCounts is built on top of
                Wagtail and is highly extensible.
            </p>
        </Project>
    );
}

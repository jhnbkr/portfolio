import BlastersOfTheUniverseImage from "assets/images/blasters-of-the-universe.jpg";
import GlobeIcon from "assets/svg/icons/GlobeIcon";
import OculusIcon from "assets/svg/icons/OculusIcon";
import PlayStationIcon from "assets/svg/icons/PlayStationIcon";
import SteamIcon from "assets/svg/icons/SteamIcon";
import Project, { ProjectImage, ProjectLink } from "components/Projects";

const image: ProjectImage = {
    data: BlastersOfTheUniverseImage,
    alt: "Blasters of the Universe",
    url: "https://store.steampowered.com/app/490490/Blasters_of_the_Universe",
};

const links: ProjectLink[] = [
    {
        name: "Steam",
        url: "https://store.steampowered.com/app/490490/Blasters_of_the_Universe",
        icon: SteamIcon,
    },
    {
        name: "PlayStation",
        url: "https://store.playstation.com/en-us/product/UP1264-CUSA10280_00-4152434849414354",
        icon: PlayStationIcon,
    },
    {
        name: "Oculus",
        url: "https://www.oculus.com/experiences/rift/1121855627886210",
        icon: OculusIcon,
    },
];

export default function BlastersOfTheUniverse() {
    return (
        <Project
            name="Blasters of the Universe"
            role="Lead Developer"
            image={image}
            links={links}
            year="2016 - 2018"
        >
            <p className="text-xl text-gray-600">
                Blasters of the Universe is a first of its kind VR bullet hell
                game with intense gameplay that is heavily reliant on physical
                movement.
            </p>
            <p className="text-xl text-gray-600">
                I helped lead the development effort and contributed to many
                areas of the game; editor tools, enemy behavior, gameplay
                programming, cross platform integration, PlayStation VR port,
                real time audio mixing, animation programming, UI, pipeline
                engineering, and more.
            </p>
        </Project>
    );
}

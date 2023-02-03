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
            year="2017"
        >
            <p className="text-lg text-gray-600">
                Blasters of the Universe is the first of its kind, bringing the
                bullet hell genre into first person VR. Intense gameplay is
                heavily reliant on physical movement, requiring the player to
                duck, dodge, twist, turn, and maneuver their way through tons of
                enemies and hundreds of bullets.
            </p>
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

import TransposeImage from "assets/images/transpose.jpg";
import OculusIcon from "assets/svg/icons/OculusIcon";
import PlayStationIcon from "assets/svg/icons/PlayStationIcon";
import SteamIcon from "assets/svg/icons/SteamIcon";
import Project, { ProjectImage, ProjectLink } from "components/Projects";

const image: ProjectImage = {
    data: TransposeImage,
    alt: "Transpose",
    url: "https://store.steampowered.com/app/835950/Transpose",
};

const links: ProjectLink[] = [
    {
        name: "Steam",
        url: "https://store.steampowered.com/app/835950/Transpose",
        icon: SteamIcon,
    },
    {
        name: "PlayStation",
        url: "https://store.playstation.com/en-us/product/UP3009-CUSA12678_00-0000000000000001",
        icon: PlayStationIcon,
    },
    {
        name: "Oculus",
        url: "https://www.oculus.com/experiences/rift/1365103133543739",
        icon: OculusIcon,
    },
];

export default function Transpose() {
    return (
        <Project
            name="Transpose"
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

import {
  faEnvelope,
  faCommentAlt,
  faCheckSquare,
  faCalendar,
  faCreditCard,
  faClone,
  faCheckCircle,
} from "@fortawesome/free-regular-svg-icons";
import { LayoutIcon } from "../icons/layout";
import { DropletIcon } from "../icons/droplet";
import { GridIcon } from "../icons/grid";
import { ArchiveIcon } from "../icons/archive";
import { SideBarIcon } from "../icons/sidebar";
import { FileTextIcon } from "../icons/fileText";

export const menuItems = [
  {
    title: "APP",
    datas: [
      {
        icon: faEnvelope,
        text: "Email",
      },
      {
        icon: faCommentAlt,
        text: "Chat",
      },
      {
        icon: faCheckSquare,
        text: "Todo",
      },
      {
        icon: faCalendar,
        text: "Calendar",
      },
    ],
  },
  {
    title: "UI ELEMENTS",
    datas: [
      {
        icon: <LayoutIcon />,
        text: "Grid",
        isOriginal: false,
        isMenuExpanded: true,
        onClick: () => console.log("onClick"),
      },
      {
        icon: <DropletIcon />,
        text: "Colors",
        isOriginal: false,
      },
      {
        icon: faCreditCard,
        text: "Card",
        isMenuExpanded: true,
        onClick: () => console.log("onClick"),
      },
      {
        icon: <GridIcon />,
        text: "Table",
        isOriginal: false,
      },
      {
        icon: <ArchiveIcon />,
        text: "Component",
        isOriginal: false,
        isMenuExpanded: true,
        onClick: () => console.log("onClick"),
      },
    ],
  },
  {
    title: "FORMS",
    datas: [
      {
        icon: faClone,
        text: "Form Elements",
        isMenuExpanded: true,
        onClick: () => console.log("onClick"),
      },
      {
        icon: <SideBarIcon />,
        text: "Form Layouts",
        isOriginal: false,
      },
      {
        icon: <FileTextIcon />,
        text: "Form Wizard",
        isOriginal: false,
      },
      {
        icon: faCheckCircle,
        text: "Form Validation",
      },
    ],
  },
];

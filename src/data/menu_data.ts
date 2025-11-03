// File: data/menu_data.ts - Simple Version

import { StaticImageData } from "next/image";

interface DataType {
	id: number;
	title: string;
	link: string;
	img_dropdown?: boolean;
	has_dropdown?: boolean;
	sub_menus?: {
		link: string;
		title: string;
		demo_img?: StaticImageData;
	}[];
}

// menu data
const menu_data: DataType[] = [
	{
		id: 1,
		title: "Home",
		link: "/",
		has_dropdown: false,
	},
	{
		id: 2,
		title: "About Us",
		link: "/about",
		has_dropdown: false,
	},
	{
		id: 3,
		title: "Our Goats",
		link: "/goats",
		has_dropdown: false,
	},
	{
		id: 4,
		title: "Care Guide",
		link: "/care-guide",
		has_dropdown: false,
	},
	{
		id: 5,
		title: "Gallery",
		link: "/gallery",
		has_dropdown: false,
	},
	{
		id: 6,
		title: "Contact",
		link: "/contact",
		has_dropdown: false,
	},
];

export default menu_data;
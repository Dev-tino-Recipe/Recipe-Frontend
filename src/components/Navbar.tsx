"use client";

import EditIcon from "../assets/edit_icon.png";
import DailyIcon from "../assets/daily_icon.png";
import SearchIcon from "../assets/search_icon.png";
import Circle from "../assets/circle.png";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NAVBAR_ITEMS = [
  {
    id: 0,
    src: EditIcon,
    href: "/write",
  },
  {
    id: 1,
    src: DailyIcon,
    href: "/",
  },
  {
    id: 2,
    src: SearchIcon,
    href: "/search",
  },
];

function NavBar() {
  const pathname = usePathname();
  return (
    <div
      className={
        "fixed bottom-0 w-[390px] h-24 bg-white border-t-2 flex py-4 justify-evenly"
      }
    >
      {NAVBAR_ITEMS.map(({ id, src, href }) => (
        <Link key={id} href={href} className={"h-full aspect-square relative"}>
          {href === pathname && (
            <Image className={"absolute"} src={Circle} alt={""} />
          )}
          <Image className={"h-full w-full object-contain"} src={src} alt="" />
        </Link>
      ))}
    </div>
  );
}

export default NavBar;

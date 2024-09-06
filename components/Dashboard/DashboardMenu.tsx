'use client';
import Link from "next/link";
import { useState } from "react"
import { FaCartShopping, FaCheck, FaChevronDown, FaClipboard, FaGauge, FaHouse, FaLink, FaPlus, FaUser, FaUserPlus } from "react-icons/fa6";
import MenuSelect from "./DasboardMenu/MenuSelect";

export enum DashboardType {
    text = 1,
    select = 2,
}

export interface DashboardMenuItems {
    href: string
    icon: any,
    label: string
}

export interface DashboardMenu {
    type: DashboardType
    href?: string
    icon: any
    label: string
    items?: DashboardMenuItems[]
}

export default function DashboardMenu() {
    const [menu, setMenu] = useState<DashboardMenu[]>([
        {
            type: DashboardType.text,
            href: "/dashboard",
            icon: <FaHouse />,
            label: "หน้าหลัก"
        },
        {
            type: DashboardType.text,
            href: "/dashboard",
            icon: <FaLink />,
            label: "ลิงก์"
        },
        {
            type: DashboardType.select,
            label: "เลือก",
            icon: <FaCheck />,
            items: [
                {
                    href: "/dashboard",
                    icon: <FaClipboard />,
                    label: "รายการ"
                }
            ]
        }
    ]);

    return (
        <>
            <ul className="mt-20 w-full flex flex-col mx-5">
                {menu.map((val, index) => (
                    <>
                        {val.type == DashboardType.text && (
                            <li key={index}>
                                <Link href={val.href?.toString() as string} className="flex flex-col hover:text-blue-500 group pb-5">
                                    <div className="flex gap-3 items-center text-lg pb-3 transition-all duration-200">
                                        {val.icon}
                                        <label className="cursor-pointer">
                                            {val.label}
                                        </label>
                                    </div>
                                    <span className="h-0.5 bg-blue-500 w-0 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </li>
                        )}
                        {val.type == DashboardType.select && (
                            <li key={index}>
                                <MenuSelect val={val} />
                            </li>
                        )}
                    </>
                ))}
            </ul>
        </>
    )
}
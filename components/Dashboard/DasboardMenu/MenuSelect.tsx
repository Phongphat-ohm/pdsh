'use client'
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { DashboardMenu } from "../DashboardMenu";
import Link from "next/link";
import { useState } from "react";

interface Root {
    val: DashboardMenu
}

export default function MenuSelect({ val }: Root) {
    const [show, setOnShow] = useState(false);

    return (
        <>
            <div className="flex flex-col pb-10">
                <button onClick={() => {
                    if (show) {
                        setOnShow(false)
                    } else {
                        setOnShow(true)
                    }
                }} className="flex justify-between items-center">
                    <div className="flex gap-3 items-center text-lg transition-all duration-200 cursor-pointer">
                        {val.icon}
                        {val.label}
                    </div>
                    {show ? (
                        <FaChevronDown />
                    ) : (
                        <FaChevronRight />
                    )}
                </button>
                {show && (
                    <>
                        <ul className="ml-5 flex flex-col gap-3 mt-4">
                            {val.items?.map((val, index) => (
                                <>
                                    <li key={index}>
                                        <Link href={val.href} className="hover:text-blue-500 transition-all duration-200 flex flex-col group text-lg">
                                            <div className="flex gap-3 items-center py-2">
                                                {val.icon}
                                                {val.label}
                                            </div>
                                            <span className="h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                                        </Link>
                                    </li>
                                </>
                            ))}

                        </ul>
                    </>
                )}
            </div>
        </>
    )
}
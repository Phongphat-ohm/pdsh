'use client';

import { FaXmark } from "react-icons/fa6";
import { NotificationProp } from "./NotificationList";
import { useState } from "react";

interface Root {
    val: NotificationProp
}

export default function NotificationListItem({ val }: Root) {
    const [show, setShow] = useState(false);

    return (
        <>
            <li key={val.id} className="p-5 shadow bg-[#1b2b5f] w-full rounded-xl flex overflow-hidden">
                <div onClick={() => {
                    if (show) {
                        setShow(false)
                    } else {
                        setShow(true)
                    }
                }} className="flex cursor-pointer flex-col overflow-hidden">
                    <div className="flex justify-between items-center">
                        <h1 className="text-lg">
                            {val.title}
                        </h1>
                        <label className="px-3">
                            {val.date}
                        </label>
                    </div>
                    <div className="p-1 overflow-hidden text-ellipsis whitespace-nowrap">
                        <label className="text-gray-300">
                            {val.message}
                        </label>
                    </div>
                </div>
                <button className={show ? "transition-all duration-200 w-36 text-lg text-red-500 flex justify-center items-center" : "w-0 text-lg text-red-500 flex justify-center items-center transition-all duration-200"}>
                    <FaXmark />
                </button>
            </li>
        </>
    )
}
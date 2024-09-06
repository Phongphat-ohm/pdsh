'use client'
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import NotificationListItem from "./NotificationListItem";

export interface NotificationProp {
    id: number
    title: string
    date: string
    message: string
}

export default function NotificationList() {
    const [notification, setBotification] = useState<NotificationProp[]>([
        {
            id: 1,
            title: "ทดสอบการแจ้งเตือน 1",
            date: "9 กันยายน 2567",
            message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur cumque unde aperiam soluta deleniti debitis dolor delectus eveniet. Facere eius sint veritatis sapiente alias porro consequuntur illo, voluptate in excepturi?"
        },
        {
            id: 2,
            title: "ทดสอบการแจ้งเตือน 2",
            date: "9 กันยายน 2567",
            message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur cumque unde aperiam soluta deleniti debitis dolor delectus eveniet. Facere eius sint veritatis sapiente alias porro consequuntur illo, voluptate in excepturi?"
        },
        {
            id: 3,
            title: "ทดสอบการแจ้งเตือน 3",
            date: "9 กันยายน 2567",
            message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur cumque unde aperiam soluta deleniti debitis dolor delectus eveniet. Facere eius sint veritatis sapiente alias porro consequuntur illo, voluptate in excepturi?"
        },
        {
            id: 4,
            title: "ทดสอบการแจ้งเตือน 4",
            date: "9 กันยายน 2567",
            message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur cumque unde aperiam soluta deleniti debitis dolor delectus eveniet. Facere eius sint veritatis sapiente alias porro consequuntur illo, voluptate in excepturi?"
        },
        {
            id: 5,
            title: "ทดสอบการแจ้งเตือน 5",
            date: "9 กันยายน 2567",
            message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur cumque unde aperiam soluta deleniti debitis dolor delectus eveniet. Facere eius sint veritatis sapiente alias porro consequuntur illo, voluptate in excepturi?"
        }
    ])

    return (
        <>
            <ul className="flex flex-col gap-5">
                {notification.map((val: NotificationProp, index) => (
                    <>
                        <NotificationListItem val={val as NotificationProp} key={index} />
                    </>
                ))}
            </ul>
        </>
    )
}
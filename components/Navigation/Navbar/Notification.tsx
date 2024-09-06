'use client';
import { FaBell } from "react-icons/fa6";
import Modal from "./Notification/Modal";
import { useState } from "react";

export default function Notification() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => {
                setShowModal(true);
            }} className="w-10 h-10 border hover:bg-gray-50 rounded-full flex justify-center items-center">
                <FaBell className="text-yellow-500" />
            </button>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </>
    )
}
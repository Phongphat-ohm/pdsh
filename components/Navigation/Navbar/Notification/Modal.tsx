'use client';
import { FaBell, FaXmark } from "react-icons/fa6";
import NotificationList from "./NotificationList";

interface Root {
    showModal: any
    setShowModal: any
}

export default function Modal({ showModal, setShowModal }: Root) {
    return (
        <>
            <div className={showModal ? "transition-all duration-300 absolute z-50 h-screen top-0 left-1/4" : "absolute z-50 h-0 top-0 left-1/4 transition-all duration-300"}>
                <div className={showModal ? "overflow-hidden w-[45rem] h-[40rem] transition-all duration-500 bg-blue-950 shadow-2xl relative rounded-b-xl outline-none border border-t-0" : "w-[45rem] h-0 transition-all duration-500 bg-blue-950 shadow-2xl relative rounded-b-xl outline-none border border-t-0 overflow-hidden"}>
                    <div className="p-5 text-white">
                        <div className="text-xl flex items-center gap-3 bg-none">
                            <FaBell className="text-yellow-500" />
                            การแจ้งเตือน
                        </div>
                        <div className="p-8 overflow-y-scroll h-[37rem] pb-16">
                            <NotificationList/>
                        </div>
                    </div>
                    <button onClick={() => {
                        setShowModal(false);
                    }} className="absolute bottom-0 w-full flex justify-center p-5 items-center">
                        <span className="w-52 h-1 bg-white rounded-full cursor-pointer p-1"></span>
                    </button>
                </div>
            </div>
        </>
    )
}
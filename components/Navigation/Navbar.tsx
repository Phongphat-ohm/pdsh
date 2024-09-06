import { FaRightFromBracket } from "react-icons/fa6";
import Notification from "./Navbar/Notification";
import UserDetail from "./Navbar/UserDetail";

export default function Navbar() {
    return (
        <>
            <nav className="absolute w-full top-0 shadow z-10">
                <div className="p-5 bg-white flex justify-between items-center">
                    <div className="flex gap-10 items-center">
                        <UserDetail />
                        <Notification />
                    </div>
                    <div>
                        <button className="p-3 border-2 border-white transition-all duration-300 hover:bg-red-100 hover:border-red-400 text-red-500  rounded-lg">
                            <FaRightFromBracket />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}
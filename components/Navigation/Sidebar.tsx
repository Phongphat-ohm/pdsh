import Link from "next/link";
import { FaGauge, FaHouse, FaRotate } from "react-icons/fa6";
import DashboardMenu from "../Dashboard/DashboardMenu";

export default function Sidebar() {
    return (
        <>
            <div className="w-1/4 p-10 bg-blue-950">
                <div className="flex flex-col items-center text-white">
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-3 pointer-events-none">
                            <img src="images/logo-removebg.png" className="w-10" alt="" />
                            <h1 className="text-3xl font-bold">GPPR</h1>
                        </div>
                    </div>
                    <DashboardMenu />
                </div>
            </div>
        </>
    )
}
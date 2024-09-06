import Link from "next/link";
import { FaLock, FaUser } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function LoginCard() {
    return (
        <>
            <div className="p-10 bg-white rounded-3xl shadow">
                <div className="flex justify-center mb-3">
                    <div className="border overflow-hidden rounded-full">
                        <img src="images/logo.png" alt="" className="w-36" />
                    </div>
                </div>
                <h1 className="text-center text-3xl my-3">
                    เข้าสู่ระบบ GPPR
                </h1>
                <form action="" className="mt-10 mb-5 w-[30rem]">
                    <div className="flex p-2 px-4 items-center border rounded-2xl">
                        <FaUser className="text-lg text-gray-500" /> <input type="text" placeholder="ชื่อผู้ใช้" className="p-2 px-4 outline-none w-full text-gray-600 peer" />
                    </div>
                    <div className="flex p-2 px-4 items-center border rounded-2xl mt-8">
                        <FaLock className="text-lg text-gray-500" /> <input type="password" placeholder="รหัสผ่าน" className="p-2 px-4 outline-none w-full text-gray-600" />
                    </div>
                    <div className="mt-10 flex justify-center">
                        <Link href={"/dashboard"} className="p-4 flex bg-blue-500 px-16 text-white rounded-xl active:bg-blue-600" type="button">
                            ยืนยัน
                        </Link>
                    </div>
                    <div className="mt-10 flex flex-col justify-center items-center gap-1">
                        <Link href="/password/vertify" target="_blank" className="text-blue-500 flex gap-2 items-center">
                            ลืมรหัสผ่านหรือไม่ <FaArrowUpRightFromSquare />
                        </Link>
                        <Link href="/signup" className="text-blue-500">
                            สมัครสมาชิก
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}
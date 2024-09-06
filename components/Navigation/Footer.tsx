import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="absolute bottom-0 left-0 w-full p-8 bg-gray-200 flex justify-around text-sm text-gray-500">
                <div className="flex gap-5">
                    <Link href={"/privacy-policy"}>นโยบายความเป็นส่วนตัว</Link>
                    <label>|</label>
                    <Link href={"/term-of-service"}>ข้อกำหนดและเงื่อนไข</Link>
                </div>
                <div>
                    Copyright&nbsp;&#169;&nbsp;GaPiPaRaa Dashboard
                </div>
            </footer>
        </>
    )
}
import Link from "next/link";

export default function UserDetail() {
    return (
        <>
            <Link href={"/dashboard/settings"} className="flex items-center gap-5">
                <div className="flex gap-3 items-center justify-start">
                    <img src="https://placehold.co/1000" alt="logo" className="w-14 h-14 rounded-full" />
                    <div className="flex flex-col items-start">
                        <h1>
                            &#123;ชื่อ&#125;
                        </h1>
                        <label className="text-xs text-gray-500">
                            &#123;นามสกุล&#125;
                        </label>
                    </div>
                </div>
            </Link>
        </>
    )
}
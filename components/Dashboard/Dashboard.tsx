import Footer from "../Navigation/Footer";
import Navbar from "../Navigation/Navbar";
import Sidebar from "../Navigation/Sidebar";

export default function Dashboard({ children }: any) {
    return (
        <>
            <div className="flex w-full min-h-screen">
                <Sidebar />
                <div className="w-full relative p-0">
                    <Navbar />
                    {children}
                </div>
            </div>
        </>
    )
}
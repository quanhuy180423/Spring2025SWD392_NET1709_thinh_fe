import { Outlet } from "react-router-dom"
import SidebarCus from "@components/SidebarCus/index.jsx";

const LayoutCus = () => {
    return (
        <div>

            <main className="flex">
                <div className="w-[20rem]  h-screen sticky top-0">
                    <SidebarCus />
                </div>
                <div className="w-screen container m-6 shadow-xl bg-slate-100">
                    <Outlet />
                </div>

            </main>
        </div>
    )
}

export default LayoutCus;
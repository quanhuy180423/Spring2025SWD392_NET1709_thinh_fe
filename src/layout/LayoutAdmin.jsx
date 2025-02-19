import { Outlet } from "react-router-dom"
import Sidebar from "@components/SidebarAdmin/index.jsx"

const LayoutAdmin = () => {
    const location = useLocation();

    useEffect(() => {
        //functions here
    }, [location.pathname]);

    return (
        <div>

            <main className="flex">
                <div className="w-48">
                    <Sidebar />
                </div>
                <div className="w-screen container mx-6 mt-6 shadow-2xl bg-slate-100">
                    <Outlet />
                </div>

            </main>
        </div>
    )
}

export default LayoutAdmin
import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const LayoutMain = () => {
    return (
        <div>
            <header className="bg-slate-400">
                <Header />
            </header>
            <Outlet />
        </div>
    )
}

export default LayoutMain
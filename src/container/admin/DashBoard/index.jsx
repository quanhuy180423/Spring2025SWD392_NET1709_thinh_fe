import { FaMoneyBillWave, FaUser, FaWeebly } from "react-icons/fa"
import CardInfo from "./CardInfo/index.jsx"

const DashBoard = () => {
    const listCardInfo = [
        { id: 1, icon: <FaUser size={25} />, title: 'User', money: '13123' },
        { id: 2, icon: <FaMoneyBillWave size={25} />, title: 'Monthly Revenue', money: '13123' },
        { id: 3, icon: <FaWeebly size={25} />, title: 'Totals Booking ', money: '13123' },
    ]
    return (
        <div className="mx-4 mt-3">
            <h2 className="text-4xl font-bold text-center">Dashboard</h2>
            <div className=" gap-4 w-full grid grid-cols-3 text-center justify-center">
                {listCardInfo.map((card) => (
                    <div key={card.id}>
                        <CardInfo icon={card.icon} title={card.title} money={card.money} />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default DashBoard
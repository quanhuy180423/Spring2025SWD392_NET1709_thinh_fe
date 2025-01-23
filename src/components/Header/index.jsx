
import { Link, NavLink } from 'react-router-dom'
import routes from '../../router'
import { Assets } from '../../assets/Assets'
import { FaUser } from 'react-icons/fa'
import { FaCalendar } from 'react-icons/fa6'

const Header = () => {
    return (
        <>
            <header className='flex flex-row justify-around'>
                <div className='border-2 rounded-full border-teal-300 '>
                    <Link to={routes.home}>
                        <img src={Assets.logoMedicineRemoveBackground} alt="logo" className='w-28 rounded-lg cursor-pointer' />
                    </Link>
                </div>

                <div className='flex items-center cursor-pointer'>
                    <ul className='list-none flex flex-row gap-6'>
                        <li className='text-2xl'><Link to={routes.home}>Home</Link></li>
                        <li className='text-2xl'>Guide</li>
                        <li className='text-2xl'>Services</li>
                        <li className='text-2xl'>Price List</li>
                        <li className='text-2xl'>About Us</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-2 items-center cursor-pointer justify-center'>
                    <div className='flex gap-3 items-center'>
                        <FaUser />
                        <Link to={routes.auth.login}>Login</Link>
                    </div>

                    <div className='flex gap-3 items-center bg-teal-100 p-2 rounded-md'>
                        <FaCalendar />
                        <Link to={routes.registerVaccination}>Register for vaccination</Link>
                    </div>

                </div>
            </header>
        </>

    )
}

export default Header
import { useContext } from "react"
import logo from "../assets/logo.png"
import { AuthContext } from "../provider/AuthProvider"
import { Link } from "react-router-dom";







const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);


    return (
        <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
            <div className='flex-1'>
                <div className='flex gap-2 items-center'>
                    <img className='w-auto h-7' src={logo} alt='' />
                    <Link to='/' className='font-bold'>SoloSphere</Link>
                </div>
            </div>
            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    {!user &&
                        <li>
                            <Link to='/login'>
                                <div>Login</div>
                            </Link>
                        </li>
                    }
                </ul>

                {user && <div className='dropdown dropdown-end z-50'>
                    <div
                        tabIndex={0}
                        role='button'
                        className='btn btn-ghost btn-circle avatar'
                    >
                        <div className='w-10 rounded-full' title={user?.displayName}>
                            <img
                                referrerPolicy='no-referrer'
                                alt='User Profile Photo'
                                src={user?.photoURL}
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                    >
                        <li>
                            <Link to = '/addJob' className='justify-between'>Add Job</Link>
                        </li>
                        <li>
                            <Link to = '/myPostedJobs'>My Posted Jobs</Link>
                        </li>
                        <li>
                            <div>My Bids</div>
                        </li>
                        <li>
                            <div>Bid Requests</div>
                        </li>
                        <li className='mt-2'>
                            <button onClick={logOut} className='bg-gray-200 block text-center'>Logout</button>
                        </li>
                    </ul>
                </div>}
            </div>
        </div>
    )
}

export default Navbar
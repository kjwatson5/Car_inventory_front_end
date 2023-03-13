import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

function Navbar() {
  const [isVisible, setIsVisible] = useState(false)

  const SignOutOnClick = () => {
    signOut(auth)
    location.reload();
  }

  const SignInOnClick = async () => {
    const response = await signInWithPopup(auth, Providers.google);
    if ( response.user ){
      location.reload();
    }
  }

  const dropDown = () => {
    setIsVisible(!isVisible)
  }

  const clicked = () => {
    setIsVisible(false)
  }

  return (
    <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
      <Link to='/' onClick={ clicked } className='font-semibold text-xl tracking-tight'>Car Inventory</Link>
      </div>
      <div className="block">
        <button
          onClick={dropDown}
          className="flex items-center px-3 py-2 text-teal-200 border rounded
          border-teal-400 hover:text-white hover:border-white"
          >
            <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      { isVisible ? (<div className='w-full block flex-grow items-center'>
        <div className="text-sm lg:flex-grow">
          <Button className="p-3 m-5 bg-teal-400 justify-center">
            <div>
              <Link to="/" className='flex place-items-center mt-4 lg:inline-block lg:mt-0
              text-teal-200 hover:text-white mr-4'>
                  Home
                </Link>
            </div>
          </Button>
          <Button className="p-3 m-5 bg-teal-400 justify-center">
            <div>
              <Link to="/about" className='flex place-items-center mt-4 lg:inline-block lg:mt-0
              text-teal-200 hover:text-white mr-4'>
                  About
                </Link>
            </div>
          </Button>
          <Button className="p-3 m-5 bg-teal-400 justify-center">
            <div>
              <Link to="/dashboard" className='flex place-items-center mt-4 lg:inline-block lg:mt-0
              text-teal-200 hover:text-white mr-4'>
                  Dashboard
                </Link>
            </div>
          </Button>
          <Button className="p-3 m-5 bg-teal-400 justify-center">
            <div>
              <Link to="/contact" className='flex place-items-center mt-4 lg:inline-block lg:mt-0
              text-teal-200 hover:text-white mr-4'>
                  Contact
                </Link>
            </div>
          </Button>
          {
            !auth.currentUser ?

            <Button className='p-3 m-5 bg-teal-400 justify-center'>
              <div>
                <Link to='/' onClick={ () => { SignInOnClick() }} className='flex place-items-center mt-4
                lg:inline-block lg:mt-0 text-teal-200 hover:text-white'>
                  Login
                </Link>
              </div>
            </Button>
            :
            <Button className='p-3 m-5 bg-teal-400 justify-center'>
              <div>
                <Link to='/' onClick={ () => { SignOutOnClick() }} className='flex place-items-center mt-4
                lg:inline-block lg:mt-0 text-teal-200 hover:text-white'>
                  Sign Out
                </Link>
              </div>
            </Button>
          }
        </div>
      </div>)
      : (<></>)}
    </nav>
  )
}

export default Navbar

import React, { useContext } from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom'
import {ShoppingBagIcon} from '@heroicons/react/solid'
import AppContext from '../context/AppContext'

const Header = () => {
  const { state } = useContext(AppContext)
  const { cart } = state
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to='/'>PlatziConf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
            <ShoppingBagIcon className='w-6 h-6 text-blue-600' viewBox="0 0 20 20"/>
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  )
}

export default Header

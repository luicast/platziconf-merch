import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import {handleSumTotal} from '../utils/sum'
import { TrashIcon } from '@heroicons/react/solid'
import '../styles/Checkout.css'

const Checkout = () => {
    const { state, removeFromCart} = useContext(AppContext)
    const { cart } = state
    const handleRemove = product => () => {
        removeFromCart(product)
    }

    return (
        <>
            <div className="Checkout">
                <div className="Checkout-content">
                    {cart.length > 0 ? <h3>lista de pedidos:</h3> : <h3>sin pedidos ...</h3>}
                    {cart.map((item) => (
                        <div className="Checkout-item" key={item.title}>
                            <div className="Checkout-element">
                                <h4>{item.title}</h4>
                                <span>${item.price}</span>
                            </div>
                            <button type='button' onClick={handleRemove(item)}><TrashIcon className='h-4 h-4' viewBox='0 0 20 20' /></button>
                        </div>
                    ))}
                </div>
                {cart.length > 0 && (
                    <div className="Checkout-sidebar">
                        <h3>Precio total:${handleSumTotal(cart)}</h3>
                        <Link to='/checkout/information'>
                        <button type='button'>Continuar pedido</button>
                        </Link>
                    </div>
                )}
            </div> 
       </>
    )
}

export default Checkout
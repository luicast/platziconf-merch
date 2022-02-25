import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from '../context/AppContext'
import { PayPalButton } from 'react-paypal-button-v2'
import { handleSumTotal } from '../utils/sum'
import '../styles/Payment.css'

const Payment = () => {
    const { state, addNewOrder } = useContext(AppContext)
    const { cart, buyer } = state
    const navigate = useNavigate()

    const paypalOptions = {
        clientId: 'sb',
        intent:'capture',
        currency:'USD'
    }

    const buttonStyles = {
        layout:  'vertical',
        color:   'blue',
        shape:   'rect',
        label:   'paypal'
    }

    const handlePaymentSuccess = (data) => {
        if(data.status === 'COMPLETED'){
            const newOrder = {
                buyer,
                product:cart,
                payment:data
            }
            addNewOrder(newOrder)
            navigate('/checkout/success')
        }
    }

    return (
      <div className="payment">
          <div className="payment-content">
              <h3>Resumen del pedido</h3>
              {cart.map((item) =>(
                  <div className='Payment-item' key={item.title}>
                      <div className='Payment-element'>
                          <h4>{item.title}</h4>
                          <span>$
                            {' '}
                            {item.price}
                          </span>
                      </div>
                  </div>
              ))}
              {cart.length > 0 && (
                    <div className="Checkout-sidebar">
                        <h3>Precio total:${handleSumTotal(cart)}</h3>
                    </div>
                )}
              <div className="payment-button">
                  {/* <PayPal /> */}
                  <PayPalButton 
                    options={paypalOptions}
                    style={buttonStyles}
                    amount={handleSumTotal(cart)}
                    onButtonReady={() => console.log('Start Payment')}
                    onSuccess={(data) => handlePaymentSuccess(data)}
                    onError={(error) => console.log(error)}
                    onCancel={(data) => console.log(data)}
                   />
              </div>
          </div>
          <div />
      </div>

    )
}

export default Payment;
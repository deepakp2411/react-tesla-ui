import React from 'react'
import '../styles/header-block.css'
const HeaderBlock = () => {
  return (
    <div className='headerBlock'>
    <div className='headerBlock__info'>
        <div className='headerBlock__infoText'>
            <h1>Model 3</h1>
            <h4>Order Online for <span>Touchless Delivery</span></h4>
        </div>
        <div className='headerBlock__actions'>
        <button className='headerBlock__btn-primary'>custom order</button>
        <button className='headerBlock__btn-secondary'>existing inventory</button>

        </div>
    </div>
    </div>
  )
}

export default HeaderBlock
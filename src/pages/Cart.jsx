import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { CartItem } from '../components/CartItem';
import { useSelector } from 'react-redux'
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

export const Cart = () => {

  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);


  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);



  const checkOutHandler = () => {
    remove(Cart.id)
    toast.success('Order Completed')
  }

  return (
    <div className='flex flex-col max-w-5xl mx-auto '>

      {
        cart.length > 0 ?
          (
            <div className='flex md:flex-row flex-col justify-between mb-10'>
              <div>
                {
                  cart.map((item, index) => (
                    <CartItem key={item.id} item={item} itemIndex={index} />
                  ))
                }
              </div>

              <div className='fixed md:right-[25%] mt-6'>

                <div className='md:flex flex-col hidden'>
                  <p className='text-green-600 font-semibold uppercase text-lg '>Your Cart</p>
                  <p className='text-green-600 font-bold text-[35px] uppercase hidden md:flex'>Summary</p>
                  <span>
                    Total Item : {cart.length}
                  </span>
                </div>

                <div className='fixed justify-between flex md:flex-col bottom-0 bg-white py-5 px-5 md:px-0 md:items-start h-16 md:h-auto w-full md:w-auto items-center border-t md:border-none'>

                  <p className='py-5 flex flex-col md:flex-row'>
                    Total Amount: &nbsp;
                    <span className='text-lg font-semibold'>${totalAmount.toFixed(2)}</span>
                  </p>

                  <button onChange={() => cart}
                    className='bg-green-600 py-2 px-5 md:px-20 rounded text-white font-bold '>
                    Checkout Now
                  </button>

                </div>

              </div>

            </div>
          ) :

          (
            <div className='flex flex-col items-center py-12 mt-20'>

              <h2 className='py-5'> Your Cart is Empty </h2>

              <NavLink to="/">
                <button className='bg-green-600 py-2 p-20 rounded text-white font-bold'>
                  Shop Now</button>
              </NavLink>

            </div>
          )
      }
    </div>
  )
}


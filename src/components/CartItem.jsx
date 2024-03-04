import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from "../redux/Slices/CartSlice"
import { toast } from "react-hot-toast"
import { MdDelete } from "react-icons/md";

export const CartItem = ({ item, itemIndex }) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("remove item from cart")
  }
  return (
    <div className='mt-2 border-b-2 border-black py-7'>

      <div className='flex'>

        <div className='h-[180px] w-[140px]'>

          <img src={item.image} className='h-full w-full' />

        </div>

        <div className='flex flex-cols  p-2 ml-10 w-[400px]'>

          <div>
            <h1 className='font-bold font-sans text-[20px] '>{item.title}</h1>

            <h1 className='mt-3'>{item.description.split("").slice(0, 80).join("") + "..."}</h1>

            <div className='flex justify-between mt-10 items-center'>

              <p className="text-green-600 font-semibold text-2xl">${item.price}</p>

              <div className='text-3xl rounded-full cursor-pointer transition duration-200 hover:text-red-700'
                onClick={removeFromCart}>

                <MdDelete />

              </div>
            </div>

          </div>

        </div>


      </div>

    </div>
  )
}


"use client"
import React from 'react'
import {useCounterStore} from '@/store/CounterState'

const Page = () => {
    const { count, increment, decrement } = useCounterStore();
  return (
    <div>
      hello i am main home page
      <h1>Count: {count+1}</h1>
      <button onClick={increment} className='button bg-purple-500 rounded-lg text-white m-3 p-3'>Increment</button>
      <button onClick={decrement} className='button bg-purple-500 rounded-lg text-white m-3 p-3'>Decrement</button>
    </div>
  )
}

export default Page

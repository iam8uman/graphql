"use client";

import React from 'react'
import {useCounterStore} from '@/store/CounterState'

const page = () => {
    const { count, increment, decrement } = useCounterStore();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment} className='button bg-purple-500 rounded-lg text-white m-3 p-3'>Increment</button>
      <button onClick={decrement} className='button bg-purple-500 rounded-lg text-white m-3 p-3'>Decrement</button>
    </div>
  )
}

export default page

import React from 'react'
interface Props{
    params:string;
}

const Orderd = ({params}) => {
  return (
    <main>Order {params.orderId}</main>
  )
}

export default Orderd
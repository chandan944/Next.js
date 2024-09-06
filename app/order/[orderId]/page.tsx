import React from 'react'
interface Props{
    params:{
     orderId: string;}
}

const Orderd = ({params}:Props) => {
  return (
    <main>Order {params.orderId}</main>
  )
}

export default Orderd
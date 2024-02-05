import React from 'react'

const Orders = () => {
  const orders=[{
    id:1,
    itemType:"Fruits",
    quantity:12
  },{
    id:2,
    itemType:"Vegetables",
    quantity:14
  },{
    id:1,
    itemType:"Others",
    quantity:12
  }]
  return (
    <div>
      {
        orders.map((item)=>{
          <div key={item.id}>
            <orderItem id={item.id} itemType={item.itemType} quantity={item.quantity}></orderItem>
          </div>
        })
      }
    </div>
  )
}

export default Orders

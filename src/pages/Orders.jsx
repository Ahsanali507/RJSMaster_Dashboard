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
    id:3,
    itemType:"Others",
    quantity:20
  }]
  return (
    <div>
      {
        orders.map((item)=>(
          <div key={item.id}>
            {/* <orderItem id={item.id} itemType={item.itemType} quantity={item.quantity}></orderItem> */}
            <h4>Item ID: {item.id}</h4>
            <h4>ItemType: {item.itemType}</h4>
            <h4>Item Quantity: {item.quantity}</h4>
          </div>
        ))
      }
    </div>
  )
}

export default Orders

import React from 'react'

import ItemCard from './ItemCard';
import data from './data'

function Home() {

    console.warn(data.productData)

  return (
    <div>
        <h1 className='text-center mt-3'>All Items</h1>
        <selection className="py-4 container">
            <div className='row justify-content-center'>
                {data.productData.map((item, index)=>{
                    return(
                        <ItemCard img= {item.img} title={item.title}  desc={item.desc} price={item.prize} key={index}/>
                    )
                    
                })}
                
            </div>
        </selection>
    </div>
  )
}

export default Home
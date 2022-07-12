import React from 'react'

function ItemCard(props) {
  return (
    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
        <div class="card p-0 overflow-hidden h-100 shadow" >
            <img src={props.img} style={{weigth :"500px", margin:"20px"}}/>
                <div class="card-body text-center">
                     <h5 class="card-title">{props.title}</h5>
                     <p class="card-text">$ {props.price}</p>
                     <h5 class="card-text">{props.desc}</h5>

                     <button  class="btn btn-success">Add To Cart</button>
                </div>
        </div>
    </div>
  )
}

export default ItemCard
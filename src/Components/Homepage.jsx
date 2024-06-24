import React, { useState } from 'react'
import { data } from '../JsFiles/data'
import Cards from './Cards'
import '../css/Homepage.css'
import Content from './Content'
import { Link } from 'react-router-dom'




const Homepage = () => {
 

  return (<>
    <Content />
    <div >
      <h1>Main Categories</h1>
      <hr />
    </div>
    <div className="card-container" style={{ flexWrap: "wrap" }} id='body'>
      {data.map((item) => (<div key={item.id}>
        <Link to={`/Products`}>
          <Cards img={item.img} title={item.title} text={item.text} />
        </Link>
       
      </div>))}

    </div>

  </>
  )
}

export default Homepage
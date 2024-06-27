import React, { useState } from 'react'
import { data } from '../JsFiles/data'
import Cards from './Cards'
import '../css/Homepage.css'
import Content from './Content'
import { Link } from 'react-router-dom'
import { info } from '../JsFiles/info'
import { useAuth } from './AuthContext'




const Homepage = () => {
  const { user } = useAuth();
  

  return (<>
    {user && <h2>Welcome, {user.name}!</h2>}
    <Content />
    <div >
      <h1>Main Categories</h1>
      <hr />
    </div>
    <div className="card-container" style={{ flexWrap: "wrap" }} id='body'>
      {data.map((item) => (<div key={item.id}>
        <Link to={item.link}>
          <Cards img={item.img} title={item.Category} text={item.text} />
        </Link>
       
        
      </div>))}
      

    </div>


  </>
  )
}

export default Homepage
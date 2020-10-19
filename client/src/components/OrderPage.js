import React, { useState } from 'react';
import Nav from './Nav';


function OrderPage() {

  const [ menuItems, setMenuItems ] = useState({
    
    Dinners: [],
    Lunches: [],
    Appetizers: [],
    Sides: [],
    Desserts: [],
    Misc: []

  });


  return (
    <div className="OrderPage">

      <Nav/>

      <div className='menuSection'>



      </div>

    </div>
  );
}

export default OrderPage;
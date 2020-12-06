import React from 'react';
import {
  Link
} from "react-router-dom";

function Nav() {
  return (
    <div className="Nav contentText">

      <Link className='navOpt' to='placeOrder'><div >Place Orders</div></Link>

      <Link className='navOpt' to='prepPage'><div >View Prep</div></Link>

      <Link className='navOpt' to='editPage'><div >Edit Page</div></Link>

    </div>
  );
}

export default Nav;
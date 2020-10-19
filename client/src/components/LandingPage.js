import React from 'react';
import {
  Link
} from "react-router-dom";

function LandingPage() {
  return (
    <div className='LandingPage'>

      <div className='loginHolder contentText'>

        <h1>Place Your Order LOGO</h1>

        <form>

          <label className='txtInput'>

            User Name:
            <input  type="text" name="userName" />

          </label>

          <label className='txtInput'>
            
            Password:
            <input  type="text" name="password" />

          </label>

          <Link to='/placeOrder'><input className='submitForm' type="submit" value="Open Your Menu!"/></Link>

        </form>


      </div>

    </div>
  );
}

export default LandingPage;
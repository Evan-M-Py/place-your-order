import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Nav from './Nav';


function OrderPage() {

  const [displayChoice, setDisplayChoice] = useState('Dinner');

  const [dinnerItems, setDinnerItems] = useState([])
  const [lunchItems, setLunchItems] = useState([])
  const [appetizerItems, setAppetizerItems] = useState([])
  const [dessertItems, setDessertItems] = useState([])
  const [sidesItems, setSidesItems] = useState([])
  const [miscItems, setMiscItems] = useState([])

  const getMenuItems = () => {

    axios.get('/api/dinnerGet').then((res) => {
      console.log(res)
      res.data.map((e) => setDinnerItems(state => [...state, e]))
    });
    axios.get('/api/lunchGet').then((res) => {
      console.log(res)
      res.data.map((e) => setLunchItems(state => [...state, e]))
    });

    axios.get('/api/appetizerGet').then((res) => {
      console.log(res)
      res.data.map((e) => setAppetizerItems(state => [...state, e]))
    });

    axios.get('/api/dessertGet').then((res) => {
      console.log(res)
      res.data.map((e) => setDessertItems(state => [...state, e]))
    });

    axios.get('/api/sidesGet').then((res) => {
      console.log(res)
      res.data.map((e) => setSidesItems(state => [...state, e]))
    });

    axios.get('/api/miscGet').then((res) => {
      console.log(res)
      res.data.map((e) => setMiscItems(state => [...state, e]))
    });

  }

  const displayItems = (x) => {
    switch (x) {
      case "Dinner":
        return (
          dinnerItems.map((e) => {
            return (
              <div className='menuOpt'>
                <label className='contentText' htmlFor='title'>Title:</label>
                <p name='title'>{e.name}</p>
                <label className='contentText' htmlFor='price'>Price:</label>
                <p name='price'>{e.price}</p>
                <label className='contentText' htmlFor='description'>Description:</label>
                <p name='description'>{e.description}</p>
                <label className='contentText' htmlFor='allergens'>Allergens:</label>
                <p name='allergens'>{e.allergens}</p>
              </div>
            )
          }))
        break;
      case "Lunch":
        return (
          lunchItems.map((e) => {
            console.log(e);
            return (
              <div className='menuOpt'>
                <label className='contentText' htmlFor='title'>Title:</label>
                <p name='title'>{e.name}</p>
                <label className='contentText' htmlFor='price'>Price:</label>
                <p name='price'>{e.price}</p>
                <label className='contentText' htmlFor='description'>Description:</label>
                <p name='description'>{e.description}</p>
                <label className='contentText' htmlFor='allergens'>Allergens:</label>
                <p name='allergens'>{e.allergens}</p>
              </div>
            )
          }))
        break;
      case "Appetizer":
        return (
          appetizerItems.map((e) => {
            console.log(e);
            return (
              <div className='menuOpt'>
                <label className='contentText' htmlFor='title'>Title:</label>
                <p name='title'>{e.name}</p>
                <label className='contentText' htmlFor='price'>Price:</label>
                <p name='price'>{e.price}</p>
                <label className='contentText' htmlFor='description'>Description:</label>
                <p name='description'>{e.description}</p>
                <label className='contentText' htmlFor='allergens'>Allergens:</label>
                <p name='allergens'>{e.allergens}</p>
              </div>
            )
          }))
        break;
      case 'Dessert':
        return (
          dessertItems.map((e) => {
            console.log(e);
            return (
              <div className='menuOpt'>
                <label className='contentText' htmlFor='title'>Title:</label>
                <p name='title'>{e.name}</p>
                <label className='contentText' htmlFor='price'>Price:</label>
                <p name='price'>{e.price}</p>
                <label className='contentText' htmlFor='description'>Description:</label>
                <p name='description'>{e.description}</p>
                <label className='contentText' htmlFor='allergens'>Allergens:</label>
                <p name='allergens'>{e.allergens}</p>
              </div>
            )
          }))
        break;
      case 'Sides':
        return (
          sidesItems.map((e) => {
            console.log(e);
            return (
              <div className='menuOpt'>
                <label className='contentText' htmlFor='title'>Title:</label>
                <p name='title'>{e.name}</p>
                <label className='contentText' htmlFor='price'>Price:</label>
                <p name='price'>{e.price}</p>
                <label className='contentText' htmlFor='description'>Description:</label>
                <p name='description'>{e.description}</p>
                <label className='contentText' htmlFor='allergens'>Allergens:</label>
                <p name='allergens'>{e.allergens}</p>
              </div>
            )
          }))
        break;
      case 'Misc':
        return (
          miscItems.map((e) => {
            console.log(e);
            return (
              <div className='menuOpt'>
                <label className='contentText' htmlFor='title'>Title:</label>
                <p name='title'>{e.name}</p>
                <label className='contentText' htmlFor='price'>Price:</label>
                <p name='price'>{e.price}</p>
                <label className='contentText' htmlFor='description'>Description:</label>
                <p name='description'>{e.description}</p>
                <label className='contentText' htmlFor='allergens'>Allergens:</label>
                <p name='allergens'>{e.allergens}</p>
              </div>
            )
          }))
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    getMenuItems()
  }, [])

  return (
    <div className="OrderPage">

      <Nav />

      <div className='menuSectionHolder'>

        <div className='menuSection'>

          <h1>Dinner</h1>

          <div className='menuOptHolder'>
            {displayItems("Dinner")}
          </div>



        </div>

        <div className='menuSection'>

          <h1>Lunch</h1>

          <div className='menuOptHolder'>
            {displayItems("Lunch")}
          </div>


        </div>

        <div className='menuSection'>

          <h1>Appetizers</h1>

          <div className='menuOptHolder'>

            {displayItems("Appetizer")}
          </div>

        </div>

        <div className='menuSection'>

          <h1>Sides</h1>

          <div className='menuOptHolder'>
            {displayItems("Sides")}
          </div>


        </div>

        <div className='menuSection'>

          <h1>Misc</h1>

          <div className='menuOptHolder'>
            {displayItems("Misc")}
          </div>


        </div>

        <button onClick={(e) => displayItems(displayChoice)}>Click Me Bruh</button>

      </div>

    </div>
  );
}

export default OrderPage;
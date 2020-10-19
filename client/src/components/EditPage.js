import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import axios from 'axios';


function EditPage() {

  const [ postType, setPostType ] = useState('');
  const [ displayChoice, setDisplayChoice ] = useState('dinner');


  const [ menuItems, setMenuItems ] = useState({
    
    Dinners: [],
    Lunches: [],
    Appetizers: [],
    Sides: [],
    Desserts: [],
    Misc: []

  });

  const [ dinnerItems, setDinnerItems ] = useState([])
  const [ lunchItems, setLunchItems ] = useState([])
  const [ appetizerItems, setAppetizerItems ] = useState([])
  const [ dessertItems, setDessertItems ] = useState([])
  const [ sidesItems, setSidesItems ] = useState([])
  const [ miscItems, setMiscItems ] = useState([])

  const [ newItem, setNewItem ] = useState({
    
    name: '',
    description: '',
    allergens: '',
    price: ''

  });

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
        case "dinner":
          return(
          dinnerItems.map((e) => {
              return(
                  <div>
                    <p>title: {e.name}</p>
                    <p>description: {e.description}</p>
                  </div>
                )
              }))
          break;
        case "lunch":
          return (
            lunchItems.map((e) => {
              return(
                  <div>
                    <p>{e.name}</p>
                  </div>
                )
              })
          )
          break;
        case "appetizer":
          return (
            appetizerItems.map((e) => {
              return(
                  <div>
                    <p>{e.name}</p>
                  </div>
                )
              })
          )
          break;
        case 'dessert':
          return (
            dessertItems.map((e) => {
              return(
                  <div>
                    <p>{e.name}</p>
                  </div>
                )
              })
          )
          break;
        case 'sides':
          return (
            sidesItems.map((e) => {
              return(
                  <div>
                    <p>{e.name}</p>
                  </div>
                )
              })
          )
          break;
        case 'misc':
          return (
            miscItems.map((e) => {
              return(
                  <div>
                    <p>{e.name}</p>
                  </div>
                )
              })
          )
          break;
        default:
          break;
      }
  };

  const postItem = (x) => {
    switch (x) {
      case "dinner":

        axios.post("/api/dinnerPost", newItem).then(res => {
          console.log(res)
      });

        break;
      case "lunch":

        axios.post("/api/lunchPost", newItem).then(res => {
          console.log(res)
      });

        break;
      case "appetizer":

        axios.post("/api/appetizerPost", newItem).then(res => {
          console.log(res)
      });
      
        break;

      case 'dessert':

        axios.post("/api/dessertPost", newItem).then(res => {
          console.log(res)
      });
      
        break;
      case 'sides':

        axios.post("/api/sidesPost", newItem).then(res => {
          console.log(res)
      });
      
        break;
      case 'misc':

        axios.post("/api/miscPost", newItem).then(res => {
          console.log(res)
      });
      
        break;
    
      default:
        break;
    }
};

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);

    setNewItem((prevState) => ({
        ...prevState, [name]: value
    })
    )
    console.log(newItem)
};

async function handlePostChange(e) {


  const posttype = await setPostType(e.target.value)


};

  useEffect(() => {
    getMenuItems()
  },[])

  return (
    <div className="EditPage">

      <Nav />

      <div className='DinnerEdit'>

        <form>

          <div className='row'>

            <div className='inputWrapper'>

              <label htmlFor='itemName' className='txtInput'>Select the Menu:</label>

              <select onChange={(e) => handlePostChange(e)} value={postType} name='postType'>
                <option value='dinner'>dinner</option>
                <option value='lunch'>lunch</option>
                <option value='appetizer'>appetizer</option>
                <option value='dessert'>dessert</option>
                <option value='sides'>sides</option>
                <option value='misc'>misc</option>
              </select>

            </div>

            <div className='inputWrapper'>

              <label htmlFor='itemName' className='txtInput'>Item Name:</label>

              <input onChange={(e) => handleInputChange(e)} type="text" name="name" />

            </div>

            <div className='inputWrapper'>

              <label htmlFor='allergenInfo' className='txtInput'>Allergen Info:</label>

              <input onChange={(e) => handleInputChange(e)} type="text" name="allergens" />

            </div>


          </div>

          <div className='row'>

            <div className='inputWrapper'>
              
              <label htmlFor='itemDesc' className='txtInput'>Item Description:</label>

              <textarea onChange={(e) => handleInputChange(e)} type="text" rows='5' name="description" />
            
            </div>

            
            <div className='inputWrapper'>

              <label htmlFor='itemPrice' className='txtInput'>Price:</label>

              <input onChange={(e) => handleInputChange(e)} type="text" name="price" />

            
            </div>

          </div>

          <div className='row'>

            <div className='inputWrapper'>

              <input  onClick={(e) => postItem(postType)}  type="submit" value="Add Dish to Dinner Menu!"/>

            </div>

          </div>

        </form>

        <button  onClick={() => console.log(displayChoice)}  type="submit" value="Add Dish to Dinner Menu!">Add Dish to Dinner Menu!</button>


        <div className='DinnerDisplay'>

          <div className='displayNav'>

            <button onClick={(e) => setDisplayChoice('dinner')} value='dinner'>Dinner Items</button>
            <button onClick={(e) => setDisplayChoice('lunch')} value='lunch'>Lunch Items</button>
            <button onClick={(e) => setDisplayChoice('appetizer')} value='appetizer'>Appetizers</button>
            <button onClick={(e) => setDisplayChoice('dessert')} value='dessert'>Sides</button>
            <button onClick={(e) => setDisplayChoice('sides')} value='sides'>Desserts</button>
            <button onClick={(e) => setDisplayChoice('misc')} value='misc'>Misc</button>

          </div>

         {displayItems(displayChoice)}
        </div>

      </div>

      <div className='LunchEdit'>

      </div>

      <div className='AppetizerEdit'>

      </div>

      <div className='DessertEdit'>

      </div>

      <div className='SidesEdit'>

      </div>

      <div className='MiscEdit'>

      </div>

    </div>
  );
}

export default EditPage;
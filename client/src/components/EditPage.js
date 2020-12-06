import React, { useContext, useEffect, useState } from 'react';
import Nav from './Nav';
import axios from 'axios';



function EditPage() {

  const [ count, setCount ] = useState(0)

  const [postType, setPostType] = useState('');
  const [displayChoice, setDisplayChoice] = useState('Dinner');

  const [dinnerItems, setDinnerItems] = useState([])
  const [lunchItems, setLunchItems] = useState([])
  const [appetizerItems, setAppetizerItems] = useState([])
  const [dessertItems, setDessertItems] = useState([])
  const [sidesItems, setSidesItems] = useState([])
  const [miscItems, setMiscItems] = useState([])

  const [newItem, setNewItem] = useState({

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

  const deleteMenuItem = (e, x) => {
    setDisplayChoice(displayChoice)

    switch (displayChoice) {
      case "Dinner":
        console.log('got this far');
        axios.delete('/api/dinnerDelete' + x).then((res) => {
          let newDinner = dinnerItems.filter((items) => items.id !== x)
          setDinnerItems(newDinner)
          console.log(dinnerItems)
          console.log('deleted')

        })
        break;
      case "Lunch":
        axios.delete('/api/lunchDelete' + x).then((res) => {
          let newItemList = lunchItems.filter((items) => items.id !== x)
          setLunchItems(newItemList)
          console.log(lunchItems)
          console.log('deleted')
        })
        break;
      case "Appetizer":
        axios.delete('/api/appetizerDelete' + x).then((res) => {
          let newItemList = appetizerItems.filter((items) => items.id !== x)
          setAppetizerItems(newItemList)
          console.log(appetizerItems)
          console.log('deleted')
        })
        break;
      case 'Dessert':
        axios.delete('/api/dessertDelete' + x).then((res) => {
          let newItemList = dessertItems.filter((items) => items.id !== x)
          setDessertItems(newItemList)
          console.log(dessertItems)
          console.log('deleted')
        })
        break;
      case 'Sides':
        axios.delete('/api/sidesDelete' + x).then((res) => {
          let newItemList = sidesItems.filter((items) => items.id !== x)
          setSidesItems(newItemList)
          console.log(sidesItems)
          console.log('deleted')
        })
        break;
      case 'Misc':
        axios.delete('/api/miscDelete' + x).then((res) => {
          let newItemList = miscItems.filter((items) => items.id !== x)
          setLunchItems(newItemList)
          console.log(miscItems)
          console.log('deleted')
        })
        break;
      default:
        break;
    }

  }

  const displayItems = (x) => {
    switch (x) {
      case "Dinner":
        return (
          dinnerItems.map((e) => {
            return (
              <div className='itemContainer'>
                <button onClick={(x) => deleteMenuItem(x, e.id)}>delete</button>
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
              <div className='itemContainer'>
                <button onClick={(x) => deleteMenuItem(x,e.id)}>delete</button>
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
              <div className='itemContainer'>
                <button onClick={(x) => deleteMenuItem(x, e.id)}>delete</button>
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
              <div className='itemContainer'>
                <button onClick={(x) => deleteMenuItem(x, e.id)}>delete</button>
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
              <div className='itemContainer'>
                <button onClick={(x) => deleteMenuItem(x, e.id)}>delete</button>
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
              <div className='itemContainer'>
                
                <label className='contentText' htmlFor='title'>Title:</label>
                <p name='title'>{e.name}</p>
                <label className='contentText' htmlFor='price'>Price:</label>
                <p name='price'>{e.price}</p>
                <label className='contentText' htmlFor='description'>Description:</label>
                <p name='description'>{e.description}</p>
                <label className='contentText' htmlFor='allergens'>Allergens:</label>
                <p name='allergens'>{e.allergens}</p>
                <button onClick={(x) => deleteMenuItem(x, e.id)}>delete</button>

              </div>
            )
          }))
        break;
      default:
        break;
    }
  };

  const postItem = (e,x) => {
    e.preventDefault()

    switch (x) {
      case "Dinner":
        setDinnerItems([])
        axios.post("/api/dinnerPost", newItem).then(res => {
          getMenuItems()

        });

        break;
      case "Lunch":
        setLunchItems([]);
        axios.post("/api/lunchPost", newItem).then(res => {
          getMenuItems()

        });

        break;
      case "Appetizer":
        setAppetizerItems([]);
        axios.post("/api/appetizerPost", newItem).then(res => {
          getMenuItems()

        });

        break;

      case 'Dessert':
        setDessertItems([])
        axios.post("/api/dessertPost", newItem).then(res => {
          getMenuItems()

        });

        break;
      case 'Sides':
        setSidesItems([])
        axios.post("/api/sidesPost", newItem).then(res => {
          getMenuItems()
          console.log(res)
        });

        break;
      case 'Misc':
        setMiscItems([])
        axios.post("/api/miscPost", newItem).then(res => {
          getMenuItems()
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
  }, [])

  return (
    <div className="EditPage">

      <Nav />

      <div className='MenuEdit'>

        <div className='titleAndInstructions contentText'>

          <h1>Edit Your Menus</h1>

          <p>Select which menu section you'd like to edit</p>

        </div>

        <div className='displayNav'>

          <button onClick={(e) => setDisplayChoice('Dinner')} value='Dinner'>Dinner Items</button>
          <button onClick={(e) => setDisplayChoice('Lunch')} value='Lunch'>Lunch Items</button>
          <button onClick={(e) => setDisplayChoice('Appetizer')} value='Appetizer'>Appetizers</button>
          <button onClick={(e) => setDisplayChoice('Dessert')} value='Dessert'>Sides</button>
          <button onClick={(e) => setDisplayChoice('Sides')} value='Sides'>Desserts</button>
          <button onClick={(e) => setDisplayChoice('Misc')} value='Misc'>Misc</button>

        </div>

        <form className='contentText'>

          <div className='inputWrapper'>

          <label htmlFor='itemName' className='txtInput'>Selected Menu: {displayChoice}</label>

          </div>

          <div className='inputWrapper'>

            <label htmlFor='itemName' className='txtInput'>Item Name:</label>

            <input onChange={(e) => handleInputChange(e)} type="text" name="name" />

          </div>

          <div className='inputWrapper'>

            <label htmlFor='allergenInfo' className='txtInput'>Allergen Info:</label>

            <input onChange={(e) => handleInputChange(e)} type="text" name="allergens" />

          </div>

          <div className='inputWrapper'>

            <label htmlFor='itemDesc' className='txtInput'>Item Description:</label>

            <textarea onChange={(e) => handleInputChange(e)} type="text" rows='5' name="description" />

          </div>

          <div className='inputWrapper'>

            <label htmlFor='itemPrice' className='txtInput'>Price:</label>

            <input onChange={(e) => handleInputChange(e)} type="text" name="price" />

          </div>

          <div className='inputWrapper'>

            <input onClick={(e) => postItem(e,displayChoice)} type="submit" value="Add Dish to Dinner Menu!" />

          </div>

        </form>


        <button onClick={() => console.log('hello')} type="submit" value="Add Dish to Dinner Menu!">Add Dish to Dinner Menu!</button>


        <div className='MenuDisplay'>

          <div className='itemDisplay'>

            {displayItems(displayChoice)}

          </div>

        </div>

      </div>

    </div>
  );
}

export default EditPage;
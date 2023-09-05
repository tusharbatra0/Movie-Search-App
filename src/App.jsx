import { useState , useEffect } from 'react'
import './App.css'
import Products from './Products'

function App() {
  const [inputValue, setinputValue] = useState("")
  const[ product , setProduct] = useState([])
  const [filteredProducts, setFilterProducts] = useState([]);

  // handlechange
function handleChange(e){
 return setinputValue(e.target.value)
}


// Fetch API
const fetchProducts = async (URL) => {
  
    const res = await fetch(URL);
    const data = await res.json();
    
    setProduct(data.data);
    setFilterProducts(data.data)
    console.log(data.data);
};

useEffect(() => {
  fetchProducts("https://api.storerestapi.com/products");
}, []);



// Search
function Search(){
const searchedArray = product.filter((item)=>{
 
  if(item.title.toLowerCase().includes(inputValue.toLowerCase())){
    return item
  }

}) 
setFilterProducts(searchedArray)
console.log(searchedArray)
}
  return (
    <>
    <div className='main-container'>
      <div>
        <input 
        value={inputValue}
        type="text"
        placeholder='Enter Your Movie'
        onChange={handleChange}
        />
        <button
         onClick={()=> Search()}
         className='button'>Search</button>
      </div>
 
<div className='products-container'>
  {filteredProducts.map((item)=>{
    return < Products 
    key={item._id}
    title={item.title}
    price={item.price}
    />
  })}
 
 </div>
 </div>
</>
  )
}

export default App

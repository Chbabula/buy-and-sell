import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  const [products, setProducts] = React.useState([]);

  const[searchproducts, setSearchProducts]=React.useState([]);

  React.useEffect(() => {
    fetch('https://babulal-buy-and-sell-project-default-rtdb.asia-southeast1.firebasedatabase.app/item-list.json')
    .then(response => response.json())
    .then(data => {
      let productList = [];
  
      for (let dataItem in data) {
        productList.push({...data[dataItem], productId: dataItem})
      }
      productList.reverse();
      setProducts(productList)
    })
  }, [])


  const handleSearch=(e)=>{
    setSearchProducts(
      products.filter(
        product=>product.itemTitle.toLowerCase().includes(e.target.value.toLowerCase())
      )
    )
  }
  return (
    <>
   <div className="product-search-container">
    <input type="text"
    onChange={handleSearch}
    placeholder='search products...'
    />
   </div>
   <div className="product-list-container">
    {
      products.length > 0 && searchproducts.length == 0 && products.map(product=><ProductCard {...product}/>
      )
    }
    {

    searchproducts.length > 0 && (searchproducts.map (product=> <ProductCard {...product}/>
    )
    )
    }
   </div>
    </>
  )
}



function ProductCard({authorContact, authorName, itemDate, itemDesc, itemImg, itemPrice, itemTitle, productId}) {
  return (
    <Link to={'/productdetails/' + productId}>
      <div className='product-card'>
        <div className="product-img">
          <img src={itemImg} alt="" />
        </div>
        <div className="product-body">
          <h2>₹ {itemPrice}</h2>
          <h4>{itemTitle.length> 25 ? itemTitle.slice(0,25)+'...': itemTitle}</h4>
          <p>{itemDate}</p>
        </div>
      </div>
    </Link>
  )
}

export default Home
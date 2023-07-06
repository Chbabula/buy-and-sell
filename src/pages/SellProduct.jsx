import React from 'react'


function SellProduct() {
    const title = React.useRef()
    const desc = React.useRef()
    const price = React.useRef()
    const img = React.useRef()
    const place = React.useRef()
    const name = React.useRef()
    const contact = React.useRef()

    const handleSubmit=(e)=>{
      e.preventDefault()
      if(title.current.value.length <20 || title.current.value.length > 150){
        alert (' title length should be greater then 20 and less then 150 character')
      }
      if (price.current.value.length  <0 || price.current.value.length > 6){
        alert('price range should be greater then 10 rupess and less then 100000 rupess')
      }
      if (contact.current.value.length  <10){
        alert('Enter your Phone Number correct')
      }
      title.current.value='';
      price.current.value='';
      contact.current.value='';

    }


  return (
    <div className="sell-product-container">
      <form onSubmit={handleSubmit} className='sell-product-form'>
        <input type="text"  placeholder='Title' ref={title}/>
        <input type="text"  placeholder='Description' ref={desc}/>
        <input type="number"  placeholder='Price' ref={price}/>
        <input type="text"  placeholder='Product Image Link' ref={img}/>
        <input type="text"  placeholder='Place' ref={place}/>
        <input type="text"  placeholder='Name' ref={name}/>
        <input type="number"  placeholder='Phone No.' ref={contact}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SellProduct
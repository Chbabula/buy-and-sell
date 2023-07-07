import React from 'react'


function SellProduct() {
    const title = React.useRef()
    const desc = React.useRef()
    const price = React.useRef()
    const img = React.useRef()
    const place = React.useRef()
    const name = React.useRef()
    const contact = React.useRef()

    const handleSubmit= async(e)=>{
      e.preventDefault()
      if(title.current.value.length <5 || title.current.value.length > 150){
        alert (' title length should be greater then 20 and less then 150 character')
        return;
      }
      if(desc.current.value.length < 20 || desc.current.value.length >5000){
        alert('description length should be greater than equals to 20 and less than equals to 5000 characters')
        return;
      }
      if (price.current.value.length  <=0){
        alert('price should be greater than 0')
        return;
      }
      if(place.current.value.length <3 || place.current.value.length >100){
        alert('place length should be greater than equals to 3 characters and less than equals to 100 characters')
        return;
      }
      if(name.current.value.length <2 || name.current.value.length >50){
        alert('name length should be grater than equals to 2 and less than equals to 50 characters')
        return;
      }
      if (contact.current.value  >1000000000000){
        alert('enter a valid contact number')
        return;
      }
      const reqObj={
        authorContact: contact.current.value,
        authorName: name.current.value,
        itemDate: new Date().toLocaleDateString(),
        itemDesc: desc.current.value,
        itemImg: img.current.value,
        itemPlace: place.current.value,
        itemPrice: price.current.value,
        itemTitle: title.current.value
    }







      const response=await
      fetch('https://babulal-buy-and-sell-project-default-rtdb.asia-southeast1.firebasedatabase.app/item-list.json',{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          authorContact:contact.current.value,
          authorName: name.current.value,
         itemDate: new Date().toLocaleDateString(),
         itemDesc: desc.current.value,
         itemImg: img.current.value,
         itemImg: img.current.value,
         itemPlace: place.current.value,
         itemPrice: price.current.value,
         itemTitle: title.current.value
        }),
      })
      .then(res=>alert("Item added for Ad"))








      title.current.value='';
      price.current.value='';
      contact.current.value='';
      name.current.value='';
      place.current.value='';
      desc.current.value='';

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
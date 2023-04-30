import React, { useState } from 'react'

function MyForm(){

    const[data,setData]=useState({
        "id": "",
      "name": "",
      "health": "",
      "damage": "",
      "armor": "",
      "bot_class": "",
      "catchphrase": "",
      "avatar_url": "",
      "created_at": "",
      "updated_at": ""
    })

    function handleSubmit(e) {
        e.preventDefault();
        const NewData={...data}
        NewData[e.target.id]=e.target.value
        setData(NewData)
        console.log (NewData)
      }
      fetch("http://localhost:4000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((r) => r.json())
    .then((data) => console.log(data));



  return (
    <div className='transform'>
        <form>
        <h2>INPUT bot</h2>

        {/* <input type = "ID" placeholder ="ID"/> */}
        

<button type='button'onClick={handleSubmit}>submit</button>
      </form>
    </div>
  )
}

export default MyForm;
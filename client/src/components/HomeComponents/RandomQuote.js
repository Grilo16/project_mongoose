import React, {useState, useEffect} from 'react'





function RandomQuote() {


const [randomAPIquote, setRandomAPIquote] = useState({})

useEffect(() => {
    getQuote();
},[])

  const url = 'https://api.quotable.io/random'



  let getQuote = () => {
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        console.log(item)
        setRandomAPIquote(item.content)
    
            
    
      })
            
    }


  return (
    <>
    
      <div class='display'>
        <p id='quote'>
            {randomAPIquote}
        </p>

        <h3 id='author'></h3>
        <button id='btn' onClick= {getQuote}>Button</button>
      </div>
    </>
  )
}

export default RandomQuote

import React from 'react'

function RandomQuote() {
  let quote = document.getElementById('quote')
  let author = document.getElementById('author')
  let btn = document.getElementById('btn')

  const url = 'https://api.quotable.io/random'

  let getQuote = () => {
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        quote.innerText = item.content
        author.innerText = item.author
      })
  }
  window.addEventListener('load', getQuote)
  btn.addEventListener('click', getQuote)

  return (
    <>
      <div class='display'>
        <p id='quote'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas,
        </p>

        <h3 id='author'>Lorem, ipsum.</h3>
        <button id='btn'>Get Quote</button>
      </div>
    </>
  )
}

export default RandomQuote

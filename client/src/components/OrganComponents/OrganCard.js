import React from 'react'
import Popup from 'reactjs-popup'
// import 'reactjs-popup/dist/index.css'

const OrganCard = ({ organ }) => {
  return (
    <>
      <p>{organ.name}</p>
      <p>
        <img src={organ.url} width='150' height='150'></img>
      </p>
     
      <Popup trigger={<button> Teach me!</button>} position='right center'>
        <div>{organ.info}</div>
      </Popup>
    </>
  )
}

export default OrganCard

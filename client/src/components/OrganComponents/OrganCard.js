import React from 'react'
import Popup from 'reactjs-popup'
// import 'reactjs-popup/dist/index.css'

const OrganCard = ({ organ }) => {
  return (
    <div key={organ._id}>
      <Popup trigger={<button className='organ-button'>{organ.name}</button>} position='right center'>
        <div>{organ.info}</div>
      </Popup>
    </div>
  )
}

export default OrganCard

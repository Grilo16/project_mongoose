const OrganCard = ({ organToShow , organ }) => {
  return (
    <>
      
      <p>Name: <a href="Do I need this link here?">{organ.name}</a></p>
      <p><img src={organ.url}width="150" height="150"></img></p>
      <p>info: {organ.info}</p>
      {/* <p>Picture: {organ.url}</p>
      <p>info: {organ.info}</p> */}
    </>
  )
}

export default OrganCard

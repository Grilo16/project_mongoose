import OrganCard from "./OrganCard.js"
import './organ.css'

const OrgansGrid = ({ organs, showOrgan }) => {
    if (!organs) return <h2>Please wait for fresh Organs, thanks!</h2>
  const organsList = organs.map((organ) => {
    return <OrganCard organ={organ} key={organ._id} showOrgan={showOrgan} />
  })

  return (
    <>
      {organsList}
    </>
  )
}
export default OrgansGrid


import OrganCard from "../components/OrganCard"
import OrgansGrid from "../components/OrgansGrid"

const OrganContainer = ({ organs, organToShow, showOrgan }) => {
  return (
    <>
    <h1>Organ Information</h1>
      <OrgansGrid organToShow={organToShow} organs={organs} showOrgan={showOrgan}/>
    </>
  )
}

export default OrganContainer
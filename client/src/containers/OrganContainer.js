
import OrganCard from "../components/OrganComponents/OrganCard"
import OrgansGrid from "../components/OrganComponents/OrgansGrid"

const OrganContainer = ({ organs, organToShow, showOrgan }) => {
  return (
    <>
    <h1>Organ Information</h1>
      <OrgansGrid organToShow={organToShow} organs={organs} showOrgan={showOrgan}/>
    </>
  )
}

export default OrganContainer
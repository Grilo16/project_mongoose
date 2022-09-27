
import OrganCard from "../components/OrganComponents/OrganCard"
import OrgansGrid from "../components/OrganComponents/OrgansGrid"

const OrganContainer = ({ organs, organToShow, showOrgan }) => {
  return (
    <>
    <div className='organcontainer'>
    <h2>Let's learn about organs!</h2>
      <OrgansGrid organToShow={organToShow} organs={organs} showOrgan={showOrgan}/>
    </div>
    </>
  )
}

export default OrganContainer
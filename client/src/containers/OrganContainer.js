import { Link } from 'react-router-dom'
import OrganCard from "../components/OrganComponents/OrganCard"
import OrgansGrid from "../components/OrganComponents/OrgansGrid"

const OrganContainer = ({ organs, organToShow, showOrgan }) => {
  return (
    <>
    <div className='organcontainer'>
    <h2>Hover Over the Body to Learn More!</h2>
      <OrgansGrid organToShow={organToShow} organs={organs} showOrgan={showOrgan}/>
    </div>
    <div className='linktoorganquiz'>Now take the <Link to="/quizzes">organ quiz >>> </Link></div>
    </>
  )
}

export default OrganContainer
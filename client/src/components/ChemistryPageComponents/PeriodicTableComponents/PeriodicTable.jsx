import "./PeriodicTable.css"
import Element from "./Element";




  const PeriodicTable = ({elements})=>{

    const tableWidth = 800 


    const PeriodicTable = elements.map((elementData)=>{
      return (
            <Element tableWidth={tableWidth} elementData={elementData}/>
      )
    })
    return (
      <div style={{"height":tableWidth/+"px", "width": tableWidth+"px"}} className="periodic-table">
        {PeriodicTable}
      </div>
    )
  };

  export default PeriodicTable
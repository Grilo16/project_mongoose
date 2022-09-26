import "./PeriodicTable.css"


import PeriodicElement from "./Element";

  const PeriodicTable = ({elements})=>{
    const PeriodicTable = elements.map((elementData)=>{
      return (
            <PeriodicElement elementData={elementData}/>
      )
    })
    return (
      <div className="periodic-table">
        {PeriodicTable}
      </div>
    )
  };

  export default PeriodicTable
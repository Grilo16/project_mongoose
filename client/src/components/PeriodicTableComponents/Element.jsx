const PeriodicElement = ({elementData}) => {
    const elementGroup = elementData.groupBlock.replace(" ", "-").replace(" ", "-")
    return (
      <div className={elementGroup + " periodic-element"}>
        <div className ="atomic-weight">

        <p className="atomic-number">{elementData.atomicNumber}</p>
        <p className="atomic-mass">{parseFloat(elementData.atomicMass).toFixed(3)}</p>
        </div>

        <p className="element-symbol">{elementData.symbol}</p>
        <p className="element-name">{elementData.name}</p>
      </div>
    )
  };


  export default PeriodicElement
import { useState } from "react";
import "./Element.css"


const Element = ({elementData, tableWidth}) => {
    
  

  const elementSize = tableWidth/19.8
  const roundBorderSize = elementSize/20
  const atomicWeights = elementSize/9
  const elementSymbol = elementSize/3.35
  const elementName = elementSize/9

  const elementGroup = elementData.groupBlock
                        .replace(" ", "-").replace(" ", "-")



    return (
      <>
      <div style={{"height":elementSize+"px", "width": elementSize+"px", "border-radius": roundBorderSize+"px"}} className={elementGroup + " periodic-element"}>
        <div className ="atomic-weight">
        <p style={{"font-size": atomicWeights+"pt"}} className="atomic-number">{elementData.atomicNumber}</p>
        <p style={{"font-size": atomicWeights+"pt"}} className="atomic-mass">{parseFloat(elementData.atomicMass).toFixed(3)}</p>
        </div>
        <p style={{"font-size": elementSymbol+"pt"}} className="element-symbol">{elementData.symbol}</p>
        <p style={{"font-size": elementName+"pt"}} className="element-name">{elementData.name}</p>
      </div>




      </>
    )
  };


  export default Element
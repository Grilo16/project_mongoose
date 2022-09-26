import Element from "../components/ChemistryPageComponents/PeriodicTableComponents/Element";
import PeriodicTable from "../components/ChemistryPageComponents/PeriodicTableComponents/PeriodicTable";
import elements from "../components/ChemistryPageComponents/PeriodicTableComponents/PeriodicTableData"

const ChemistryPageContainer = ()=>{
  

    const elementData =     {
        "atomicNumber": 1,
        "symbol": "H",
        "name": "Hydrogen",
        "atomicMass": "1.00794(4)",
        "electronicConfiguration": "1s1",
        "electronegativity": 2.2,
        "atomicRadius": 37,
        "ionRadius": "unknown",
        "vanDerWaalsRadius": 120,
        "ionizationEnergy": 1312,
        "electronAffinity": -73,
        "oxidationStates": "-1, 1",
        "standardState": "gas",
        "bondingType": "diatomic",
        "meltingPoint": 14,
        "boilingPoint": 20,
        "density": 0.0000899,
        "groupBlock": "nonmetal",
        "yearDiscovered": 1766,
        "block": "s",
        "cpkHexColor": "FFFFFF",
        "period": 1,
        "group": 1
        }

    return (
        <>
            <h1>Chemistry page to be</h1>
            {/* <Element elementData={elementData}/> */}
            <PeriodicTable elements={elements}/>
        </>

    )
};

export default ChemistryPageContainer
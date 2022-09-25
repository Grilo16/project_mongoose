import React from 'react'
import PeriodicTable from '../PeriodicTableComponents/PeriodicTable'
import elements from "../PeriodicTableComponents/PeriodicTableData"


const Home = () => {

    return (
        <>
        <h1>Home</h1>
        <PeriodicTable elements={elements} />
        </>
    )
}

export default Home
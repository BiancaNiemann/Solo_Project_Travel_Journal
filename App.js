import React from "react"
import NavBar from "./Components/NavBar"
import Main from "./Components/Main"
import data from "./data"

export default function App(){
    const desinationCard = data.map(place => {
        return(
            <Main
                key={place.id}
                place={place}
            />
        )
    })
    
    return(
        <div>
            <NavBar />
            {desinationCard}
        </div>
    )
}

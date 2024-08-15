import React from "react";
import { Link } from "react-router-dom";


function ColorList ({colors}) {

    return (
        <div>
            <h1>Welcome to the Color Factory</h1>
            <h2><Link to={`/colors/new`}>Add a Color</Link></h2>
            <h3>PLease Select a Color</h3>
            {<ul>
                {colors.length !== 0 ? 
                colors.map(color => (
                    <li key={color.id}><Link to={`/colors/${color.name}`}>{color.name}</Link></li>
                )) : 
                <h3>No Colors Currently</h3>}
            </ul>}
        </div>
    )
}

export default ColorList;
import React, {useState} from "react";
import { Link } from "react-router-dom";


function ColorList ({newColor}) {
    const [colors, setColors] = useState([]);

    function addColors (color) {
        setColors(colors => [...colors, color]);
    }

    addColors(newColor);

    return (
        <div>
            <h1>Welcome to the Color Factory</h1>
            <h2>Add a Color</h2>
            <h3>PLease Select a Color</h3>
            <ul>
                {colors.map(color => (
                    <li><Link key={color.value} to={`/colors/${color.name.toLowerCase()}`}>{color.name}</Link></li>
                ))}
            </ul>

        </div>
    )
}

export default ColorList;
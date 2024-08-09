import React, {useState, useEffect} from "react";
import { Navigate, Link } from "react-router-dom";


function ColorPage ({color}) {
    useEffect (() => {
        document.body.style.backgroundColor = color;
    }, []);
    
    return (
        <div>
            <h1>This is {color}</h1>
            <h2><Link to='/colors'>Go Back</Link></h2>
        </div>
    )
}

export default ColorPage;
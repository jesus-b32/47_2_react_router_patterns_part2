import React, {useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import './ColorPage.css';


function ColorPage ({colors}) {
    const navigate = useNavigate();
    const color = useParams();
    const colorObj = colors.filter(c => c.name === color.name)[0];

    const notAColor = () => {
        if(!colorObj) navigate("/colors");
        return;
    }

    useEffect(() => {
        notAColor();
    }, []);
    
    return (
        <div>
            {colorObj &&
                <div className='ColorPage' style={{backgroundColor:colorObj.value}}>
                        <h2>This is {colorObj.name}</h2>
                        <button onClick={() => navigate(-1)}>Go Back</button>
                </div>
            }
        </div>
    )
}

export default ColorPage;
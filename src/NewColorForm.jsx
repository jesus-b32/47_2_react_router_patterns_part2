import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';

/** Form for adding a new color to colorList.
 *
 * Story has properties of noun, noun2, adjective and color; 
 * on submission, sends {colorName, colorVal} 
 * to ColorList component to display color when color link is clicked on.
 *
 */
function NewColorForm ({addColor}) {
    const INITIAL_STATE = {
        name: '',
        value: ''
    }

    const navigate = useNavigate();
    /**
     * formDate is an object that holds 
     *  {colorName, colorVal}
     *  */
    const [formData, setFormData] = useState(INITIAL_STATE);

    /** Update local state w/curr state of input elem */
    function handleChange (event) {
        // console.log(formData);
        const { name, value } = event.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    /** Send {colorName, colorVal} to parent
    *    & clear form. */
    function handleSubmit (event) {
        event.preventDefault();
        addColor(colors => {
            const newColorsList = [...colors, {...formData, id:uuid()}]
            const colorsString = JSON.stringify(newColorsList);
            localStorage.setItem("colorsList", colorsString);
            return newColorsList;
        });
        setFormData(INITIAL_STATE);
        navigate('/colors');
    }

    /** render form */
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Color Name: </label>
            <input
                id="name"
                type="text"
                name="name"
                placeholder="color name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <label htmlFor="value">Color Value: </label>
            <input
                id="value"
                type="color"
                name="value"
                placeholder="Color Value"
                value={formData.value}
                onChange={handleChange}
                required
            />
            <button>Add this Color</button>
        </form>
    )
}

export default NewColorForm;
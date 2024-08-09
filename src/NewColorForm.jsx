import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/** Form for adding a new color to colorList.
 *
 * Story has properties of noun, noun2, adjective and color; 
 * on submission, sends {colorName, colorVal} 
 * to ColorList component to display color when color link is clicked on.
 *
 */
function NewColorForm ({ addColors }) {
    const INITIAL_STATE = {
        name: '',
        value: ''
    }

    /**
     * formDate is an object that holds 
     *  {colorName, colorVal}
     *  */
    const [formData, setFormData] = useState(INITIAL_STATE);

    /** Update local state w/curr state of input elem */
    function handleChange (event) {
        const { name, value } = event.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    /** Send {colorName, colorVal} to parent
    *    & clear form. */
    function handleSubmit (event) {
        const navigate = useNavigate()
        event.preventDefault();
        navigate()
        addColors(formData);
        setFormData(INITIAL_STATE);
    }

    /** render form */
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="colorName">Color Name: </label>
            <input
                id="colorName"
                type="text"
                name="colorName"
                placeholder="color name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <label htmlFor="colorVal">Color Value: </label>
            <input
                id="colorVal"
                type="color"
                name="colorVal"
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
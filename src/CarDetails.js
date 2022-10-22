
import { useRef, useState } from "react"


export function CarDetails({ initialData }) {

    const modelRef = useRef()
    const yearRef = useRef()
    const colorRef = useRef()

    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [color, setColor] = useState('')


    function handleModel() {
        setModel(modelRef.current.value)
    }

    function handleYear() {
        setYear(yearRef.current.value)
    }

    function handleColor() {
        setColor(colorRef.current.value)
    }


    function handleForm(event) {

        event.preventDefault()
        modelRef.current.value = initialData.model;
        yearRef.current.value = initialData.year;
        colorRef.current.value = initialData.color;
       
    }


    return (
            
        <div>
            <form onSubmit={handleForm}>

                <label>Model:</label>
                <input model="model" defaultValue={initialData.model} ref={modelRef} onChange={handleModel} /> 
                <label>Year:</label>
                <input color="color" defaultValue={initialData.year} ref={yearRef} onChange={handleYear} /> 
                <label>Color:</label>
                <input color="color" defaultValue={initialData.color} ref={colorRef} onChange={handleColor} /> 
                <button type="submit">Reset</button>
           
             </form>
        </div>
        
    )
}
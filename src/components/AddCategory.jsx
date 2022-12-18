import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

const [inputValue, setinputValue] = useState('')

const onInputChange = ({ target }) => {
    setinputValue (target.value);
}

const onSubmit = (event) => { 
    event.preventDefault();
    if (inputValue.trim().length <=1) return; // para que no admita ( Espacios o menos de 1 caracter)
    // setcategories( categories => [ inputValue, ...categories ]);
    
    onNewCategory(inputValue.trim());
    setinputValue(''); // para que al momento de oprimir enter se vuelta el input a strim vacio
}

    return (
        <form onSubmit={onSubmit} >
            <input
                type="text" 
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
                />
        </form>
    )
}

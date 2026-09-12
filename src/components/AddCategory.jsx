import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

  const [inpuntValue, setInpuntValue] = useState("");

  const onInputChange = ({target}) => {
    //console.log(event.target.value);
    setInpuntValue(target.value);
  }

  const onSubmit = (event) => {
     event.preventDefault();

     const clearInputValue = inpuntValue.trim();
     if(clearInputValue.length <= 1) return;

     //addNewCategory((categories) => [inpuntValue, ...categories]);
     onNewCategory(clearInputValue);
     setInpuntValue("");
  }
    
  return (
    <form onSubmit={ (event) => onSubmit (event) }>
        
        <input 
            type="text"
            placeholder="Buscar Gifs"  
            value={ inpuntValue } 
            onChange={ onInputChange }
        />

    </form>
  )

}

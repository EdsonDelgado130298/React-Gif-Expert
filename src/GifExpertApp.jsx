import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(["One Piece"])

  const onAddCategory = ( newCategory ) => {
      if(categories.includes(newCategory)) return;
      //console.log(newCategory);
      //categories.push(newCategory)
      setCategories([newCategory, ...categories])
  }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 

            onNewCategory = { (newCategory) => onAddCategory(newCategory)}
        
        />

        {
          categories.map( category => 
            (
                <GifGrid
                  key = {category}
                  category = {category} 
                />
            ))
        }
    </>
  )

}


import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

const [categories, setcategories] = useState(['One Punch'])

const onAddCategory = (newCategory) => {
if (categories.includes(newCategory)) return; // si categories incluye newCategories no haga nada
  setcategories ([ newCategory, ...categories ])
  // setcategories ( [...categories, newCategory] )  // Operador Express
  // setcategories (cat => [...cat, 'Vegueta']); // Llamando al Call Back
  // setcategories(currentCategories => currentCategories.concat('Manzana'))
  // setcategories(categories.concat('Vegueta'))
  
  // Todas las opciones son validas

}

  return (
      <>
          <h1>GifExpertApp</h1>
    
          <AddCategory 
              onNewCategory = {onAddCategory}
          />

        { 
        categories.map( (category) => (
              <GifGrid 
                key={ category }
                category={ category }
              />
          ))
        }
      </>
  )
}


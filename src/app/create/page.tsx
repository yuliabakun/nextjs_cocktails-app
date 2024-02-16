'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './page.module.scss';

export default function AddCocktailForm() {
  const [cocktailData, setCocktailData] = useState({
    name: '',
    drinkThumb: '',
    categoryId: 0,
    iba: '',
    alcoholic: '',
    glass: '',
    instructions: '',
    ingredients: [{ id: 1, name: '', measurement: '' }],
    authorId: '1',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCocktailData({ ...cocktailData, [name]: value });
  };

  const handleIngredientChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const { name, value } = e.target;
  
    const updatedIngredients = cocktailData.ingredients.map((ingredient) =>
      ingredient.id === id ? { ...ingredient, [name]: value } : ingredient
    );
    setCocktailData({ ...cocktailData, ingredients: updatedIngredients });
  };

  const handleAddIngredientField = () => {
    const newId = cocktailData.ingredients.length + 1;
    setCocktailData({
      ...cocktailData,
      ingredients: [...cocktailData.ingredients, { id: newId, name: '', measurement: '' }]
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/cocktail/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cocktailData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Cocktail data:', data);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch {
      console.error('Error sending form');
    }
  };  

  return (
    <form onSubmit={handleSubmit} className={styles.addform}>
      <label>
        Name:
        <input type="text" name="name" value={cocktailData.name} onChange={handleInputChange} />
      </label>

      <label>
        Drink Thumb:
        <input type="text" name="drinkThumb" value={cocktailData.drinkThumb} onChange={handleInputChange} />
      </label>

      <label>
        Iba Classification:
        <select name="iba" value={cocktailData.iba} onChange={handleInputChange}>
          <option value="">Select</option>
          <option value="Unforgettables">Unforgettables</option>
          <option value="New Era Drinks">New Era Drinks</option>
          <option value="Contemporary Classics">Contemporary Classics</option>
        </select>
      </label>

      <label>
        Category:
        <select name="categoryId" value={cocktailData.categoryId} onChange={handleInputChange}>
          <option value={0}>Select</option>
          <option value={2}>{2}</option>
          <option value={5}>{5}</option>
          <option value={6}>{6}</option>
        </select>
      </label>

      <label>
        Alcoholic:
        <select name="alcoholic" value={cocktailData.alcoholic} onChange={handleInputChange}>
          <option value="">Select</option>
          <option value="Alcoholic">Alcoholic</option>
          <option value="Alcoholic">Optional Alcohol</option>
          <option value="Non-Alcoholic">Non-Alcoholic</option>
        </select>
      </label>

      <label>
        Glass:
        <select name="glass" value={cocktailData.glass} onChange={handleInputChange}>
          <option value="">Select</option>
          <option value="Highball Glass">Highball Glass</option>
          <option value="Martini Glass">Martini Glass</option>
          <option value="Cocktail Glass">Cocktail Glass</option>
        </select>
      </label>

      <label>
        Instructions:
        <textarea name="instructions" value={cocktailData.instructions} onChange={handleInputChange} />
      </label>

      <label>
        Ingredients:
        {cocktailData.ingredients.map((ingredient) => (
          <div key={ingredient.id}>
            <input
              type="text"
              name="name"
              value={ingredient.name}
              placeholder="Ingredient"
              onChange={(e) => handleIngredientChange(e, ingredient.id)}
            />
            <input
              type="text"
              name="measurement"
              value={ingredient.measurement}
              placeholder="Measurement"
              onChange={(e) => handleIngredientChange(e, ingredient.id)}
            />
          </div>
        ))}
        <button type="button" onClick={handleAddIngredientField}>+</button>
      </label>

      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

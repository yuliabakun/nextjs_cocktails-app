import styles from './styles.module.scss';
import Catalog from './Catalog';
import Searchbar from './Searchbar';

const getCategoriesData = async (apiPath: string) => {
  const response = await fetch(apiPath, { cache: 'force-cache' });

  if (!response.ok) {
    throw new Error('Error fetching categories');
  }

  const data = await response.json();

  return data.allCategories;
};

const getIngredientsData = async (apiPath: string) => {
  const response = await fetch(apiPath, { next: { revalidate: 3600 } });

  if (!response.ok) {
    throw new Error('Error fetching ingredients');
  }

  const data = await response.json();

  return data.allIngredients;
}

export default async function Cocktails() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const categories = await getCategoriesData(`${apiBaseUrl}/api/category`);
  const ingredients = await getIngredientsData(`${apiBaseUrl}/api/ingredient`);

  return (
    <main className={styles.cocktailsPage}>
      <Searchbar
        categories={categories}
        ingredients={ingredients}
      />

      <Catalog />
    </main>
  );
};

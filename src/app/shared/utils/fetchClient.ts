export const fetchWithParams = async (param: string, value: string) => {
  const response = await fetch(`/api/cocktail?${param}=${value}`);

  return response.json();
};

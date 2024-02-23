import { RegisterUser } from '../types/RegisterUserData';

export const fetchWithParams = async (param: string, value: string) => {
  const response = await fetch(`/api/cocktail?${param}=${value}`);

  return response.json();
};

export const createUser = async (newUser: RegisterUser) => {
  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error('Failed to create user');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
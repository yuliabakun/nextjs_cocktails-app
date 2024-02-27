'use client';
import { ChangeEvent, FormEvent, useState } from "react";
import { createUser } from '../shared/utils/fetchClient';
import { signOut } from 'next-auth/react';

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    repeatPassword: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const newUser = {
        email: formData.email,
        name: formData.name,
        password: formData.password,
      }

      const data = await createUser(newUser);

      console.log(data);
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Error creating user. Please try again.');
    }
  };

  return (
    <main>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div>
          <label htmlFor="email_register">Email</label>
          <input
            type="email"
            name="email"
            autoComplete='email'
            id="email_register"
            placeholder="example@mail.com"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="name_register">Username</label>
          <input
            type="text"
            name="name"
            autoComplete='username'
            id="name_register"
            placeholder="your username"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="pass_register">Password</label>
          <input
            type="password"
            autoComplete='new-password'
            name="password"
            id="pass_register"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="repeatpass_register">Repeat Password</label>
          <input
            type="password"
            autoComplete='new-password'
            name="repeatPassword"
            id="repeatpass_register"
            required
            onChange={handleChange}
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </main>
  );
}
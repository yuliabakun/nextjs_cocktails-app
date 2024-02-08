'use client';
import { ChangeEvent, useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    repeatPassword: ""
  });

  console.log(formData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@mail.com"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="your name"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="repeatPassword">Repeat Password</label>
          <input
            type="password"
            name="repeatPassword"
            required
            onChange={handleChange}
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </main>
  );
}
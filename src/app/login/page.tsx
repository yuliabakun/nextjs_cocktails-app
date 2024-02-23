"use client";
import { signIn } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { LoginPageProps } from '../shared/types/PropTypes';

type LoginInput = {
  username: string;
  password: string;
}

export default function LoginPage({ searchParams }: LoginPageProps) {
  const [inputs, setInputs] = useState<LoginInput>({ username: "", password: "" });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await signIn("credentials", {
      username: inputs.username,
      password: inputs.password,
      callbackUrl: '/'
    });
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          autoComplete="off"
          required
          value={inputs.username || ""}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="off"
          required
          value={inputs.password || ""}
          onChange={handleChange}
        />

        <button type="submit">Sign in</button>

        {searchParams.error && (
          <p className="text-red-600 text-center capitalize">
            Login failed.
          </p>
        )}
      </form>
    </main>
  );
}

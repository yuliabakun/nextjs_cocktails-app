export default function Login() {
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
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
          />
        </div>

        <button type="submit">Sign In</button>
      </form>
    </main>
  );
}

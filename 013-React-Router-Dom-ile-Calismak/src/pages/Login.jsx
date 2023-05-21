export default function Login({ handleLogin }) {
  return (
    <>
      <h1>Login</h1>
      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Giris Yap..
      </button>
    </>
  )
}
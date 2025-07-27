 import { useLogin } from "../context/login-context";
import { userlogin } from "../api/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { loginDispatch, email, password } = useLogin();
  const navigate = useNavigate();

  const onFormSubmit = async (e) => {
  e.preventDefault();

  const data = await userlogin(email, password); 

  if (Object.keys(data)?.length > 0) {
    localStorage.setItem("token", data.access_token);
    loginDispatch({
      type: "TOKEN",
      payload: {
        token: data
      },
    });

    if (data.access_token) {
      navigate("/");
    }
  } else {
    alert("Invalid credentials");
  }
};

  const onEmailChange = (e) => {
    loginDispatch({
      type: "EMAIL",
      payload: {
        value: e.target.value,
      },
    });
  };

  const onPasswordChange = (e) => {
    loginDispatch({
      type: "PASSWORD",
      payload: {
        value: e.target.value,
      },
    });
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className="flex flex-col gap-4 p-4 max-w-md mx-auto"
    >
      <div>
        <label className="block mb-1">Email</label>
        <input
          onChange={onEmailChange}
          value={email}
          type="email"
          required
          placeholder="prakash@gmail.com"
          className="border px-2 py-1 w-full rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Password</label>
        <input
          onChange={onPasswordChange}
          value={password}
          type="password"
          required
          placeholder="prakas1234"
          className="border px-2 py-1 w-full rounded"
        />
      </div>

      <div>
        <button
          type="submit"
          className="button btn-primary btn-icon login-btn d-flex align-center justify-center cursor btn-margin"
        >
          Login
        </button>
      </div>
    </form>
  );
};

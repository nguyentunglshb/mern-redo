import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layout/AlertMessage";

function LoginForm() {
  // Context
  const { loginUser } = useContext(AuthContext);

  // Local state
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const [alert, setAlert] = useState(null);

  // Router
  const history = useHistory();

  const { username, password } = loginForm;

  const onChangeLoginForm = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    e.preventDefault();

    try {
      const loginData = await loginUser(loginForm);
      console.log(loginData);
      if (loginData.success) {
        // history.push('/dashboard')
      } else {
        setAlert({ type: "danger", message: loginData.message });
        setTimeout(() => setAlert(null), 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form className="my-4" onSubmit={login}>
        <AlertMessage info={alert} />
        <Form.Group className="my-4">
          <Form.Control
            type="text"
            placeholder="username"
            name="username"
            required
            value={username}
            onChange={onChangeLoginForm}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="password"
            name="password"
            required
            value={password}
            onChange={onChangeLoginForm}
          />
        </Form.Group>
        <Button className="my-4" variant="success" type="submit">
          Login
        </Button>
      </Form>
      <p>
        Dont have an account?
        <Link to="/register">
          <Button variant="info" size="sm" className="ml-2">
            Register
          </Button>
        </Link>
      </p>
    </>
  );
}

export default LoginForm;

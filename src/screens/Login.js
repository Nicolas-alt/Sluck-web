import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/mainForms.css';
import { AuthContext } from '../auth/AuthProvider';
import CustomHelmet from '../components/CustomHelmet';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({
    email: 'test6@gmail.com',
    password: 'test',
    remember: false,
  });

  useEffect(() => {
    const rememberEmail = localStorage.getItem('emailSluck');
    if (rememberEmail) {
      setForm({
        ...form,
        email: rememberEmail,
        remember: true,
        ok: false,
      });
    }
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleToggleCheck = () => {
    setForm({
      ...form,
      remember: !form.remember,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    form.remember
      ? localStorage.setItem('emailSluck', form.email)
      : localStorage.removeItem('emailSluck');
    const { email, password } = form;
    login(email, password);
    // if (form.password.length < 0 || form.email.length < 0) {
    //}
  };

  return (
    <>
      <CustomHelmet title="Login" />
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-t-50 p-b-90">
            <form
              className="login100-form validate-form flex-sb flex-w"
              onSubmit={onSubmit}
            >
              <span className="login100-form-title mb-3">Chat - Ingreso</span>

              <div className="wrap-input100 validate-input mb-3">
                <input
                  className="input100"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleInputChange}
                />
                <span className="focus-input100"></span>
              </div>

              <div className="wrap-input100 validate-input mb-3">
                <input
                  className="input100"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleInputChange}
                />
                <span className="focus-input100"></span>
              </div>

              <div className="row mb-3">
                <div className="col" onClick={handleToggleCheck}>
                  <input
                    className="input-checkbox100"
                    id="ckb1"
                    type="checkbox"
                    name="remember"
                    checked={form.remember}
                    readOnly
                  />
                  <label className="label-checkbox100">Recordarme</label>
                </div>

                <div className="col text-right">
                  <Link className="txt1" to="/auth/register">
                    Nueva cuenta?
                  </Link>
                </div>
              </div>

              <div className="container-login100-form-btn m-t-17">
                <button className="login100-form-btn" disabled={form.ok}>
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

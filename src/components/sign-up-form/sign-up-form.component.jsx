import { useState } from "react";

import {
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-up-form.styles.scss";

const DefaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(DefaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and confirm password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      setFormFields(DefaultFormFields);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Email in use");
      }
      console.log(err);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={onChangeHandler}
        />

        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={onChangeHandler}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={onChangeHandler}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChangeHandler}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;

import { useState } from "react";

import {
  signInUserWithEmailAndPassword,
  signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";

const DefaultFormFields = {
  email: "",
  password: ""
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(DefaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);

      setFormFields(DefaultFormFields);
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        alert("User not found");
        return;
      }
      if (err.code === "auth/wrong-password") {
        alert("Password is wrong");
        return;
      }
      console.log(err);
    }
  };

  return (
    <SignInContainer>
      <h2>Already have your account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmitHandler}>
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
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogleUser}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;

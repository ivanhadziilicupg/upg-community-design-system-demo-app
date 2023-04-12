import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
  colors,
  Button,
  Icon,
  ThemeProvider,
  Field,
  FieldInline,
  Label,
  TextInput,
  DateInput,
  PasswordInput,
  Checkbox,
  Select,
  EmailInput,
  Radio,
  Switch,
  Title,
  Text,
} from "@ivanhadziilicupg/upg-community-design-system";
import {
  CheckMarkMedium,
  SpinnerMedium,
} from "@ivanhadziilicupg/upg-community-design-system/lib/icons";
import { BackgroundImage } from "./components/BackgroundImage";
import { Header } from "./components/Header";
import { MyIdButton } from "./components/MyIdButton";
import { Footer } from "./components/Footer";

import "./App.scss";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "dark" ? colors.brand1 : colors.neutral_200;
  });

  const color = theme === "dark" && colors.white;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password_confirm: "",
      birth: "",
      // car: { value: 9, label: "Opel" },
      car: null,
      remember: [],
      robot: "",
    },
    onSubmit: (values) => {
      console.log("form submitted");
      // console.log({ values });
      console.log(values);

      setIsSubmitting(true);
      // setInterval  (() => setIsSubmitting(false), 2000);
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = ["This field is required"];
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = ["Please enter a valid email address"];
      }

      if (!values.password) {
        errors.password = ["This field is required"];
      }

      if (!values.password_confirm) {
        errors.password_confirm = ["This field is required"];
      } else if (values.password !== values.password_confirm) {
        errors.password_confirm = [
          "Please enter the same password as above to confirm your password",
        ];
      }

      if (!values.birth) {
        errors.birth = ["This field is required"];
      }

      if (Array.isArray(values.car) ? !values.car.length : !values.car) {
        errors.car = ["This field is required"];
      }

      return errors;
    },
  });

  const { values, errors, touched, handleChange, setFieldValue, handleSubmit } =
    formik;

  return (
    <ThemeProvider theme={theme}>
      <div className={`${theme}-theme`}>
        <BackgroundImage
          color={theme === "dark" ? colors.brand1_900 : colors.neutral_400} // colors.neutral_200 / colors.white ?
        />
        <Header theme={theme} setTheme={setTheme} />
        <main>
          <div className="myid-content-title" style={{ color }}>
            <Title size="XXL" style={{ color }}>
              Create your account
            </Title>
            <Text style={{ color }}>to enter Banqup</Text>
          </div>
          <div className="form-infobox">
            <Title level="2" size="L">
              One account, multiple solutions!
            </Title>
            <Text>
              If you have created <strong>your Banqup account</strong> you are
              also able to log in into multiple Unifiedpost solutions to give
              you the best and fastest experience.
            </Text>
          </div>
          <form onSubmit={handleSubmit}>
            <div
              id="kc-social-providers"
              className=""
              style={{ textAlign: "left" }}
            >
              <Title level="4" size="S">
                Create an account with a digital ID
              </Title>
              <MyIdButton onClick={() => setIsSubmitting(false)} />
              <Title level="4" size="S">
                Or, please fill in the remaining fields to complete the
                registration.
              </Title>
            </div>
            <Field>
              <Label isRequired tooltip="E-mail">
                E-mail
              </Label>
              <TextInput
                placeholder="E-mail"
                autoComplete="false"
                name="email"
                onChange={handleChange}
                value={values.email}
                errors={touched.email && errors.email}
                // disabled
              />
            </Field>
            <Field>
              <Label isRequired tooltip="Password">
                Password
              </Label>
              <PasswordInput
                placeholder="Password"
                autoComplete="false"
                isPasswordVisibilityToggleable
                name="password"
                onChange={handleChange}
                value={values.password}
                errors={touched.password && errors.password}
                helpers={[
                  "Use at least: minimal 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character",
                ]}
                // disabled
              />
            </Field>

            <Field>
              <Label isRequired tooltip="Password">
                Confirm password
                {/* <a href="/auth/realms/pp-upg-sso/login-actions/reset-credentials?client_id=pp-paa-platformsandapps&amp;tab_id=ztYtexI8U5g">
                  Forgot Password?
                </a> */}
              </Label>
              <PasswordInput
                placeholder="Password"
                autoComplete="false"
                isPasswordVisibilityToggleable
                name="password_confirm"
                onChange={handleChange}
                value={values.password_confirm}
                errors={touched.password_confirm && errors.password_confirm}
                // disabled
              />
            </Field>
            <Field>
              <Label isRequired tooltip="Date of birth">
                Date of birth
              </Label>
              <DateInput
                placeholder="Date of birth"
                autoComplete="false"
                name="birth"
                onChange={handleChange}
                value={values.birth}
                errors={touched.birth && errors.birth}
                // disabled
                // readonly
              />
            </Field>
            <Field
            // sizeVariant="condensed"
            >
              <Label isRequired tooltip="Your car brand">
                Car brand
              </Label>
              <Select
                placeholder="Select your car brand"
                options={[
                  { value: 1, label: "Audi" },
                  { value: 2, label: "Mercedes-Benz" },
                  { value: 3, label: "BMW" },
                  { value: 4, label: "Dacia" },
                  { value: 5, label: "Renault" },
                  { value: 6, label: "Peugeot" },
                  { value: 7, label: "Citroen" },
                  { value: 8, label: "Tesla" },
                  { value: 9, label: "Opel" },
                  { value: 10, label: "Fiat" },
                  { value: 11, label: "Alfa-Romeo" },
                  { value: 12, label: "Bugatti" },
                ]}
                // isMulti
                // disabled
                name="car"
                onChange={(selected) => setFieldValue("car", selected)}
                value={values.car}
                errors={touched.car && errors.car}
              />
            </Field>
            <FieldInline>
              <Checkbox
                //
                name="remember"
                onChange={handleChange}
                value={"remember"}
              />
              <Label tooltip="Checkbox field label">
                Subscribe to our newsletter?
              </Label>
            </FieldInline>
            <div className="myid-form-group centered">
              <Button
                //
                width="fixed"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Icon
                    icon={SpinnerMedium}
                    size="md"
                    style={{ display: "inline-block" }}
                  />
                ) : (
                  <>
                    <Icon icon={CheckMarkMedium} position="left" />
                    Log in
                  </>
                )}
              </Button>
            </div>
            <div className="myid-form-group centered">
              Already an account? <a href="#">Back to login</a>
            </div>
          </form>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;

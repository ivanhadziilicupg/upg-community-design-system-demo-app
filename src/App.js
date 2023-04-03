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
  PasswordInput,
  Checkbox,
  Switch,
  Radio,
} from "@ivanhadziilicupg/upg-community-design-system";
import {
  ChevronDownMedium,
  CheckMarkMedium,
  SpinnerMedium,
  UpLogoShape,
} from "@ivanhadziilicupg/upg-community-design-system/lib/icons";
import { Gb } from "@ivanhadziilicupg/upg-community-design-system/lib/iso-country-flags";
import { Logo } from "./components/Logo";
import { BackgroundImage } from "./components/BackgroundImage";
import "./App.css";
import "./styles/lightTheme.css";
import "./styles/lightForm.css";
import { Footer } from "./components/Footer";
// import "./styles/darkTheme.css";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "dark" ? colors.brand1 : colors.neutral_200;
  });

  const color = theme === "dark" ? colors.white : colors.brand1;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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

      return errors;
    },
  });

  const { values, errors, touched, handleChange, handleSubmit } = formik;

  return (
    <ThemeProvider theme={theme}>
      <div className={`${theme}-theme`}>
        <BackgroundImage
          color={theme === "dark" ? colors.brand1_900 : colors.neutral_400} // colors.neutral_200 / colors.white ?
        />
        <nav>
          <Button
            color="secondary"
            width="intrinsic"
            variant="text"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {/* <Icon icon={ProcessMedium} position="left" /> */}
            <Switch checked={theme === "dark"} />
            Switch theme
          </Button>
          <Button
            //
            color="secondary"
            width="intrinsic"
            variant="text"
          >
            <Icon icon={Gb} position="left" />
            Choose language
            <Icon icon={ChevronDownMedium} position="right" />
          </Button>
        </nav>
        <main>
          <div>
            <Logo color={color} />
          </div>
          <form onSubmit={handleSubmit}>
            <div
              id="kc-social-providers"
              className=""
              style={{ textAlign: "left" }}
            >
              <h4>Log in with a digital ID</h4>
              <Button
                className="myid-idp"
                color="secondary"
                variant="outline"
                onClick={() => setIsSubmitting(false)}
                // style={{
                //   border: "1px solid var(--up-brand-1-500) !important",
                //   color: "var(--up-brand-1-500) !important",
                //   margin: "1em 0",
                //   borderWidth: "1px !important",
                // }}
              >
                <Icon
                  icon={UpLogoShape}
                  color={colors.brand1_500}
                  // size="sm"
                  position="left"
                />
                Banqup ID - MyID (uat)
              </Button>
              <h4>Or with your personal details</h4>
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
                <a
                  href="/auth/realms/pp-upg-sso/login-actions/reset-credentials?client_id=pp-paa-platformsandapps&amp;tab_id=ztYtexI8U5g"
                  style={{
                    float: "right",
                    marginBottom: 0,
                  }}
                >
                  Forgot Password?
                </a>
              </Label>
              <PasswordInput
                placeholder="Password"
                autoComplete="false"
                isPasswordVisibilityToggleable
                name="password"
                onChange={handleChange}
                value={values.password}
                sizeVariant={"normal"}
                errors={touched.password && errors.password}
                helpers={[
                  "Use at least: minimal 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character",
                ]}
                // disabled
              />
            </Field>
            <div role="group">
              <FieldInline>
                <Checkbox
                  //
                  name="remember"
                  onChange={handleChange}
                  value={"remember"}
                />
                <Label tooltip="Checkbox field label">Remember me?</Label>
              </FieldInline>
            </div>
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
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
          </form>
          <div id="myid-login-infobox" class="myid-infobox myid-infobox-footer">
            <h2>One account, multiple solutions!</h2>
            <span>
              Do you already have an account on one of the Unifiedpost
              solutions? Great! You can go on right away.
            </span>
          </div>
          {/* <Button
            color="secondary"
            variant="text"
            onClick={() => setIsSubmitting(false)}
          >
            Forgot your password?
          </Button> */}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;

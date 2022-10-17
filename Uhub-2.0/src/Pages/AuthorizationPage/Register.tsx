import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
<<<<<<< HEAD
import GoogleIcon from "@mui/icons-material/Google";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { AuthContext } from "../../Context/AuthContext";
import urls from "../../utility/urls";
=======
>>>>>>> parent of b24b831 (singup page ui created)

type UserSubmitForm = {
  fullname: string;
  // username: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
};

const Register = () => {
  const authContext = useContext(AuthContext);
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required"),
    // username: Yup.string()
    //   .required("Username is required")
    //   .min(6, "Username must be at least 6 characters")
    //   .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = async (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
    debugger; // eslint-disable-line
    // authContext.register(data);
    fetch(urls.register, {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application",
      },
    }).then((res: any) => {
      if (res.ok) {
        // setToken(res.idToken)
        console.log(res.idToken);
      } else {
        return res.json().then((data: any) => {
          console.log(data);
        });
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        padding: "20px",
        background: "#F8F8F8",
        height: `calc(100vh - ${"270px"})`,
      }}
    >
      <div
        // className="register-form"
        style={{
          width: "400px",
          backgroundColor: "#FFFFFF",
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label style={{ fontWeight: "600" }}>Display name</label>
            <input
              type="text"
              {...register("fullname")}
              className={`form-control ${errors.fullname ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.fullname?.message}</div>
          </div>

          {/* <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              {...register("username")}
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.username?.message}</div>
          </div> */}

          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              {...register("email")}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              {...register("password")}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword")}
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.confirmPassword?.message}
            </div>
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              {...register("acceptTerms")}
              className={`form-check-input ${
                errors.acceptTerms ? "is-invalid" : ""
              }`}
            />
            <label htmlFor="acceptTerms" className="form-check-label">
              I have read and agree to the Terms
            </label>
            <div className="invalid-feedback">
              {errors.acceptTerms?.message}
            </div>
          </div>

          <div
            className="form-group"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button type="submit" className="btn btn-primary">
              Register
            </button>
            {/* <button
              type="button"
              onClick={() => reset()}
              className="btn btn-warning float-right"
            >
              Reset
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

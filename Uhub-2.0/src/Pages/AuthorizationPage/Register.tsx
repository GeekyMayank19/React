import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { AuthContext } from "../../Context/AuthContext";
import { userService } from "../../Services";
import { Link, useNavigate } from "react-router-dom";
import { IUserRegisterData } from "../../Interface";

type UserSubmitForm = {
  fullname: string;
  email: string;
  password: string;
};

const Register = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegisterData>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data: IUserRegisterData) => {
    userService.signup(data).subscribe((res) => {
      console.log("res->", res)
      if(res.status===201){
        navigate('/home')
      
        // authContext.setToken(res.)
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: `calc(100vh - ${"50px"})`,
        backgroundColor: "#F5F5F5",
        padding: "20px",
        width: "100vw",
      }}
    >
      <div
        className="register-form"
        style={{
          width: "400px",
          backgroundColor: "#FFFFFF",
          padding: "15px",
          borderRadius: "20px",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "500",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h4>Register</h4>
            <div>Hey, Enter your detail to create</div>
            <div> account</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "25px",
            }}
          >
            <div>
              <input
                {...register("fullname")}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                style={{
                  width: "325px",
                  borderRadius: "5px",
                  padding: "5px",
                  border: "1px solid 		#DCDCDC",
                  marginTop: "10px",
                  paddingLeft: "15px",
                }}
                placeholder="Full Name"
                type="text"
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <div>
              <input
                {...register("email")}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                style={{
                  width: "325px",
                  borderRadius: "5px",
                  padding: "5px",
                  border: "1px solid 		#DCDCDC",
                  marginTop: "10px",
                  paddingLeft: "15px",
                }}
                placeholder="Enter Email"
                type="text"
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <div>
              <input
                type="password"
                {...register("password")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                style={{
                  width: "325px",
                  borderRadius: "5px",
                  padding: "5px",
                  border: "1px solid 		#DCDCDC",
                  marginTop: "10px",
                  paddingLeft: "15px",
                }}
                placeholder="Password"
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <div
              style={{
                width: "325px",
                marginTop: "5px",
                fontWeight: "500",
              }}
            >
              having trouble in sign in?
            </div>
            <button
              type="submit"
              style={{
                border: "1px solid #0B94FF",
                backgroundColor: "#0B94FF",
                borderRadius: "4px",
                color: "white",
                fontSize: "14px",
                fontWeight: "500",
                marginTop: "25px",
                width: "300px",
                height: "33px",
              }}
            >
              Sign Up
            </button>
            <div
              style={{
                // width: "320px",
                marginTop: "20px",
                fontWeight: "500",
              }}
            >
              --Or Sign up with--
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "25px",
              }}
            >
              <div
                style={{
                  padding: "6px",
                  border: "1px solid #DCDCDC",
                  width: "110px",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "5px",
                  alignItems: "center",
                  marginRight: "5px",
                  cursor: "pointer",
                }}
              >
                <GoogleIcon fontSize="medium" />
                <div style={{ marginLeft: "5px", fontWeight: "700" }}>
                  Google
                </div>
              </div>
              <div
                style={{
                  padding: "5px",
                  border: "1px solid #DCDCDC",
                  width: "112px",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "5px",
                  alignItems: "center",
                  marginRight: "5px",
                  cursor: "pointer",
                }}
              >
                <FacebookRoundedIcon fontSize="medium" />
                <div style={{ marginLeft: "5px", fontWeight: "700" }}>
                  Facebook
                </div>
              </div>
              <div
                style={{
                  padding: "5px",
                  border: "1px solid #DCDCDC",
                  width: "110px",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "5px",
                  alignItems: "center",
                  marginRight: "5px",
                  cursor: "pointer",
                }}
              >
                <LinkedInIcon fontSize="medium" />
                <div style={{ marginLeft: "5px", fontWeight: "700" }}>
                  LinkedIn
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                fontWeight: "500",
              }}
            >
              already have account?
              <Link to="/auth/login">login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

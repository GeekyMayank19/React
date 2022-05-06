import React, { useEffect, useState } from "react";
import { userService } from "../services";
import { IUser } from "../interface/index";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import UserService from "../services/User.service";

const UserForm = () => {

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  // const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
const params = useParams();
const navigate = useNavigate();

const [emailErr, setEmailErr] = useState(false);
const [userId, setUserId] = useState<number>(0);
const [userDetail, setUserDetail] = useState<IUser>({
  id: Math.random(),
  name: "",
  email: "",
  password: "",
});


  useEffect(() => {
    if (Object.keys(params).length !== 0) {
      const userId = Number(params.userId);
      const user = UserService.getUser(userId);
      if (user !== undefined) {
        setUserDetail(user);
      }
      setUserId(userId);
    }
  }, []);

  

  const onSaveClick = () => {
    if (Object.keys(params).length !== 0) {
      userService.editUserById(userId, userDetail);
    } else {
      userService.addUser(userDetail);
    }
    // if (!validEmail.test(userDetail.email)) {
    //   setEmailErr(true);
    // }
    // if(emailErr){
    //   navigate("/");
    // }
    navigate("/");
  };


  const onChange = (key: string, value: string) => {
    setUserDetail({ ...userDetail, [key]: value });
  };


  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        value={userDetail.name || ""}
        onChange={(e) => onChange("name", e.target.value)}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        value={userDetail.email || ""}
        onChange={(e) => onChange("email", e.target.value)}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        value={userDetail.password || ""}
        onChange={(e) => onChange("password", e.target.value)}
      />
      <br />
      {emailErr && <p>Your email is invalid</p>}
      <br />
      <Button onClick={() => onSaveClick()}>Save</Button>

      <Link to={"/"}>cancel</Link>
      {/* <div>{params?.userId}</div> */}
    </div>
  );
};

export default UserForm;

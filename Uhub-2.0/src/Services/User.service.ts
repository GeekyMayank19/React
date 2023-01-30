import { IUserRegisterData } from "../Interface";
import axios from "axios";
import { ajax } from "rxjs/ajax";
import apiEndPoint from "../utility/urls";
import { API } from "../backend";
interface responseType {
  success: boolean,
  token:string,
  user:{
    email:string,
    token:string,
    _v:number,
    _id:string
  }
}
class UserService {
  public register = (formData: IUserRegisterData) => {
    axios
      .post(apiEndPoint.register, {
        body: {
          email: formData.email,
          password: formData.password,
          returnSecureToken: true,
        },
      })
      .then((response) => {
        console.log("res->>", response);
      });
  };

  public signup = (formData: IUserRegisterData) => {
    return ajax.post(`${API}register`, {
      fullname: formData.fullname,
      email: formData.email,
      password: formData.password,
    });
  };

  public login = (data:any) => {
    return ajax.post<responseType>(`${API}login`, {
      email: data.email,
      password: data.password,
    });
  }
}

export default new UserService();

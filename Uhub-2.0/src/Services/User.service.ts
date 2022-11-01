import { IUserRegisterData } from "../Interface";
import axios from "axios";
import apiEndPoint from "../utility/urls";
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
}

export default new UserService();

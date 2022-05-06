import { number } from "yup";
import { IUser } from "../interface/index";
import { BaseService } from "./Base.service";

class UserService extends BaseService {
  public addUser(user: IUser): void {
    const users = this.getItem<[]>("users");
    if (users) {
      this.setItem("users", [...users, user]);
    } else {
      this.setItem("users", [user]);
    }
  }

  public getUsers(): IUser[] | null {
    return this.getItem<IUser[]>("users");
  }

  public deleteUserById(userId: number) {
    const currentList = this.getItem<IUser[]>("users") || [];
    const newList = currentList.filter((item: any) => item.id !== userId);
    this.setItem("users", newList);
  }

  public editUserById(userId:number,obj:any){
    const users = this.getItem<IUser[]>("users") || [];
    const user = users?.find((item: any) => item.id == userId);
    if(user){
      
      user.name=obj.name;
      user.email=obj.email;
      user.password=obj.password;
      console.log(user.name);
    }
    this.setItem("users",users)
  }

  public getUser(userId: number): IUser | undefined {
    const users = this.getUsers();
    const user = users?.find((item: any) => item.id == userId);
    return user;
  }
}
export default new UserService();

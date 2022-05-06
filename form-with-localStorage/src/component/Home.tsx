import { userService } from "../services";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "./index";
import { useEffect, useState } from "react";
import { IUser } from "../interface";

const Home = () => {
const navigate = useNavigate();
  const [userList,setUserList] = useState<IUser[]|null>([]);
 

  const deleteUser = (userId:number) :void =>{
    userService.deleteUserById(userId)
    setUserList(userService.getUsers())
  }

  const editUser = (userId:number):void =>{
     navigate(`addUser/${userId}`);
  }

  useEffect(() => {
    const userList = userService.getUsers();
    setUserList(userList)
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <Link to={"addUser"}>AddUser </Link>
      {userList?.length && <Table users={userList} deleteUser={deleteUser} editUser={editUser} />}
    </div>
  );
};

export default Home;

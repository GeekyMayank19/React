import { IUser } from "../interface/index";
type Props = {
  users: IUser[] | null;
  deleteUser(userId: number): void;
  editUser: (userId: number) => void;
};

const Table = ({ users,deleteUser ,editUser}: Props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item: IUser, id: number) => {
            return (
              <tr key={id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  <button onClick={()=>editUser(item.id)} >edit </button>
                </td>
                <td>
                  <button onClick={() => deleteUser(item.id)}>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

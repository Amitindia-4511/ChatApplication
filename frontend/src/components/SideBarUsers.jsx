import  { useEffect, useState } from "react";
import { useChatStore } from "../store/ChatStore";


const SideBarUsers = () => {
  const [users, setUsers] = useState([]);
  const { getSideBarUsers, sideBarUsers,setSelectedUser,selectedUser,fetchMessages } = useChatStore();

  useEffect(() => {
    getSideBarUsers();
  }, [getSideBarUsers]);

  useEffect(() => {
    if (sideBarUsers.length > 0) {
      setUsers(sideBarUsers);
    } else {
      console.log("Loading");
    }
  }, [sideBarUsers]);

  function handleChat({id,name}){
    setSelectedUser(id,name);
    // fetchMessages(users);
  }
  return (
      <aside className="bg-gray-950 p-3 w-4/12">
        {users.map((users) => {
          const user = users?.user_details[0];   
          // console.log(user);   
          return (
            <button
              key={user._id}
              className={`w-full flex items-center ${
                user._id === selectedUser.id ? "bg-gray-700 border border-s-cyan-300 border-b-cyan-500 border-t-amber-500 border-e-amber-400" : "bg-zinc-900"
              } p-2 my-1.5 rounded-xl`}
              onClick={() => handleChat({id:user._id,name:user.name})}
            >
              <div className="avatar online placeholder mx-3 ">
                <div className="bg-neutral text-neutral-content w-16 rounded-full">
                  <span className="text-xl">{user.name[0]}</span>
                </div>
              </div>
              <span className="text-xl">{user.name}</span>
            </button>
          );
        })}
      </aside>
  );
};

export default SideBarUsers;

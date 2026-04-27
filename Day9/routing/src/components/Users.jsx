import React from "react";
import { Outlet ,useSearchParams} from "react-router-dom";
const Users = () => {

  const [searchParams,setSearchParams]=useSearchParams()
  const showActiveUsers=searchParams.get('filter')==='active'

  return (
    <>
      <div>
        <p>list of users</p>
      </div>
      <Outlet />
      <div>
        <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>
        <button onClick={()=>setSearchParams({})}>Reset Filter</button>
      </div>
      {
        showActiveUsers ? <h2>shoowing active users</h2> : <h2>Showing all users</h2>
      }
    </>
  );
};

export default Users;

import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
const [dis,setdis]=useState([])

  const handleChange = (e) => {
    // console.log(e);
    const copy = { ...user };
    copy[e.target.name] = e.target.value;
    setUser(copy);
    // console.log(user);
  };
//   let arr = [];
//   arr.push(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setUser()
    console.log(user);
  };
const handleClick=()=>{
    const disCopy=[...dis]
    disCopy.push(user)
    setdis(disCopy)
}
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          onChange={handleChange}
          name="userName"
          value={user.userName}
        />
        <input
          type="text"
          onChange={handleChange}
          name="password"
          value={user.password}
        />
       
        <input type="submit" value="click" onClick={handleClick} />
        {dis.map((val, inx) => {
          return (
            <div>
              <p>{val.userName}</p>
              <p>{val.password}</p>
            </div>
          );
        })}
      </div>
    </form>
  );
}

export default Login;

import { useState } from "react";

function LoginToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleClick}>Logout</button>
      ) : (
        <button onClick={handleClick}>Login</button>
      )}
    </div>
  );
}

export default LoginToggle;
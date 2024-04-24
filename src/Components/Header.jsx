import { NabLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NabLink to="/">Home</NabLink>
      <NabLink to="/users">users</NabLink>
      <NabLink to="/signup">sign up</NabLink>
    </div>
  );
};

export default Header;

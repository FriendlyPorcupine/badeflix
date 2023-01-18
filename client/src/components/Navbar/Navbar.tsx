// uses style from layout.css
import {Button, ButtonGroup} from "@mui/material";

const Header = () => {
  return (
    <header>
        <img src="logo.png" alt="logo of badeflix"/>
      <nav>
        <ButtonGroup variant="contained" aria-label="outlined button group">
          {/* @todo show if signed a menu, if signed out, other menu */}
          <Button><a href="/">Home</a></Button>
          <Button><a href="/signup">Register</a></Button>
          <Button><a href="/signin">Sign in</a></Button>
          <Button><a href="/signout">Sign out</a></Button>
          <Button><a href="/profile">Profile</a></Button>
          <Button><a href="/favorites">Favorites</a></Button>
        </ButtonGroup>
      </nav>
    </header>
  );
};
export default Header;



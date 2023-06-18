import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

export default function Header() {
  // const navigate = useNavigate();

  return (
      <AppBar sx={{ backgroundColor: "green" }} position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h4">Library App</Typography>
          <ButtonGroup>
            <Button variant="white" onClick={() => {}}>
              Explore
            </Button>
            <Button variant="white" onClick={() =>{}}>
              Favorites
            </Button>
          </ButtonGroup>
          <Search />
        </Toolbar>
      </AppBar>
  );
}

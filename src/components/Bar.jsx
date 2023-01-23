import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

export default function Bar() {
  const navigate = useNavigate();

  return (
    <Box>
      <AppBar sx={{ backgroundColor: "green" }} position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h4">Book Library</Typography>
          <ButtonGroup>
            <Button variant="white" onClick={() => navigate("/")}>
              Explore
            </Button>
            <Button variant="white" onClick={() => navigate("/favorites")}>
              Favorites
            </Button>
          </ButtonGroup>
          <Search />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

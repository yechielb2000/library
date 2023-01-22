import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { BookScheme } from "../bookScheme";
import Divider from "@mui/material/Divider";

export default function BookInfo({ open, handleClose, book }) {
  const shortest_quote = () => {
    return [
      book[BookScheme.quote1],
      book[BookScheme.quote2],
      book[BookScheme.quote3],
    ].sort()[0];
  };

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle align="center">{book[BookScheme.title]}</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "40%",
          }}
        >
          <img
            width="200vh"
            src={book[BookScheme.image_url]}
            alt={book[BookScheme.title]}
          />
          <Typography variant="body2" color="inherit" align="center">
            {book[BookScheme.authors]}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            alignContent: "left",
            width: "60%",
          }}
        >
          <Typography variant="body1" color="inherit">
            Description :
          </Typography>
          <Typography
            sx={{ overflowY: "auto", height: "300px" }}
            variant="body2"
            color="inherit"
          >
            {book[BookScheme.description]}
          </Typography>
        </Box>
      </DialogContent>
      <Divider />
      <Typography variant="subtitle1" color="inherit" align="center">
        {shortest_quote()}
      </Typography>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

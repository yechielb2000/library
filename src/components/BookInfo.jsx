import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";

import { BookScheme } from "../bookScheme";
import { Typography } from "@mui/material";

export const BoldText = ({ children }) => {
  return (
    <Typography
      component="span"
      sx={{
        fontWeight: 600,
      }}
    >
      {children}
    </Typography>
  );
};

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
      <DialogTitle sx={{ m: 0, p: 2 }}>
        {book[BookScheme.title]}{" "}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
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
            <DialogContentText variant="body2" color="black">
              {book[BookScheme.authors]}
            </DialogContentText>
          </Box>
          <Box sx={{ width: "60%" }}>
            <BoldText>Description :</BoldText>
            <DialogContentText
              sx={{ overflowY: "auto", height: "300px" }}
              variant="body2"
              color="black"
            >
              {book[BookScheme.description]}
            </DialogContentText>
          </Box>
        </Box>
        <Typography
          variant="body2"
          sx={{
            mt: 1,
          }}
        >
          <BoldText>Quote: </BoldText>
          {shortest_quote()}
        </Typography>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

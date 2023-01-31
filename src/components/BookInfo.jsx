import {
  Button,
  Box,
  Divider,
  DialogContentText,
  DialogContent,
  DialogTitle,
  DialogActions,
  Dialog,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BookScheme } from "../bookScheme";

const useStyles = makeStyles({
  scrollBar: {
    "&::-webkit-scrollbar": {
      width: "20px",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 5px grey",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "black",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "rgb(54, 56, 58)",
    },
  },
});
export default function BookInfo({ open, handleClose, book }) {
  const styles = useStyles();

  const shortest_quote = () => {
    return [
      book[BookScheme.quote1],
      book[BookScheme.quote2],
      book[BookScheme.quote3],
    ].sort()[0];
  };

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to bottom, #080808 0%,#080808 10%, #757474 10%,#757474 100%)",
        }}
      >
        <DialogTitle sx={{ color: "white" }} align="center" variant="black">
          {book[BookScheme.title]}
        </DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "row" }}>
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
            <DialogContentText variant="black">Description :</DialogContentText>
            <DialogContentText
              sx={{ overflowY: "auto", height: "300px" }}
              className={styles.scrollBar}
              variant="body2"
              color="black"
            >
              {book[BookScheme.description]}
            </DialogContentText>
          </Box>
        </DialogContent>
        <Divider />
        <DialogContentText variant="subtitle1" color="inherit" align="center">
          {shortest_quote()}
        </DialogContentText>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "white" }}>
            Close
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}

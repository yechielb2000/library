import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function BookInfo({ open, handleClose, book }) {
  const shortest_quote = () => {
    return [book.quote1, book.quote2, book.quote3].sort()[0];
  };

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle align="center" variant="black">
        {book.title}
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
          <img width="200vh" src={book.image_url} alt={book.title} />
          <DialogContentText variant="body2" color="black">
            {book.authors}
          </DialogContentText>
        </Box>
        <Box sx={{ width: "60%" }}>
          <DialogContentText variant="black">Description :</DialogContentText>
          <DialogContentText
            sx={{ overflowY: "auto", height: "300px" }}
            variant="body2"
            color="black"
          >
            {book.description}
          </DialogContentText>
        </Box>
      </DialogContent>
      <Divider />
      <DialogContentText variant="subtitle1" color="inherit" align="center">
        {shortest_quote()}
      </DialogContentText>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

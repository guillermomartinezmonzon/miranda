import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(item) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <i className="fas fa-trash" onClick={handleClickOpen}></i>
      {/* <Button variant="outlined" onClick={handleClickOpen}> */}
      {/*   Open alert dialog */}
      {/* </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              The booking will be deleted and the data associated will be destroyed.
              This operation is irreversible
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Proceed to delete</Button>
          <Button onClick={handleClose} autoFocus>
              Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

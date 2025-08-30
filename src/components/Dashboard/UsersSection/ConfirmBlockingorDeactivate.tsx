import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";

interface ConfirmationDialogProps {
  open: boolean;
  action: string; 
  selectedUser: { id: number; name: string; email: string } | null;
  handleCancel: () => void;
  handleConfirm: () => void;
}

export default function ConfirmationDialog({
  open,
  action,
  selectedUser,
  handleCancel,
  handleConfirm,
}: ConfirmationDialogProps) {
  return (
    <Dialog open={open} onClose={handleCancel}>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogContent>
        <Typography>
          Are you sure you want to <b>{action}</b>{" "}
          user <b>{selectedUser?.name}</b>?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="inherit">
          Cancel
        </Button>
        <Button onClick={handleConfirm} variant="contained" color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

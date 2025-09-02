import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";

interface ConfirmationDialogProps {
  open: boolean;
  action: string; 
  selectedUser: { id: number; fullName: string; email: string } | null;
  handleCancel: () => void;
  handleConfirm: () => Promise<void>; 
}

export default function ConfirmationDialog({
  open,
  action,
  selectedUser,
  handleCancel,
  handleConfirm,
}: ConfirmationDialogProps) {
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);

   const onConfirm = async () => {
    if (!selectedUser) return;

    setIsProcessing(true);
    try {
      await handleConfirm();
      setSuccessMessage(`User ${selectedUser.fullName} ${action.toLowerCase()}ed successfully!`);

      setTimeout(() => {
        setSuccessMessage("");
        handleCancel();
        setIsProcessing(false);
      }, 3000);
    } catch (err) {
      console.error(err);
      setIsProcessing(false);
    }
  };

  const onClose = () => {
    setSuccessMessage(""); 
    handleCancel();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogContent>
        {successMessage ? (
          <Typography color="green">{successMessage}</Typography>
        ) : (
          <Typography>
            Are you sure you want to <b>{action}</b>{" "}
            user <b>{selectedUser?.fullName}</b>?
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit" disabled={isProcessing}>
          Cancel
        </Button>
        {!successMessage && (
          <Button onClick={onConfirm} variant="contained" color="primary" disabled={isProcessing}>
            Confirm
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}

import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  TextField,
} from "@mui/material";

interface RequestModalProps {
  selectedRequest: Request | null;
  onClose: () => void;
  handleAction: (action: "accepted" | "rejected", message: string) => void;
}

type Request = {
  id: number;
  requestType: string;
  landSize: string;
  status: "pending" | "accepted" | "rejected";
  createdAt: string;
  updatedAt: string;
};

export default function RequestModal({
  selectedRequest,
  onClose,
  handleAction,
}: RequestModalProps) {
  const [message, setMessage] = useState("");

  const handleDecision = (action: "accepted" | "rejected") => {
    if (!message.trim()) return; 
    handleAction(action, message);
    setMessage("");
  };

  return (
    <Dialog open={!!selectedRequest} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Request Details</DialogTitle>
      <DialogContent dividers>
        {selectedRequest && (
          <>
            <Typography>
              <b>ID:</b> {selectedRequest.id}
            </Typography>
            <Typography>
              <b>Type:</b> {selectedRequest.requestType}
            </Typography>
            <Typography>
              <b>Land Size:</b> {selectedRequest.landSize}
            </Typography>
            <Typography>
              <b>Status:</b> {selectedRequest.status}
            </Typography>
            <Typography>
              <b>Created At:</b> {selectedRequest.createdAt}
            </Typography>
            <Typography>
              <b>Updated At:</b> {selectedRequest.updatedAt}
            </Typography>

            <TextField
              label="Message for User"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              fullWidth
              multiline
              rows={3}
              margin="normal"
            />
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={() => handleDecision("rejected")}
          color="error"
          variant="contained"
          disabled={!message.trim()}
        >
          Reject
        </Button>
        <Button
          onClick={() => handleDecision("accepted")}
          color="success"
          variant="contained"
          disabled={!message.trim()}
        >
          Accept
        </Button>
      </DialogActions>
    </Dialog>
  );
}

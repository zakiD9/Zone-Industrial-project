import { useState, useMemo } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  TextField,
  Grid,
  Chip,
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
  city?: string;
  state?: string;
  description?: string;
  documents?: string[];
};

export default function RequestModal({
  selectedRequest,
  onClose,
  handleAction,
}: RequestModalProps) {
  const [message, setMessage] = useState("");

  const formattedCreatedAt = useMemo(
    () => selectedRequest && new Date(selectedRequest.createdAt).toLocaleString(),
    [selectedRequest]
  );

  const formattedUpdatedAt = useMemo(
    () => selectedRequest && new Date(selectedRequest.updatedAt).toLocaleString(),
    [selectedRequest]
  );

  const handleDecision = (action: "accepted" | "rejected") => {
    if (!message.trim()) return;
    handleAction(action, message);
    setMessage("");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "accepted":
        return "success";
      case "rejected":
        return "error";
      default:
        return "warning";
    }
  };

  return (
    <Dialog open={!!selectedRequest} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Request Details</DialogTitle>
      <DialogContent dividers>
        {selectedRequest && (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography><b>ID:</b> {selectedRequest.id}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography><b>Type:</b> {selectedRequest.requestType}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography><b>Land Size:</b> {selectedRequest.landSize} m²</Typography>
            </Grid>
            {selectedRequest.city && (
              <Grid item xs={6}>
                <Typography><b>City:</b> {selectedRequest.city}</Typography>
              </Grid>
            )}
            {selectedRequest.state && (
              <Grid item xs={6}>
                <Typography><b>State:</b> {selectedRequest.state}</Typography>
              </Grid>
            )}
            <Grid item xs={6}>
              <Typography>
                <b>Status:</b>{" "}
                <Chip
                  label={selectedRequest.status.toUpperCase()}
                  color={getStatusColor(selectedRequest.status)}
                  size="small"
                />
              </Typography>
            </Grid>
            {selectedRequest.description && (
              <Grid item xs={12}>
                <Typography><b>Description:</b> {selectedRequest.description}</Typography>
              </Grid>
            )}
            {selectedRequest.documents && selectedRequest.documents.length > 0 && (
              <Grid item xs={12}>
                <Typography><b>Documents:</b> {selectedRequest.documents.join(", ")}</Typography>
              </Grid>
            )}
            <Grid item xs={6}>
              <Typography><b>Created At:</b> {formattedCreatedAt}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography><b>Updated At:</b> {formattedUpdatedAt}</Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Message for User"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                fullWidth
                multiline
                rows={3}
                margin="normal"
              />
            </Grid>
          </Grid>
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

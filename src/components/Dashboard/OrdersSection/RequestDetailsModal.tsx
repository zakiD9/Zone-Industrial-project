import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

interface RequestModalProps{
    selectedRequest: Request | null;
    onClose: () => void;
    handleAction: (action: "accepted" | "rejected") => void;
}
type Request = {
  id: number;
  requestType: string;
  landSize: string;
  status: "pending" | "accepted" | "rejected";
  createdAt: string;
  updatedAt: string;
};

export default function RequestModal({ selectedRequest, onClose, handleAction, }: RequestModalProps){

    return(
        <Dialog open={!!selectedRequest} onClose={onClose}>
        <DialogTitle>Request Details</DialogTitle>
        <DialogContent>
          {selectedRequest && (
            <>
              <Typography><b>ID:</b> {selectedRequest.id}</Typography>
              <Typography><b>Type:</b> {selectedRequest.requestType}</Typography>
              <Typography><b>Land Size:</b> {selectedRequest.landSize}</Typography>
              <Typography><b>Status:</b> {selectedRequest.status}</Typography>
              <Typography><b>Created At:</b> {selectedRequest.createdAt}</Typography>
              <Typography><b>Updated At:</b> {selectedRequest.updatedAt}</Typography>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleAction("rejected")} color="error" variant="contained">
            Reject
          </Button>
          <Button onClick={() => handleAction("accepted")} color="success" variant="contained">
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    )
}
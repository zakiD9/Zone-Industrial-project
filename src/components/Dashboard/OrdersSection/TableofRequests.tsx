import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import RequestModal from "./RequestDetailsModal";

interface Request {
  id: number;
  requestType: string;
  landSize: string;
  status: "pending" | "accepted" | "rejected";
  createdAt: string;
  updatedAt: string;
}

const RequestTable: React.FC<{
  requests: Request[];
  onUpdate: (id: number, status: "accepted" | "rejected") => void;
}> = ({ requests, onUpdate }) => {
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);

  const handleRowClick = (req: Request) => {
    if (req.status === "pending") {
      setSelectedRequest(req);
    }
  };

  const handleClose = () => {
    setSelectedRequest(null);
  };

  const handleAction = (action: "accepted" | "rejected") => {
    if (selectedRequest) {
      onUpdate(selectedRequest.id, action);
      setSelectedRequest(null);
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Request ID</TableCell>
              <TableCell>Request Type</TableCell>
              <TableCell>Land Size</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Updated At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((req) => (
              <TableRow
                key={req.id}
                onClick={() => handleRowClick(req)}
                style={{
                  cursor: req.status === "pending" ? "pointer" : "not-allowed",
                  backgroundColor:
                    req.status === "accepted"
                      ? "#e0f7fa"
                      : req.status === "rejected"
                      ? "#ffebee"
                      : "inherit",
                }}
              >
                <TableCell>{req.id}</TableCell>
                <TableCell>{req.requestType}</TableCell>
                <TableCell>{req.landSize}</TableCell>
                <TableCell>{req.status}</TableCell>
                <TableCell>{req.createdAt}</TableCell>
                <TableCell>{req.updatedAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <RequestModal
        selectedRequest={selectedRequest}
        onClose={handleClose}
        handleAction={handleAction}
      />
    </>
  );
};

export default RequestTable;

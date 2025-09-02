import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import RequestModal from "./RequestDetailsModal";
import RequestFilter from "./SearchndFilterRequest";
import  type { RequestStatus } from "./SearchndFilterRequest";
import { useRequestStore} from "../../../store/RequestStore";
import type { Request } from "../../../store/RequestStore";
const RequestTable: React.FC = () => {
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const { requests, fetchRequests, filterRequests, updateRequest } = useRequestStore();

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleRowClick = (req: Request) => {
    if (req.status === "pending") setSelectedRequest(req);
  };

  const handleClose = () => setSelectedRequest(null);

  const handleAction = async (action: "accepted" | "refused") => {
    if (!selectedRequest) return;
    await updateRequest(selectedRequest.id, action);
    setSelectedRequest(null);
  };

  const handleFilter = async (search: string, status: RequestStatus) => {
    await filterRequests(search, status);
  };

  return (
    <>
      <RequestFilter onFilterChange={handleFilter} />

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
                      : req.status === "refused"
                      ? "#ffebee"
                      : "inherit",
                }}
              >
                <TableCell>{req.id}</TableCell>
                <TableCell>{req.requestType}</TableCell>
                <TableCell>{req.landSize}</TableCell>
                <TableCell>{req.status}</TableCell>
                <TableCell>{req.createdAt ? new Date(req.createdAt).toLocaleString() : "-"}</TableCell>
                <TableCell>{req.updatedAt ? new Date(req.updatedAt).toLocaleString() : "-"}</TableCell>
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

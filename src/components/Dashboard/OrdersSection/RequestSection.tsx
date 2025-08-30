import { useState } from "react";
import RequestFilter from "./SearchndFilterRequest";
import RequestTable from "./TableofRequests";

const initialRequests = [
  {
    id: 1,
    requestType: "Construction",
    landSize: "200m²",
    status: "pending", 
    createdAt: "2025-08-01",
    updatedAt: "2025-08-15",
  },
  {
    id: 2,
    requestType: "Agriculture",
    landSize: "500m²",
    status: "accepted", 
    createdAt: "2025-08-05",
    updatedAt: "2025-08-20",
  },
];

export default function RequestSection() {
  const [requests, setRequests] = useState(initialRequests);

  const updateRequest = (id: number, status: "accepted" | "rejected") => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id
          ? { ...req, status, updatedAt: new Date().toISOString() }
          : req
      )
    );
  };

  return (
    <div className="flex flex-col gap-3 mx-3 my-5">
      <h1 className="text-3xl font-bold">Requests</h1>
      <RequestFilter
        onFilterChange={(search, status) => {
          console.log("Search:", search);
          console.log("Status:", status);
        }}
      />
      <RequestTable requests={requests} onUpdate={updateRequest} />
    </div>
  );
}

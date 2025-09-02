import { useEffect, useState } from "react";
import RequestFilter from "./SearchndFilterRequest";
import RequestTable from "./TableofRequests";
import { useRequestStore } from "../../../store/RequestStore";

export default function RequestSection() {
  const { requests, fetchRequests, filterRequests, updateRequest } = useRequestStore();
  const [filterStatus, setFilterStatus] = useState<string>("All");

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  const handleFilter = async (search: string, status: string) => {
    setFilterStatus(status);
    await filterRequests(filterStatus);
};


  return (
    <div className="flex flex-col gap-3 mx-3 my-5">
      <h1 className="text-3xl font-bold">Requests</h1>
      <RequestFilter onFilterChange={handleFilter} />
      <RequestTable requests={requests} onUpdate={updateRequest} />
    </div>
  );
}

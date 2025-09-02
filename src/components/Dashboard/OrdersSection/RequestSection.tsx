import { useEffect } from "react";
import RequestTable from "./TableofRequests";
import { useRequestStore } from "../../../store/RequestStore";

export default function RequestSection() {
  const {fetchRequests } = useRequestStore();

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);


  return (
    <div className="flex flex-col gap-3 mx-3 my-5">
      <h1 className="text-3xl font-bold">Requests</h1>
      <RequestTable />
    </div>
  );
}

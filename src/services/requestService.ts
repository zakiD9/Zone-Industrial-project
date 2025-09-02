import API from "./api";
import type { RequestResponse, updateRequestStatusResponse } from "./types";



export const getAllRequests = async (): Promise<RequestResponse> => {
  const response = await API.get<RequestResponse>("/request");
  return response.data;
};

export const updateRequestStatus = async (id:number ,status:string): Promise<updateRequestStatusResponse> => {
  const response = await API.patch<updateRequestStatusResponse>(`/request/${id}`, { status });
  return response.data;
};

export const getRequestsByStatus = async (status:string): Promise<RequestResponse> => {
  const response = await API.get<RequestResponse>(`/request/request/status/${status}`);
  return response.data;
};

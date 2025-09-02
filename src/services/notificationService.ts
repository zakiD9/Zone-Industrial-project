import API from "./api";



export const sendNotification = async (user_id:number, message:string): Promise<{ success: boolean }> => {
  const response = await API.post<{ success: boolean }>("/notification/create", { user_id, message });
  return response.data;
};
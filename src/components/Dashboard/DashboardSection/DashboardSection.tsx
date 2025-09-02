import { useEffect, useMemo, useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import { Person } from "@mui/icons-material";
import { Card, CardContent, Typography } from "@mui/material";

import StatCard from "./StatBox";
import RequestsChart from "./RequestsChart";
import { getAllRequests } from "../../../services/requestService";
import { getAllUsers } from "../../../services/userService";
import type { Request, RequestResponse, UserResponse, User } from "../../../services/types";

export default function DashboardSection() {
  const [requests, setRequests] = useState<RequestResponse>([]);
  const [users, setUsers] = useState<UserResponse>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [requestsData, usersData] = await Promise.all([getAllRequests(), getAllUsers()]);
        setRequests(requestsData);
        setUsers(usersData);
      } catch (err) {
        console.error("Failed to fetch dashboard data:", err);
      }
    };

    fetchData();
  }, []);

  const acceptedRequests = useMemo(() => requests.filter(r => r.status === "accepted").length, [requests]);
  const rejectedRequests = useMemo(() => requests.filter(r => r.status === "refused").length, [requests]);
  const pendingRequests = useMemo(() => requests.filter(r => r.status === "pending").length, [requests]);
  const totalRequests = requests.length;

  const stats = [
    { label: "Accepted Requests", count: acceptedRequests, icon: <CheckCircleOutlineIcon color="success" fontSize="large" /> },
    { label: "Refused Requests", count: rejectedRequests, icon: <CancelOutlinedIcon color="error" fontSize="large" /> },
    { label: "Pending Requests", count: pendingRequests, icon: <HourglassEmptyOutlinedIcon color="warning" fontSize="large" /> },
    { label: "Total Requests", count: totalRequests, icon: <AssignmentTurnedInOutlinedIcon color="primary" fontSize="large" /> },
  ];

  const acceptedUsers = useMemo(() => users.filter(u => u.is_blocked === 0).length, [users]);
  const rejectedUsers = useMemo(() => users.filter(u => u.is_blocked === 1).length, [users]);
  const usersData = [
    { label: "Unblocked Users", count: acceptedUsers, icon: <Person fontSize="large" color="success" /> },
    { label: "Blocked Users", count: rejectedUsers, icon: <Person fontSize="large" color="error" /> },
  ];

  return (
    <div className="flex flex-col gap-8 mx-3 my-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <StatCard key={index} icon={stat.icon} count={stat.count} label={stat.label} />
        ))}
      </div>

      <div className="flex w-full gap-4">
        <Card
          sx={{
            flex: 1,
            borderRadius: 3,
            boxShadow: 3,
            "&:hover": { boxShadow: 6, transform: "translateY(-4px)" },
            transition: "0.3s ease",
          }}
        >
          <CardContent>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Users Overview
            </Typography>
            <RequestsChart data={usersData} />
          </CardContent>
        </Card>

        <div className="flex flex-col justify-between flex-1">
          {usersData.map((user, index) => (
            <StatCard key={index} icon={user.icon} count={user.count} label={user.label} />
          ))}
        </div>
      </div>
    </div>
  );
}

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import { Person } from '@mui/icons-material';

import StatCard from "./StatBox";
import RequestsChart from "./RequestsChart";
import { Card, CardContent, Typography } from '@mui/material';


const stats = [
  { 
    label: "Accepted Requests", 
    count: 120, 
    icon: <CheckCircleOutlineIcon color="success" fontSize="large" /> 
  },
  { 
    label: "Rejected Requests", 
    count: 35, 
    icon: <CancelOutlinedIcon color="error" fontSize="large" /> 
  },
  { 
    label: "Pending Requests", 
    count: 20, 
    icon: <HourglassEmptyOutlinedIcon color="warning" fontSize="large" /> 
  },
  { 
    label: "Total Requests", 
    count: 175, 
    icon: <AssignmentTurnedInOutlinedIcon color="primary" fontSize="large" /> 
  },
];

const usersData = [
  { label: "Accepted Users", count: 80 ,icon:<Person fontSize="large" color="success"/>},
  { label: "Rejected Users", count: 20 ,icon:<Person fontSize="large" color="warning"/>},
];

export default function DashboardSection() {
  return (
    <div className="flex flex-col gap-8 mx-3 my-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <StatCard key={index} icon={stat.icon} count={stat.count} label={stat.label} />
        ))}
      </div>

      <div className='flex w-full gap-4'>
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

        <div className='flex flex-col justify-between flex-1'>
          {usersData.map((user, index) => (
            <StatCard key={index} icon={user.icon} count={user.count} label={user.label} />
          ))}
        </div>
      </div>
    </div>
  );
}

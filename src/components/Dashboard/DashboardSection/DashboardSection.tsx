import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';

import StatCard from "./StatBox";

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


export default function DashboardSection(){

    return(
        <div className="flex flex-col gap-4 mx-3 my-5">
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4'>
                {stats.map((stat,index) => (
                    <StatCard key={index} icon={stat.icon} count={stat.count} label={stat.label} />
                ))}
            </div>
        </div>
    )
}
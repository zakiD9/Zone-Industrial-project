import { Avatar, Typography } from "@mui/material";


interface RequestCardProps {
  request: {
    projectName: string;
    description: string;
    userAvatar: string;
    createdAt: string;
  };
}

export default function RequestCard({ request }: RequestCardProps) {

    return(
        <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
            <Avatar src={request.userAvatar} alt={request.projectName} />
            <div className="flex-1">
                <Typography fontWeight="bold">{request.projectName}</Typography>
                <Typography variant="body2" color="textSecondary">
                    {request.description}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                    {request.createdAt}
                </Typography>
            </div>
        </div>
    )
}
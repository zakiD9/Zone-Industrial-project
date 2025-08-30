import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Example data (you can replace with real API data later)
const data = [
  { name: "Accepted", value: 120 },
  { name: "Rejected", value: 35 },
];

const COLORS = ["#4caf50", "#f44336"]; // green for accepted, red for rejected

export default function RequestsChart() {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Requests Overview
      </Typography>
      <Box sx={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}

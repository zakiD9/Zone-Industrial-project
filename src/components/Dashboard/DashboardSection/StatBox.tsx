import { Card, CardContent, Typography, Box } from "@mui/material";

type StatsCardProps = {
  icon: React.ReactNode;
  count: number;
  label: string;
};

export default function StatCard({ icon, count, label }: StatsCardProps) {
  return (
    <Card
      sx={{
        minWidth: 200,
        borderRadius: 3,
        boxShadow: 3,
        "&:hover": { boxShadow: 6, transform: "translateY(-4px)" },
        transition: "0.3s ease",
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" gap={2}>
          <Box
            sx={{
              p: 1.5,
              borderRadius: "50%",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
            }}
          >
            {icon}
          </Box>
          <Box>
            <Typography variant="h5" fontWeight="bold">
              {count}
            </Typography>
            <Typography color="text.secondary">{label}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

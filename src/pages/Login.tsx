import { useState } from "react";
import { Container, Box, TextField, Button, Typography, Paper } from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Username:", username, "Password:", password);
  };

  return (
    <Container maxWidth="sm" className="flex items-center justify-center min-h-screen">
      <Paper elevation={3} className="p-8 w-full">
        <Typography variant="h4" align="center" gutterBottom>
          Admin Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;

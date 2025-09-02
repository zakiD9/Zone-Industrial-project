import { useState } from "react";
import { Container, Box, TextField, Button, Typography, Paper } from "@mui/material";
import { loginAdmin } from "../services/userService";
import type { LoginResponse } from "../services/types/auth";
import { useUserStore } from "../store/UserStore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const loginUser = useUserStore((state) => state.login);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    const data: LoginResponse = await loginAdmin(email, password);
    
    loginUser(data.user, data.token);
    setSuccess("Login successful! Redirecting...");
    console.log("Login successful:", data);

  } catch (err: any) {
    console.error("Login failed:", err);
    setError(err.response?.data?.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <Container maxWidth="sm" className="flex items-center justify-center min-h-screen">
      <Paper elevation={3} className="p-8 w-full">
        <Typography variant="h4" align="center" gutterBottom>
          Admin Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Typography color="error" align="center">
              {error}
            </Typography>
          )}
          {success && (
            <Typography color="primary" align="center">
              {success}
            </Typography>
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;

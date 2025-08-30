import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import ConfirmationDialog from "./ConfirmBlockingorDeactivate";

type User = {
  id: number;
  name: string;
  email: string;
  status: "Active" | "Deactivated" | "Blocked";
};

const initialUsers: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Deactivated" },
  { id: 3, name: "Mike Ross", email: "mike@example.com", status: "Blocked" },
  { id: 4, name: "Sarah Lee", email: "sarah@example.com", status: "Active" },
];

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [search, setSearch] = useState("");

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [dialogAction, setDialogAction] = useState<"Deactivate" | "Activate" | "Block" | "">("");

  const handleConfirmAction = () => {
    if (selectedUser && dialogAction) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === selectedUser.id
            ? {
                ...user,
                status:
                  dialogAction === "Deactivate"
                    ? "Deactivated"
                    : dialogAction === "Activate"
                    ? "Active"
                    : "Blocked",
              }
            : user
        )
      );
    }
    setIsDialogOpen(false);
    setSelectedUser(null);
    setDialogAction("");
  };

  const openDialog = (user: User, action: "Deactivate" | "Activate" | "Block") => {
    setSelectedUser(user);
    setDialogAction(action);
    setIsDialogOpen(true);
  };

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Paper sx={{ padding: 2 }}>
        <Stack direction="row" spacing={2} mb={2}>
          <TextField
            label="Search Users"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
          />
        </Stack>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>ID</b></TableCell>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Email</b></TableCell>
                <TableCell><b>Status</b></TableCell>
                <TableCell><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Typography
                      color={
                        user.status === "Active"
                          ? "green"
                          : user.status === "Blocked"
                          ? "red"
                          : "orange"
                      }
                    >
                      {user.status}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {user.status === "Active" && (
                      <Stack direction="row" spacing={1}>
                        <Button
                          variant="contained"
                          color="warning"
                          size="small"
                          onClick={() => openDialog(user, "Deactivate")}
                        >
                          Deactivate
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          size="small"
                          onClick={() => openDialog(user, "Block")}
                        >
                          Block
                        </Button>
                      </Stack>
                    )}
                    {user.status === "Deactivated" && (
                      <Button
                        variant="contained"
                        color="success"
                        size="small"
                        onClick={() => openDialog(user, "Activate")}
                      >
                        Activate
                      </Button>
                    )}
                    {user.status === "Blocked" && (
                      <Typography variant="body2" color="text.secondary">
                        No actions available
                      </Typography>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <ConfirmationDialog
        open={isDialogOpen}
        action={dialogAction}
        selectedUser={selectedUser}
        handleCancel={() => setIsDialogOpen(false)}
        handleConfirm={handleConfirmAction}
      />
    </>
  );
};

export default UserTable;

import React, { useState, useEffect } from "react";
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
import { useUserStore } from "../../../store/UserStore";

type TableUser = {
  id: number;
  email: string;
  fullName: string;
  password: string;
  role: string;
  created_at: string;
  updated_at: string;
  is_blocked: number;
};

const UserTable: React.FC = () => {
  const { users, fetchUsers, block, unblock } = useUserStore();
  const [search, setSearch] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<TableUser | null>(null);
  const [dialogAction, setDialogAction] = useState<"Block" | "Unblock" | "">("");

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleConfirmAction = async () => {
    if (!selectedUser || !dialogAction) return;
    if (dialogAction === "Block") {
      await block(selectedUser.id);
    } else {
      await unblock(selectedUser.id);
    }
    setIsDialogOpen(false);
    setSelectedUser(null);
    setDialogAction("");
  };

  const openDialog = (user: any, action: "Block" | "Unblock") => {
    setSelectedUser(user);
    setDialogAction(action);
    setIsDialogOpen(true);
  };

  const filteredUsers = users.filter(
    (u) =>
      u.fullName.toLowerCase().includes(search.toLowerCase()) ||
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
                  <TableCell>{user.fullName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Typography color={user.is_blocked === 1 ? "red" : "green"}>
                      {user.is_blocked === 1 ? "Blocked" : "Active"}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {user.is_blocked === 1 ? (
                      <Button
                        variant="contained"
                        color="success"
                        size="small"
                        onClick={() => openDialog(user, "Unblock")}
                      >
                        Unblock
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => openDialog(user, "Block")}
                      >
                        Block
                      </Button>
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

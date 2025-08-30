// RequestFilter.tsx
import { useState, ChangeEvent } from "react";
import { Box, TextField, MenuItem, Select, InputLabel, FormControl, Stack } from "@mui/material";

export type RequestStatus = "All" | "Pending" | "Accepted" | "Rejected";

interface RequestFilterProps {
  onFilterChange: (search: string, status: RequestStatus) => void;
}

export default function RequestFilter({ onFilterChange }: RequestFilterProps) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<RequestStatus>("All");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onFilterChange(value, status);
  };

  const handleStatusChange = (e: any) => {
    const value = e.target.value as RequestStatus;
    setStatus(value);
    onFilterChange(search, value);
  };

  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 3 }}>
      <TextField
        fullWidth
        label="Search Requests"
        variant="outlined"
        value={search}
        onChange={handleSearchChange}
      />

      <FormControl sx={{ minWidth: 100 }}>
        <InputLabel>Status</InputLabel>
        <Select value={status} label="Status" onChange={handleStatusChange}>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Accepted">Accepted</MenuItem>
          <MenuItem value="Rejected">Rejected</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}

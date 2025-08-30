import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { DemoProvider, useDemoRouter } from "@toolpad/core/internal";
import DashboardSection from "../components/Dashboard/DashboardSection/DashboardSection";
import RequestSection from "../components/Dashboard/OrdersSection/RequestSection";
import UsersSection from "../components/Dashboard/UsersSection/UsersSection";


function LogoutPage() {
  return (
    <Box p={3}>
      <Typography variant="h4" color="error">
        Log Out
      </Typography>
      <Typography>You have been logged out.</Typography>
    </Box>
  );
}

const NAVIGATION: Navigation = [
  { segment: "dashboard", title: "Dashboard", icon: <DashboardIcon /> },
  { segment: "orders", title: "Orders", icon: <ShoppingCartIcon /> },
  { segment: "users", title: "Users", icon: <PersonIcon /> },
  { kind: "divider" },
  { segment: "logout", title: "Log Out", icon: <LogoutIcon /> },
];

const demoTheme = createTheme({
  cssVariables: { colorSchemeSelector: "data-toolpad-color-scheme" },
  breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 } },
});

interface DemoProps {
  window?: () => Window;
}

export default function Dashboard(props: DemoProps) {
  const { window } = props;
  const router = useDemoRouter("/dashboard");
  const demoWindow = window !== undefined ? window() : undefined;

  const renderContent = () => {
    switch (router.pathname) {
      case "/dashboard":
        return <DashboardSection />;
      case "/orders":
        return <RequestSection />;
      case "/users":
        return <UsersSection />;
      case "/logout":
        return <LogoutPage />;
      default:
        return <Typography>Page not found</Typography>;
    }
  };

  return (
    <DemoProvider window={demoWindow}>
      <AppProvider
        navigation={NAVIGATION}
        branding={{
          logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
          title: "Admin",
          homeUrl: "/dashboard",
        }}
        router={router}
        theme={demoTheme}
        window={demoWindow}
      >
        <DashboardLayout>{renderContent()}</DashboardLayout>
      </AppProvider>
    </DemoProvider>
  );
}

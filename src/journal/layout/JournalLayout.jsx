import { Box } from "@mui/material";
import React from "react";
import { Navbar, Sidebar } from "../components";

const drawerWidth = 280;

const JournalLayout = ({ children }) => {
    return (
        <Box
            className="animate__animated animate__fadeIn animate__faster"
            sx={{ display: "flex" }}
        >
            <Navbar drawerWidth={drawerWidth} />
            <Sidebar drawerWidth={drawerWidth} />
            <Box component="main" sx={{ flexGrow: 1, mt: "50px", p: 4 }}>
                {children}
            </Box>
        </Box>
    );
};

export default JournalLayout;

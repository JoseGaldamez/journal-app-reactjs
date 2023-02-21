import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";

export const NothingSelectedView = () => {
    return (
        <Grid
            container
            className="animate__animated animate__fadeIn animate__faster"
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: " calc(100vh - 120px)",
                backgroundColor: "primary.main",
                borderRadius: 2,
            }}
        >
            <Grid item xs={12}>
                <StarOutline sx={{ fontSize: 50, color: "white" }} />
            </Grid>
            <Grid item xs={12}>
                <Typography color="white" variant="h5">
                    Selecciona una entrada
                </Typography>
            </Grid>
        </Grid>
    );
};

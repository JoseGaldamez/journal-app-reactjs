import React from "react";
// Material
import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";

// Components
import { ImageGallery } from "../journal/components";

export const NoteView = () => {
    return (
        <Grid
            container
            className="animate__animated animate__fadeIn animate__faster"
            direction="row"
            justifyContent="space-between"
            sx={{ mb: 1 }}
        >
            <Grid item>
                <Typography fontWeight="light" fontSize={30}>
                    28 de agosto de 2023
                </Typography>
            </Grid>
            <Grid item>
                <Button>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{ border: "none", mb: 1 }}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió el día de hoy?"
                    minRows={5}
                    sx={{ border: "none", mb: 1 }}
                />
            </Grid>

            {/* Galeria de imagenes */}
            <ImageGallery />
        </Grid>
    );
};

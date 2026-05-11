import React from "react";
import { Box, Typography, Container, Grid, Link, Divider, Stack } from "@mui/material";
import { FaInstagram, FaTiktok, FaYoutube, FaSpotify } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "transparent", 
        color: "#fff",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
          
          {/* Kolom 1: Logo */}
          <Grid item xs={12} md={4}>
            <Box sx={{ maxWidth: "200px" }}>
              <img src="/assets/LogoGama.PNG" alt="Gama Visual" /> 
            </Box>
          </Grid>

          {/* Kolom 2: Contact Us */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, fontSize: '0.9rem' }}>
              CONTACT US
            </Typography>
            <Stack spacing={1}>
              <Link href="mailto:email@example.com" color="inherit" underline="hover" sx={{ opacity: 0.8, fontSize: '0.85rem' }}>
                Email Gama Visual
              </Link>
              <Link href="#" color="inherit" underline="hover" sx={{ opacity: 0.8, fontSize: '0.85rem' }}>
                Location
              </Link>
            </Stack>
          </Grid>

          {/* Kolom 3: Follow Us On */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, fontSize: '0.9rem' }}>
              FOLLOW US ON
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link href="#" color="inherit" sx={{ fontSize: "1.5rem", opacity: 0.9, "&:hover": { opacity: 1 } }}>
                <FaInstagram />
              </Link>
              <Link href="#" color="inherit" sx={{ fontSize: "1.5rem", opacity: 0.9, "&:hover": { opacity: 1 } }}>
                <FaTiktok />
              </Link>
              <Link href="#" color="inherit" sx={{ fontSize: "1.5rem", opacity: 0.9, "&:hover": { opacity: 1 } }}>
                <FaYoutube />
              </Link>
              <Link href="#" color="inherit" sx={{ fontSize: "1.5rem", opacity: 0.9, "&:hover": { opacity: 1 } }}>
                <FaSpotify />
              </Link>
            </Stack>
          </Grid>
        </Grid>

        {/* Garis Pemisah Horizontal */}
        <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.3)" }} />

        {/* Copyright Section */}
        <Typography
          variant="body2"
          align="center"
          sx={{ opacity: 0.7, fontSize: "0.75rem", letterSpacing: 0.5 }}
        >
          © 2026 Gama Visual. All rights reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
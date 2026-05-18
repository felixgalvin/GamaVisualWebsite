import React from "react";
import { Box, Typography, Container, Grid, Link, Divider, Stack } from "@mui/material";
import { FaInstagram, FaTiktok, FaYoutube, FaSpotify } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        // Gradient sesuai gambar referensi
        background: "linear-gradient(135deg, #7FA9FB 0%, #A1C4FD 100%)",
        color: "#fff",
        pt: 7,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        {/* Gunakan justifyContent="space-between" agar tiap kolom punya jarak maksimal */}
        <Grid container spacing={4} sx={{ justifyContent: "space-between", alignItems: "flex-start" }}>
          
          {/* Kolom 1: Logo (Diberi ruang md: 4) */}
          <Grid item xs={12} md={4}>
            <Box 
              sx={{ 
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" }
              }}
            >
              <Box
                component="img"
                src="/LogoGama.PNG"
                alt="Gama Visual"
                sx={{
                  width: "100%",
                  maxWidth: "220px",
                  height: "auto",
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))",
                }}
              />
            </Box>
          </Grid>

          {/* Kolom 2: Contact Us (md: 3 agar ada jarak lega dari logo) */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="subtitle2" 
              sx={{ 
                fontWeight: 700, 
                mb: 2, 
                fontSize: '0.8rem', 
                letterSpacing: 1.2,
                textAlign: { xs: "center", md: "left" }
              }}
            >
              CONTACT US
            </Typography>
            <Stack 
              spacing={1} 
              sx={{ alignItems: { xs: "center", md: "flex-start" } }}
            >
              <Link href="mailto:email@example.com" color="inherit" underline="none" sx={{ opacity: 0.9, fontSize: '0.85rem' }}>
                gama.visual.id@gmail.com
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.9, fontSize: '0.85rem' }}>
                Bandung
              </Link>
            </Stack>
          </Grid>

          {/* Kolom 3: Follow Us On (md: 3) */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="subtitle2" 
              sx={{ 
                fontWeight: 700, 
                mb: 2, 
                fontSize: '0.8rem', 
                letterSpacing: 1.2,
                textAlign: { xs: "center", md: "left" }
              }}
            >
              FOLLOW US ON
            </Typography>
            <Stack 
              direction="row" 
              spacing={2} 
              sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
            >
              {[
                { icon: <FaInstagram />, url: "https://www.instagram.com/gama.visual.ofc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                { icon: <FaTiktok />, url: "https://www.tiktok.com/@gamavisual.id?is_from_webapp=1&sender_device=pc" },
                { icon: <FaYoutube />, url: "https://www.youtube.com/@Gama.Visual" },
                { icon: <FaSpotify />, url: "https://open.spotify.com/artist/4VtoybpnsR8ZVHhFbXXUkr?si=8sQTB5zzS4u8bwdLixb-Ow" },
              ].map((social, index) => (
                <Link 
                  key={index}
                  href={social.url} 
                  color="inherit" 
                  sx={{ 
                    fontSize: "1.4rem", 
                    opacity: 0.9, 
                    display: "flex",
                    "&:hover": { transform: "translateY(-2px)", transition: "0.2s" } 
                  }}
                >
                  {social.icon}
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 8, mb: 4, borderColor: "rgba(255, 255, 255, 0.4)", borderBottomWidth: 2.5 }} />

        <Typography
          variant="caption"
          display="block"
          align="center"
          sx={{ opacity: 0.8, fontSize: "0.75rem", letterSpacing: 0.5 }}
        >
          © 2026 Gama Visual. All rights reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
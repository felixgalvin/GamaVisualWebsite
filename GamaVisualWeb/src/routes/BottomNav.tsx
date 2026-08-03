import React from "react";
import { Box, Typography, Container, Link, Divider, Stack } from "@mui/material";
import { FaInstagram, FaTiktok, FaYoutube, FaSpotify } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        background: "linear-gradient(135deg, #7FA9FB 0%, #A1C4FD 100%)",
        color: "#fff",
        pt: { xs: 6, md: 7 },
        pb: { xs: 4, md: 3 },
      }}
    >
      <Container maxWidth="lg">
        {/* Gunakan justifyContent="space-between" agar tiap kolom punya jarak maksimal */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 3, md: 4 }, justifyContent: "space-between", alignItems: "flex-start" }}>
          
          {/* Kolom 1: Logo (Diberi ruang md: 4) */}
          <Box sx={{ width: { xs: "100%", md: "33%" } }}>
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
                  maxWidth: { xs: "180px", md: "220px" },
                  height: "auto",
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))",
                }}
              />
            </Box>
          </Box>

          {/* Kolom 2: Contact Us (md: 3 agar ada jarak lega dari logo) */}
          <Box sx={{ width: { xs: "100%", sm: "calc(50% - 12px)", md: "25%" } }}>
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
              <Link color="inherit" underline="none" sx={{ opacity: 0.9, fontSize: '0.85rem' }}>
                gama.visual.id@gmail.com
              </Link>
              <Link color="inherit" underline="none" sx={{ opacity: 0.9, fontSize: '0.85rem' }}>
                Bandung
              </Link>
            </Stack>
          </Box>

          {/* Kolom 3: Follow Us On (md: 3) */}
          <Box sx={{ width: { xs: "100%", sm: "calc(50% - 12px)", md: "25%" } }}>
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
              spacing={{ xs: 1.5, md: 2 }} 
              sx={{ justifyContent: { xs: "center", md: "flex-start" }, flexWrap: "wrap" }}
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
          </Box>
        </Box>

        <Divider sx={{ mt: 8, mb: 4, borderColor: "rgba(255, 255, 255, 0.4)", borderBottomWidth: 2.5 }} />

        <Typography
          variant="caption"
          sx={{ opacity: 0.8, fontSize: "0.75rem", letterSpacing: 0.5, display: "block", textAlign: "center" }}
        >
          © 2026 Gama Visual. All rights reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
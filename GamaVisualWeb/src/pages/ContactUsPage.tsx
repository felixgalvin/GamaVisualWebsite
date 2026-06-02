import React, { useEffect } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../routes/NavBar";
import Footer from "../routes/BottomNav";
import coverBg from "../assets/CoverBlur.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ContactUsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", width: "100vw", backgroundColor: "#050A30", color: "#fff", overflowX: "hidden" }}>
      <Navbar />

      <Box
        component={motion.div}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        sx={{
          minHeight: { xs: "85vh", md: "100vh" },
          width: "100%",
          backgroundImage: `url('${coverBg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          pt: { xs: 12, md: 0 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(6, 13, 56, 0.65) 0%, rgba(6, 13, 56, 0.92) 100%)",
            zIndex: 1,
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            px: { xs: 3, md: 0 },
            mt: { xs: 6, md: 10 },
          }}
        >
          <Box component={motion.div} initial="hidden" animate="visible" variants={fadeInUp}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                letterSpacing: 1,
                mb: 3,
                fontSize: { xs: "2.4rem", md: "4.1rem" },
                lineHeight: 1.05,
                color: "#ffffff"
              }}
            >
              Dukung Karya Penuh Makna
            </Typography>
          </Box>

          <Box component={motion.div} initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}>
            <Typography
              variant="h6"
              sx={{
                maxWidth: { xs: "100%", md: "950px" },
                mx: "auto",
                mb: 2,
                fontWeight: 400,
                lineHeight: 1.8,
                opacity: 0.9,
                fontSize: { xs: "1rem", md: "1.8rem" }
              }}
            >
              Di balik setiap karya yang bermakna, selalu ada dukungan yang membuat perjalanan itu terus berjalan.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: "740px",
                mx: "auto",
                mb: 6,
                fontWeight: 300,
                lineHeight: 1.9,
                opacity: 0.85,
                fontSize: { xs: "0.9rem", md: "1.4rem" }
              }}
            >
              Mari dukung perjalanan ini melalui donasi yang membantu lebih banyak talenta mendapatkan kesempatan untuk belajar, berkembang, dan menjadi berkat bagi sesama.
            </Typography>
          </Box>

          <Box component={motion.div} initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.4 }}>
            <Button
              href="https://www.instagram.com/gama.visual.ofc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              variant="contained"
              sx={{
                px: 5,
                py: 1.8,
                borderRadius: "999px",
                backgroundColor: "#FFFFFF",
                color: "#050A30",
                textTransform: "none",
                fontWeight: 700,
                fontSize: "0.95rem",
                boxShadow: "0px 18px 40px rgba(0, 0, 0, 0.18)",
                transition: "transform 0.25s ease, background-color 0.25s ease",
                '&:hover': {
                  backgroundColor: "#E8E8E8",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Jadi Bagian dari Perjalanan Ini
            </Button>
          </Box>
        </Container>
      </Box>
      
      <Footer />
    </Box>
  );
};

export default ContactUsPage;

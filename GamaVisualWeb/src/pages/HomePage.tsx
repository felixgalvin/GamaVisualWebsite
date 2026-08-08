import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Button, Fab, Zoom } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { motion, type Variants } from "framer-motion";
import Navbar from "../routes/NavBar";
import Footer from "../routes/BottomNav";
import coverImg from "../assets/CoverBlur.png";
import thumbnail from "../assets/YTThumbnailKasihMuTakBerubah.png";
import thumbnail2 from "../assets/YTThumbnailSDD.png";
import behind from "../assets/SiaranRadioMei.jpeg";
import behind2 from "../assets/aboutus6.png";
import behind3 from "../assets/aboutus.png";

const MotionBox = motion(Box);

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box sx={{ minHeight: "100vh", width: "100vw", backgroundColor: "#050A30", color: "#fff", overflowX: "hidden" }}>
      <Navbar />

      {/* 1. HERO SECTION */}
      <Box
        component={MotionBox}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        sx={{
          minHeight: { xs: "calc(100svh - 70px)", md: "100vh" },
          backgroundImage: `url('${coverImg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "center", md: "center" },
          alignItems: "center",
          textAlign: "center",
          pt: { xs: 0, md: 0 },
        }}
      >
        <Box
          component="img"
          src="LogoGama.PNG"
          sx={{ width: { xs: "80%", md: "50%" }, maxWidth: "600px", mb: 2, marginTop: { xs: 0, md: "80px" } }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>

        {/* 2. QUOTE SECTION */}
        <Box
          component={MotionBox}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          sx={{ textAlign: "center", mb: { xs: 10, md: 15 }, px: { xs: 2, md: 10 } }}
        >
          <Typography variant="h5" sx={{ fontStyle: "italic", mb: 2, fontSize: { xs: "1rem", md: "1.7rem" } }}>
            "Apa pun juga yang kamu perbuat, perbuatlah dengan segenap hatimu seperti untuk Tuhan dan bukan untuk manusia."
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: { xs: "0.5rem", md: "1.2rem" } }}>Kolose 3 : 23</Typography>
        </Box>

        {/* 3. VIDEO/ALBUM SECTION */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
            gap: 4,
            mb: 15,
            justifyItems: "center"
          }}
        >
          {[
            { img: thumbnail, url: "https://youtu.be/xZK7DLkecv0?si=FCYqA0ykr-bByyb7" },
            { img: thumbnail2, url: "https://youtu.be/utt1EwW945g" }
          ].map((item, index) => (
            <Box
              key={index}
              component={MotionBox}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Box
                component="a"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: "100%",
                  maxWidth: "510px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  lineHeight: 0,
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
                  transition: "transform 0.3s ease-in-out",
                  cursor: "pointer",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  "&:hover": {
                    transform: "scale(1.05)"
                  },

                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={`Album ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                    aspectRatio: "16/9"
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>

        {/* 4. ABOUT SECTION */}
        <Box
          id="about-section"
          component={MotionBox}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          sx={{
            mb: 15,
            width: "100%",
            px: { xs: 2, md: 0 }
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 4, md: 8 },
              alignItems: "flex-start",
              width: "100%"
            }}
          >
            {/* KOLOM KIRI: JUDUL (Strict 40%-50% Width) */}
            <Box sx={{ width: { xs: "100%", md: "45%" }, flexShrink: 0, textAlign: "left" }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 500,
                  opacity: 0.8,
                  fontSize: { xs: "2.4rem", md: "3.5rem" },
                  mb: 0.5
                }}
              >
                What is
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.1,
                  textTransform: "uppercase",
                  fontSize: { xs: "4.5rem", md: "5.5rem" },
                  letterSpacing: "-1px",
                  color: "#f3eeee"
                }}
              >
                GAMA VISUAL?
              </Typography>
            </Box>

            {/* KOLOM KANAN: DESKRIPSI & TOMBOL (Sisa lebar ruang / 55%) */}
            <Box sx={{ width: { xs: "100%", md: "55%" }, textAlign: "left", pt: { md: 1.5 } }}>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.1rem", opacity: 0.9 }}>
                Gama Visual adalah komunitas kreatif yang berjalan dengan berkolaborasi serta mewadahi generasi muda yang memiliki talenta melalui karya musik yang membawa pesan kasih dan pengharapan.
              </Typography>

              <Typography variant="body1" sx={{ mb: 5, lineHeight: 1.8, fontSize: "1.1rem", opacity: 0.9 }}>
                “Gama” berarti perjalanan—sebuah proses yang penuh makna, yang membentuk kami untuk terus berkarya dan menjadi berkat bagi sesama.
              </Typography>

              <Button
                variant="contained"
                onClick={() => navigate('/about')}
                sx={{
                  borderRadius: "30px",
                  bgcolor: "#E8EAF6",
                  color: "#050A30",
                  px: 6,
                  py: 1.5,
                  fontWeight: 700,
                  textTransform: "none",
                  fontSize: "1rem",
                  "&:hover": { bgcolor: "#fff" }
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Box>

        {/* 5. BEHIND THE SCENE SECTION */}
        <Box sx={{ textAlign: "center", mb: 10, width: "100%" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 6, letterSpacing: 1 }}
          >
            Behind The Scene
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
            {[behind, behind2, behind3].map((path, index) => (
              <Box
                key={index}
                component={MotionBox}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  width: {
                    xs: "100%",
                    sm: "calc((100% - 32px) / 2)",
                    md: "calc((100% - 64px) / 3)"
                  },
                  maxWidth: { xs: "520px", sm: "none" }
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "4 / 3",
                    borderRadius: "24px",
                    overflow: "hidden",
                    lineHeight: 0,
                    boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0px 20px 40px rgba(0,0,0,0.5)",
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={path}
                    alt={`Behind the scene ${index + 1}`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block"
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

      </Container>

      <Footer />

      {/* BUTTON SCROLL TO TOP */}
      <Zoom in={showButton}>
        <Fab
          onClick={scrollToTop}
          size="small"
          sx={{
            position: "fixed",
            bottom: { xs: 20, md: 30 },
            right: { xs: 20, md: 30 },
            bgcolor: "rgba(232, 234, 246, 0.8)", // Warna seperti tombol Learn More tapi transparan
            color: "#050A30",
            "&:hover": {
              bgcolor: "#fff",
            },
            zIndex: 1000,
          }}
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>

    </Box>
  );
};

export default HomePage;
import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Grid, Button, Fab, Zoom } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { motion } from "framer-motion";
import Navbar from "../routes/NavBar";
import Footer from "../routes/BottomNav";
import coverImg from "../assets/CoverBlur.png"; 
import thumbnail from "../assets/YTThumbnailKasihMuTakBerubah.jpg"; 
import siaran from "../assets/SiaranRadioMei.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
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
        component={motion.div}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        sx={{
          height: "100vh",
          backgroundImage: `url('${coverImg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          component="img"
          src="LogoGama.PNG" 
          sx={{ width: { xs: "80%", md: "50%" }, maxWidth: "600px", mb: 2, marginTop: { xs: "110px", md: "80px" } }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        
        {/* 2. QUOTE SECTION */}
        <Box 
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          sx={{ textAlign: "center", mb: 15, px: { xs: 2, md: 10 } }}
        >
          <Typography variant="h5" sx={{ fontStyle: "italic", mb: 2 }}>
            "Apa pun juga yang kamu perbuat, perbuatlah dengan segenap hatimu seperti untuk Tuhan dan bukan untuk manusia."
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Kolose 3 : 23</Typography>
        </Box>

        {/* 3. VIDEO/ALBUM SECTION */}
        <Grid 
          container 
          spacing={4} 
          sx={{ mb: 15 }} 
          justifyContent="center" 
        >
          {[
            { img: thumbnail, url: "https://youtu.be/xZK7DLkecv0?si=FCYqA0ykr-bByyb7" },
            { img: thumbnail, url: "https://youtu.be/xZK7DLkecv0?si=FCYqA0ykr-bByyb7" }
          ].map((item, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={5} 
              lg={5} 
              key={index}
            >
              <Box
                component={motion.div}
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
                    lineHeight: 0, // Penting: Menghilangkan whitespace ekstra di bawah elemen inline
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
                    transition: "transform 0.3s ease-in-out",
                    cursor: "pointer",
                    textDecoration: "none",
                    backgroundColor: "transparent", // Memastikan tidak ada background warna lain
                    "&:hover": { 
                      transform: "scale(1.05)" 
                    },
                    marginRight: index === 0 ? 9 : 0 // Memberi margin hanya pada item pertama
                  }}
                >
                  <Box
                    component="img"
                    src={item.img}
                    alt={`Album ${index + 1}`}
                    sx={{
                      width: "100%",
                      height: "100%", // Mengisi seluruh area box
                      display: "block",
                      objectFit: "cover", // Memotong sedikit jika rasio berbeda agar box terisi penuh
                      aspectRatio: "16/9" // Memaksa gambar mengikuti rasio standar YouTube
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* 4. ABOUT SECTION */}
        <Box
          id="about-section"
          component={motion.div}
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
                  fontSize: { xs: "3.2rem", md: "3.5rem" },
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
                  letterSpacing: "-1px"
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

          <Grid container spacing={3} justifyContent="center">
            {[siaran, siaran, siaran].map((path, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  sx={{ 
                    width: "100%",
                    borderRadius: "16px",
                    overflow: "hidden",
                    lineHeight: 0, // Menghilangkan gap kecil di bawah gambar
                    boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0px 20px 40px rgba(0,0,0,0.5)",
                    },
                    marginRight: 19.3
                  }}
                >
                  <Box
                    component="img"
                    src={path}
                    alt={`Behind the scene ${index + 1}`}
                    sx={{
                      width: "100%",
                      height: "280px", // Kamu bisa ganti ke "auto" jika ingin mengikuti rasio asli
                      objectFit: "cover", // Memastikan gambar memenuhi kotak tanpa gepeng
                      display: "block"
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
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
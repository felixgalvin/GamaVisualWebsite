import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography, Container, Grid, Button, Fab, Zoom, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Navbar from "../routes/NavBar";
import Footer from "../routes/BottomNav";

// IMAGE IMPORTS
import coverBlur from "../assets/CoverBlur.png"; 
import otnil from "../assets/koOT.jpeg";
import tasya from "../assets/Tasya.jpeg";
import felix from "../assets/Felix.jpeg";

const memberData = {
  header: [coverBlur, otnil, tasya, felix],
  founders: [
    {
      name: "Otniel",
      image: otnil,
      bio: [
        "Iman Kristen mengajarkan kasih, pengharapan, dan keselamatan melalui Tuhan. Dalam setiap musim kehidupan, Tuhan selalu menyertai, menguatkan, dan memberikan damai yang melampaui segala akal.",
        "Tuhan tidak pernah terlambat, dan tidak pernah terlalu cepat—Dia selalu tepat waktu.",
        "Mazmur 23:1 - Tuhan adalah gembalaku, takkan kekurangan aku."
      ]
    },
    {
      name: "Tasya",
      image: tasya,
      bio: [
        "Bernyanyi bagi kemuliaan-Nya. Aku hendak menyanyi bagi TUHAN selama aku hidup, aku hendak bermazmur bagi Allahku selagi aku ada.",
        "Tetap menjadi diri mu sendiri dan melayani Tuhan dengan kelebihan mu karena Tuhan mengasihi kamu.",
        "Mazmur 104:33 - Aku hendak menyanyi bagi TUHAN selama aku hidup."
      ]
    }
  ],
  singers: [
    {
      name: "Felix Galvin",
      image: felix,
      bio: [
        "Bernyanyi bagi kemuliaan-Nya. Aku hendak menyanyi bagi TUHAN selama aku hidup.",
        "Tetap menjadi diri mu sendiri dan melayani Tuhan dengan kelebihan mu karena Tuhan mengasihi kamu.",
        "Yeremia 29:11 - Sebab Aku ini mengetahui rancangan-rancangan apa yang ada pada-Ku mengenai kamu..."
      ]
    }
  ],
  cards: [
    { name: "Tasya", image: tasya, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { name: "Felix Galvin", image: felix, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
  ]
};

// --- KOMPONEN SLIDER (Logika Identik dengan QuoteSlider) ---
const HeaderSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <Box sx={{ 
      position: "relative", 
      width: "100%", 
      height: "600px", 
      borderRadius: "24px", // Menambahkan radius agar sama dengan referensi
      overflow: "hidden",
      boxShadow: "0px 15px 50px rgba(0,0,0,0.6)",
      backgroundColor: "#101426",
      mb: 12
    }}>
      <AnimatePresence mode="wait">
        <Box
          key={currentIndex}
          component={motion.img}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          src={images[currentIndex]}
          sx={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute" }}
        />
      </AnimatePresence>

      {/* Layer Overlay Teks */}
      <Box sx={{ 
        position: "absolute", 
        inset: 0, 
        display: "flex", 
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center",
        background: "linear-gradient(to bottom, rgba(5, 10, 48, 0.3), rgba(5, 10, 48, 0.6))",
        zIndex: 1,
        textAlign: "center"
      }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontWeight: 900, 
            textTransform: "uppercase", 
            letterSpacing: 4,
            fontSize: { xs: "2.5rem", md: "4rem" },
            textShadow: "2px 2px 15px rgba(0,0,0,0.7)"
          }}
        >
          MEMBER PROFILE
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{ opacity: 0.9, maxWidth: "700px", mt: 2, px: 2, fontWeight: 500 }}
        >
          bisa highlight per orang, atau foto all member crew pas shoot atau behind the scene
        </Typography>
      </Box>
    </Box>
  );
};

const MemberPage: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#050A30", color: "#fff" }}>
      <Navbar />

      {/* Perbaikan Utama: Membungkus HeaderSlider di dalam Container maxWidth="lg" agar tidak terpotong */}
      <Container maxWidth="lg" sx={{ pt: 15 }}>
        
        <HeaderSlider images={memberData.header} />

        {/* Bagian Konten Bawah menggunakan maxWidth="md" agar teks lebih enak dibaca */}
        <Container maxWidth="md">
          <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 10, letterSpacing: 2 }}>
            FOUNDERS
          </Typography>

          {memberData.founders.map((item, index) => (
            <Grid container spacing={6} key={index} sx={{ mb: 15, alignItems: "flex-start" }}>
              <Grid item xs={12} md={5}>
                <Box sx={{ position: "relative" }}>
                  <Box 
                    component="img" 
                    src={item.image} 
                    sx={{ 
                      width: "100%", 
                      borderRadius: "24px", 
                      boxShadow: "0px 15px 50px rgba(0,0,0,0.5)",
                      aspectRatio: "1/1",
                      objectFit: "cover"
                    }} 
                  />
                  <IconButton sx={{ position: "absolute", top: 15, left: 15, bgcolor: "rgba(255,255,255,0.15)", color: "#fff" }}>
                    <InstagramIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>{item.name}</Typography>
                {item.bio.map((text, i) => (
                  <Box key={i} sx={{ display: "flex", gap: 2, mb: 3 }}>
                    <Typography sx={{ fontWeight: 800, color: "rgba(255,255,255,0.5)" }}>0{i + 1}</Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, opacity: 0.9 }}>{text}</Typography>
                  </Box>
                ))}
              </Grid>
            </Grid>
          ))}

          <Typography variant="h3" align="center" sx={{ fontWeight: 800, mt: 5, mb: 10, letterSpacing: 2 }}>
            SINGER
          </Typography>

          {memberData.singers.map((item, index) => (
            <Grid container spacing={6} key={index} sx={{ mb: 15, alignItems: "flex-start" }}>
              <Grid item xs={12} md={5}>
                <Box sx={{ position: "relative" }}>
                  <Box component="img" src={item.image} sx={{ width: "100%", borderRadius: "24px", boxShadow: "0px 15px 50px rgba(0,0,0,0.5)", aspectRatio: "1/1", objectFit: "cover" }} />
                  <IconButton sx={{ position: "absolute", top: 15, left: 15, bgcolor: "rgba(255,255,255,0.15)", color: "#fff" }}>
                    <InstagramIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>{item.name}</Typography>
                {item.bio.map((text, i) => (
                  <Box key={i} sx={{ display: "flex", gap: 2, mb: 3 }}>
                    <Typography sx={{ fontWeight: 800, color: "rgba(255,255,255,0.5)" }}>0{i + 1}</Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, opacity: 0.9 }}>{text}</Typography>
                  </Box>
                ))}
              </Grid>
            </Grid>
          ))}

          <Grid container spacing={4} sx={{ mt: 5 }}>
            {memberData.cards.map((card, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box sx={{ 
                  bgcolor: "rgba(255,255,255,0.03)", borderRadius: "28px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)", transition: "0.4s",
                  "&:hover": { transform: "translateY(-12px)", bgcolor: "rgba(255,255,255,0.07)" }
                }}>
                  <Box component="img" src={card.image} sx={{ width: "100%", height: "280px", objectFit: "cover" }} />
                  <Box sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>{card.name}</Typography>
                    <Typography variant="body2" sx={{ opacity: 0.6, mb: 4, minHeight: "60px", lineHeight: 1.6 }}>{card.desc}</Typography>
                    <Button variant="contained" sx={{ borderRadius: "30px", bgcolor: "#E8EAF6", color: "#050A30", fontWeight: 700, textTransform: "none", px: 5, py: 1.2, "&:hover": { bgcolor: "#fff" } }}>
                      Learn More
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>

      <Footer />

      <Zoom in={showButton}>
        <Fab onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} size="small" sx={{ position: "fixed", bottom: 30, right: 30, bgcolor: "#E8EAF6", color: "#050A30" }}>
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </Box>
  );
};

export default MemberPage;
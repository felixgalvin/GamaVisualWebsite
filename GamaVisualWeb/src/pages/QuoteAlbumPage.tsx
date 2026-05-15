import React, { useState, useEffect, useRef, useCallback } from "react";
import { Box, Typography, Container, Grid, Button, Fab, Zoom, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Navbar from "../routes/NavBar";
import Footer from "../routes/BottomNav";

// IMAGE IMPORTS (Tetap seperti sebelumnya)
import coverBlur from "../assets/CoverBlur.png"; 
import inner1 from "../assets/InnerPeace.png";
import inner2 from "../assets/InnerPeace2.png";
import inner3 from "../assets/InnerPeace3.png";
import inner4 from "../assets/InnerPeace4.png";
import surrend1 from "../assets/SurrenderTrust.png";
import surrend2 from "../assets/SurrenderTrust2.png";
import surrend3 from "../assets/SurrenderTrust3.png";
import resil1 from "../assets/ResilienceFaith.png";
import resil2 from "../assets/ResilienceFaith2.png";
import resil3 from "../assets/ResilienceFaith3.png";
import love1 from "../assets/Love.png";
import love2 from "../assets/Love2.png";
import love3 from "../assets/Love3.png";
import grat1 from "../assets/Gratitude.png";
import grat2 from "../assets/Gratitude2.png";
import grat3 from "../assets/Gratitude3.png";

const quoteData: { [key: string]: string[] } = {
  "main-album": [coverBlur, inner1, inner2, inner3, inner4, surrend1, surrend2, surrend3, resil1, resil2, resil3, love1, love2, love3, grat1, grat2, grat3],
  "inner-peace": [inner1, inner2, inner3, inner4],
  "surrender": [surrend1, surrend2, surrend3],
  "resilience": [resil1, resil2, resil3],
  "love": [love1, love2, love3],
  "gratitude": [grat1, grat2, grat3],
};

const categories = [
  { id: "inner-peace", label: "Inner Peace" },
  { id: "surrender", label: "Surrender & Trust" },
  { id: "resilience", label: "Resilience & Faith" },
  { id: "love", label: "Love & Compassion" },
  { id: "gratitude", label: "Gratitude" },
];

// --- KOMPONEN SLIDER ---
const QuoteSlider = ({ 
  sectionId, 
  title, 
  height = "450px", 
  isHeader = false,
  autoPlay = false 
}: { 
  sectionId: string, 
  title: string, 
  height?: string, 
  isHeader?: boolean,
  autoPlay?: boolean 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = quoteData[sectionId] || [];

  const handleNext = useCallback(() => {
    if (images.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  }, [images.length]);

  const handlePrev = () => {
    if (images.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    if (autoPlay && images.length > 0) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000); 
      return () => clearInterval(interval);
    }
  }, [autoPlay, handleNext, images.length]);

  if (images.length === 0) return null;

  return (
    <Box sx={{ mb: 12, textAlign: "center" }}>
      {!isHeader && (
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, textTransform: "uppercase", letterSpacing: 2 }}>
          {title}
        </Typography>
      )}
      
      <Box sx={{ 
        position: "relative", 
        width: "100%", 
        height: height, 
        borderRadius: "24px",
        overflow: "hidden",
        boxShadow: "0px 15px 50px rgba(0,0,0,0.6)",
        backgroundColor: "#101426"
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
            alt={`${title} ${currentIndex}`}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </AnimatePresence>

        {isHeader && (
          <Box sx={{ 
            position: "absolute", 
            inset: 0, 
            display: "flex", 
            flexDirection: "column",
            alignItems: "center", 
            justifyContent: "center",
            background: "linear-gradient(to bottom, rgba(5, 10, 48, 0.3), rgba(5, 10, 48, 0.6))",
            zIndex: 1 
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
              {title}
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ opacity: 0.9, maxWidth: "600px", mt: 2, px: 2, fontWeight: 500 }}
            >
              Kasih dan Pengharapan di Dalam Dia.
            </Typography>
          </Box>
        )}

        {!autoPlay && (
          <>
            <IconButton onClick={handlePrev} sx={{ position: "absolute", left: 15, top: "50%", zIndex: 2, color: "#fff", bgcolor: "rgba(255,255,255,0.1)", "&:hover": { bgcolor: "rgba(255,255,255,0.2)" } }}>
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton onClick={handleNext} sx={{ position: "absolute", right: 15, top: "50%", zIndex: 2, color: "#fff", bgcolor: "rgba(255,255,255,0.1)", "&:hover": { bgcolor: "rgba(255,255,255,0.2)" } }}>
              <ArrowForwardIosIcon />
            </IconButton>
          </>
        )}

        {/* DOTS HANYA MUNCUL JIKA BUKAN HEADER (AutoPlay Section) */}
        {!isHeader && (
          <Box sx={{ position: "absolute", bottom: 25, width: "100%", display: "flex", justifyContent: "center", gap: 1.5, zIndex: 2 }}>
            {images.map((_, i) => (
              <Box 
                key={i} 
                onClick={() => setCurrentIndex(i)}
                sx={{ 
                  width: i === currentIndex ? 30 : 8, 
                  height: 8, 
                  borderRadius: "4px", 
                  bgcolor: i === currentIndex ? "#fff" : "rgba(255,255,255,0.4)",
                  transition: "all 5s",
                  cursor: "pointer"
                }} 
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

// --- HALAMAN UTAMA ---
const QuotePage: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#050A30", color: "#fff" }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ pt: 15 }}>
        {/* Section 1: HEADER (Tanpa Dots, AutoPlay) */}
        <QuoteSlider 
            sectionId="main-album" 
            title="Quotes Album" 
            height="600px" 
            isHeader={true} 
            autoPlay={true} 
        />

        {/* Section 2: Navigasi Button */}
        <Grid container spacing={2} justifyContent="center" sx={{ mb: 15 }}>
          {categories.map((cat) => (
            <Grid item key={cat.id}>
              <Button
                variant="contained"
                onClick={() => scrollToSection(cat.id)}
                sx={{
                  borderRadius: "30px",
                  bgcolor: "#E8EAF6",
                  color: "#050A30",
                  px: { xs: 2, md: 4 },
                  fontWeight: 799,
                  "&:hover": { bgcolor: "#fff", transform: "scale(1.05)" },
                  transition: "0.3s",
                }}
              >
                {cat.label}
              </Button>
            </Grid>
          ))}
        </Grid>

        {/* Section Kategori (Dengan Dots, Manual Slider) */}
        {categories.map((cat) => (
          <Box 
            key={cat.id} 
            ref={(el) => (sectionRefs.current[cat.id] = el)}
            sx={{ pt: 10 }}
          >
            <QuoteSlider sectionId={cat.id} title={cat.label} />
          </Box>
        ))}
      </Container>

      <Footer />

      <Zoom in={showButton}>
        <Fab 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          size="small"
          sx={{ position: "fixed", bottom: 30, right: 30, bgcolor: "#E8EAF6", color: "#050A30" }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </Box>
  );
};

export default QuotePage;
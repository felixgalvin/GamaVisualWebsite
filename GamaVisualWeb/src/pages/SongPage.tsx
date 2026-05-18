import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Container, Button, Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { motion } from "framer-motion";
import Navbar from "../routes/NavBar";
import Footer from "../routes/BottomNav";

// Import your data store
import { songCatalog } from "../data/songs";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } }
};

const SongPage: React.FC = () => {
  const { songId } = useParams<{ songId: string }>();
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  // Find the matching song in your catalog
  const currentSong = songCatalog.find(song => song.id === songId);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setShowButton(window.scrollY > window.innerHeight);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // If someone types a bad URL, redirect them back to the Album page
  if (!currentSong) {
    return (
      <Box sx={{ minHeight: "100vh", width: "100vw", backgroundColor: "#050A30", color: "#fff", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <Container maxWidth="md" sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", py: 15 }}>
          <Typography variant="h1" sx={{ fontWeight: 900, fontSize: { xs: "6rem", md: "10rem" }, opacity: 0.1, position: "absolute" }}>
            404
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, textTransform: "uppercase", mb: 2, zIndex: 1 }}>
            Lagu Tidak Ditemukan
          </Typography>
          <Typography variant="body1" sx={{ mb: 6, fontSize: "1.2rem", opacity: 0.8, maxWidth: "500px", zIndex: 1 }}>
            Maaf, sepertinya lagu yang Anda cari tidak ada atau URL yang dimasukkan salah.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate('/album')}
            sx={{
              borderRadius: "30px",
              bgcolor: "#E8EAF6",
              color: "#050A30",
              px: 5,
              py: 1.5,
              fontWeight: 700,
              textTransform: "none",
              zIndex: 1,
              "&:hover": { bgcolor: "#fff" }
            }}
          >
            Kembali ke Album
          </Button>
        </Container>
        <Footer />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", width: "100vw", backgroundColor: "#050A30", color: "#fff", overflowX: "hidden" }}>
      <Navbar />

      <Container maxWidth="lg" sx={{ pt: { xs: 12, md: 15 }, pb: 15 }}>

        {/* HERO HEADER & MAIN COVER */}
        <Box component={motion.div} initial="hidden" animate="visible" variants={fadeIn} sx={{ textAlign: "center", mb: 8 }}>
          {/* Replaced hardcoded text with dynamic data */}
          <Box component={motion.div} initial="hidden" animate="visible" variants={fadeInUp}>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
              {currentSong.title}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600, opacity: 0.9, mb: 4 }}>
              {currentSong.releaseInfo}
            </Typography>
          </Box>

          <Box sx={{ width: "100%", borderRadius: "24px", overflow: "hidden", boxShadow: "0px 10px 30px rgba(0,0,0,0.5)", lineHeight: 0 }}>
            <Box component="img" src={currentSong.images.cover} alt="Main Cover" sx={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }} />
          </Box>
        </Box>

        {/* BIBLE QUOTE */}
        <Box component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} sx={{ textAlign: "center", mb: 10, px: { xs: 2, md: 10 } }}>
          <Typography variant="h6" sx={{ fontStyle: "italic", mb: 2, fontWeight: 400, opacity: 0.9 }}>
            {currentSong.bibleVerseText}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
            {currentSong.bibleVerseRef}
          </Typography>
        </Box>

        {/* LYRICS */}
        <Box component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4, mb: 10 }}>
          <Box sx={{ flex: 1, mb: { xs: 4, md: 0 } }}>
            <Typography variant="h3" sx={{ fontWeight: 800, textTransform: "uppercase", letterSpacing: 1 }}>
              SONG LYRIC
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" sx={{ whiteSpace: "pre-line", textAlign: "left", lineHeight: 1.8, fontSize: "1.1rem", opacity: 0.9 }}>
              {currentSong.lyrics}
            </Typography>
          </Box>
        </Box>

        {/* BEHIND THE SCENE IMAGES */}
        <Box component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4, mb: 6 }}>
          {[currentSong.images.bts1, currentSong.images.bts2].map((imgSrc, index) => (
            <Box key={index} sx={{ flex: 1, borderRadius: "20px", overflow: "hidden", bgcolor: "#E8EAF6", boxShadow: "0px 8px 25px rgba(0,0,0,0.3)", lineHeight: 0 }}>
              <Box component="img" src={imgSrc} alt={`Behind the scene ${index + 1}`} sx={{ width: "100%", height: "auto", display: "block" }} />
            </Box>
          ))}
        </Box>

        {/* SONG DESCRIPTION */}
        <Box component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} sx={{ mb: 12 }}>
          <Typography variant="body1" sx={{ textAlign: "justify", lineHeight: 1.8, fontSize: "1.1rem", opacity: 0.9 }}>
            {currentSong.description}
          </Typography>
        </Box>

        {/* ARTIST PROFILE */}
        <Box component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: { xs: 4, md: 8 } }}>
          <Box sx={{ width: { xs: "100%", md: "33.333%" } }}>
            <Box sx={{ width: "100%", aspectRatio: "1/1", borderRadius: "20px", overflow: "hidden", bgcolor: "#E8EAF6", boxShadow: "0px 8px 25px rgba(0,0,0,0.4)" }}>
              <Box component="img" src={currentSong.images.artist} alt={`${currentSong.artistName} Profile`} sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </Box>
          </Box>
          <Box sx={{ width: { xs: "100%", md: "66.666%" } }}>
            <Typography variant="h2" sx={{ fontWeight: 800, textTransform: "uppercase", mb: 3 }}>
              {currentSong.artistName}
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: "1.1rem", opacity: 0.9 }}>
              {currentSong.artistBio}
            </Typography>
          </Box>
        </Box>

      </Container>

      <Footer />

      {/* SCROLL TO TOP BUTTON */}
      <Zoom in={showButton}>
        <Fab onClick={scrollToTop} size="small" sx={{ position: "fixed", bottom: { xs: 20, md: 30 }, right: { xs: 20, md: 30 }, bgcolor: "rgba(232, 234, 246, 0.8)", color: "#050A30", "&:hover": { bgcolor: "#fff" }, zIndex: 1000 }} aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </Box>
  );
};

export default SongPage;
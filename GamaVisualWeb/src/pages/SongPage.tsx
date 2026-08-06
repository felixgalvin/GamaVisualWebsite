import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Container, Button, Fab, Zoom, IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { motion, type Variants } from "framer-motion";
import Navbar from "../routes/NavBar";
import Footer from "../routes/BottomNav";

import { songCatalog } from "../data/songs";

const MotionBox = motion(Box);

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } }
};

const SongPage: React.FC = () => {
  const { songId } = useParams<{ songId: string }>();
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);
  
  // Separate states for BTS and Album carousels
  const [btsSlide, setBtsSlide] = useState(0);
  const [albumSlide, setAlbumSlide] = useState(0);
  
  // Separate refs for BTS and Album carousels
  const btsCarouselRef = useRef<HTMLDivElement>(null);
  const albumCarouselRef = useRef<HTMLDivElement>(null);

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

  const scrollCarousel = (direction: "left" | "right", containerRef: React.RefObject<HTMLDivElement | null>) => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth;
    const isAtLeftMost = container.scrollLeft <= 0;
    // Using Math.ceil to prevent fractional pixel rounding issues
    const isAtRightMost = Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth;

    if (direction === "left") {
      container.scrollLeft = isAtLeftMost ? container.scrollWidth : container.scrollLeft - scrollAmount;
    } else {
      container.scrollLeft = isAtRightMost ? 0 : container.scrollLeft + scrollAmount;
    }
  };

  const handleCarouselScroll = (
    containerRef: React.RefObject<HTMLDivElement | null>, 
    currentSlideState: number, 
    setSlideState: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollLeft;
      const slideWidth = containerRef.current.clientWidth;
      const newIndex = Math.round(scrollPosition / slideWidth);
      if (newIndex !== currentSlideState) {
        setSlideState(newIndex);
      }
    }
  };

  const renderLyrics = (lyrics: string) => {
    return lyrics.split("\n").map((line, index) => {
      if (!line.trim()) {
        return <Box key={`lyrics-empty-${index}`} sx={{ height: 8 }} />;
      }

      const parts = line.split(/(\*[^*]+\*)/g).filter(Boolean);

      return (
        <Box key={`lyrics-line-${index}`} sx={{ mb: 0.75, lineHeight: 1.8 }}>
          {parts.map((part, partIndex) => {
            const isHighlighted = part.startsWith("*") && part.endsWith("*");
            const text = isHighlighted ? part.slice(1, -1) : part;

            return isHighlighted ? (
              <Box component="span" key={`${index}-${partIndex}`} sx={{ fontWeight: 800, color: "#E8EAF6" }}>
                {text}
              </Box>
            ) : (
              <Box component="span" key={`${index}-${partIndex}`}>
                {text}
              </Box>
            );
          })}
        </Box>
      );
    });
  };

  // BTS Auto-Scroll Effect (Longer duration: 8 seconds)
  useEffect(() => {
    if (!currentSong?.bts?.length) return;

    const interval = window.setInterval(() => {
      setBtsSlide((prev) => {
        const nextIndex = prev + 1 >= currentSong.bts!.length ? 0 : prev + 1;
        if (btsCarouselRef.current) {
          btsCarouselRef.current.scrollTo({
            left: nextIndex * btsCarouselRef.current.clientWidth,
            behavior: "smooth"
          });
        }
        return nextIndex;
      });
    }, 8000); // 8000ms provides enough time for reading text

    return () => window.clearInterval(interval);
  }, [currentSong?.bts?.length]);

  // Album Photos Auto-Scroll Effect (Standard duration: 4 seconds)
  useEffect(() => {
    if (!currentSong?.albumPhotos?.length) return;

    const interval = window.setInterval(() => {
      setAlbumSlide((prev) => {
        const nextIndex = prev + 1 >= currentSong.albumPhotos!.length ? 0 : prev + 1;
        if (albumCarouselRef.current) {
          albumCarouselRef.current.scrollTo({
            left: nextIndex * albumCarouselRef.current.clientWidth,
            behavior: "smooth"
          });
        }
        return nextIndex;
      });
    }, 4000);

    return () => window.clearInterval(interval);
  }, [currentSong?.albumPhotos?.length]);

  // If someone types a bad URL, redirect them back to the Album page
  if (!currentSong) {
    return (
      <Box sx={{ minHeight: "100vh", width: "100vw", backgroundColor: "#050A30", color: "#fff", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <Container maxWidth="md" sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", py: 15 }}>
          <Typography variant="h1" sx={{ fontWeight: 900, fontSize: { xs: "4.5rem", md: "10rem" }, opacity: 0.1, position: "absolute" }}>
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

      <Container maxWidth="lg" sx={{ pt: { xs: 10, md: 15 }, pb: { xs: 3, md: 4 } }}>

        {/* HERO HEADER & MAIN COVER */}
        <Box component={MotionBox} initial="hidden" animate="visible" variants={fadeIn} sx={{ textAlign: "center", mb: 8 }}>
          <Box component={MotionBox} initial="hidden" animate="visible" variants={fadeInUp}>
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
        <Box component={MotionBox} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} sx={{ textAlign: "center", mb: 10, px: { xs: 2, md: 10 } }}>
          <Typography variant="h6" sx={{ fontStyle: "italic", mb: 2, fontWeight: 400, opacity: 0.9, whiteSpace: "pre-line" }}>
            {currentSong.bibleVerseText}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
            {currentSong.bibleVerseRef}
          </Typography>
        </Box>

        {/* LYRICS */}
        <Box component={MotionBox} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4, mb: 10 }}>

          {/* Left Column Container */}
          <Box sx={{
            flex: 1,
            mb: { xs: 4, md: 0 },
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start"
          }}>
            <Typography variant="h3" sx={{ fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, textAlign: "left", mb: 2 }}>
              SONG LYRIC
            </Typography>
          </Box>

          {/* Right Column Container */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ textAlign: "left", lineHeight: 1.8, fontSize: { xs: "1rem", md: "1.1rem" }, opacity: 0.9 }}>
              {renderLyrics(currentSong.lyrics)}
            </Box>
          </Box>
        </Box>

        {/* BTS Carousel */}
        {currentSong.bts && currentSong.bts.length > 0 && (
          <Box component={MotionBox} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} sx={{ mb: 10 }}>

            <Box sx={{ position: "relative", width: { xs: "100%", md: "70%" }, mx: "auto" }}>
              <IconButton
                onClick={() => scrollCarousel("left", btsCarouselRef)}
                sx={{
                  position: "absolute",
                  left: { xs: 12, md: 20 },
                  top: "50%",
                  transform: "translateY(-50%)",
                  bgcolor: "rgba(255,255,255,0.9)",
                  color: "#000",
                  zIndex: 2,
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
                  opacity: 0.2,
                  "&:hover": { bgcolor: "#fff" , opacity: 1},
                }}
              >
                <ChevronLeftIcon />
              </IconButton>

              <IconButton
                onClick={() => scrollCarousel("right", btsCarouselRef)}
                sx={{
                  position: "absolute",
                  right: { xs: 12, md: 20 },
                  top: "50%",
                  transform: "translateY(-50%)",
                  bgcolor: "rgba(255,255,255,0.9)",
                  color: "#000",
                  zIndex: 2,
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
                  opacity: 0.2  ,
                  "&:hover": { bgcolor: "#fff" , opacity: 1},
                }}
              >
                <ChevronRightIcon />
              </IconButton>

              <Box
                ref={btsCarouselRef}
                onScroll={() => handleCarouselScroll(btsCarouselRef, btsSlide, setBtsSlide)}
                sx={{
                  display: "flex",
                  overflowX: "hidden",
                  scrollSnapType: "x mandatory",
                  scrollBehavior: "smooth",
                  borderRadius: "24px",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.35)"
                }}
              >
                {currentSong.bts?.map((photo, index) => (
                  <Box
                    key={`${currentSong.id}-photo-${index}`}
                    sx={{
                      minWidth: "100%",
                      scrollSnapAlign: "center",
                      aspectRatio: "16/9",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "stretch"
                    }}
                  >
                    <Box
                      component="img"
                      src={photo}
                      alt={`BTS photo ${index + 1}`}
                      sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        )}

        {/* SONG DESCRIPTION */}
        <Box component={MotionBox} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} sx={{ mb: 12 }}>
          <Typography variant="body1" sx={{ textAlign: "justify", lineHeight: 1.8, fontSize: "1.1rem", opacity: 0.9, whiteSpace: "pre-line" }}>
            {currentSong.description}
          </Typography>
        </Box>

        {/* ARTIST PROFILES */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 8, mb: 10 }}>
          {currentSong.profiles.map((profile, index) => (
            <Box
              key={index}
              component={MotionBox}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: { xs: 5, md: 10 } }}
            >
              {/* Profile Image */}
              <Box sx={{ width: { xs: "100%", md: "33.333%" } }}>
                <Box sx={{ width: "100%", aspectRatio: "1/1", borderRadius: "20px", overflow: "hidden", bgcolor: "#E8EAF6", boxShadow: "0px 8px 25px rgba(0,0,0,0.4)" }}>
                  <Box component="img" src={profile.image} alt={`${profile.name} Profile`} sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </Box>
              </Box>

              {/* Profile Info */}
              <Box sx={{ width: { xs: "100%", md: "66.666%" }, textAlign: "left" }}>
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 1, color: "#ffffff" }}>
                  {profile.name}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: "#ffffff", opacity: 0.9 }}>
                  {profile.job}
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: "1.1rem", opacity: 0.9 }}>
                  {profile.bio}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* PROJECT MEMBERS CAROUSEL */}
        {currentSong.albumPhotos && currentSong.albumPhotos.length > 0 && (
          <Box component={MotionBox} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} sx={{ mb: 10 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, textTransform: "uppercase", mb: 3 }}>
              PROJECT MEMBER'S
            </Typography>

            <Box sx={{ position: "relative", width: { xs: "100%", md: "70%" }, mx: "auto" }}>
              <IconButton
                onClick={() => scrollCarousel("left", albumCarouselRef)}
                sx={{
                  position: "absolute",
                  left: { xs: 12, md: 20 },
                  top: "50%",
                  transform: "translateY(-50%)",
                  bgcolor: "rgba(255,255,255,0.9)",
                  color: "#000",
                  zIndex: 2,
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
                  opacity: 0.2,
                  "&:hover": { bgcolor: "#fff" , opacity: 1},
                }}
              >
                <ChevronLeftIcon />
              </IconButton>

              <IconButton
                onClick={() => scrollCarousel("right", albumCarouselRef)}
                sx={{
                  position: "absolute",
                  right: { xs: 12, md: 20 },
                  top: "50%",
                  transform: "translateY(-50%)",
                  bgcolor: "rgba(255,255,255,0.9)",
                  color: "#000",
                  zIndex: 2,
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
                  opacity: 0.2,
                  "&:hover": { bgcolor: "#fff" , opacity: 1},
                }}
              >
                <ChevronRightIcon />
              </IconButton>

              <Box
                ref={albumCarouselRef}
                onScroll={() => handleCarouselScroll(albumCarouselRef, albumSlide, setAlbumSlide)}
                sx={{
                  display: "flex",
                  overflowX: "hidden",
                  scrollSnapType: "x mandatory",
                  scrollBehavior: "smooth",
                  borderRadius: "24px",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.35)"
                }}
              >
                {currentSong.albumPhotos.map((photo, index) => (
                  <Box
                    key={`${currentSong.id}-photo-${index}`}
                    sx={{
                      minWidth: "100%",
                      scrollSnapAlign: "center",
                      aspectRatio: "16/9",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "stretch"
                    }}
                  >
                    <Box
                      component="img"
                      src={photo}
                      alt={`Album photo ${index + 1}`}
                      sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        )}

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
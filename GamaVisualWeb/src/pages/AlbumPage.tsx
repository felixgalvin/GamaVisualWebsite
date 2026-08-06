import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Container, Button, Fab, Zoom, Select, MenuItem, FormControl, IconButton } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { motion, type Variants } from "framer-motion";
import Navbar from "../routes/NavBar";
import Footer from "../routes/BottomNav";
import { songCatalog } from "../data/songs";

// 1. IMPORT USE NAVIGATE
import { useNavigate } from "react-router-dom"; 

const MotionBox = motion(Box);

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } }
};

// 2. Use shared songCatalog data instead of hardcoded song objects.
const songs = songCatalog;

const AlbumPage: React.FC = () => {
  // 3. INITIALIZE NAVIGATE HOOK
  const navigate = useNavigate(); 
  
  const [showButton, setShowButton] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0); 
  
  const songRefs = useRef<(HTMLDivElement | null)[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setShowButton(window.scrollY > window.innerHeight);
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

  const scrollToSong = (index: number) => {
    if (songRefs.current[index]) {
      const yOffset = -100;
      const element = songRefs.current[index];
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const scrollCarousel = (direction: "left" | "right") => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth;
    const isAtLeftMost = container.scrollLeft <= 0;
    const isAtRightMost = container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;

    if (direction === "left") {
        container.scrollLeft = isAtLeftMost ? container.scrollWidth : container.scrollLeft - scrollAmount;
    }

    if (direction === "right") {
        container.scrollLeft = isAtRightMost ? 0 : container.scrollLeft + scrollAmount;
    }
  };

  const handleCarouselScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const slideWidth = carouselRef.current.clientWidth;
      const newIndex = Math.round(scrollPosition / slideWidth);
      if (newIndex !== currentSlide) {
        setCurrentSlide(newIndex);
      }
    }
  };

  useEffect(() => {
    const autoScroll = setInterval(() => {
      scrollCarousel("right");
    }, 5000); 
    return () => clearInterval(autoScroll);
  }, []);

  const handleSearchChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setSearchTitle(value);
    
    if (value) {
      const songIndex = songs.findIndex(song => song.id === value);
      if (songIndex !== -1) {
        scrollToSong(songIndex);
      }
    }
  };

  const getSelectedSongLabel = (value: string) => {
    if (!value) {
      return "Search for Song Title";
    }

    const selectedSong = songs.find((song) => song.id === value);
    return selectedSong ? selectedSong.title : "Search for Song Title";
  };

  return (
    <Box sx={{ minHeight: "100vh", width: "100vw", backgroundColor: "#050A30", color: "#fff", overflowX: "hidden" }}>
        <Navbar />

        <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 4, md: 6 } }}>
    
        <Box component={MotionBox} initial="hidden" animate="visible" variants={fadeIn} sx={{ position: "relative", width: "100%", mb: 8 }}>
            
            <IconButton 
            onClick={() => scrollCarousel("left")}
            sx={{ 
                position: "absolute", 
                left: { xs: 12, md: 30 }, 
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "rgba(255,255,255,0.9)", 
                opacity: 0.2,
                color: "#000", 
                zIndex: 10,
                boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
                "&:hover": { bgcolor: "#fff", opacity: 1} 
            }}
            >
            <ChevronLeftIcon fontSize="medium" />
            </IconButton>

            <IconButton 
            onClick={() => scrollCarousel("right")}
            sx={{ 
                position: "absolute", 
                right: { xs: 12, md: 30 }, 
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "rgba(255,255,255,0.9)",
                opacity: 0.2, 
                color: "#000", 
                zIndex: 10,
                boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
                "&:hover": { bgcolor: "#fff", opacity: 1} 
            }}
            >
            <ChevronRightIcon fontSize="medium" />
            </IconButton>

            <Box 
            ref={carouselRef}
            onScroll={handleCarouselScroll} 
            sx={{
                display: "flex",
                overflowX: "hidden",
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
                aspectRatio: "16/9", 
                borderRadius: "24px",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.5)"
            }}
            >
            {songs.map((song, index) => (
                <Box
                key={`carousel-${index}`}
                onClick={() => scrollToSong(index)}
                sx={{
                    minWidth: "100%",
                    height: "100%",
                    scrollSnapAlign: "center",
                    position: "relative",
                    backgroundImage: `url('${song.images.cover}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    cursor: "pointer",
                    "&:hover .overlay": {
                    backgroundColor: "rgba(0,0,0,0.3)"
                    }
                }}
                >
                </Box>
            ))}
            </Box>

        </Box>
        
        {/* SECTION: EXPLORE HEADER & SEARCH BAR */}
        <Box 
            sx={{ 
            display: "flex", 
            flexDirection: { xs: "column", md: "row" }, 
            justifyContent: "space-between", 
            alignItems: "flex-start",
            gap: 4,
            mb: 10 
            }}
        >
            <Box sx={{ textAlign: "left", flex: 1 }}> 
            <Typography variant="h3" sx={{ fontWeight: 800, textTransform: "uppercase", mb: 2, fontSize: { xs: "2.2rem", md: "3rem" }}}>
                EXPLORE OUR <br/> MUSIC!
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, maxWidth: "600px", fontSize: "1.1rem" }}>
                Setiap lagu memiliki cerita—tentang perjalanan, harapan, dan makna yang ingin dibagikan.
            </Typography>
            <Button
                href="https://open.spotify.com/artist/4VtoybpnsR8ZVHhFbXXUkr?si=8sQTB5zzS4u8bwdLixb-Ow"
                variant="contained"
                sx={{
                borderRadius: "30px",
                bgcolor: "#E8EAF6",
                color: "#050A30",
                px: 4,
                py: 1.5,
                fontWeight: 700,
                textTransform: "none",
                "&:hover": { bgcolor: "#fff" }
                }}
            >
                Listen to Our Playlist
            </Button>
            </Box>
            
            <Box sx={{ display: "flex", justifyContent: "flex-end", width: { xs: "100%", md: "auto" } }}>
            <FormControl
                sx={{ 
                    width: { xs: "100%", sm: "400px" },
                    height: 56,
                    bgcolor: "#E8EAF6",
                    borderRadius: "15px"
                    }}>
                <Select
                value={searchTitle}
                displayEmpty
                onChange={handleSearchChange}
                renderValue={(selected) => getSelectedSongLabel(selected as string)}
                sx={{ 
                    color: "#050A30", 
                    fontWeight: 600, 
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" } 
                }}
                >
                {songs.map((song) => (
                    <MenuItem key={song.id} value={song.id}>{song.title}</MenuItem>
                ))}
                </Select>
            </FormControl>
            </Box>
        </Box>

        {/* SECTION: DETAILED SONG LIST */}
        {songs.map((song, index) => (
          <motion.div
            key={`song-detail-${index}`} 
            ref={(el) => {
              songRefs.current[index] = el;
            }}
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }} 
            variants={fadeInUp} 
            style={{ marginBottom: "1.5rem", scrollMarginTop: "100px" }}
          >
            <Box sx={{ mb: 12, scrollMarginTop: "100px" }}>
              <Typography variant="h3" sx={{ fontWeight: 800, textTransform: "uppercase", textAlign: "center", mb: 6 }}>
                {song.title}
              </Typography>

              <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: { xs: 4, md: 8 }, alignItems: "center" }}>
              
                <Box sx={{ width: { xs: "100%", md: "50%" }, flexShrink: 0 }}>
                <Box 
                    sx={{ 
                    position: "relative", 
                    width: "100%", 
                    borderRadius: "20px", 
                    overflow: "hidden", 
                    boxShadow: "8px 8px 20px rgba(46, 58, 137, 0.8)" 
                    }}
                >
                    <Box 
                    component="img" 
                    src={song.images.cover} 
                    alt={song.title} 
                    sx={{ width: "100%", display: "block", aspectRatio: "16/9", objectFit: "cover" }} 
                    />
                </Box>
                </Box>
              
                <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: "left" }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    {song.bibleVerseRef}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, opacity: 0.9, fontSize: "1.1rem" }}>
                    {song.shortDescription || song.description}
                    </Typography>
                    
                    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", width: "100%" }}>
                    {/* 4. LINK THE BUTTON TO THE DYNAMIC ROUTE */}
                    <Button 
                        variant="contained" 
                        onClick={() => navigate(`/album/song/${song.id}`)}
                        sx={{ 
                        flex: 1, 
                        borderRadius: "30px", 
                        bgcolor: "#E8EAF6", 
                        color: "#050A30", 
                        py: 1.5, 
                        fontWeight: 700, 
                        textTransform: "none", 
                        "&:hover": { bgcolor: "#fff" } 
                        }}
                    >
                        Learn More
                    </Button>
                    <Button 
                        href={song.ytLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained" 
                        sx={{ 
                        flex: 1,
                        borderRadius: "30px", 
                        bgcolor: "#E8EAF6", 
                        color: "#050A30",  
                        py: 1.5, 
                        fontWeight: 700, 
                        textTransform: "none", 
                        "&:hover": { bgcolor: "#fff" } 
                        }}
                    >
                        Watch Now
                    </Button>
                    </Box>
                </Box>

              </Box>
            </Box>
          </motion.div>
        ))}

      </Container>
      <Footer />

      <Zoom in={showButton}>
        <Fab
          onClick={scrollToTop}
          size="small"
          sx={{
            position: "fixed",
            bottom: { xs: 20, md: 30 },
            right: { xs: 20, md: 30 },
            bgcolor: "rgba(232, 234, 246, 0.8)",
            color: "#050A30",
            "&:hover": { bgcolor: "#fff" },
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

export default AlbumPage;
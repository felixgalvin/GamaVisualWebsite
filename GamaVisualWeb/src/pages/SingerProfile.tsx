import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Container, Button, Fab, Zoom, IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InstagramIcon from "@mui/icons-material/Instagram";

// IMPORT IKON UNTUK DETAIL BIODATA/AYAT
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import { motion } from "framer-motion";
import Navbar from "../routes/NavBar";
import Footer from "../routes/BottomNav";

// IMAGE IMPORTS
import coverBlur from "../assets/CoverBlur.png"; 
import otnil from "../assets/koOT.jpeg";
import tasya from "../assets/Tasya.jpeg";
import felix from "../assets/Felix.jpeg";
import thumbnail from "../assets/YTThumbnailKasihMuTakBerubah.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const memberData = {
  /**
   * =========================================================================
   * MODIFIKASI: SEKARANG HEADER BISA DIATUR RASIO & CROP POSISI-NYA
   * =========================================================================
   */
  header: [
    { 
      title: "MEMBER PROFILE", 
      desc: "bisa highlight per orang, atau foto all member crew pas shoot atau behind the scene", 
      img: coverBlur,
      aspectRatio: "16/9", // <--- ATUR RASIO BANNER UTAMA DI SINI
      cropPos: "center"     // <--- ATUR POTONGAN GAMBAR BANNER DI SINI
    },
    { 
      img: otnil,
      aspectRatio: "16/9", 
      cropPos: "50% 50%" 
    },
    { 
      img: tasya, 
      aspectRatio: "16/9", 
      cropPos: "50% 37%" 
    },
    { 
      img: felix, 
      aspectRatio: "16/9", 
      cropPos: "50% 20%" 
    }
  ],
  founders: [
    {
      name: "Otniel",
      image: otnil,
      aspectRatio: "1/1",  
      cropPos: "50% 55%",  
      bio: [
        "Iman Kristen mengajarkan kasih, pengharapan, dan keselamatan melalui Tuhan. Dalam setiap musim kehidupan, Tuhan selalu menyertai, menguatkan, dan memberikan damai yang melampaui segala akal.",
        "Tuhan tidak pernah terlambat, dan tidak pernah terlalu cepat—Dia selalu tepat waktu.",
        "Mazmur 23:1 - Tuhan adalah gembalaku, takkan kekurangan aku."
      ]
    },
    {
      name: "Tasya",
      image: tasya,
      aspectRatio: "1/1",  
      cropPos: "50% 55%",      
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
      aspectRatio: "1/1",  
      cropPos: "50% 30%",  
      bio: [
        "Bernyanyi bagi kemuliaan-Nya. Aku hendak menyanyi bagi TUHAN selama aku hidup.",
        "Tetap menjadi diri mu sendiri dan melayani Tuhan dengan kelebihan mu karena Tuhan mengasihi kamu.",
        "Yeremia 29:11 - Sebab Aku ini mengetahui rancangan-rancangan apa yang ada pada-Ku mengenai kamu..."
      ]
    }
  ],
  cards: [
    { 
      name: "Tasya", 
      image: thumbnail, 
      aspectRatio: "18/10", 
      cropPos: "50% 50%",       
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
    },
    { 
      name: "Felix Galvin", 
      image: felix, 
      aspectRatio: "18/10", 
      cropPos: "50% 30%",    
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
    }
  ]
};

// Helper function untuk merender logo ikon berdasarkan urutan baris bio (0 = Info, 1 = Quote, 2 = Alkitab)
const renderBioIcon = (index: number) => {
  switch (index) {
    case 0:
      return <InfoOutlinedIcon sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1.3rem" }} />;
    case 1:
      return <FormatQuoteIcon sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1.3rem", transform: "scaleX(-1)" }} />;
    case 2:
      return <MenuBookIcon sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1.3rem" }} />;
    default:
      return <InfoOutlinedIcon sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1.3rem" }} />;
  }
};

const MemberPage: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollCarousel = (direction: "left" | "right") => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth;
    const isAtLeftMost = container.scrollLeft <= 0;
    const isAtRightMost = container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;

    if (direction === "left") {
      container.scrollLeft = isAtLeftMost ? container.scrollWidth : container.scrollLeft - scrollAmount;
    } else if (direction === "right") {
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

  const goToSlide = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * carouselRef.current.clientWidth,
        behavior: "smooth"
      });
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    const autoScroll = setInterval(() => {
      scrollCarousel("right");
    }, 5000);
    return () => clearInterval(autoScroll);
  }, [currentSlide]);

  return (
    <Box sx={{ minHeight: "100vh", width: "100vw", backgroundColor: "#050A30", color: "#fff", overflowX: "hidden" }}>
      <Navbar />

      <Container maxWidth="lg" sx={{ pt: { xs: 12, md: 15 }, pb: 15 }}>
        
        {/* --- CAROUSEL SLIDER HEADER --- */}
        <Box sx={{ position: "relative", width: "100%", mb: 10 }}>
          <IconButton 
            onClick={() => scrollCarousel("left")}
            sx={{ 
              position: "absolute", left: 30, top: "50%", transform: "translateY(-50%)",
              bgcolor: "rgba(255,255,255,0.9)", opacity: 0.7, color: "#000", zIndex: 10,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.3)", "&:hover": { bgcolor: "#fff", opacity: 1 } 
            }}
          >
            <ChevronLeftIcon fontSize="medium" />
          </IconButton>

          <IconButton 
            onClick={() => scrollCarousel("right")}
            sx={{ 
              position: "absolute", right: 30, top: "50%", transform: "translateY(-50%)",
              bgcolor: "rgba(255,255,255,0.9)", opacity: 0.7, color: "#000", zIndex: 10,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.3)", "&:hover": { bgcolor: "#fff", opacity: 1 } 
            }}
          >
            <ChevronRightIcon fontSize="medium" />
          </IconButton>

          <Box 
            ref={carouselRef}
            onScroll={handleCarouselScroll} 
            sx={{
              display: "flex", overflowX: "hidden", scrollSnapType: "x mandatory", scrollBehavior: "smooth",
              aspectRatio: memberData.header[currentSlide]?.aspectRatio || "16/9", // <--- MENERAPKAN RASIO DINAMIS PADA CONTAINER BANNER
              borderRadius: "24px", boxShadow: "0px 10px 30px rgba(0,0,0,0.5)", transition: "aspect-ratio 0.5s ease"
            }}
          >
            {memberData.header.map((slide, index) => (
              <Box
                key={`carousel-${index}`}
                sx={{
                  minWidth: "100%", height: "100%", scrollSnapAlign: "center", position: "relative",
                  backgroundImage: `url('${slide.img}')`, 
                  backgroundSize: "cover", 
                  backgroundPosition: slide.cropPos || "center", // <--- MENERAPKAN POSISI CROP DINAMIS PADA BANNER
                  display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"
                }}
              >
                {slide.title && (
                  <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(5, 10, 48, 0.4), rgba(5, 10, 48, 0.75))", zIndex: 1 }} />
                )}
                <Box sx={{ zIndex: 2, px: 4, maxWidth: "800px" }}>
                  <Typography variant="h2" sx={{ fontWeight: 900, textTransform: "uppercase", fontSize: { xs: "2rem", md: "4rem" }, mb: 2 }}>
                    {slide.title}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ opacity: 0.9, fontSize: { xs: "0.9rem", md: "1.1rem" } }}>
                    {slide.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 1.5, zIndex: 10 }}>
            {memberData.header.map((_, index) => (
              <Box
                key={`dot-${index}`}
                onClick={() => goToSlide(index)}
                sx={{
                  width: currentSlide === index ? 12 : 8, height: currentSlide === index ? 12 : 8, borderRadius: "50%",
                  backgroundColor: currentSlide === index ? "#fff" : "rgba(255,255,255,0.5)", cursor: "pointer", transition: "all 0.3s ease"
                }}
              />
            ))}
          </Box>
        </Box>

        {/* --- SECTION 1: FOUNDERS --- */}
        <Typography variant="h3" sx={{ fontWeight: 800, textTransform: "uppercase", textAlign: "center", mb: 8 }}>
          FOUNDERS
        </Typography>

        {memberData.founders.map((item, index) => (
          <Box 
            key={`founder-detail-${index}`} 
            component={motion.div} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }} 
            variants={fadeInUp} 
            sx={{ mb: 12 }}
          >
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: { xs: 4, md: 8 }, alignItems: "flex-start" }}>
              
              {/* KOLOM KIRI: IMAGE */}
              <Box sx={{ width: { xs: "100%", md: "50%" }, flexShrink: 0 }}>
                <Box sx={{ position: "relative", width: "100%", borderRadius: "20px", overflow: "hidden", boxShadow: "8px 8px 20px rgba(46, 58, 137, 0.8)" }}>
                  <Box 
                    component="img" 
                    src={item.image} 
                    alt={item.name} 
                    sx={{ 
                      width: "100%", 
                      display: "block", 
                      objectFit: "cover",
                      aspectRatio: item.aspectRatio || "1/1", 
                      objectPosition: item.cropPos || "center" 
                    }} 
                  />
                  <IconButton sx={{ position: "absolute", top: 15, left: 15, bgcolor: "rgba(255,255,255,0.2)", color: "#fff", "&:hover": { bgcolor: "rgba(255,255,255,0.4)" } }}>
                    <InstagramIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
              
              {/* KOLOM KANAN: TEXT CONTENT */}
              <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: "left" }}>
                <Typography variant="h3" sx={{ fontWeight: 800, textTransform: "uppercase", mb: 3, color: "#fff" }}>
                  {item.name}
                </Typography>
                
                {item.bio.map((text, i) => (
                  <Box key={i} sx={{ display: "flex", gap: 2.5, mb: 3, alignItems: "flex-start" }}>
                    {/* MODIFIKASI: LOGO DI SEBELAH TULISAN PROFILE */}
                    <Box sx={{ mt: 0.5, p: 0.6, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "8px", bgcolor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
                      {renderBioIcon(i)}
                    </Box>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, opacity: 0.9, fontSize: "1.1rem" }}>
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Box>

            </Box>
          </Box>
        ))}

        {/* --- SECTION 2: SINGER --- */}
        <Typography variant="h3" sx={{ fontWeight: 800, textTransform: "uppercase", textAlign: "center", mt: 15, mb: 8 }}>
          SINGER
        </Typography>

        {memberData.singers.map((item, index) => (
          <Box 
            key={`singer-detail-${index}`} 
            component={motion.div} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }} 
            variants={fadeInUp} 
            sx={{ mb: 12 }}
          >
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: { xs: 4, md: 8 }, alignItems: "flex-start" }}>
              
              {/* KOLOM KIRI: IMAGE */}
              <Box sx={{ width: { xs: "100%", md: "50%" }, flexShrink: 0 }}>
                <Box sx={{ position: "relative", width: "100%", borderRadius: "20px", overflow: "hidden", boxShadow: "8px 8px 20px rgba(46, 58, 137, 0.8)" }}>
                  <Box 
                    component="img" 
                    src={item.image} 
                    alt={item.name} 
                    sx={{ 
                      width: "100%", 
                      display: "block", 
                      objectFit: "cover",
                      aspectRatio: item.aspectRatio || "1/1", 
                      objectPosition: item.cropPos || "center" 
                    }} 
                  />
                  <IconButton sx={{ position: "absolute", top: 15, left: 15, bgcolor: "rgba(255,255,255,0.2)", color: "#fff", "&:hover": { bgcolor: "rgba(255,255,255,0.4)" } }}>
                    <InstagramIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
              
              {/* KOLOM KANAN: TEXT CONTENT */}
              <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: "left" }}>
                <Typography variant="h3" sx={{ fontWeight: 800, textTransform: "uppercase", mb: 3, color: "#fff" }}>
                  {item.name}
                </Typography>
                
                {item.bio.map((text, i) => (
                  <Box key={i} sx={{ display: "flex", gap: 2.5, mb: 3, alignItems: "flex-start" }}>
                    {/* MODIFIKASI: LOGO DI SEBELAH TULISAN PROFILE */}
                    <Box sx={{ mt: 0.5, p: 0.6, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "8px", bgcolor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
                      {renderBioIcon(i)}
                    </Box>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, opacity: 0.9, fontSize: "1.1rem" }}>
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Box>

            </Box>
          </Box>
        ))}

        {/* --- SECTION 3: CARDS BOTTOM --- */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4, mt: 10 }}>
          {memberData.cards.map((card, index) => (
            <Box 
              key={`card-${index}`}
              component={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              sx={{ 
                flex: 1, bgcolor: "rgba(255,255,255,0.03)", borderRadius: "28px", overflow: "hidden", 
                border: "1px solid rgba(255,255,255,0.05)", transition: "0.4s",
                "&:hover": { transform: "translateY(-12px)", bgcolor: "rgba(255,255,255,0.07)" }
              }}
            >
              <Box 
                component="img" 
                src={card.image} 
                alt={card.name} 
                sx={{ 
                  width: "100%", 
                  objectFit: "cover",
                  aspectRatio: card.aspectRatio || "16/10", 
                  objectPosition: card.cropPos || "center"   
                }} 
              />
              <Box sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>{card.name}</Typography>
                <Typography variant="body2" sx={{ opacity: 0.6, mb: 4, minHeight: "60px", lineHeight: 1.6 }}>{card.desc}</Typography>
                <Button variant="contained" sx={{ borderRadius: "30px", bgcolor: "#E8EAF6", color: "#050A30", fontWeight: 700, textTransform: "none", px: 5, py: 1.2, "&:hover": { bgcolor: "#fff" } }}>
                  Learn More
                </Button>
              </Box>
            </Box>
          ))}
        </Box>

      </Container>
      <Footer />

      {/* BACK TO TOP FAB BUTTON */}
      <Zoom in={showButton}>
        <Fab 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
          size="small" 
          sx={{ 
            position: "fixed", bottom: 30, right: 30, bgcolor: "rgba(232, 234, 246, 0.8)", color: "#050A30",
            "&:hover": { bgcolor: "#fff" }, zIndex: 1000
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </Box>
  );
};

export default MemberPage;
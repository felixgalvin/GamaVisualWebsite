import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Container, Fab, Zoom, IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { motion } from "framer-motion";
import Navbar from "../routes/NavBar";
import Footer from "../routes/BottomNav";

// Import your assets
import heroImg from "../assets/CoverBlur.png";
import activity1 from "../assets/SiaranRadioMei.jpeg";
import activity2 from "../assets/CoverBlur.png";
import activity3 from "../assets/CoverBlur.png";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } }
};

const heroImages = [heroImg, heroImg, heroImg];

const activitiesData = [
    { img: activity1, title: "Siaran Radio Kharisma 96.8FM", date: "23 Mei 2026" },
    { img: activity2, title: "Live Recording Session", date: "10 Juni 2026" },
    { img: activity3, title: "Vocal Workshop", date: "15 Juli 2026" },
];

const AboutUsPage: React.FC = () => {
    const [showButton, setShowButton] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
            setShowButton(window.scrollY > window.innerHeight);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

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
    }, []);

    return (
        <Box sx={{ minHeight: "100vh", width: "100vw", backgroundColor: "#050A30", color: "#fff", overflowX: "hidden" }}>
            <Navbar />

            <Container maxWidth="lg" sx={{ pt: { xs: 12, md: 15 }, pb: 15 }}>

                {/* 1. CAROUSEL HERO SECTION */}
                <Box
                    component={motion.div}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    sx={{ position: "relative", width: "100%", mb: 12 }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0, left: 0, right: 0, bottom: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 5,
                            pointerEvents: "none"
                        }}
                    >
                        <Box component={motion.div} initial="hidden" animate="visible" variants={fadeInUp}>
                            <Typography variant="h2" sx={{ fontWeight: 900, textTransform: "uppercase", letterSpacing: 2 }}>
                                ABOUT US
                            </Typography>
                        </Box>
                    </Box>

                    <IconButton onClick={() => scrollCarousel("left")} sx={{ position: "absolute", left: { xs: 10, md: 30 }, top: "50%", transform: "translateY(-50%)", bgcolor: "rgba(255,255,255,0.7)", color: "#000", zIndex: 10, "&:hover": { bgcolor: "#fff" } }}>
                        <ChevronLeftIcon fontSize="medium" />
                    </IconButton>
                    <IconButton onClick={() => scrollCarousel("right")} sx={{ position: "absolute", right: { xs: 10, md: 30 }, top: "50%", transform: "translateY(-50%)", bgcolor: "rgba(255,255,255,0.7)", color: "#000", zIndex: 10, "&:hover": { bgcolor: "#fff" } }}>
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
                    // sx={{
                    //     display: "flex",
                    //     overflowX: "hidden", 
                    //     scrollSnapType: "x mandatory", 
                    //     scrollBehavior: "smooth", 
                    //     height: { xs: "250px", md: "400px" }, 
                    //     borderRadius: "24px", 
                    //     boxShadow: "0px 10px 30px rgba(0,0,0,0.5)"
                    // }}
                    >
                        {heroImages.map((img, index) => (
                            <Box
                                key={index}
                                sx={{ minWidth: "100%", height: "100%", scrollSnapAlign: "center", position: "relative", backgroundImage: `url('${img}')`, backgroundSize: "cover", backgroundPosition: "center" }}
                            >
                                <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.3)" }} />
                            </Box>
                        ))}
                    </Box>

                    <Box sx={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 1.5, zIndex: 10 }}>
                        {heroImages.map((_, index) => (
                            <Box
                                key={`dot-${index}`}
                                onClick={() => goToSlide(index)}
                                sx={{
                                    width: currentSlide === index ? 12 : 8,
                                    height: currentSlide === index ? 12 : 8,
                                    borderRadius: "50%",
                                    backgroundColor: currentSlide === index ? "#fff" : "rgba(255,255,255,0.5)",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    "&:hover": { backgroundColor: "#fff" }
                                }}
                            />
                        ))}
                    </Box>
                </Box>

                {/* 2. GAMA VISUAL HISTORY SECTION */}
                <Box
                    component={motion.div}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4, mb: 12 }}
                >
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h3" sx={{ fontWeight: 800, textTransform: "uppercase", textAlign: "left" }}>
                            GAMA VISUAL
                        </Typography>
                    </Box>

                    <Box sx={{ flex: 1, textAlign: "left" }}>
                        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.05rem", opacity: 0.9 }}>
                            Gama Visual berawal sebagai sebuah klub multimedia di lingkungan sekolah. Seiring berjalannya waktu, komunitas ini terus berkembang menjadi ruang berkarya, bertumbuh, dan berbagi.
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.05rem", opacity: 0.9 }}>
                            Perjalanan Gama Visual mengalami titik balik ketika pendirinya berkunjung ke sebuah panti asuhan dan bertemu dengan anak-anak yang memiliki talenta luar biasa, khususnya dalam bidang musik. Namun, keterbatasan finansial dan akses membuat potensi tersebut belum dapat tersalurkan secara optimal.
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.05rem", opacity: 0.9 }}>
                            Berangkat dari pengalaman tersebut, Gama Visual hadir sebagai komunitas yang memiliki visi lebih besar - menjadi jembatan bagi anak-anak berbakat untuk dapat berkarya. Melalui produksi dan perilisan lagu, Gama Visual tidak hanya memberikan kesempatan bagi mereka untuk menyalurkan talenta, tetapi juga menghadirkan karya yang membawa pesan kasih dan pengharapan.
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: "1.05rem", opacity: 0.9 }}>
                            Nama "Gama" yang berarti perjalanan, mencerminkan proses yang tidak selalu mudah, namun penuh makna. Setiap langkah yang dilalui menjadi bagian dari pembentukan komunitas ini untuk terus bertumbuh, berkarya, dan menjadi berkat bagi sesama.
                        </Typography>
                    </Box>
                </Box>

                {/* 3. VISI & MISI SECTION */}
                <Box
                    component={motion.div}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4, mb: 15 }}
                >
                    {/* VISI CARD */}
                    <Box sx={{ flex: 1, bgcolor: "#E8EAF6", color: "#050A30", borderRadius: "24px", p: { xs: 4, md: 6 }, boxShadow: "0px 8px 25px rgba(0,0,0,0.3)" }}>
                        <Typography variant="h4" sx={{ fontWeight: 800, textAlign: "left", mb: 4, textTransform: "uppercase" }}>
                            VISI
                        </Typography>
                        {/* FIX: Ditambahkan textAlign: "left" secara eksplisit */}
                        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: "1.1rem", textAlign: "left" }}>
                            Menjadi komunitas dan lembaga kreatif berbasis kerohanian yang mewadahi talenta generasi muda untuk berkarya melalui musik, serta menjadi sarana dalam menyampaikan kasih Tuhan kepada dunia.
                        </Typography>
                    </Box>

                    {/* MISI CARD */}
                    <Box sx={{ flex: 1, bgcolor: "#E8EAF6", color: "#050A30", borderRadius: "24px", p: { xs: 4, md: 6 }, boxShadow: "0px 8px 25px rgba(0,0,0,0.3)" }}>
                        <Typography variant="h4" sx={{ fontWeight: 800, textAlign: "left", mb: 4, textTransform: "uppercase" }}>
                            MISI
                        </Typography>
                        {/* FIX: Ditambahkan textAlign: "left" untuk menimpa CSS bawaan Vite yang rata tengah */}
                        <Box component="ol" sx={{ m: 0, pl: 3, lineHeight: 1.8, fontSize: "1.1rem", textAlign: "left" }}>
                            <li style={{ marginBottom: "12px" }}>Menjadikan setiap karya sebagai sarana untuk memuliakan Tuhan dan menyebarkan kasih kepada sesama.</li>
                            <li style={{ marginBottom: "12px" }}>Menyediakan wadah bagi anak-anak dan generasi muda berbakat dalam mengekspresikan talenta mereka dalam bidang musik.</li>
                            <li style={{ marginBottom: "12px" }}>Memproduksi dan merilis karya musik yang berkualitas dengan pesan yang membangun, menguatkan, dan membawa nilai kerohanian.</li>
                            <li>Mengembangkan komunitas yang kolaboratif, kreatif, dan berdampak bagi masyarakat luas.</li>
                        </Box>
                    </Box>
                </Box>

                {/* 4. ACTIVITY SECTION */}
                <Box
                    component={motion.div}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <Typography variant="h3" sx={{ fontWeight: 800, textAlign: "center", textTransform: "uppercase", mb: 6 }}>
                        ACTIVITY
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>

                        {activitiesData.map((activity, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                    // Mobile: 100% (capped at 320px). Tablet: 50% minus gap. Desktop: 33.3% minus gaps.
                                    width: {
                                        xs: "100%",
                                        sm: "calc((100% - 32px) / 2)",
                                        md: "calc((100% - 64px) / 3)"
                                    },
                                    maxWidth: { xs: "320px", sm: "none" }
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        aspectRatio: "1/1",
                                        borderRadius: "24px",
                                        overflow: "hidden",
                                        mb: 2,
                                        bgcolor: "#E8EAF6",
                                        boxShadow: "0px 8px 20px rgba(0,0,0,0.3)"
                                    }}
                                >
                                    <Box    
                                        component="img"
                                        src={activity.img}
                                        alt={activity.title}
                                        sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                                    />
                                </Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{activity.title}</Typography>
                                <Typography variant="body2" sx={{ opacity: 0.8 }}>{activity.date}</Typography>
                            </Box>
                        ))}

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

export default AboutUsPage;
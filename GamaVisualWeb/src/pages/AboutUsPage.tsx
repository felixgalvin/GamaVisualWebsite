import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Navbar from "../routes/NavBar";
import Footer from "../routes/BottomNav";

// Import your assets
import heroImg from "../assets/CoverBlur.png";
import heroImg2 from "../assets/FotoGladi.png";
import heroImg3 from "../assets/aboutus.jpg";
import heroImg4 from "../assets/behind.jpg";
import heroImg5 from "../assets/SiaranRadioMei.jpeg";
import activity1 from "../assets/SiaranRadioMei.jpeg";
import activity2 from "../assets/behind.jpg";
// import activity3 from "../assets/";

const MotionBox = motion(Box);

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } }
};

const heroImages = [heroImg, heroImg2, heroImg3, heroImg4, heroImg5];

const activitiesData = [
    { img: activity1, title: "Siaran Radio Kharisma 96.8FM", date: "23 Mei 2026" },
    { img: activity2, title: "Recording Session", date: "17 Juli 2026" },
    { img: activity3, title: "Shooting Session", date: "20 Juli 2026" },
];

const AboutUsPage: React.FC = () => {
    const [showButton, setShowButton] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
            setShowButton(window.scrollY > window.innerHeight);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    useEffect(() => {
        const autoScroll = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(autoScroll);
    }, []);

    return (
        <Box sx={{ minHeight: "100vh", width: "100vw", backgroundColor: "#050A30", color: "#fff", overflowX: "hidden" }}>
            <Navbar />

            <Container maxWidth="lg" sx={{ pt: { xs: 10, md: 15 }, pb: { xs: 10, md: 15 } }}>

                {/* 1. FADING HERO SECTION */}
                <Box
                    component={MotionBox}
                    initial="hidden"
                    animate="visible" 
                    variants={fadeIn}
                    sx={{ 
                        position: "relative", 
                        width: "100%", 
                        mb: 12,
                        aspectRatio: "16/9",
                        borderRadius: "24px",
                        overflow: "hidden",
                        boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
                        backgroundColor: "#101426"
                    }}
                >
                    <AnimatePresence mode="wait">
                        <Box
                            key={currentSlide}
                            component={MotionBox}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5 }} // Fade duration
                            sx={{
                                position: "absolute",
                                top: 0, left: 0, right: 0, bottom: 0,
                                backgroundImage: `url('${heroImages[currentSlide]}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                        >
                            <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.3)" }} />
                        </Box>
                    </AnimatePresence>

                    {/* HERO TEXT OVERLAY */}
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
                        <Box component={MotionBox} initial="hidden" animate="visible" variants={fadeInUp}>
                            <Typography variant="h2" sx={{ fontWeight: 900, textTransform: "uppercase", letterSpacing: 2, fontSize: { xs: "2.4rem", md: "4rem" }, color: "#ffffff" }}>
                                ABOUT US
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* 2. GAMA VISUAL HISTORY SECTION */}
                <Box
                    component={MotionBox}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4, mb: 12 }}
                >
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h3" sx={{ fontWeight: 800, textTransform: "uppercase", textAlign: "left", fontSize: { xs: "2rem", md: "3rem" } }}>
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
                    component={MotionBox}
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
                        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: "1.1rem", textAlign: "left" }}>
                            Menjadi komunitas dan lembaga kreatif berbasis kerohanian yang mewadahi talenta generasi muda untuk berkarya melalui musik, serta menjadi sarana dalam menyampaikan kasih Tuhan kepada dunia.
                        </Typography>
                    </Box>

                    {/* MISI CARD */}
                    <Box sx={{ flex: 1, bgcolor: "#E8EAF6", color: "#050A30", borderRadius: "24px", p: { xs: 4, md: 6 }, boxShadow: "0px 8px 25px rgba(0,0,0,0.3)" }}>
                        <Typography variant="h4" sx={{ fontWeight: 800, textAlign: "left", mb: 4, textTransform: "uppercase" }}>
                            MISI
                        </Typography>
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
                    component={MotionBox}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <Typography variant="h3" sx={{ fontWeight: 800, textAlign: "center", textTransform: "uppercase", mb: 6, fontSize: { xs: "2rem", md: "2.8rem" } }}>
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
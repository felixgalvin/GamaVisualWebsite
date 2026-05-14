import React from "react";
import { Box, Typography, Container, Grid, Button, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../routes/NavBar";
import Footer from "../routes/BottomNav";
import coverImg from "../assets/CoverBlur.png"; 

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const HomePage: React.FC = () => {
  return (
    <Box sx={{ minHeight: "100vh", width: "90vw", backgroundColor: "#050A30", color: "#fff", overflowX: "hidden" }}>
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
          sx={{ width: { xs: "80%", md: "50%" }, maxWidth: "600px", mb: 2 }}
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
        <Grid container spacing={4} sx={{ mb: 15 }}>
          {[1, 2].map((albumId, index) => ( // Ubah 'item' menjadi 'albumId' agar tidak bentrok dengan prop Grid
            <Grid item xs={12} md={6} key={albumId}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Paper
                  elevation={10}
                  sx={{
                    height: "300px",
                    borderRadius: "20px",
                    backgroundImage: `url('YTThumbnailKasihMuTakBerubah.jpg')`,
                    backgroundSize: "cover",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* 4. ABOUT SECTION */}
        <Box
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Grid container spacing={6} sx={{ mb: 15, alignItems: "center" }}>
            <Grid item xs={12} md={5}>
              <Typography variant="h3" sx={{ fontWeight: 800 }}>GAMA VISUAL?</Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Gama Visual adalah komunitas kreatif yang berjalan dengan berkolaborasi serta mewadahi generasi muda yang memiliki talenta melalui karya musik yang membawa pesan kasih dan pengharapan.

                “Gama” berarti perjalanan—sebuah proses yang penuh makna, yang membentuk kami untuk terus berkarya dan menjadi berkat bagi sesama.
              </Typography>
              <Button variant="contained" sx={{ borderRadius: "20px", bgcolor: "#fff", color: "#000", "&:hover": { bgcolor: "#ddd" } }}>
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* 5. BEHIND THE SCENE SECTION */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography 
            component={motion.h4}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            variant="h4" 
            sx={{ fontWeight: 700, mb: 6, letterSpacing: 1 }}
          >
            Behind The Scene
          </Typography>

          <Grid container spacing={3}>
            {[
              "../assets/SiaranRadioMei.jpeg", 
              "../assets/SiaranRadioMei.jpeg", 
              "../assets/SiaranRadioMei.jpeg"
            ].map((path, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      height: "280px",
                      borderRadius: "16px",
                      overflow: "hidden",
                      position: "relative",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      backgroundImage: `url('${path}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0px 20px 40px rgba(0,0,0,0.5)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(to bottom, transparent 0%, rgba(5, 10, 48, 0.5) 100%)",
                      }}
                    />
                  </Paper>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

      </Container>
      
      <Footer />
    </Box>
  );
};

export default HomePage;
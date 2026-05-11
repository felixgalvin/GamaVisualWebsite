import React from "react";
import { Box, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Album", path: "/album" },
    { label: "Profile", path: "/profile" },
    { label: "Quotes", path: "/quotes" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <Box
      component="nav"
      sx={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        backgroundColor: "transparent",
        background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "80px", 
            px: { xs: 2, md: 4 },
          }}
        >
          {/* Logo Section */}
          <Box 
            onClick={() => navigate("/")}
            sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <img src="/assets/LogoGama.PNG" alt="Gama Visual" style={{ height: '40px' }} /> 
          </Box>

          {/* Navigation Items */}
          <Box
            sx={{
              display: "flex",
              gap: { md: 4, lg: 6 }, // Jarak antar menu lebih lebar sesuai gambar
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => navigate(item.path)}
                sx={{
                  color: "#fff", // Warna teks putih
                  textTransform: "none",
                  fontSize: "0.95rem",
                  fontWeight: 400,
                  opacity: 0.8,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "transparent",
                    opacity: 1,
                    transform: "translateY(-2px)", // Efek angkat sedikit saat hover
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
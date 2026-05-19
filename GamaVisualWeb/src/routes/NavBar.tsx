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
        zIndex: 1100,
        // Blok Biru Tua Transparan diletakkan di container utama
        backgroundColor: "rgba(5, 10, 48, 0.7)", 
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: { xs: "70px", md: "80px" },
            px: { xs: 1, md: 2 },
          }}
        >
          {/* Logo Section */}
          <Box 
            onClick={() => navigate("/")}
            sx={{ 
              cursor: "pointer", 
              display: "flex", 
              alignItems: "center",
              flexShrink: 0 
            }}
          >
            <img src="/LogoGama.PNG" alt="Gama Visual" style={{ height: '40px' }} /> 
          </Box>

          {/* Navigation Items */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-end" },
              gap: { xs: 0.5, sm: 1, md: 2, lg: 7 },
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => navigate(item.path)}
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontSize: { xs: "0.72rem", sm: "0.85rem", md: "0.95rem" },
                  fontWeight: 400,
                  opacity: 0.8,
                  whiteSpace: "nowrap", // Agar teks tidak turun ke bawah
                  minWidth: "auto",
                  px: { xs: 0.5, sm: 1, md: 1.5 },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "transparent",
                    opacity: 1,
                    transform: "translateY(-2px)",
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
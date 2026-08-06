import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Album", path: "/album" },
    { label: "Profile", path: "/profile" },
    { label: "Quotes", path: "/quotes" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
  ];

  const handleNavigate = (path: string) => {
    setDrawerOpen(false);
    navigate(path);
  };

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

          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: "flex", md: "none" }, color: "#ffffff" }}
            aria-label="open navigation menu"
          >
            <MenuIcon />
          </IconButton>

          {/* Navigation Items */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexWrap: "wrap",
              justifyContent: "flex-end",
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
                  whiteSpace: "nowrap",
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

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "rgba(5, 10, 48, 0.98)",
              color: "#ffffff",
              height: "auto",
              maxHeight: "calc(100vh - 80px)",
              overflowX: "hidden",
              alignSelf: "flex-start",
              borderBottomLeftRadius: 16,
              width: { xs: "min(64vw, 150px)", sm: 170 },
            },
          },
        }}
      >
        <Box sx={{ width: { xs: "100%", sm: 170 }, p: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  onClick={() => handleNavigate(item.path)}
                  sx={{
                    py: 1.5,
                    px: 1,
                    borderRadius: 2,
                    transition: "transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease",
                    backgroundColor: "rgba(5, 10, 48, 0.98)",
                    border: "1px solid transparent",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.14)",
                      borderColor: "rgba(255, 255, 255, 0.18)",
                    },
                    "&:active": {
                      transform: "scale(0.985)",
                      backgroundColor: "rgba(255, 255, 255, 0.20)",
                      borderColor: "rgba(255, 255, 255, 0.22)",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    sx={{
                      color: "#fff",
                      "& .MuiTypography-root": {
                        fontSize: "1rem",
                        fontWeight: 500,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
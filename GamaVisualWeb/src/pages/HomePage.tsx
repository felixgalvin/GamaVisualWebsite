import Box from "@mui/material/Box";
import Navbar from "../routes/NavBar";
import Footer from "../routes/BottomNav";


const HomePage: React.FC = () => {
  return (
    <Box sx={{
      minHeight: "100vh",
      backgroundImage: "url('/assets/home-background.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <Navbar />
      <Footer />
    </Box>
  );
};

export default HomePage;

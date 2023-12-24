import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material";
import MultiCarousel from "./slide";
import "@splidejs/react-splide/css";

// or other themes
// import "@splidejs/react-splide/css/skyblue";
// import "@splidejs/react-splide/css/sea-green";

// // or only core styles
// import "@splidejs/react-splide/css/core";
const App = () => {
  const theme = useTheme();

  return (
    <Stack>
      <MultiCarousel />
    </Stack>
  );
};

export default App;

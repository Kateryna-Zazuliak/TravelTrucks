import { Box, Typography, Button } from "@mui/material";
import { amber } from "@mui/material/colors";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  const primary = amber[700];
  const secondary = amber[900];
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f7f7f7"
      textAlign="center"
    >
      <Typography variant="h1" sx={{ color: primary }}>
        404
      </Typography>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Oops! The campers went the wrong way 😅.
      </Typography>
      <Button
        variant="contained"
        sx={{
          bgcolor: primary,
          color: "#000",
          "&:hover": { bgcolor: secondary },
        }}
        component={Link}
        to="/"
      >
        Return to the right route
      </Button>
    </Box>
  );
};

export default NotFoundPage;

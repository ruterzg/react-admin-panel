import { Box, Button, Typography } from "@mui/material";

function Authentication() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box
        sx={{
          flex: "1 1 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography>Home Ui</Typography>
          <Typography>Sign In</Typography>
          <Typography>Sign in to stay connected</Typography>

          <Button variant="contained">Sign In</Button>
        </Box>
      </Box>
      <Box sx={{ flex: "1 1 auto" }}>2</Box>
    </Box>
  );
}

export default Authentication;

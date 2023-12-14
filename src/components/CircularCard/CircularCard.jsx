import { Box, CircularProgress, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

function CircularCard(props) {
  return (
    <Box
      sx={{
        p: "24px",
        display: "flex",
        background: "#fff",
        columnGap: "24px",
        borderRadius: "8px",
      }}
    >
      <CircularProgress
        sx={{ color: props.color }}
        variant="determinate"
        value={props.value}
        size={68}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography color={"grey"}>{props.title}</Typography>
        <Typography>{props.price}</Typography>
      </Box>
    </Box>
  );
}

export default CircularCard;

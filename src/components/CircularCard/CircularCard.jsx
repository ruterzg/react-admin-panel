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

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          columnGap: "40px",
          mt: "-65px",
        }}
      >
        <CircularCard
          color="#3A57E8"
          value={90}
          title="Total Sales"
          price="$560K"
        />
        <CircularCard
          color="#08B1BA"
          value={80}
          title="Total Profit"
          price="$185K"
        />
        <CircularCard
          color="#3A57E8"
          value={70}
          title="Total Cost"
          price="$375K"
        />
        <CircularCard
          color="#08B1BA"
          value={62}
          title="Revenue"
          price="$742K"
        />
        <CircularCard
          color="#08B1BA"
          value={62}
          title="Revenue"
          price="$742K"
        />
      </Box>
    </Box>
  );
}

export default CircularCard;

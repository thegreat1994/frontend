import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { ICampaign } from "../../../store/campaign/types";

interface CampaignProps {
  campaign: ICampaign;
}

export default function MainCampaign(props: CampaignProps) {
  const { campaign } = props;
  const image = `http://localhost:3001/api/v1/campaign/image/${campaign.image}`;

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: "none" }} src={image} alt={campaign.image} />}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {campaign.name}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {campaign.description}
            </Typography>
            <Link variant="subtitle1" href="#">
              Continue reading...
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

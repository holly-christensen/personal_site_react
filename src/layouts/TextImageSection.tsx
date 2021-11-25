import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export interface TextImageSectionProps {
  post: {
    imgPath: string;
    imgAlt: string;
    caption: string;
    header: string;
    body: string;
  };
}

export default function TextImageSection(props: TextImageSectionProps) {
  const { post } = props;

  return (
    <Paper className="paper">
      <Grid container>
        {/* TEXT */}
        <Grid item xs={11} md={4}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography variant="h4" color="inherit">
              {post.header}
            </Typography>
            <Typography color="inherit" paragraph>
              {post.body}
            </Typography>
          </Box>
        </Grid>

        {/* IMAGE & CAPTION*/}
        <Grid item xs={11} md={7}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3 },
              pr: { md: 0 },
              mt: { xs: 0, md: 4 },
            }}
          >
            <img src={post.imgPath} alt={post.imgAlt} width="100%" />
            <Typography color="inherit" paragraph className={"caption"}>
              {post.caption}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

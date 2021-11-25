import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export interface ImageGalleryProps {
  post: {
    imgPaths: string[];
    imgAlts: string[];
    captions: string[];
  };
}

export default function ImageGallery(props: ImageGalleryProps) {
  const { post } = props;

  return (
    <Paper className="paper">
      <Grid container>
        {/* IMAGES & CAPTIONS*/}
        {post.imgPaths.map((imgPath, index) => {
          return (
            <Grid item md={3.666} xs={5.5}>
              <Box
                sx={{
                  position: "relative",
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                  pb: { md: 1 },
                }}
              >
                <img src={imgPath} alt={post.imgAlts[index]} width="100%" />
                <Typography color="inherit" paragraph className={"caption"}>
                  {post.captions[index]}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
}

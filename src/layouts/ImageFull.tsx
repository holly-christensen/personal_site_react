import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export interface ImageFullProps {
  post: {
    imgPath: string;
    imgAlt: string;
    caption: string;
    fitToScreenHeight: boolean;
  };
}

export default function ImageFull(props: ImageFullProps) {
  const { post } = props;

  const classNamesToUse = post.fitToScreenHeight ? "image-full-fitted" : "";

  return (
    <Grid container>
      {/* IMAGE & CAPTION*/}

      <Grid item md={11}>
        <Box
          sx={{
            position: "relative",
            p: { xs: 3, md: 6 },
            pr: { md: 0 },
            pb: { md: 1 },
          }}
        >
          <div className={classNamesToUse}>
            <img
              src={post.imgPath}
              alt={post.imgAlt}
              height="100%"
              width="100%"
            />
            <Typography color="inherit" paragraph className={"caption"}>
              {post.caption}
            </Typography>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}

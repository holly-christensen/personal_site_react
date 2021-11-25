import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

export interface PostBodyProps {
  post: {};
}

export default function PostBody(props: PostBodyProps) {
  const { post } = props;

  return (
    <Paper className="paper">
      {/* BELOW IMAGE */}
      <Grid container>
        <Grid item xs={9}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
            // CONTENT HERE
          ></Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

/**
 * Image Layouts
 *    image grid 2 across (images, captions)
 *    image grid 3 across (images, captions)
 *    full page height image  (image, caption)
 *     * eventually make an CaptionedImage component (image, caption)
 *
 *
 * Text Layouts
 *      text section (title, list of subheads, list of bodies)
 *      text-image 2/3 1/3 (title, body, caption, image)
 */

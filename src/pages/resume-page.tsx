import "../styles.css";
import { resumeImageFull } from "../page-content/resume-content";
import ImageFull from "../layouts/ImageFull";
import { Box, Grid, Link } from "@mui/material";

export default function ResumePage() {
  return (
    <div className={"background_dark"}>
      <Grid container>
        <Grid item xs={9}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Link
              href={"/img/misc/hollychristensen_resume_2021.pdf"}
              target={"_blank"}
            >
              View PDF
            </Link>
          </Box>
        </Grid>
      </Grid>
      <ImageFull post={resumeImageFull.post} />
    </div>
  );
}

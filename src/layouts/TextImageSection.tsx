import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { SIZES } from "../consts";

export interface TextImageSectionProps {
  post: {
    imgPath: string;
    imgAlt: string;
    imgSize: string;
    caption: string;
    header: string;
    subheaders: string[];
    bodies: string[];
  };
}

export default function TextImageSection(props: TextImageSectionProps) {
  const { post } = props;

  const widthSmall = 4;
  const widthLarge = 7;

  let textWidthToUse = post.imgSize == SIZES.SMALL ? widthLarge : widthSmall;
  let imgWidthToUse = post.imgSize == SIZES.SMALL ? widthSmall : widthLarge;

  return (
    <Grid container className={"text-image-section_container"}>
      {/* TEXT */}
      <Grid item xs={11} md={textWidthToUse}>
        <Box
          sx={{
            position: "relative",
            p: { xs: 3, md: 6 },
            pr: { md: 5 },
          }}
        >
          <Typography variant="h4" color="inherit">
            {post.header}
          </Typography>
          {post.bodies.map((bodyText, index) => {
            return (
              <li key={index} className={"text-section_body"}>
                {post.subheaders[index] !== "" && (
                  <Typography variant="h6" className={"text-section_subheader"}>
                    {post.subheaders[index]}
                  </Typography>
                )}
                <Typography color="inherit" paragraph>
                  {bodyText}
                </Typography>
              </li>
            );
          })}
        </Box>
      </Grid>

      {/* IMAGE & CAPTION*/}
      <Grid item xs={11} md={imgWidthToUse}>
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
  );
}

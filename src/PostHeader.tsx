import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

export interface PostHeaderProps {
  post: {
    title: string;
    imgPath: string;
    imgAlt: string;
    role: string;
    what: string;
    when: string;
    tools: string;
    linkText: string;
    linkUrl: string;
    about: string;
  };
}

export default function PostHeader(props: PostHeaderProps) {
  const { post } = props;

  return (
    <Paper className="paper">
      <Grid container>
        <Grid item xs={11}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 4, md: 7 },
              pr: { md: 0 },
            }}
          >
            {/* TITLE */}
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {post.title}
            </Typography>

            <img src={post.imgPath} alt={post.imgAlt} width="100%" />
          </Box>
        </Grid>
      </Grid>

      {/* BELOW IMAGE */}
      <Grid container>
        <Grid item md={2}>
          {/* INFO */}
          <Box
            sx={{
              position: "relative",
              p: { xs: 4, md: 7 },
              pr: { md: 0 },
            }}
          >
            <Typography variant="h5" color="inherit">
              Role
            </Typography>
            <Typography color="inherit" paragraph>
              {post.role}
            </Typography>
            <Typography variant="h5" color="inherit">
              When
            </Typography>
            <Typography color="inherit" paragraph>
              {post.when}
            </Typography>
            <Typography variant="h5" color="inherit">
              What
            </Typography>
            <Typography color="inherit" paragraph>
              {post.what}
            </Typography>
            <Typography variant="h5" color="inherit">
              Tools
            </Typography>
            <Typography color="inherit" paragraph>
              {post.role}
            </Typography>
            <Typography variant="h5" color="inherit">
              Links
            </Typography>
            <Link variant="subtitle1" href={post.linkUrl}>
              {post.linkText}
            </Link>
          </Box>
        </Grid>
        {/* ABOUT */}
        <Grid item xs={9}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography variant="h4" color="inherit">
              About
            </Typography>
            <Typography color="inherit" paragraph>
              {post.about}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

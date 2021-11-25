import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

export interface TextSectionProps {
  post: {
    header: string;
    subheaders: string[];
    bodies: string[];
  };
}

export default function TextSection(props: TextSectionProps) {
  const { post } = props;

  return (
    <Paper className="paper">
      <Grid container>
        <Grid item xs={9}>
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
            {post.bodies.map((bodyText, index) => {
              return (
                <li key={index} className={"text-section_body"}>
                  <Typography color="inherit" paragraph>
                    {bodyText}
                  </Typography>
                </li>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

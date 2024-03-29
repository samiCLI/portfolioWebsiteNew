import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  contactWrapper: {
    backgroundColor: fade("#FFFFFF", 0.2),
  },
  iconWrapper: {
    backgroundColor: fade("#D1FAE5", 0.6),
  },
  icon: { color: theme.palette.text.secondary },
  anchor: {
    textDecoration: "none",
    color: theme.palette.text.secondary,
    "&:hover": {
      color: theme.palette.text.secondary,
      textDecoration: "none",
    },
  },
  titleText: {
    fontWeight: 500,
  },
}));

export default function Contact() {
  const classes = useStyles();

  const content = {
    contact1: "Social",
    "contact1-desc1": "Richard-Wagner",
    "contact1-desc2": "Str. 14-16, 52078 Aachen",
    contact2: "Email",
    "contact2-desc": "office@rangojango.com",
    contact3: "Phone",
    "contact3-desc": "(+49) 15901-954-867",
  };

  return (
    <section data-aos="fade-up">
      <Container maxWidth="lg">
        <Box py={10}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <div className={classes.contactWrapper}>
                <Box textAlign="center" py={4}>
                  <Box display="flex" justifyContent="center" mb={3}>
                    <Avatar className={classes.iconWrapper}>
                      <RoomIcon color="primary" fontSize="small" />
                    </Avatar>
                  </Box>
                  <Typography
                    variant="h6"
                    className={classes.titleText}
                    gutterBottom={true}
                  >
                    {content["contact1"]}
                  </Typography>
                  <IconButton
                    className={classes.icon}
                    target="_blank"
                    href="https://www.instagram.com/rangodevelopment/"
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    className={classes.icon}
                    href="https://www.linkedin.com/company/rangodev/"
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.contactWrapper}>
                <Box textAlign="center" py={4}>
                  <Box display="flex" justifyContent="center" mb={3}>
                    <Avatar className={classes.iconWrapper}>
                      <EmailIcon color="primary" fontSize="small" />
                    </Avatar>
                  </Box>
                  <Typography
                    className={classes.titleText}
                    variant="h6"
                    gutterBottom={true}
                  >
                    {content["contact2"]}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <a
                      href="mailto:office@rangojango.com"
                      className={classes.anchor}
                    >
                      {content["contact2-desc"]}
                    </a>
                  </Typography>
                  <br />
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.contactWrapper}>
                <Box textAlign="center" py={4}>
                  <Box display="flex" justifyContent="center" mb={3}>
                    <Avatar className={classes.iconWrapper}>
                      <PhoneIcon color="primary" fontSize="small" />
                    </Avatar>
                  </Box>
                  <Typography
                    className={classes.titleText}
                    variant="h6"
                    gutterBottom={true}
                  >
                    {content["contact3"]}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <a href="tel:+4915901954867" className={classes.anchor}>
                      {content["contact3-desc"]}
                    </a>
                  </Typography>
                  <br />
                </Box>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

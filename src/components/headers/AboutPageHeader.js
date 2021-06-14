import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Link from "../../Link";
import { Badge } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: theme.palette.heavyBlue,
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(20),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(22),
      paddingBottom: theme.spacing(24.5),
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(16),
      paddingBottom: theme.spacing(16),
    },
  },
  description: {
    color: theme.palette.grey[400],
    fontWeight: 400,
  },
  primaryButton: {
    fontWeight: 500,
    borderBottomRightRadius: 0,
    color: theme.palette.common.white,

    backgroundColor: theme.palette.primary.dark,
    "&:hover": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.dark,
    },
    marginRight: theme.spacing(2),
    paddingTop: 9,
    paddingBottom: 9,
    paddingRight: 19,
    paddingLeft: 19,
    borderRadius: 9,
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
      paddingTop: 9,
      paddingBottom: 9,
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  secondaryButton: {
    fontWeight: 500,
    borderBottomRightRadius: 0,
    color: theme.palette.common.white,
    border: "2px solid gray",
    backgroundColor: theme.palette.heavyBlue,
    "&:hover": {
      color: theme.palette.primary.dark,
      backgroundColor: theme.palette.primary.light,
      fontWeight: 600,
    },
    marginRight: theme.spacing(2),
    paddingTop: 9,
    paddingBottom: 9,
    paddingRight: 19,
    paddingLeft: 19,
    borderRadius: 9,
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
      paddingTop: 9,
      paddingBottom: 9,
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  extra: {
    color: theme.palette.primary.main,
  },
  title: {
    fontWeight: 700,
  },
  badge: {
    fontWeight: 500,
    color: theme.palette.grey[200],
  },
}));

export default function Header(props) {
  const classes = useStyles();

  const content = {
    "header-p1": "Trusted Web Development agency with a",
    "header-p2": "custom-built  sites",
    description:
      "We are your one stop shop for all things Web Development, SEO, UI-UX and growing your business online.",
    "primary-action": "Book A Strategy Call",
    "secondary-action": "Get a Free Website Audit",
    badge: "About RangoJango",
    ...props.content,
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="md">
        <Box textAlign="center" color="common.white">
          <Badge>
            <Typography className={classes.badge} variant="subtitle1">
              {content.badge}
            </Typography>
          </Badge>

          <Typography variant="h2" component="h2" gutterBottom={true}>
            <Typography variant="h2" component="span" className={classes.title}>
              {content["header-p1"]}{" "}
              <span className={classes.extra}>*vision</span>{" "}
            </Typography>
          </Typography>
          <Container maxWidth="sm">
            <Typography
              variant="h6"
              color="textSecondary"
              paragraph={true}
              className={classes.description}
            >
              {content["description"]}
            </Typography>
          </Container>
          <Box mt={3}>
            <Button
              variant="contained"
              component={Link}
              fullWidth={false}
              disableRipple
              disableFocusRipple
              disableTouchRipple
              href="https://calendly.com/rangojango/business-strategy-email"
              target="_blank"
              className={classes.secondaryButton}
            >
              {content["primary-action"]}
            </Button>
            <Button
              variant="contained"
              component={Link}
              fullWidth={false}
              disableRipple
              disableFocusRipple
              disableTouchRipple
              href="/free-website-audit"
              className={classes.primaryButton}
            >
              {content["secondary-action"]}
            </Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
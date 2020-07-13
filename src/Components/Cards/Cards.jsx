import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import styles from "./Cards.module.css";
import cx from "classnames";
import CountUp from 'react-countup';  

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
//   console.log("Cards", confirmed);
  if (!confirmed) {
    return (<h1>Loading............</h1>);
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          xs={12} md={3}
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp start={0}
                end={confirmed.value}
                duration={2.5}
                separator="," />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography body="h2" gutterBottom>
              {" "}
              Number of active cases of COVID-19{" "}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12} md={3}
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {" "}
              Recovered{" "}
            </Typography>
            <Typography variant="h5" gutterBottom>
            <CountUp start={0}
                end={recovered.value}
                duration={2.5}
                separator="," />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
            {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography body="h2" gutterBottom>
              {" "}
              Number of recovered people from COVID-19{" "}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item  xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {" "}
              Deaths{" "}
            </Typography>
            <Typography variant="h5" gutterBottom>
            <CountUp start={0}
                end={deaths.value}
                duration={2.5}
                separator="," />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
            {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography body="h2" gutterBottom>
              {" "}
              Number of deaths from COVID-19{" "}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
 
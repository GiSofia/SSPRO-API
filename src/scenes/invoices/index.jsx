import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@mui/material";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import LaptopOutlinedIcon from '@material-ui/icons/LaptopOutlined';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import PauseCircleOutlineOutlinedIcon from '@material-ui/icons/PauseCircleOutlineOutlined';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  timeline: {
    transform: "rotate(90deg)"
  },
  timelineContentContainer: {
    textAlign: "left"
  },
  timelineContent: {
    display: "inline-block",
    transform: "rotate(-90deg)",
    textAlign: "center",
    minWidth: 50
  },
  timelineIcon: {
    transform: "rotate(-90deg)"
  }
});

function Invoices() {
  const classes = useStyles();

  return (
    <Timeline className={classes.timeline}>
      <TimelineItem>
        <TimelineSeparator>
          <CheckCircleOutlinedIcon
            color="primary"
            className={classes.timelineIcon}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentContainer}>
          <Paper className={classes.timelineContent}>
            <Typography>Eat</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <LaptopOutlinedIcon
            color="primary"
            className={classes.timelineIcon}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentContainer}>
          <Paper className={classes.timelineContent}>
            <Typography>Code</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <ErrorOutlineOutlinedIcon color="primary" className={classes.timelineIcon} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentContainer}>
          <Paper className={classes.timelineContent}>
            <Typography>Sleep</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <PauseCircleOutlineOutlinedIcon color="primary" className={classes.timelineIcon} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentContainer}>
          <Paper className={classes.timelineContent}>
            <Typography>Repeat</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <DoneOutlinedIcon color="primary" className={classes.timelineIcon} />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentContainer}>
          <Paper className={classes.timelineContent}>
            <Typography>Sleep</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default Invoices;

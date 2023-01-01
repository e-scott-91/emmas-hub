import React from 'react';
import a11y from "../assets/AccessibilityChampion.jpeg";
import './Achievements.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CloudIcon from '@mui/icons-material/Cloud';
import CreateIcon from '@mui/icons-material/Create';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { ReactComponent as IEEE } from "../assets/ieee-logo.svg";

export default function Achievements() {
    return (
        <div className="achievements-page">
            <h1 className="italics">Some notable points from recent years...</h1>
            <Timeline>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        December 2022
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <AccessibilityIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" fontWeight="bold" component="span">
                            Intuit Accessibility Champion Level Two
                        </Typography>
                        <Typography className="italics">Became the Accessibility Lead for Intuit London.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        July 2022
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <AccountBoxIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" fontWeight="bold" component="span">
                            Joined Intuit as Software Engineer 2
                        </Typography>
                        <Typography className="italics">Working on QBO as a Full Stack Engineer</Typography>
                    </TimelineContent>
                </TimelineItem>
                <a href="https://ieeexplore.ieee.org/document/9888829">
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >
                            June 2022
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot>
                                <CreateIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" fontWeight="bold" component="span">
                                Paper published by IEEE
                            </Typography>
                            <Typography className="italics">First author on a paper focussed on optimising security recommendation in your smart home.</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </a>
                <a href="https://www.credential.net/60dcc463-89c0-4b11-ab40-97b9d9cee0cc?key=4002ac03583b0e3ea1bb9ea1cbb6e56b2495ec3d142977a4ad62d03d1e796ac9&record_view=true">
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >
                            October 2021
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot>
                                <CloudIcon />
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" fontWeight="bold" component="span">
                                GCP Associate Cloud Engineer
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </a>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        July 2021
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot>
                            <AccountBalanceIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" fontWeight="bold" component="span">
                            Joined Deutsche Bank as a Technology Analyst
                        </Typography>
                        <Typography className="italics">Worked as a backend developer in two teams</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        July 2021
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot>
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" fontWeight="bold" component="span">
                            Graduated 1st Class Hons BSc Computer Science
                        </Typography>
                        <Typography className="italics">Achieved a weighted average grade of 94%</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}
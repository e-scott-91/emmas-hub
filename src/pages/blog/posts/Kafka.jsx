import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import kafkaDiagram from '../../../assets/kafka-diagram.png';
import './posts.css';

export default function Kafka() {
    return (
        <div className="blog-post-container">
            <Paper className="blog-post-paper" elevation={3}>
                <div className="blog-post">
                    <h1>Kafka</h1>
                    <div className="blog-content">
                        <p>
                            I have been working with Kafka for about 5 months now and think it is great. It is also used by
                            50% of all fortune 100 companies so I am not alone in my opinion. Despite this, of my junior colleagues,
                            the general rule seems to be that only those who work with it are aware of it, meaning a large proportion miss
                            out. This post hopes to bridge that gap.
                        </p>
                        <h2>
                            Exploration
                        </h2>
                        <p className="italics">So what is it?</p>
                        <p>
                            It is an event streaming platform.
                        </p>
                        <p className="italics">And what does that mean?</p>
                        <p>
                            It allows developers to create applications that continually consume and produce streams of data
                            records in real time, allowing stream processing.

                            To understand stream processing, it can be helpful to comapre it to the alternative batch processing.
                            In batch processing, data is collected over time and then (as the name suggests) it is processing in a batch.
                            Some batch processing example are a result of legacy system restraints however there are situations where
                            batch processing is still preferable.

                            Stream processing instead incolves processing each event in real time as they occur/ arrive.
                        </p>
                        <br />
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight:"bold"}}>Stream Processing</TableCell>
                                        <TableCell sx={{ fontWeight:"bold"}}>Batch Processing</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            LinkedIn - for the activity stream along with operational metrics
                                        </TableCell>
                                        <TableCell>End of day calculations (e.g. revenue calculations across a chain of shops)</TableCell>
                                    </TableRow>
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            Netflix - real time monitoring
                                        </TableCell>
                                        <TableCell>Payroll</TableCell>
                                    </TableRow>
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            Twitter - continual machine learning pipeline
                                        </TableCell>
                                        <TableCell>In depth analysis of large amounts of data</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                        <p className="italics">What makes it better than alternatives?</p>
                        <ul>
                            <li>It is distributed. It runs on a cluster that can span several severs or even several data centres.
                            This makes it resilient.</li>
                            <li>Whilst being resilient is also maintains the order of occurrence of data records.</li>
                            <li>The replication of records is done in a way that allows for high volumes of users
                            (or applications) to use the platform/ cluster simultaneously with no lag in performance.</li>
                            <li>It allows for a multi-subscriber and multi-producer architecture, leading to increased functionality
                            and more streamlined solutions for inevitably complex business problems.</li>
                            <li>It can store the data records durably and reliably for as long as one wants after being consumed.</li>
                        </ul>
                        <p className="italics">Challenges?</p>
                        <p>
                            A result of its many strengths is complexity. For teams who have no previously worked with event streaming platforms, there are many new concepts to understand in order to implement Kafka
                            correctly and optimally. However - there are now several Kafka deployment/ operator solutions
                            on the market which allow for simpler deployment and maintenance of clusters within a containerized
                            environment. Knowledge is still required but complexity is definitely reduced.
                        </p>

                        <h2>Key Concepts</h2>
                        <p className="italics">
                            Here is a highly simplified diagrammatic representation of a Kafka application along with description to
                            refer to for some the these key concepts below:
                        </p>
                        <img src={kafkaDiagram} className="kafka-diagram" alt="A basic flow diagram of a kafka cluster with a producer being a mobile payments app
                        a consumer being a consumer being an application which processes the data and the payments topic within the main cluster." />
                        <ul>
                            <li>Each transaction acts as a record and its occurrence is an event.</li>
                            <li>The payments topic which is hosted within the Kafka cluster accepts the record from
                            the producer and provides it to a con</li>
                        </ul>
                    </div>
                </div>
            </Paper>
        </div>
    )
}
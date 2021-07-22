import React from 'react';
import './aboutme.css'
import { Link } from 'react-router-dom'

const AboutMe = () => {

    return (
        <>
            <div className="aboutmeMain">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">About Me</h1>
                        <p class="lead">Aspiring developer with ambitions in all of computer science</p>
                    </div>
                </div>
                <h1>Basic Information</h1>
                <div class="tableDiv">
                    <table class="table">
                        <tbody>
                            <tr>
                                <th scope="row">Age</th>
                                <td>17</td>
                            </tr>
                            <tr>
                                <th scope="row">Year of School</th>
                                <td>12th Grade</td>
                            </tr>
                            <tr>
                                <th scope="row">Location</th>
                                <td>Atlanta, Georgia, USA</td>
                            </tr>
                            <tr>
                                <th scope="row">Programing For: </th>
                                <td>5 years now</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br></br>
                <br></br>
                <h1>Q/A</h1>
                <section className="aboutmypalateSection">
                    <h4>What do you love about programming?</h4>
                    <p>I love working through challenging problems and having that feeling of satisfaction after getting through a tough task. I also love collaborating with others.</p>
                    <h4>What do you like to do outside of programming and school?</h4>
                    <p>I love to watch and play basketball. I also, of course, love to play video games.</p>
                    <h4>What are your future aspirations?</h4>
                    <p>I want to go to college and go to a great computer science program. Ultimately, I'd like to go all the way through to getting a PhD</p>
                    <h4>Are you open to frelancing and doing work outside of what you're doing now?</h4>
                    <p>Of course! Contact me with my contact information at the bottom of this page and we can work something out.</p>
                </section>
                <h1>Skills</h1>
                <div className="allGraphs">
                    <h4>JavaScript</h4>
                    <div class="graphContainer">
                        <div class="skill javascript">85%</div>
                    </div>
                    <h4>React</h4>
                    <div class="graphContainer">
                        <div class="skill react">85%</div>
                    </div>
                    <h4>Web Components/Lit</h4>
                    <div class="graphContainer">
                        <div class="skill lit">90%</div>
                    </div>
                    <h4>Python</h4>
                    <div class="graphContainer">
                        <div class="skill python">90%</div>
                    </div>
                    <h4>TensorFlow</h4>
                    <div class="graphContainer">
                        <div class="skill tensorflow">30%</div>
                    </div>
                    <h4>SQL</h4>
                    <div class="graphContainer">
                        <div class="skill sql">45%</div>
                    </div>
                    <h4>Being a cool dude</h4>
                    <div class="graphContainer">
                        <div class="skill cooldude">100%</div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <h1>Contact Info</h1>
                <div class="tableDiv">
                    <table class="table">
                        <tbody>
                            <tr>
                                <th scope="row">Email</th>
                                <td>avaye.dawadi@gmail.com</td>
                            </tr>
                            <tr>
                                <th scope="row">GitHub URL</th>
                                <td>github.com/avayedawadi</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br></br>
            </div>
        </>
    );
}

export default AboutMe;
import React from 'react';
import '../WebComponentCollection/the-gallery';
import 'pugh-chart'
import './projects.css'
import { Link } from 'react-router-dom'
import WorkImage from './projectImage/workImage'

const Work = () => {

    function openModal(){
        document.getElementById("exampleModal").style.display = "block"
        document.getElementById("exampleModal").classList.add("show")
    }

    function closeModal(){
        document.getElementById("exampleModal").style.display = "none"
        document.getElementById("exampleModal").classList.remove("show")
    }

    return (
        <>
            <div className="projectMain">
                <h1>My Projects and Experience</h1>
                <Link to="/gtri"><WorkImage text="My Work with GTRI" imageURL="https://www.randydeng.com/assets/images/work/gtri.png"></WorkImage></Link>
                <Link to='/mypalate'><WorkImage imageURL="https://pbs.twimg.com/profile_images/1260431576808263680/HtWrWGJc.jpg"></WorkImage></Link>
            </div>

        </>
    );
}

export default Work;
/*
<h5>Time Worked: 6 weeks over the summer of 2021</h5>
<h5>Skills Gained: Working with Lit and Web Components as well as presentation skills</h5>
<h5>Tangibles Created: Deployed 2 components to NPM</h5>*/
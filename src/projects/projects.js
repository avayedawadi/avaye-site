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
                <WorkImage text="My Work with GTRI" imageURL="https://www.randydeng.com/assets/images/work/gtri.png"></WorkImage>
                <WorkImage customClick={()=>{openModal()}} imageURL="https://pbs.twimg.com/profile_images/1260431576808263680/HtWrWGJc.jpg"></WorkImage>
                <div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog  " role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">MyPalate</h5>
                                <button onClick={()=>{closeModal()}} type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                               Making a page for my MyPalate work is currently a work in progress. As a quick runthrough, I have done work with 
                               Python, JavaScript, React, TensorFlow, SQL, and BeautifulSoup through MyPalate and have been working there about a year now.
                            </div>
                            <div class="modal-footer">
                                <button onClick={()=>{closeModal()}} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Work;
/*
<h5>Time Worked: 6 weeks over the summer of 2021</h5>
<h5>Skills Gained: Working with Lit and Web Components as well as presentation skills</h5>
<h5>Tangibles Created: Deployed 2 components to NPM</h5>*/
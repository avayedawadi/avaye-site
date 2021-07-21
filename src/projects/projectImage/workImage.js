import React from 'react';
import './workImage.css'
import { Link } from 'react-router-dom'

const WorkImage = (props) => {
    return (
        <>
            <div className="workImageMain">
                <img onClick={props.customClick} src={props.imageURL} alt="gtriImage" className="workImage"></img>
            </div>
        </>
    );
}

export default WorkImage;

/*

<div className="workImageMain">
                <img src="https://www.randydeng.com/assets/images/work/gtri.png" alt="gtriImage" className="workimage"></img>
                <div class="workImageOverlay"></div>
            </div>*/
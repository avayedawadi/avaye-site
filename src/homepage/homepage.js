import React from 'react';
import '../WebComponentCollection/the-gallery';
import 'pugh-chart'
import './homepage.css'
import {Link} from 'react-router-dom'

//let customElements = window.customElements;
//customElements.get('the-gallery') || customElements.define('the-gallery', TheGallery);

const Home = () => {
    const categories = ['Price','Fun','Complexity'];
    const weights = [1,2,3];
    const options = [["Car",1,-2,2],["Bike",-3,3,3],["Train",1,1,1]];
    window.onload = (event) => {
        setTimeout(function(){ window.location.reload(); }, 500);
      };
    return (
        <>  
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                crossOrigin="anonymous"
            />
            <div className="main">
                <div className="center">
                    <h1>Hi, I'm Avaye Dawadi</h1>
                    <p>Thanks for coming!</p>
                    <Link to="/aboutme"><button className="homeButton">About Me</button></Link>
                </div>
            </div>
           
        </>
    );
}

export default Home;

/*
<div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Hi, my name is Avaye Dawadi</h1>
                    <p className="lead">This is my personal website. Welcome to the journey!</p>
                </div>
            </div>
 <h1 style={{ textAlign: "center" }}>Picture Gallery</h1>
            <the-gallery buttonOnTop="false" selectionIndicator="true">
                <img src="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131603.jpg"></img>
                <img src="https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg"></img>
                <img src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg"></img>
                <img src="https://www.legacy.com/wp-content/uploads/2020/01/Sympathy-flowers-orange-1000-shutterstock_694680475-1200x900.jpg"></img>
            </the-gallery>
            <pugh-chart inputCategories="Price,Fun,Complexity" inputWeights = "1,2,3" inputOptions="Car,1,1,1/Bike,2,2,2"></pugh-chart>*/
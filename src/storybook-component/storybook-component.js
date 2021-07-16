import React from 'react';

const storybookComponent = () =>{
    return(
        <>
            <h1>Storybooks for my projects can be found below.</h1>
            <hr></hr>
            <h3>Why use storybook?</h3>
            <p>Storybook allows for web components or any UI component to be tested in isolation. For me, it allows me to quickly change styles and functionalities for testing without
                having to manually change any code. The component must be written in a way that leaves it editable, but once it is written in this way, testing is very easy.
            </p>
            <hr></hr>
            <p>Click the link to go to the storybooks. You will have to click the back arrow to come back. Use Ctrl+Shift+R for a hard refresh in the event that something breaks.</p>
            <hr></hr>
            <h4>Pugh Chart Storybook</h4>
            <p>Simply click the link and then edit the controls to edit the storybook.</p>
            <a href="https://avayedawadi.github.io/pughChartStatic/?path=/story/pughchart--regular">Pugh Chart Storybook</a>
            <hr></hr>
            <h4>Idle Timeout Storybook</h4>
            <p>Once you click the link you need to remain idle for 5 seconds for the component to come up. But you can edit everything (including the timings) in the controls.</p>
            <a href="https://avayedawadi.github.io/idleTimeoutStatic/?path=/story/idletimeoutcomponent--regular">Idle Timeout Storybook</a>
        </>
    );
}

export default storybookComponent;
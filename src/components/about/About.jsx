import React from "react";
import "./about.css";

function About() {
    return (
      <div class="container my-5">
      <div class="row">
        <div class="col-md-4">
          <img src="" alt="Profile Photo" class="img-fluid rounded">
        </div>
        <div class="col-md-8">
          <h2>About Me</h2>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id accumsan neque. Vestibulum ac
            ipsum velit. Sed placerat sapien at velit vestibulum, sit amet venenatis lacus auctor. Maecenas et tellus
            turpis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet mi aliquam, dictum enim vel,
            bibendum nunc. Suspendisse tempor dui a augue vestibulum, at feugiat magna bibendum. Proin suscipit elit vel
            nulla laoreet vehicula. Integer in urna eu sapien vulputate pharetra.</p>
        </div>
      </div>
    </div>

    );
  }
  
  export default About;
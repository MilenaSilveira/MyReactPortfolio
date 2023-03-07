import React from "react";
import "./portfolio.css";


function Portfolio() {
    return (

<section id="projects">
        <h2>My Projects</h2>
        <ul class="list-unstyled">
          <li class="media my-4">
            <img
              src=""
              class="mr-3"
              alt="Project 1"
            />
            <div class="media-body">
              <h5 class="mt-0 mb-1"><a href="#">Fit Resolution</a></h5>
              <p>Fit Resolution</p>
            </div>
          </li>
          <li class="media my-4">
            <img
              src=""
              class="mr-3"
              alt="Project 2"
            />
            <div class="media-body">
              <h5 class="mt-0 mb-1"><a href="#">Weather Report</a></h5>
              <p>Weather Report</p>
            </div>
          </li>
          <li class="media my-4">
            <img
              src=""
              class="mr-3"
              alt="Project 3"
            />
            <div class="media-body">
              <h5 class="mt-0 mb-1"><a href="#">Nanny's Diary</a></h5>
              <p>Nanny's Diary</p>
            </div>
            <li class="media my-4">
                <img
                  src=""
                  class="mr-3"
                  alt="Project 4"
                />
                <div class="media-body">
                  <h5 class="mt-0 mb-1"><a href="#">Project 3</a></h5>
                  <p>Project 3</p>
                </div>
              </li>
          </li>
        </ul>
      </section>

);
}

export default Portfolio;
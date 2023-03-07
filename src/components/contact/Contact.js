import React from "react";
import "./contact.css";

function Contact() {
    return (
      <footer class="bg-dark text-white py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p class="mb-0">Milena Silveira</p>
              <p class="mb-0">Email: milsilveira@gmail.com</p>
              <p class="mb-0">Phone: 407-123-4567</p>
            </div>
            <div class="col-md-6">
              <ul class="list-inline mb-0 text-right">
                <li class="list-inline-item">
                  <a href="https://github.com/MilenaSilveira" class="text-white">
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.linkedin.com/in/milena-silveira-80239b166/" class="text-white">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Contact;
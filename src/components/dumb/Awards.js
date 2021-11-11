import React from "react";
import sviswanathan from "../../img/sviswanathan.JPG";
import gopalkrishna from "../../img/gopalkrishna.JPG";
import grainPesting from "../../img/grainPesting.JPG";
import training from "../../img/training.JPG";
const Awards = () => {
  return (
    <section className="secondary-header" id="awards-achievements">
      <h1>
        <i class="fas fa-award"></i> Awards and Achievements
      </h1>
      <div className="awards-content-img">
        <div className="awards-img">
          <img src={sviswanathan} alt="Mr.S.Viswanathan" />
          <span className="img-title">(Mr. S.Viswanathan)</span>
        </div>
        <div className="awards-img">
          <img src={gopalkrishna} alt="Mr. G. Gopalakrishnan" />
          <span className="img-title">(Mr. G. Gopalakrishnan)</span>
        </div>
      </div>
      <div className="awards-content-body">
        <p className="content-text">
          Mr.S.Viswanathan is President of the Pest Control Association of India
          and Mr. G. Gopalakrishnan has been General Secretary cum Treasurer of
          the Pest Control Association of India for more than five years and has
          been given the “Lifetime” award for his contributions to the Pest
          Control Industry.
        </p>
        <p className="content-text">
          Mr.G.Gopalakrishnan and Mr.S.Viswanathan have closely interacted with
          senior officials of the Directorate of Plant Protection, Government of
          India in vital issues affecting the Pest Control and Fumigation
          businesses
        </p>
        <div className="awards-content-img">
          <div className="awards-img">
            <img src={grainPesting} alt="grain Pesting" />
            {/* <span className="img-title">(Mr. S.Viswanathan)</span> */}
          </div>
          <div className="awards-img">
            <img src={training} alt="Mr. G. Gopalakrishnan" />
            {/* <span className="img-title">(Mr. G. Gopalakrishnan)</span> */}
          </div>
        </div>
        <p className="content-text">
          Mr.Gopalakrishnan and Mr.S.Viswanathan are visiting faculty at the
          Central Food Technological Research Institute, Mysore for its course
          on Pest Management Techniques for Stored Grains. Mr.Viswanathan
          regularly conducts training programs for preparing Indian fumigators
          in NSPM 11 &amp; 12, and ISPM-15 requirements and techniques.
        </p>
        <p className="content-text">
          Mr.Gopalakrishnan developed techniques for carrying out large scale
          fumigations including one of 29,000 Cubic Meters (at one go) for a
          spices warehouse at Kerala.
        </p>
      </div>
    </section>
  );
};

export default Awards;

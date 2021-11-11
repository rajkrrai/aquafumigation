import React from "react";
import Awards from "./Awards";
import Dimensions from "./Dimensions";
import logistics2_n from "../../img/logistics2_n.jpg";
import disinfectant1_n from "../../img/disinfectant1_n.jpg";
import corona4 from "../../img/corona4.jpg";

const Homepage = () => {
  return (
    <div>
      <section className="intro-header">
        <div className="header">
          <h1>who are we?</h1>
          <p className="intro-text">
            Welcome to Aqua and Arthropods Pest Control Pvt Ltd., an established
            company having a pan-India. We have a rich profile of satisfied
            clients, many of them leaders in their fields.
          </p>
          <p className="intro-text">
            With over 25 years experience in the Pest Control business, we take
            pride in providing high-quality, failure-free fumigation with over
            16 offices and 45 loyal and committed professionals.
          </p>
        </div>
        <div className="header-img">
          <img
            className="intro-img"
            src={logistics2_n}
            alt="man near ship containers"
          />
        </div>
      </section>

      {/* 2nd section */}
      <section className="intro-header">
        <div className="header-img">
          <img
            className="intro-img"
            src={disinfectant1_n}
            alt="pest control for ship"
          />
        </div>
        <div className="header">
          <h1>
            <i class="fas fa-tasks"></i> what do we offer?
          </h1>

          <div>
            <p className="intro-text sub-titles">
              Pre-shipment, Quarantine Treatments and Fumigation for
            </p>
            <ul className="offer-list">
              <li>
                <i className="far fa-check-circle"></i>Empty Container
              </li>
              <li>
                <i className="far fa-check-circle"></i>Stuffed Container
              </li>

              <li>
                <i className="far fa-check-circle"></i>Warehouses and silos
              </li>
              <li>
                <i className="far fa-check-circle"></i>Cargo on board a vessel
              </li>
              <li>
                <i className="far fa-check-circle"></i>Stored Grain
              </li>
              <li>
                <i className="far fa-check-circle"></i>Factories
              </li>
              <li>
                <i className="far fa-check-circle"></i>Wooden Pallets
              </li>
              <li>
                <i className="far fa-check-circle"></i>Other packaging materials
                as per ISPM-15
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Awards />
      <Dimensions />
      {/* Corona info */}
      <section className="secondary-section" id="corona-info">
        <h1>
          <i class="fas fa-shield-virus"></i> Covid Info
        </h1>
        <div className="covid-body">
          <img src={corona4} alt="corona virus" className="corona-img" />
          <div className="covid-text">
            <p>
              As of now, more than 250 M+ people have been infected with the new
              Corona virus (COVID-2019) with approximately 5 M+ reported deaths.
              China is the supposedly the epicenter of the infection that is
              rapidly spreading to all parts of the world. Many importers and
              traders are concerned with the spread of this deadly virus
              infection through cargo imported in containers coming from the
              infected countries including China and South Korea.
            </p>

            <p>
              We offer a very powerful treatment for containers and cargo
              suspected to be infected with the Corona Virus. The solutions we
              provide are – <br />
              <ul className="offer-list">
                <li>
                  <i className="far fa-check-circle"></i>Highly effective
                  against all viruses, bacteria, fungi and other potentially
                  disease-causing agents
                </li>
                <li>
                  <i className="far fa-check-circle"></i>Safe for humans
                </li>

                <li>
                  <i className="far fa-check-circle"></i>Non-corrosive,
                  non-toxic, non-carcinogenic
                </li>
                <li>
                  <i className="far fa-check-circle"></i>Environmentally safe as
                  it is bio-degradable
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      {/* contact us section */}
      <section className="secondary-section" id="contact-us">
        <h1>
          <i class="fas fa-id-card"></i> contact us
        </h1>
        <div className="contact-list">
          {/* chennai */}
          <div className="contact-items">
            <h3 className="city-name">Chennai</h3>
            <ul>
              <li className="contactus-listitems">
                <i className="far fa-id-badge list-icons"></i>
                <p>G. Gopalakrishnan (Director)</p>
              </li>
              <li className="contactus-listitems">
                <i className="fas fa-map-marker-alt list-icons"></i>
                {/* Flat H, Ramana Apartments, No 13, <br />
                <span className="address-line">First Main Road, Raja Annamalai Puram,</span> <br />
                <span>Chennai 600 028</span> */}
                <p>
                  Flat H, Ramana Apartments, No 13, <br />
                  First Main Road, Raja Annamalai Puram,
                  <br /> Chennai – 600 028
                </p>
              </li>
              <li className="contactus-listitems">
                <i className="fas fa-tty list-icons"></i>
                <p>+91 44 24617621</p>
              </li>
              <li className="contactus-listitems">
                <i className="fas fa-mobile-alt list-icons"></i>
                <p>+91 98410 04380</p>
              </li>
              <li className="contactus-listitems">
                <i className="far fa-envelope-open list-icons"></i>
                <div>
                  <a href="mailto:gopal@aquafumigation.com">
                    gopal@aquafumigation.com
                  </a>{" "}
                  <br />
                  <a href="mailto:chennai@aquafumigation.com">
                    chennai@aquafumigation.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/* coimbatore */}
          <div className="contact-items">
            <h3 className="city-name">Coimbatore</h3>
            <ul>
              <li className="contactus-listitems">
                <i className="far fa-id-badge list-icons"></i>
                <p>Kumar Iyer</p>
              </li>
              <li className="contactus-listitems">
                <i className="fas fa-map-marker-alt list-icons"></i>
                <p>
                  Varun Sri Hari Complex, 539-A, <br />
                  100-Feet Road,Gandhipuram, <br />
                  Coimbatore – 641012
                </p>
              </li>
              <li className="contactus-listitems">
                <i className="fas fa-tty list-icons"></i>
                <p>+91 422 451 2070</p>
              </li>
              <li className="contactus-listitems">
                <i className="fas fa-mobile-alt list-icons"></i>
                <p>+91 98421 23680</p>
              </li>
              <li className="contactus-listitems">
                <i className="far fa-envelope-open list-icons"></i>
                <a href="mailto: hosur@aquafumigation.com">
                  hosur@aquafumigation.com
                </a>
              </li>
            </ul>
          </div>
          {/* bangalore */}
          <div className="contact-items">
            <h3 className="city-name">bangalore</h3>
            <ul>
              <li className="contactus-listitems">
                <i className="far fa-id-badge list-icons"></i>
                <p> R. Ramesh</p>
              </li>
              <li className="contactus-listitems">
                <i className="fas fa-map-marker-alt list-icons"></i>
                <p>
                  19/1, Fifth Cross, Shanthi <br />
                  Nagar West, Hosur – 635 109
                </p>
              </li>
              {/* <li>
                <i className="fas fa-tty list-icons"></i>+91 94425 45680
              </li> */}
              <li className="contactus-listitems">
                <i className="fas fa-mobile-alt list-icons"></i>
                <p>+91 94425 45680</p>
              </li>
              <li className="contactus-listitems">
                <i className="far fa-envelope-open list-icons"></i>
                <a href="mailto:coimbatore@aquafumigation.com">
                  coimbatore@aquafumigation.com
                </a>
              </li>
            </ul>
          </div>
          {/* delhi */}
          <div className="contact-items">
            <h3 className="city-name">New Delhi</h3>
            <ul>
              <li className="contactus-listitems">
                <i className="far fa-id-badge list-icons"></i>
                <p>G. Amirtharaj</p>
              </li>
              <li className="contactus-listitems">
                <i className="fas fa-map-marker-alt list-icons"></i>
                <p>
                  HR 5/1, First Floor, Near Sharma <br />
                  Market, Pul Pehladpur, M.B.Road
                </p>
              </li>
              <li className="contactus-listitems">
                <i className="fas fa-tty list-icons"></i>
                <p>+91-11-2636 3488</p>
              </li>
              <li className="contactus-listitems">
                <i className="fas fa-mobile-alt list-icons"></i>
                <p>+91 98101 73217</p>
              </li>
              <li className="contactus-listitems">
                <i className="far fa-envelope-open list-icons"></i>
                <a href="mailto:delhi@aquafumigation.com">
                  delhi@aquafumigation.com
                </a>
              </li>
            </ul>
          </div>
          {/* Mumbai */}
          <div className="contact-items">
            <h3 className="city-name">Mumbai</h3>
            <ul>
              <li className="contactus-listitems">
                <i className="far fa-id-badge list-icons"></i>
                <p>Shekar Raghavan</p>
              </li>
              <li className="contactus-listitems">
                <i className="fas fa-map-marker-alt list-icons"></i>
                <p>
                  101, Kalindi, Plots 3 &amp; 4, <br />
                  Sector 19-C Vashi,
                  <br />
                  Navi Mumbai – 400 703
                </p>
              </li>
              <li className="contactus-listitems">
                {/* <i class="fas fa-fax"></i> */}
                <i className="fas fa-fax list-icons"></i>
                <p>+91 22 6450 5375</p>
              </li>
              <li className="contactus-listitems">
                <i className="fas fa-tty list-icons"></i>
                <p>+91 22 6450 5375</p>
              </li>
              <li className="contactus-listitems">
                <i className="fas fa-mobile-alt list-icons"></i>
                <div>
                  <p>+91 98202 26206</p>
                  <p>+91 98198 85919</p>
                </div>
              </li>
              <li className="contactus-listitems">
                <i className="far fa-envelope-open list-icons"></i>
                <div>
                  <a href="mailto:shekar@aquafumigation.com">
                    shekar@aquafumigation.com
                  </a>{" "}
                  <br />
                  <a href="mailto:mumbai@aquafumigation.com">
                    mumbai@aquafumigation.com
                  </a>
                </div>

                {/*shekar@aquafumigation.com,mumbai@aquafumigation.com */}
              </li>
            </ul>
          </div>
          {/* Kolkata */}
          <div className="contact-items">
            <h3 className="city-name">Kolkata</h3>
            <ul>
              <li className="contactus-listitems">
                <i className="far fa-id-badge list-icons"></i>
                <p>Arun Hartley</p>
              </li>
              <li className="contactus-listitems">
                <i className="fas fa-map-marker-alt list-icons"></i>
                <p>
                  32, Panditya Road, Police Station <br />
                  Lake Kolkata - 700 029
                </p>
              </li>
              <li className="contactus-listitems">
                <i className="fas fa-tty list-icons"></i>
                <div>
                  <p>+91 33 3201 5216</p>
                  <p>+91 33 2419 7978</p>
                </div>
              </li>
              <li className="contactus-listitems">
                <i className="fas fa-mobile-alt list-icons"></i>
                <p>+91 90077 47255</p>
              </li>
              <li className="contactus-listitems">
                <i className="far fa-envelope-open list-icons"></i>
                <a href="mailto:kolkata@aquafumigation.com">
                  kolkata@aquafumigation.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;

import React from "react";
import logo from "../../img/logoipsum-logo-4.svg";
const Footer = () => {
  return (
    <footer>
      <div>
        {" "}
        <img src={logo} className="logo-img" alt="Aqua fumigation logo" />
      </div>
      <div>
        <h3 className="footer-heading">Head Office</h3>

        <ul>
          <li className="contactus-listitems">
            <i className="far fa-id-badge footer-icons"></i>
            <p>
              <strong>S. Viswanathan</strong> (Technical Director)
            </p>
          </li>
          <li className="contactus-listitems">
            <i className="fas fa-map-marker-alt footer-icons"></i>
            <p>43, Chatram Street, Tuticorin - 628002</p>
          </li>
          <li className="contactus-listitems">
            <i className="fas fa-tty footer-icons"></i>
            <div>
              <p>+91 461 232 7163</p>
              <p>+91 461 420 0080</p>
            </div>
          </li>
          <li className="contactus-listitems">
            <i className="fas fa-mobile-alt footer-icons"></i>
            <p>+91 98421 45680</p>
          </li>
          <li className="contactus-listitems">
            <i className="far fa-envelope-open footer-icons"></i>
            <div>
              <a href="mailto:visu@aquafumigation.com">
                visu@aquafumigation.com
              </a>
              <br />
              <a href="mailto:tuticorin@aquafumigation.com">
                tuticorin@aquafumigation.com
              </a>
            </div>
          </li>
        </ul>
      </div>
      {/* useful links div */}
      <div>
        <h3 className="footer-heading">Useful Links</h3>
        <div>
          <ul>
            <li className="contactus-listitems">
              <i className="fas fa-angle-right footer-icons"></i>
              <a
                href="http://www.pcai-india.org/"
                target="_blank"
                rel="noreferrer"
              >
                Pest control association of india
              </a>
            </li>
            <li className="contactus-listitems">
              <i className="fas fa-angle-right footer-icons"></i>
              <a
                href="http://www.plantquarantineindia.org/"
                target="_blank"
                rel="noreferrer"
              >
                plant Quarantine organization of india
              </a>
            </li>
            <li className="contactus-listitems">
              <i className="fas fa-angle-right footer-icons"></i>
              <a
                href="https://www.ippc.int/en/core-activities/standards-setting/ispms/"
                target="_blank"
                rel="noreferrer"
              >
                National Standards for Phytosanitary Measures (NSPM)
              </a>
            </li>
            <li className="contactus-listitems">
              <i className="fas fa-angle-right footer-icons"></i>
              <a
                href="https://www.ippc.int/en/"
                target="_blank"
                rel="noreferrer"
              >
                International Plant Protection Convention (IPPC)
              </a>
            </li>
            <li className="contactus-listitems">
              <i className="fas fa-angle-right footer-icons"></i>
              <a
                href="http://www.daff.gov.au/aqis"
                target="_blank"
                rel="noreferrer"
              >
                Australian Government Quarantine &amp; Inspection Service (AQIS)
              </a>
            </li>
            <li className="contactus-listitems">
              <i className="fas fa-angle-right footer-icons"></i>
              <a
                href="http://www.daff.gov.au/aqis/import/general-info/pre-border/afas"
                target="_blank"
                rel="noreferrer"
              >
                Australian Fumigation Accreditation Scheme (AFAS)
              </a>
            </li>
            <li className="contactus-listitems">
              <i className="fas fa-angle-right footer-icons"></i>
              <a
                href="http://www.aqis.gov.au/icon32/asp/ex_querycontent.asp"
                target="_blank"
                rel="noreferrer"
              >
                ICON - Australian import conditions database
              </a>
            </li>
            <li className="contactus-listitems">
              <i className="fas fa-angle-right footer-icons"></i>
              <a href="https://www.usda.gov/" target="_blank" rel="noreferrer">
                Unites States Department of Agriculture (USDA)
              </a>
            </li>
            <li className="contactus-listitems">
              <i className="fas fa-angle-right footer-icons"></i>
              <a
                href="https://www.pestworld.org/"
                target="_blank"
                rel="noreferrer"
              >
                National Pest Management Association of America
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* general inquiry */}
      <div>
        <h3 className="footer-heading">General Inquiry</h3>
        <ul>
          <li className="contactus-listitems">
            <i className="far fa-envelope-open footer-icons"></i>
            <a href="mailto:sales@aquafumigation.com">
              sales@aquafumigation.com
            </a>
          </li>
          <li className="contactus-listitems">
            <i className="far fa-envelope-open footer-icons"></i>
            <a href="mailto:response@aquafumigation.com">
              response@aquafumigation.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

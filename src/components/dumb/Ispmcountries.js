import React, { useEffect } from "react";

const Ispmcountries = () => {
  const countriesDetails = [
    {
      country: "Argentina",
      Impdate: "Date of enforcement 1 January 2006.",
    },
    {
      country: "Australia",
      Impdate:
        "As of 1 May 2006 Australia began enforcing mandatory treatment (either onshore or off-shore) for all solid wood packaging.",
    },
    {
      country: "Bolivia",
      Impdate:
        "Date of enforcement May 24, 2005, The Bolivian regulations require imported wood packaging to be constructed from debarked wood and to be treated and marked according to the ISPM 15 standard. Wood packaging made from unmarked wood may be retained and either treated, destroyed or re-exported.",
    },
    {
      country: "Brazil",
      Impdate: "Date of enforcement 11 July 2005,",
    },
    {
      country: "Canada",
      Impdate:
        "As of 5 July2006, imports must comply with requirements of ISPM No. 15 or be subject to removal from the importing country.",
    },
    {
      country: "Chile",
      Impdate:
        "Date of enforcement 1 June 2005, will accept a Phytosanitary certificate in lieu of the ISPM 15 mark. At present Chile requires debarked wood packaging.",
    },
    {
      country: "China",
      Impdate:
        "Date of enforcement 1 January 2006.Note: to facilitate entry of consignments containing wooden packaging into China it is recommended that a statement confirming that wooden packaging material used in the consignment is ISPM 15 compliant, is included on documentation accompanying consignments.",
    },
    {
      country: "Colombia",
      Impdate: "Date of enforcement 15 September 2005.",
    },
    {
      country: "Costa Rica",
      Impdate: "Date of enforcement 19 March 2006.",
    },
    {
      country: "Cuba",
      Impdate: "Date of enforcement 1 October 2008.",
    },
    {
      country: "Dominican Republic",
      Impdate: "Date of enforcement 1 July 2006.",
    },
    {
      country: "Ecuador",
      Impdate: "Date of enforcement 30 September 2005.",
    },
    {
      country: "Egypt",
      Impdate: "Date of enforcement 1 October 2005.",
    },
    {
      country: "Fiji",
      Impdate:
        "Have indicated intention to adopt ISPM 15 but no official enforcement date has been confirmed.",
    },
    {
      country: "Guatemala",
      Impdate: "Date of enforcement 25 January 2005.",
    },
    {
      country: "Honduras",
      Impdate: "Date of enforcement 25 February 2006.",
    },
    {
      country: "Hong Kong",
      Impdate:
        "Does not have the same requirements as mainland China. Wood packaging must be free of plant pests and soil and is subject to inspection. Hence it is safer to comply with ISPM-15.",
    },
    {
      country: "India",
      Impdate:
        "Enforcement date 1 November 2004. A Phytosanitary certificate endorsed with treatment details is required unless the wood packaging material is ISPM 15 compliant and marked accordingly. In addition wooden packaging material must be fee of bark.",
    },
    {
      country: "Indonesia",
      Impdate:
        "Date of enforcement 1 September 2009. Indonesia requires an additional declaration by the exporter. Click here for the document: Indonesia ISPM 15 – Exporter Declaration.",
    },
    {
      country: "Iran",
      Impdate: "Date of enforcement 01 January, 2010.",
    },
    {
      country: "Israel",
      Impdate: "Date of enforcement 1 October, 2009.",
    },
    {
      country: "Japan",
      Impdate: "Date of enforcement 1 April, 2007.",
    },
    {
      country: "Jordan",
      Impdate: "Date of enforcement 17 November, 2005.",
    },
    {
      country: "Kenya",
      Impdate:
        "Kenya has published requirements adopting ISPM 15. The regulation went into effect January, 2006",
    },
    {
      country: "Korea",
      Impdate: "Implemented. See Republic of South Korea.",
    },
    {
      country: "Lebanon",
      Impdate: "Date of enforcement 1 July, 2006.",
    },
    {
      country: "Mexico",
      Impdate:
        "As of 5 July 2006, imports must comply with requirements of ISPM No. 15 or be subject to removal from the importing country.",
    },
    {
      country: "New Caledonia",
      Impdate: "Date of enforcement 1 June, 2006.",
    },
    {
      country: "New Zealand",
      Impdate:
        "From 1 July 2006 wood packaging must comply with ISPM -15. Any non-compliant wood will be treated, reshipped or destroyed.",
    },
    {
      country: "Nicaragua",
      Impdate:
        "Have confirmed the adoption and the intent to enforce ISPM 15, no official enforcement date has advised.",
    },
    {
      country: "Nigeria",
      Impdate:
        "Nigeria Plant Quarantine Service is now enforcing their import requirements for imported wood packaging material. Nigeria will accept ISPM 15 in lieu of the phytosanitary certificate as stated in their regulation, which took effect September 30, 2004.",
    },
    {
      country: "Norway",
      Impdate:
        "Date of enforcement 1 January 2008. Wood packaging material including packing cases and boxes, crates, drums and similar packing, pallets, box pallets and other load boards, pallet collars, as well as wood used to wedge or support cargo must have been treated and marked according to ISPM 15.",
    },
    {
      country: "Oman",
      Impdate: "Date of enforcement 1 December, 2006.",
    },
    {
      country: "Panama",
      Impdate: "Date of enforcement 17 February, 2005.",
    },
    {
      country: "Paraguay",
      Impdate: "Date of enforcement 28 June, 2005.",
    },
    {
      country: "Argentina",
      Impdate: "Date of enforcement 1 January, 2006.",
    },
    {
      country: "Peru",
      Impdate:
        "Date of enforcement 1 September, 2005. Wood packaging material must be manufactured from debarked wood.",
    },
    {
      country: "Philippines",
      Impdate:
        "Date of enforcement 1 June, 2005. All wood packaging material (such as cases, crating, dunnage, drums, load boards, packing blocks, pallets, pallet collars, and skids) must comply with ISPM 15 requirements.",
    },
    {
      country: "Republic of South Korea",
      Impdate:
        "Date of enforcement 1 June, 2005. Containers will be randomly selected for inspection to confirm wood packaging complies with ISPM 15. Failure to comply with ISPM 15 will result in the wood packaging material being directed for treatment.",
    },
    {
      country: "Samoa",
      Impdate:
        "Phytosanitary certificate is required unless wood packaging material is ISPM 15 compliant. All wood packaging material will be inspected on arrival in Samoa.",
    },
    {
      country: "Seychelles",
      Impdate: "Date of enforcement 1 March, 2006.",
    },
    {
      country: "Singapore",
      Impdate:
        "For transhipment cargo, and any cargo that is imported solely for re-export, it is recommended that the wooden packaging material should be treated and certified at the country of origin in accordance with the destination country’s requirements for wood packaging material.",
    },
    {
      country: "South Africa",
      Impdate:
        "Date of adoption 1 March, 2004 no confirmation of date of enforcement.",
    },
    {
      country: "Switzerland",
      Impdate: "Date of enforcement 1 March, 2005.",
    },
    {
      country: "Syria",
      Impdate: "Date of enforcement 1 April, 2006.",
    },
    {
      country: "Taiwan",
      Impdate: "Date of enforcement  Jan 01, 2009.",
    },
    {
      country: "Thailand",
      Impdate:
        "Notification of the intent to implement ISPM 15 was issued August 2009",
    },
    {
      country: "Trinidad and Tobago",
      Impdate:
        "Date of adoption 15 September, 2005. All wood packaging material to be treated in accordance with the ISPM 15 standard.",
    },
    {
      country: "Turkey",
      Impdate:
        "Enforcement date 1 January 2006. All Wood Packing material entering Turkey from all areas must be treated and certified in accordance with ISPM 15. All wood packing material should be debarked, subjected to fumigation by methyl bromide or heat treatment and marked in compliance with ISPM 15.",
    },
    {
      country: "Ukraine",
      Impdate: "Date of enforcement 1 October, 2005.",
    },
    {
      country: "USA",
      Impdate:
        "As of 5 July 2006, all imports must comply with requirements of ISPM No. 15 or be subject to re-treatment, destruction or removal to exporting country.",
    },
    {
      country: "Venezuela",
      Impdate: "Date of enforcement 2 May, 2005.",
    },
    {
      country: "Vietnam",
      Impdate: "Date of enforcement 5 June, 2006.",
    },
    {
      country:
        "European Union: Austria, Belgium, Bulgaria, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden, United Kingdom",
      Impdate:
        "Directive 2004/102/EC, which entered into force on 1 March 2005, requires the following measures to be taken for wood packaging material and dunnage entering the EU from all countries: <br/> <br/> &mdash; The wood must be either heat treated or fumigated with methyl bromide, in line with ISPM 15 procedures <br/><br/> &mdash; The wood must be officially marked with the ISPM 15 stamp. <br/><br/> &mdash; From 1 January 2009, all wood packaging material imported into the EU must be debarked.<br/><br/> &mdash; Dunnage must meet the same criteria as wood packaging material. ",
    },
    {
      country: "Yemen",
      Impdate:
        "Notification of intent to implement the standard has been issued but no official enforcement date has been confirmed.",
    },
  ];
  let str = "";
  for (let i = 0; i < countriesDetails.length; i++) {
    //   str += `row ${i + 1} has ${countriesDetails[i].country} and
    //     data is ${countriesDetails[i].Impdate}`;
    str += `<tr key=${i + 1}>
                  <td>${i + 1}</td>
                  <td>${countriesDetails[i].country}</td>
                  <td>${countriesDetails[i].Impdate}</td>
                </tr>`;
  }

  console.log(str);

  useEffect(() => {
    console.log("component mounted");
    setTimeout(
      () => (document.getElementById("ispm-country-data").innerHTML = str),
      500
    );
  });
  return (
    <section className="secondary-section">
      <div className="notice">
        <i class="fas fa-info-circle notice-icon"></i>
        <div className="notice-content">
          {" "}
          <p>
            As per the current requirements of ISPM-15, ALL wooden packaging
            material (including dunnage) should be FREE OF BARK.
          </p>
          <p>
            Please note this information is provided purely as a guide.
            Individual country implementation status may change without notice
            and it is the responsibility of exporters, importers and forwarders
            to comply with importing country requirements prevailing at the time
            of export.
          </p>
        </div>
      </div>

      <div className="card">
        <h6 className="ispm-heading">Last updates on 2011</h6>
        <table>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Country</th>
              <th>Implementation Date</th>
            </tr>
          </thead>
          {/* 20 standard */}
          <tbody id="ispm-country-data"></tbody>
        </table>
      </div>
    </section>
  );
};

export default Ispmcountries;

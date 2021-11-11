import React from "react";

const Dimensions = () => {
  return (
    <section className="secondary-section" id="dimensions-section">
      <div className="capacityTable">
        <h1>
          <i class="fas fa-table"></i> Container Dimensions
        </h1>
        {/* container capacity matrix - table 1 */}
        <div className="card">
          <h3>container &mdash; capacity matrix</h3>
          <table>
            <tr>
              <th>Type</th>
              <th>External/Internal</th>
              <th>Length</th>
              <th>Width</th>
              <th>Height</th>
              <th>Cubic Feet</th>
              <th>Cubic Meter</th>
            </tr>
            {/* 20 standard */}
            <tr>
              <td>20' Standard</td>
              <td>External</td>
              <td>20' (6.096 m)</td>
              <td>8' (2.438 m)</td>
              <td>8' 6" (2.591 m)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>20' Standard</td>
              <td>Internal</td>
              <td>19' 4.25" (5.899 m)</td>
              <td>7' 8.625" (2.353 m)</td>
              <td>7' 10" (2.388 m)</td>
              <td>1170 CFt</td>
              <td>33.131 CBM</td>
            </tr>
            {/* 40 standard */}
            <tr>
              <td>40' Standard</td>
              <td>External</td>
              <td>40' (12.192 m)</td>
              <td>8' (2.438 m)</td>
              <td>8' 6" (2.591 m)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>40' Standard</td>
              <td>Internal</td>
              <td>39' 5.375" (12.024 m)</td>
              <td>7' 8.625" (2.353 m)</td>
              <td>7' 10" (2.388 m)</td>
              <td>2385 CFt</td>
              <td>67.535 CBM</td>
            </tr>
            {/* 40 high cube */}
            <tr>
              <td>40' Highcube</td>
              <td>External</td>
              <td>40' (12.192 m)</td>
              <td>8' (2.438 m)</td>
              <td>9' 6" (2.896 m)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>40' Highcube</td>
              <td>Internal</td>
              <td>39' 5.375" (12.024 m)</td>
              <td>7' 8.625" (2.353 m)</td>
              <td>8' 10" (2.692 m)</td>
              <td>2690 CFt</td>
              <td>76.172 CBM</td>
            </tr>
          </table>
        </div>
      </div>

      {/* container Weight matrix - table 2 */}
      <div className="card">
        <h3>container &mdash; weight matrix</h3>
        <table>
          <tr>
            <th>Type</th>
            <th>Max Gross Weight (Kg)</th>
            <th>Tare Weight From (Kg)</th>
            <th>Tare Weight To (Kg)</th>
            <th>Payload (Kg)</th>
          </tr>
          {/* 20 standard */}
          <tr>
            <td>20' Standard (8.5')</td>
            <td>24000</td>
            <td>1800</td>
            <td>2400</td>
            <td>17500</td>
          </tr>
          <tr>
            <td>40' Standard (8.5')</td>
            <td>30480</td>
            <td>2800</td>
            <td>4000</td>
            <td>24000</td>
          </tr>
          <td>40' High Cube (9.5')</td>
          <td>30480</td>
          <td>3900</td>
          <td>4200</td>
          <td>24000</td>
        </table>
      </div>
    </section>
  );
};

export default Dimensions;

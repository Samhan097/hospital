import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "../App.css";
import { AddSharp, RemoveSharp } from "@mui/icons-material";

export default function Faqs() {
  return (
<div>
      <Grid >
        <Grid item xs={12} sm={6} style={{marginTop:150}}>

          <div className="service">
            <div className="service-number">01</div>
            <div className="service-text">
              <Typography
                variant="h3"
                style={{ textTransform: "uppercase", marginLeft: 30,textAlign:'left' }}
              >
                What questions to ask when in the hospital?
              </Typography>
              {/* Add the description under the h3 */}
            <Typography variant="body1" style={{ marginLeft: 30, textAlign: 'left' }}>
            Treatments and procedures may include lab work, radiological studies, CAT scans, ultrasound, EKG for cardiac review, medication <br></br> administration and physician evaluations. Patients are able to eat after all their tests are completed and the physician.
            </Typography>
            </div>
            <div>
            <AddSharp style={{fontSize:50}} />
            
            </div>
          </div>
          <hr class="service-divider"></hr>

          <div className="service">
            <div className="service-number" >02</div>
            <div className="service-text">
              <Typography
                variant="h3"
                style={{ textTransform: "uppercase", marginLeft: 30,textAlign:'left'  }}
              >
                Mother and baby <br></br>imunization
              </Typography>
            </div>
            <div>
            <RemoveSharp style={{fontSize:50}} />

            </div>
          </div>
          <hr class="service-divider"></hr>

          <div className="service">
            <div className="service-number">03</div>
            <div className="service-text">
              <Typography
                variant="h3"
                style={{ textTransform: "uppercase", marginLeft: 30,textAlign:'left'  }}
              >
                travel imunization
              </Typography>
            </div>

            <div>
            <RemoveSharp style={{fontSize:50}} />

            </div>
          </div>
          <hr class="service-divider"></hr>

          

        </Grid>
      </Grid>
    </div>  )
}

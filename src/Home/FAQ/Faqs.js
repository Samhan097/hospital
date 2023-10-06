import React from "react";
import Grid from "@mui/material/Grid";
import "../../App.css";
import { AddSharp, RemoveSharp } from "@mui/icons-material";

export default function Faqs() {
  return (
<div>
      <Grid >
        <Grid item xs={12} sm={6} style={{marginTop:70}}>

          <div className="faq">
            <div className="faq-number">01</div>
            <div className="faq-1"  style={{marginRight:'auto'}}>
              <h3 className="faq-text-1"
                style={{ textTransform: "uppercase", marginLeft: 30,textAlign:'left' }}
              >
                What questions to ask when in the hospital?
              </h3>
              {/* Add the description under the h3 */}
            <p  style={{ marginLeft: 30, textAlign: 'left' }}>
            Treatments and procedures may include lab work, radiological studies, CAT scans, ultrasound, EKG for cardiac review, medication <br></br> administration and physician evaluations. Patients are able to eat after all their tests are completed and the physician.
            </p>
            </div>
            <div >
            <AddSharp className="addsharp-icon"  style={{fontSize:50}} />
            
            </div>
          </div>
          <hr class="faq-divider"></hr>

          <div className="faq">
            <div className="faq-number" >02</div>
              <h3 className="faq-text"
                style={{ textTransform: "uppercase", marginLeft: 30,textAlign:'left'  }}
              >
                Mother and baby <br></br>imunization
              </h3>
            <div>
            <RemoveSharp style={{fontSize:50}} />

            </div>
          </div>
          <hr class="faq-divider"></hr>

          <div className="faq">
            <div className="faq-number">03</div>
              <h3 className="faq-text"
                style={{ textTransform: "uppercase", marginLeft: 30,textAlign:'left'  }}
              >
                travel imunization
              </h3>

            <div>
            <RemoveSharp style={{fontSize:50}} />

            </div>
          </div>
          <hr class="faq-divider"></hr>

          

        </Grid>
      </Grid>
    </div>  )
}

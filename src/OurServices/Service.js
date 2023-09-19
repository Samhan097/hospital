import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "../App.css";


export default function Service() {
  return (
    <div>
      <Grid >
        <Grid item xs={12} sm={6}>
          <hr class="service-divider"></hr>

          <div className="service">
            <div className="service-number">01</div>
            <div className="service-text">
              <Typography
                variant="h3"
                style={{ textTransform: "uppercase", marginLeft: 30,textAlign:'left' }}
              >
                child imunizations
              </Typography>
            </div>
            <div>
            <ChevronRightIcon style={{fontSize:50}} />
            
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
            <ChevronRightIcon style={{fontSize:50}} />

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
            <ChevronRightIcon style={{fontSize:50}} />

            </div>
          </div>
          <hr class="service-divider"></hr>

          <div className="service">
            <div className="service-number">04</div>
            <div className="service-text">
            <Typography variant="h3" style={{textTransform:'uppercase', marginLeft:30,textAlign:'left' }} >
              joint injections
              </Typography>
            </div>
            <div>
            <ChevronRightIcon style={{fontSize:50}} />

            </div>
          </div>
          <hr class="service-divider"></hr>

          <div className="service">
            <div className="service-number">05</div>
            <div className="service-text">
            <Typography variant="h3" style={{textTransform:'uppercase', marginLeft:30,textAlign:'left' }} >
              minor surgery clinics
              </Typography>
            </div>
            <div>
            <ChevronRightIcon style={{fontSize:50}} />

            </div>
          </div>

        </Grid>
      </Grid>
    </div>
  );
}

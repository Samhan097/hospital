import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "../../App.css";


export default function Service() {
  const [showImage, setShowImage] = useState(false);
  const handleMouseEnter = () => {
    setShowImage(true);
  };

  const handleMouseLeave = () => {
    setShowImage(false);
  };
  return (
    <div>
      <Grid >
        <Grid item xs={12} sm={6}>
          <hr class="service-divider"></hr>

          <div className="service">
            <div className="service-number">01</div>
              <h3 className="service-text"
                style={{ textTransform: "uppercase", marginLeft: 30,textAlign:'left' }}
              >
                child imunizations
              </h3>
            <div>
            <ChevronRightIcon style={{fontSize:50}} />
            
            </div>
          </div>
          <hr class="service-divider"></hr>

          <div className="service">
            <div className="service-number" >02</div>
              <h3 className="service-text"
                style={{ textTransform: "uppercase", marginLeft: 30,textAlign:'left'  }}
              >
                Mother and baby <br></br>imunization
              </h3>
            <div>
            <ChevronRightIcon style={{fontSize:50}} />

            </div>
          </div>
          <hr class="service-divider"></hr>

          <div className="service" onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
            <div className="service-number">03</div>
              <h3 className="service-text"
                style={{ textTransform: "uppercase", marginLeft: 30,textAlign:'left'  }}
              >
                travel imunization
              </h3>

            <div>
            <ChevronRightIcon style={{fontSize:50}} />

            </div>
            {showImage && (
        <div className="hover-image">
          {/* Add your image source here */}
          <img src="home/service.png" alt="Hovered" className="circular-image"/>
        </div>
      )}
          </div>
          <hr class="service-divider"></hr>

          <div className="service">
            <div className="service-number">04</div>
            <h3 className="service-text" style={{textTransform:'uppercase', marginLeft:30,textAlign:'left' }} >
              joint injections
              </h3>
            <div>
            <ChevronRightIcon style={{fontSize:50}} />

            </div>
          </div>
          <hr class="service-divider"></hr>

          <div className="service">
            <div className="service-number">05</div>
            <h3 className="service-text" style={{textTransform:'uppercase', marginLeft:30,textAlign:'left' }} >
              minor surgery clinics
              </h3>
            <div>
            <ChevronRightIcon style={{fontSize:50}} />

            </div>
          </div>

        </Grid>
      </Grid>
    </div>
  );
}

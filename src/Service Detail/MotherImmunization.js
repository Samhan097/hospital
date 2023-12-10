import React from 'react';

// Component for each section of content
const ContentSection = ({ number, heading, text }) => (
  
  <div className="container">
    <hr style={{ marginBottom: '50px' }} />
    <div className="row align-items-start mb-4">
      <div className="col-md-2">
        <div className="mother-immunization-number" style={{ width: '40px', height: '30px', backgroundColor: '#ffffff', color: '#000000', borderRadius: '40px', border: '2px solid black', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {number}
        </div>
      </div>
      <div className="col-md-5">
        <h4 className="mother-immunization-text" style={{ textTransform: "uppercase", marginLeft: '30px', textAlign: 'left' }}>
          {heading}
        </h4>
      </div>
      <div className="col-md-4">
        <p>{text}</p>
      </div>
    </div>
  </div>
);

export default function MotherImmunization() {
  return (
    <>
      <h1 style={{ marginLeft: '100px', marginBottom:80 }}>The Importance of<br /> Immunization for Mothers:</h1>
      {/* First Content Section */}
      <ContentSection
        number="01"
        heading={
    <>
      Protection against <br /> Maternal Infections
    </>
  }        text="Influenza can lead to severe complications during pregnancy, increasing the risk of preterm birth and low birth weight. The flu shot is safe for pregnant women and can help prevent the flu, reducing the likelihood of complications."
      />
      {/* Second Content Section */}
      <ContentSection
        number="02"
        heading={
    <>
       Prevention of <br/>Pregnancy-Related <br/>Complications
    </>
  }
        text="The Tdap vaccine protects against tetanus, diphtheria, and pertussis (whooping cough). Pertussis, in particular, can be dangerous for infants, and by getting vaccinated during pregnancy, mothers can pass on protective antibodies to their babies."
      />
      {/* Third Content Section */}
      <ContentSection
        number="03"
        heading={<>
          Transfer of <br/>Antibodies to the <br/>Baby
        </>}
        text="After birth, babies will follow a vaccination schedule recommended by health authorities. This schedule typically includes vaccines for protection against various diseases. Some of the vaccines babies receive include:"
      />
      {/* Fourth Content Section */}
      <ContentSection
        number="04"
        heading={
          <>
            Preparing for Future <br/> Pregnancy
          </>
        }
        text="Protects against pneumococcal bacteria, which can cause serious illnesses like pneumonia, meningitis, and bloodstream infections. This oral vaccine protects against severe diarrhea caused by the rotavirus."
      />
      {/* Other content goes here */}
    </>
  );
}

import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Faqs() {
  const [isTextVisible, setIsTextVisible] = useState([false, false, false]);

  const toggleTextVisibility = (index) => {
    const updatedVisibility = [...isTextVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setIsTextVisible(updatedVisibility);
  };

  return (
    <div>
      <Grid>
        <Grid item xs={12} sm={6} style={{ marginTop: 70 }}>
          {faqData.map((faq, index) => (
            <div key={index}>
              <div className="faq">
                <div className="faq-number">{faq.number}</div>
                <div className="faq-1" style={{ marginRight: 'auto' }}>
                  <h3
                    className="faq-text-1"
                    style={{ textTransform: "uppercase", marginLeft: 30, textAlign: 'left' }}
                  >
                    {faq.question}
                  </h3>
                  {isTextVisible[index] && (
                    <p style={{ marginLeft: 30, textAlign: 'left' }}>
                      {faq.answer}
                    </p>
                  )}
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={isTextVisible[index] ? faMinus : faPlus}
                    style={{ fontSize: 40, marginRight: 30, cursor: 'pointer' }}
                    onClick={() => toggleTextVisibility(index)}
                  />
                </div>
              </div>
              {/* Divider at the bottom of each FAQ item */}
              <hr
                className="faq-divider"
                style={{
                  marginBottom: '20px !important',
                  border: 'none',
                  borderTop: '2px solid #8a8989',
                  margin: 0,
                  width: '100%',
                }}
              />
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  )
}

const faqData = [
  {
    number: "01",
    question: "What questions to ask when in the hospital?",
    answer:
      "Treatments and procedures may include lab work, radiological studies, CAT scans, ultrasound, EKG for cardiac review, medication administration and physician evaluations. Patients are able to eat after all their tests are completed and the physician.",
  },
  {
    number: "02",
    question: "Mother and baby immunization",
    answer:
      "Treatments and procedures may include lab work, radiological studies, CAT scans, ultrasound, EKG for cardiac review, medication administration and physician evaluations. Patients are able to eat after all their tests are completed and the physician.",
  },
  {
    number: "03",
    question: "Travel immunization",
    answer:
      "Treatments and procedures may include lab work, radiological studies, CAT scans, ultrasound, EKG for cardiac review, medication administration and physician evaluations. Patients are able to eat after all their tests are completed and the physician.",
  },
];

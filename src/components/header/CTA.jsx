import React from "react";
import CV from "../../assets/Kamlesh_Patel_Resume.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <div>
        <a href={CV} download className="btn">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default CTA;

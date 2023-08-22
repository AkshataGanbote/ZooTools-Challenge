import React from "react";
import "./Second.css";
import idea1 from "../../icons/idea1.png";
import upTriangle from "../../icons/upTriangle.png";
import downTriangle from "../../icons/downTriangle.png";

const Second = () => {
  return (
    <div className="secondParentDiv">
      <div className="secondChildDiv">
        <div className="sdHeadDiv">
          <p>ZooTools insights</p>
          <p>Making analytics simple and actionable</p>
        </div>

        <div className="sdSubDiv">
          <div className="summaryDiv">
            <p className="summary">Summary</p>
            <div className="summarySubDiv">
              <img src={downTriangle} alt="img" className="downTriangle" />
              <div className="summaryText">
                <strong>Signups are slowing down.</strong> -5% new than last
                week
              </div>
            </div>
            <div className="summarySubDiv">
              <img src={upTriangle} alt="img" className="upTriangle" />
              <div className="summaryText">
                <strong>80%</strong> of your signups were invited by other
                members
              </div>
            </div>
            <div className="summarySubDiv">
              <img src={idea1} alt="img" className="ideaIcon" />
              <div className="summaryText">
                <strong>80%</strong> of your signups were invited by a friend
              </div>
            </div>
            <div className="summarySubDiv">
              <img src={idea1} alt="img" className="ideaIcon" />
              <div className="summaryText">
                <strong>80%</strong> of your signups were invited by a friend
              </div>
            </div>
          </div>
          <div className="recomDiv">
            <p className="recommendation">Recommendation</p>
            <div className="recomText1" style={{ marginBottom: "2rem" }}>
              <p>
                Make sure to promote and <a href="/">share your form</a>
              </p>
            </div>

            <div className="recomTextMobile">
              <p>
                Make sure to promote and <a href="/">share your form</a>
              </p>
            </div>
            <div className="recomText2">
              <p>Congrats! This is huge. Keep giving rewards for your users.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;

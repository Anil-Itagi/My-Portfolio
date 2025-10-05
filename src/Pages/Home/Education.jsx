import React from "react";
import data from "../../data/index.json";

export default function Education() {
  return (
    <section className="education--section" id="Education">
      <div className="education--container-box">
        <div className="education--container">
          <p className="sub--title">My Education</p>
          <h2 className="section--heading">Education Details</h2>
        </div>

        <div className="education--section--container">
          {data?.educationData?.map((edu) => (
            <div key={edu.id} className="education--section--card">
              <div className="education--icon">{edu.icon}</div>
              <div className="education--content">
                <h3 className="education--degree">{edu.degree}</h3>
                <p className="education--institute">{edu.institute}</p>
                <p className="education--grade-duration">
                  {edu.grade} | {edu.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import featuresData from "../../data/features.json";

const Features = () => {
  return (
    <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1 slider-bg-shape"
        data-black-overlay="1"
      >
        <div className="container">
    <section className="features">
      <div className="feature-page-head">
        <h2>AI-Enhanced Recruitment Features</h2>
        <p>
          Empower your hiring process with cutting-edge AI tools for efficient
          and intelligent talent acquisition.
        </p>
      </div>
      {Object.keys(featuresData).map((featureKey, index) => {
        const feature = featuresData[featureKey];
        const isReversed = index % 2 !== 0;

        return (
          <div
            key={featureKey}
            className="feature-item"
            style={{
              flexDirection: isReversed ? "row-reverse" : "row",
            }}
          >
            <div style={{ flex: 1 }}>
              <h3 className="feature-title">{featureKey.replace(/_/g, " ")}</h3>

              {/* <p>{feature.titleInfo ? feature.titleInfo : ""}</p>
              <p>{feature.info}</p> */}

              <ul>
                {feature["sub-features"].map((subFeature, idx) => (
                  <li key={idx}>
                    {/* <i className="fa-sharp fa-thin fa-bullseye-arrow"></i> */}
                    <strong>{subFeature.title}</strong>:{" "}
                    {subFeature.description}
                    {/* {subFeature.icon && <i className={subFeature.icon}></i>} */}
                  </li>
                ))}
              </ul>

              {feature.outro && <p>{feature.outro}</p>}
            </div>

            <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <img src={feature.image} alt={feature.title || featureKey} />
            </div>
          </div>
        );
      })}
    </section>
      </div>
    </div>
  );
};

export default Features;

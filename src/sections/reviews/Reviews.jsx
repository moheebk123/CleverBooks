import { useState } from "react";
import founder1 from "../../assets/asset 7.webp";
import founder2 from "../../assets/asset 12.jpeg";
import logo1 from "../../assets/asset 8.svg";
import logo2 from "../../assets/asset 13.svg";
import product1 from "../../assets/asset 10.webp";
import product2 from "../../assets/asset 14.webp";
import arrow from "../../assets/asset 11.svg";
import changeReview from "../../assets/asset 9.svg";
import "./style.css";

const Reviews = () => {
  const [curIndex, setCurIndex] = useState(0);

  const reviews = [
    {
      detail:
        "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
      founderImg: founder1,
      founderName: "Diksha Pande",
      designation: "Co-founder, Samosa Party",
      companyLogo: logo1,
      productImg: product1,
      feature1: {
        heading: "upto 95%",
        detail: "Demand Fulfillment",
      },
      feature2: {
        heading: "< 3%",
        detail: "Daily Stock-out",
      },
      story: {
        read: "Read story",
        arrowImg: arrow,
      },
    },
    {
      detail:
        "As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked. While we had already implemented Crest I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have.",
      founderImg: founder2,
      founderName: "Kirti Goel",
      designation: "Co-founder, P-TAL",
      companyLogo: logo2,
      productImg: product2,
      feature1: {
        heading: "Automated Invoice Reconciliation",
      },
      feature2: {
        heading: "Channel wise Sales Classification",
      },
    },
  ];

  const handlePrevReviewChange = () => {
    if (curIndex === 0) {
      setCurIndex(1);
    } else {
      setCurIndex(0);
    }
  };

  const handleNextReviewChange = () => {
    if (curIndex === 1) {
      setCurIndex(0);
    } else {
      setCurIndex(1);
    }
  };

  return (
    <div className="review-section">
      <div className="review">
        <div className="content">
          <div className="detail">{reviews[curIndex].detail}</div>
          <div className="company-detail-box">
            <div className="founder-detail-box">
              <img
                className="founder-img"
                src={reviews[curIndex].founderImg}
                alt="Founder Image"
              />
              <div className="founder-detail">
                <h3>{reviews[curIndex].founderName}</h3>
                <p>{reviews[curIndex].designation}</p>
              </div>
            </div>
            <img
              className="company-logo"
              src={reviews[curIndex].companyLogo}
              alt="Company Image"
            />
          </div>
          <div className="change-review-feature-box">
            <div className="change-review-box">
              <img
                className="prev-review"
                onClick={handlePrevReviewChange}
                src={changeReview}
                alt="Go to Previous"
              />
              <img
                className="next-review"
                onClick={handleNextReviewChange}
                src={changeReview}
                alt="Go to Next"
              />
            </div>
            <div className="company-feature-box">
              <div className="company-feature">
                <h2 className="feature-heading">
                  {reviews[curIndex].feature1.heading}
                </h2>
                {reviews[curIndex].feature1.detail && (
                  <div className="feature-detail">
                    {reviews[curIndex].feature1.detail}
                  </div>
                )}
              </div>
              <div className="company-feature">
                <h2 className="feature-heading">
                  {reviews[curIndex].feature2.heading}
                </h2>
                {reviews[curIndex].feature1.detail && (
                  <div className="feature-detail">
                    {reviews[curIndex].feature2.detail}
                  </div>
                )}
              </div>
              {reviews[curIndex].story && (
                <div className="read-story">
                  <div className="story">
                    <p>{reviews[curIndex].story.read}</p>
                    <img
                      src={reviews[curIndex].story.arrowImg}
                      alt="Right Arrow"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="image">
          <img
            className={curIndex === 0 ? "review-image" : ""}
            src={reviews[curIndex].productImg}
            alt="Product Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;

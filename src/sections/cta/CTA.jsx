import { useState, useEffect } from "react";
import closeForm from "../../assets/asset 41.svg"
import "./style.css";

const Cta = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!showForm) {
        // Prevent scroll by setting scrollY to the current position
        window.scrollTo(0, window.scrollY);
      }
    };

    // Add the scroll event listener with the passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: false });

    // Clean up function to remove the listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showForm]);

  return (
    <div className="cta-section">
      <div className="container">
        <div className="content">
          <h1>You can grow faster than you think!</h1>
          <p>
            Plan with Crest to fulfil your demand today, and dreams tomorrow. We
            bring the methods and technologies of large global companies to help
            brands of all sizes scale.
          </p>
          <button onClick={() => setShowForm(true)}>Get started with CleverBooks</button>
        </div>
        {showForm && (
          <div className="contact">
            <img onClick={() => setShowForm(false)} src={closeForm} alt="Close Icon" />
            <h1>Get started with CleverBooks</h1>
            <p>Take a free tour of our platform</p>
            <div>First name*</div>
            <input type="text" required placeholder="Neil" />
            <div>Last name*</div>
            <input type="text" required placeholder="Nair" />
            <div>Work email*</div>
            <input type="email" required placeholder="neil@cleverbooks.ai" />
            <div>Phone number*</div>
            <input type="number" required placeholder="Enter your phone number here" />
            <div>Company name*</div>
            <input type="text" required placeholder="CleverBooks AI" />
            <div className="submit">
              <button type="button" onClick={() => setShowForm(false)}>Submit</button>
            </div>
            <div className="login">
              Already have an account? <span>Log in</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cta;

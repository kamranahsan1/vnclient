import React, { Fragment } from "react";
import Banner from "./layouts/Banner";
import MetaData from "./layouts/MetaData";

function About() {
  return (
    <Fragment>
      <MetaData title={`About Us`} />
      <main id="content" className="site-main">
        <section className="inner-page-wrap">
          <Banner
            bg="/assets/images/img7.jpg"
            title="About Us"
            desc="Applying for your visa, booking your hotel, car rental services, getting the best travel insurance, and registration for important business events or touristic sightseeing, we will manage it all for you. We make booking your airfare simple and stress-free. our team of experts will help you find the best flights at the most competitive prices."
          />
          <div className="inner-about-wrap">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="about-content">
                    <figure className="about-image">
                      <img src="assets/images/travel-bg.png" alt="" />
                      <div className="about-image-content">
                        <h3>WE ARE BEST FOR TOURS & TRAVEL SINCE 2005 !</h3>
                      </div>
                    </figure>
                    <h2>WHO WE ARE?</h2>
                    <p>
                      New Vision Travel and Tourism is a destination management
                      company that boasts over fifteen years of success stories
                      in the tourism industry, we’ve had a stunning operation
                      from the UAE, We specialize in assisting individuals and
                      groups to travel from Asia, the Middle East, Indian Ocean
                      Island, the Balkans, Europe, and other parts of the world
                      to Dubai – United Arab Emirates and vice-versa.
                    </p>
                  </div>
                  <br />
                  <div className="about-content">
                    <h2>WHY US?</h2>
                    <span>
                      WITH NEW VISION TRAVEL AND TOURISM, YOU ARE IN THE RIGHT
                      HANDS.
                    </span>
                    <br />
                    <p className="mt-10">
                      <strong>Do you want to enjoy life</strong>, experience the
                      irresistible beauty of foreign culture, the taste of
                      different delicacies from unique kitchens in the world,
                      have a happy laughter with strangers, new friends, and
                      loved ones?
                    </p>
                    <p className="mt-10">
                      <strong>
                        Do you wish to create new pleasant memories in foreign
                        countries
                      </strong>
                      , dream of dancing, singing, and having fun with new
                      friends from a different world without holding you back?
                    </p>
                    <p className="mt-10">
                      <strong>
                        Do you want to bring your dream vacation and
                        destinations
                      </strong>{" "}
                      to reality, or prepare for a new adventure?
                    </p>
                  </div>
                  <br />
                  <div className="about-content">
                    <h2>TRAVEL WITH OUR DEDICATED APPROACH</h2>
                    <p>
                      We acknowledge the fact that travel and tourism is only
                      enjoyable when stress-free and exciting. Based on this, we
                      have created a structure that aims at consistently and
                      continually devoting ourselves to bringing alive the
                      enchanting, chilling, and fun-filled dreams of our
                      clients.
                    </p>
                  </div>
                  <br />
                  <div className="about-content">
                    <h2>
                      DISCOVER DUBAI'S TOURISM WITH OUR EXCEPTIONAL SAFE TRAVEL
                      SOLUTIONS
                    </h2>
                    <p>
                      We are located in the country’s tourist capital – Dubai,
                      our company takes advantage of the growing national
                      tourism and travel industry in Dubai to help our clients,
                      tourists, and travellers enjoy an amazing time exploring
                      the world’s ambiance. We offer superior, excellent
                      customer service and are invested in helping our clients
                      have a safe and fun-filled trip.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="icon-box">
                    <div className="box-icon">
                      <i
                        aria-hidden="true"
                        className="fas fa-umbrella-beach"
                      ></i>
                    </div>
                    <div className="icon-box-content">
                      <h3>SAFE TRAVEL SANCTUARY</h3>
                      <p>Your Gateway to Secure and Worry-Free Explorations.</p>
                    </div>
                  </div>
                  <div className="icon-box">
                    <div className="box-icon">
                      <i aria-hidden="true" className="fas fa-user-tag"></i>
                    </div>
                    <div className="icon-box-content">
                      <h3>All Best Locations</h3>
                      <p>
                        Explore All the Best Locations with our curated tour
                        packages for the ultimate travel experience!
                      </p>
                    </div>
                  </div>
                  <div className="icon-box">
                    <div className="box-icon">
                      <i aria-hidden="true" className="fas fa-headset"></i>
                    </div>
                    <div className="icon-box-content">
                      <h3>AFFORDABLE TOURS</h3>
                      <p>
                        Experience the world without breaking the bank with our
                        unbeatable Affordable Tours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default About;

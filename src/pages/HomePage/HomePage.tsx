import React from 'react';
import './HomePage.css';

import bannerImage from '../../assets/banner.png';
import banner2 from '../../assets/banner2.png';
import feature1 from '../../assets/feature1.png';
import feature2 from '../../assets/feature2.png';
import feature3 from '../../assets/feature3.png';
import feature4 from '../../assets/feature4.png';

const HomePage = () => {
    return (
        <>
            {/* Section 1: Hero */}
            <div className="home-container">
                <img src={bannerImage} alt="Banner" className="home-banner" />
                <div className="home-content">
                    <h1 className="home-title">Save your data<br />storage here.</h1>
                    <p className="home-description">
                        Data Warehouse is a data storage area that has been tested for security,
                        so you can store your data here safely but not be afraid of being stolen by others.
                    </p>
                    <button className="home-button">Learn more</button>
                </div>
            </div>

            {/* Section 2: Info */}
            <div className="info-section">
                <div className="info-image">
                    <img src={banner2} alt="Secure Storage" />
                </div>
                <div className="info-content">
                    <h2>We are a high-level data storage bank</h2>
                    <p>
                        The place to store various data that you can access at any time through the internet
                        and where you can carry it. This very flexible storage area has a high level of security.
                        To enter into your own data you must enter the password that you created when you registered
                        in this Data Warehouse.
                    </p>
                </div>
            </div>

            {/* Section 3: Features */}
            <div className="features-section">
                <h2 className="features-title">Features</h2>
                <p className="features-subtitle">
                    Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.
                </p>

                <div className="features-grid">
                    <div className="feature-card feature-blue">
                        <div className="feature-card-image">
                            <img src={feature1} alt="Search Data" />
                        </div>
                        <div className="feature-card-text">
                            <h3>Search Data</h3>
                            <p>Don’t worry if your data is very large, the Data Warehouse provides a search engine to help save time.</p>
                            <a href="#">Learn more →</a>
                        </div>
                    </div>

                    <div className="feature-card feature-purple">
                        <div className="feature-card-image">
                            <img src={feature2} alt="24 Hours Access" />
                        </div>
                        <div className="feature-card-text">
                            <h3>24 Hours Access</h3>
                            <p>Access is given 24 hours from morning to night, giving comfort when you need data urgently.</p>
                            <a href="#">Learn more →</a>
                        </div>
                    </div>

                    <div className="feature-card feature-pink">
                        <div className="feature-card-image">
                            <img src={feature3} alt="Print Out" />
                        </div>
                        <div className="feature-card-text">
                            <h3>Print Out</h3>
                            <p>Print out service gives you convenience. Just edit it all and print it.</p>
                            <a href="#">Learn more →</a>
                        </div>
                    </div>

                    <div className="feature-card feature-cyan">
                        <div className="feature-card-image">
                            <img src={feature4} alt="Security Code" />
                        </div>
                        <div className="feature-card-text">
                            <h3>Security Code</h3>
                            <p>Allows your files to be safer. Only you can open the file with your password or code.</p>
                            <a href="#">Learn more →</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;

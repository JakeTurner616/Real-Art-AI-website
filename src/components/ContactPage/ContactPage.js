import React from 'react';
import styles from './ContactPage.module.css'; // Import CSS module
import Footer from '../Footer/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Import Helmet and HelmetProvider from react-helmet-async


const ContactPage = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Contact</title>
          <meta name="description" content="Contact for data questions, comments, or to request deletion of Real Art AI data. For any questions about Real Art AI feel free to reach out to the provided contact information." />
        </Helmet>
        <div className={styles.contactPageWrapper}> {/* New Wrapper */}
          <div className={styles.contactPage}>
            {/* Heading and Subheading */}
            <div className={styles.headingContainer}>
              <h1 className={styles.heading}>Contact</h1>

            </div>
            <div className={styles.contentFlexContainer}>
              <div className={styles.profileCard}>
                <img src="/img/avatar.png" alt="User Avatar" />
                <div className={styles.profileInfo}>
                  <h2>Jakob Turner</h2>
                  <div className={styles.contactContainer}>
                    <div className={styles.infoRow}>
                      <svg style={{ width: '16px', height: '16px' }} aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" className="octicon octicon-location">
                        <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path>
                      </svg>
                      <span className={styles.infoText}>Location: Denver, CO, USA</span>
                    </div>
                    <div className={styles.infoRow}>
                      <svg style={{ width: '16px', height: '16px' }} aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" className="octicon octicon-location">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7-3.25v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5a.75.75 0 0 1 1.5 0Z"></path>
                      </svg>
                      <span className={styles.infoText}>Timezone: GMT-07:00</span>
                    </div>
                    <div className={styles.infoRow}>
                      <svg style={{ width: '16px', height: '16px' }} aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" className="octicon octicon-location">
                        <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path>
                      </svg>
                      <a className={styles.infoText} href="mailto:jake@serverboi.org">
                        jake@serverboi.org
                      </a>
                    </div>
                    <div className={styles.infoRow}>
                      <svg style={{ width: '16px', height: '16px' }} aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" className="octicon octicon-location">
                        <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
                      </svg>
                      <span className={styles.infoText}><a href="https://serverboi.org">https://serverboi.org</a></span>
                    </div>

                  </div>

                </div>

              </div>

              <div className={styles.tableContainer}>
                <table className={styles.statusTable}>
                  <thead>
                    <tr>
                      <th>Service</th>
                      <th>Status</th>
                      <th>Uptime</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Image Generation endpoint</td>
                      <td><a href="https://status.serverboi.org"><img src="https://status.serverboi.org/api/badge/1/status" alt="Current status of Generation endpoint" /></a></td>
                      <td><a href="https://status.serverboi.org"><img src="https://status.serverboi.org/api/badge/1/uptime" alt="Uptime percentage of Generation endpoint" /></a></td>
                    </tr>
                    <tr>
                      <td>Prompt Generation</td>
                      <td><a href="https://status.serverboi.org"><img src="https://status.serverboi.org/api/badge/2/status" alt="Current status of Prompt Generation service" /></a></td>
                      <td><a href="https://status.serverboi.org"><img src="https://status.serverboi.org/api/badge/2/uptime" alt="Uptime percentage of Prompt Generation service" /></a></td>
                    </tr>
                    <tr>
                      <td>Image Generation api 0 - txt2img</td>
                      <td><a href="https://status.serverboi.org"><img src="https://status.serverboi.org/api/badge/3/status" alt="Current status of Generation API 0" /></a></td>
                      <td><a href="https://status.serverboi.org"><img src="https://status.serverboi.org/api/badge/3/uptime" alt="Uptime percentage of Generation API 0" /></a></td>
                    </tr>
                    <tr>
                      <td>Image Generation api 1 - inpaint</td>
                      <td><a href="https://status.serverboi.org"><img src="https://status.serverboi.org/api/badge/4/status" alt="Current status of Generation API 1" /></a></td>
                      <td><a href="https://status.serverboi.org"><img src="https://status.serverboi.org/api/badge/4/uptime" alt="Uptime percentage of Generation API 1" /></a></td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </div>



            <p className={styles.subheading}>For issues, unexpected outages, or anything else, feel free to reach out via email. Users or parents of users who are minors may also request the deletion of all personal data from the last 60 days. Data beyond that period is not saved to disk.</p>


          </div>
          <Footer />
        </div>
      </div>
    </HelmetProvider>

  );
};

export default ContactPage;
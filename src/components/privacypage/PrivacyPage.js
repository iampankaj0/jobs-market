import React from "react";
import "../../styles/privacy.scss";
import {
  CustomContainer,
  Heading,
  TopImageBanner,
} from "../../styles/reusableStyle";
import header_rojgar_bazaar from "../../images/header_rojgar_bazaar.jpg";

const PrivacyPage = () => {
  return (
    <div className="privacyPage__main">
      <CustomContainer>
        <TopImageBanner src={header_rojgar_bazaar} alt="headerimage" />

        <div className="content">
          <Heading className="heading_main" color="#263838" position="center">
            Privacy Page
          </Heading>
          <p className="para">
            Thanks for visiting Rozgar Bazaar website of Government of National
            Capital Territory of Delhi and reviewing our privacy policy.
          </p>
          <p className="para">
            The information provided by jobseekers and the recruiters during
            registration is used for match making & gainful employment.
          </p>
          <p className="para">
            Once the recruiter fills details of job posting, the details of
            recruiter along with details of job posts will be accessible and
            available to all job seekers
          </p>
          <p className="para">
            The jobseeker when respond to any of the available job postings,
            his/her details will be shared across with the employer.
          </p>
          <p className="para">
            We do collect some technical information when you visit to make your
            visit seamless. The section below explains how we handle and collect
            technical information when you visit our website.
          </p>

          <div className="sub_head">
            <h3>Information collected and stored automatically</h3>
            <p className="para">
              When you browse, read pages, or download information on this
              website, we automatically gather and store certain technical
              information about your visit. The information we collect and store
              about your visit is listed below:
            </p>
            <ol>
              <li>
                The Internet domain of your service provider (e.g. mtnl.net.in)
                and IP address (an IP address is a number that is automatically
                assigned to your computer whenever you're surfing the web) from
                which you access our website.
              </li>
              <li>
                The type of browser (such as Firefox, Netscape, or Internet
                Explorer) and operating system (Windows, Unix) used to access
                our site
              </li>
              <li>The date and time you accessed our site</li>
              <li>The pages/URLs you have visited and</li>
              <li>
                If you reached this website from another website, the address of
                that referring website
              </li>
            </ol>
            <p className="para">
              This information is only used to help us make the site more useful
              for you. With this data, we learn about the number of visitors to
              our site and the types of technology our visitors use. We never
              track or record information about individuals and their visits.
            </p>
          </div>

          <div className="sub_head">
            <h3>Cookies</h3>
            <p className="para">
              When you visit some websites, they may download small pieces of
              software on your computer/browsing device known as cookies. Some
              cookies collect personal information to recognize your computer in
              the future. We only use non-persistent cookies or "per- session
              cookies".
            </p>
            <p className="para">
              Per-session cookies serve technical purposes, like providing
              seamless navigation through this website. These cookies do not
              collect personal information on users and they are deleted as soon
              as you leave our website.
            </p>
            <p className="para">
              The cookies do not permanently record data and they are not stored
              on your computer's hard drive. The cookies are stored in memory
              and are only available during an active browser session. Again,
              once you close your browser, the cookie disappears.
            </p>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default PrivacyPage;

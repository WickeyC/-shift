import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Careers: React.FC = () => {
  return (
    <>
      <Head>
        <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
        <meta name="viewport" content="width=device-width" />
        <meta charSet="utf-8" />
        <title>Careers - Shift</title>
      </Head>
      <Header />
      <main>
        <div className="hero container">
          <h1>Be you, with us.</h1>
          <p>
            At Shift, we’re on a mission to drive innovation in retail business.
            Not only on a company level but within each individual. We believe
            we are a better company when all of us are able to bring their full
            authentic selves to work.
          </p>
          <a className="btn--primary hero__button" href="#openings">
            See Open Roles
          </a>
        </div>
        <section className="video-section container flex-column-center">
          <h2>Let’s build the future, together.</h2>
          <video controls>
            <source src="/videos/career-video.mp4" type="video/mp4" />
          </video>
          <p className="video-description">Let&#39;s work together</p>
        </section>
        <section className="workplay-section flex-column-center">
          <div className="common-StripeGrid anchorBottom">
            <div className="backgroundContainer">
              <div className="grid">
                <div className="background"></div>
              </div>
            </div>
            <div className="stripeContainer">
              <div className="grid">
                <div className="stripe"></div>
                <div className="stripe"></div>
                <div className="stripe"></div>
                <div className="stripe"></div>
                <div className="stripe"></div>
                <div className="stripe"></div>
                <div className="stripe"></div>
                <div className="stripe"></div>
                <div className="stripe"></div>
              </div>
            </div>
          </div>
          <div className="workplay-box container">
            <h2 className="workplay-box__title">Work &#38; play, together.</h2>
            <p className="workplay-box__description">
              We surround ourselves with individuals who consistently raise the
              bar in everything they do.
            </p>
            <div className="workplay-characteristics-container">
              <div className="workplay-characteristics-wrapper">
                <img src="img/careers/friendly.svg" alt="Friendly icon" />
                <h3>Friendly</h3>
                <p>We strive to always be friendly, candid and humble.</p>
              </div>
              <div className="workplay-characteristics-wrapper">
                <img src="img/careers/curiosity.svg" alt="Curiosity icon" />
                <h3>Curiosity</h3>
                <p>Ask questions. Experiment with new ideas and tech.</p>
              </div>
              <div className="workplay-characteristics-wrapper">
                <img src="img/careers/passionate.svg" alt="Passionate icon" />
                <h3>Passionate</h3>
                <p>Assume ownership, take risks, break the mold.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="shift-life-section">
          <div className="container flex-column-center">
            <h2>Life at Shift</h2>
            <div className="shift-life-highlight-container">
              <div className="shift-life-highlight">
                <img
                  src="img/careers/efficient-execution.svg"
                  alt="Efficient execution icon"
                />
                <h3 className="shift-life__subtitle">Efficient execution</h3>
                <p>
                  When you join Shift, we enable you to move quickly and
                  autonomously to execute on projects that drive impact.
                </p>
              </div>
              <div className="shift-life-highlight">
                <img
                  src="img/careers/right-people-place.svg"
                  alt="Right people &amp; place icon"
                />
                <h3 className="shift-life__subtitle">
                  Right people &amp; place
                </h3>
                <p>
                  We have offices all over Malaysia and talented people from
                  each corner of the country. You’ll do great things with the
                  right people.
                </p>
              </div>
              <div className="shift-life-highlight">
                <img
                  src="img/careers/growth-culture.svg"
                  alt="Growth culture icon"
                />
                <h3 className="shift-life__subtitle">Growth culture</h3>
                <p>
                  We strive to continuously help and push one another to
                  improve. There are interesting challenges to help you
                  continually grow.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="perks-section container">
          <aside className="perks-pic-aside">
            <div className="perks-pic-aside-box1"></div>
            <div className="perks-pic-aside-box2"></div>
            <a
              href="img/careers/perks.png"
              title="View Image"
              target="_blank"
              rel="noreferrer"
            >
              <img src="img/careers/perks.png" alt="Shift campus" />
            </a>
          </aside>
          <aside className="perks-text-aside">
            <h2>Perks &#38; Benefits</h2>
            <ul className="perks-list">
              <li>
                <img src="img/careers/check-goal.svg" alt="Check icon" />
                Inclusive Health Package
              </li>
              <li>
                <img src="img/careers/check-goal.svg" alt="Check icon" />
                Diversity and Inclusion
              </li>
              <li>
                <img src="img/careers/check-goal.svg" alt="Check icon" />
                Retirement Benefits
              </li>
              <li>
                <img src="img/careers/check-goal.svg" alt="Check icon" />
                Free Mobile Products
              </li>
              <li>
                <img src="img/careers/check-goal.svg" alt="Check icon" />
                Vacation & Paid Time Off
              </li>
            </ul>
          </aside>
        </section>
        <section className="shift-picture-section container">
          <h2>Shift Welcome You</h2>
          <p>Take a look at some pictures of our workspaces.</p>
          <div className="shift-picture-grid">
            <a
              className="shift-picture-grid-item"
              href="img/careers/gallery-1.jpg"
              title="View Image"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="shift-picture-grid-item"
              href="img/careers/gallery-2.jpg"
              title="View Image"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="shift-picture-grid-item"
              href="img/careers/gallery-3.jpg"
              title="View Image"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="shift-picture-grid-item"
              href="img/careers/gallery-4.jpg"
              title="View Image"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="shift-picture-grid-item"
              href="img/careers/gallery-5.jpg"
              title="View Image"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="shift-picture-grid-item"
              href="img/careers/gallery-6.jpg"
              title="View Image"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        </section>
        <section className="review-section">
          <div
            className="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'
          >
            <div className="gallery-cell">
              <div className="review-content-wrapper">
                <p className="review-paragraph">
                  “Especially in our design culture, we deliver on our value of
                  continuous learning. There are tons of experiments and
                  learning in retail business. It’s awesome when so many groups
                  are working to serve a better world.”
                </p>
                <div className="review-author">
                  <img src="img/careers/sarah.jpg" alt="Profile pic of Sarah" />
                  <div>
                    <p className="review-author__name">June Rose</p>
                    <p className="review-author__title">UI Designer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-cell">
              <div className="review-content-wrapper">
                <p className="review-paragraph">
                  “I’ve worked in many companies before. At Shift, we are always
                  doing something could bring a smile to our customers. That
                  sets us apart from almost any other retail company.“
                </p>
                <div className="review-author">
                  <img
                    src="img/careers/andrew.jpg"
                    alt="Profile pic of Andrew"
                  />
                  <div>
                    <p className="review-author__name">Sunny Rainy</p>
                    <p className="review-author__title">Sales Assistant</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-cell">
              <div className="review-content-wrapper">
                <p className="review-paragraph">
                  Shift is growing fast, If finding and solving problems lights
                  you up, you’ll have fun here. We tend to stay motivated
                  working with passionate people.”
                </p>
                <div className="review-author">
                  <img src="img/careers/chien.jpg" alt="Profile pic of Chien" />
                  <div>
                    <p className="review-author__name">Selva Zeit</p>
                    <p className="review-author__title">Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="openings" className="job-section container">
          <h2>Open Positions</h2>
          <p className="job__subtitle">
            We’re currently looking for talents in the following areas.
          </p>
          <div className="job-list-container">
            <div className="single-job-card">
              <div className="single-job-card__content">
                <div className="single-job-card__details">
                  <span className="single-job-card__type single-job-card__type--tech">
                    Technology
                  </span>
                  <div className="single-job-card__location">
                    <img src="img/careers/location.svg" alt="Location:" />
                    <span>Kuala Lumpur</span>
                  </div>
                </div>
                <h3 className="single-job-card__title">IT Manager</h3>
                <a
                  className="single-job-card__link flex-center"
                  href="mailto:contact@shiftstore.com.my?subject=Apply for IT Manager"
                >
                  Apply
                </a>
              </div>
            </div>
            <div className="single-job-card">
              <div className="single-job-card__content">
                <div className="single-job-card__details">
                  <span className="single-job-card__type single-job-card__type--tech">
                    Technology
                  </span>
                  <div className="single-job-card__location">
                    <img src="img/careers/location.svg" alt="Location:" />
                    <span>Johor Bahru</span>
                  </div>
                </div>
                <h3 className="single-job-card__title">Software Developer</h3>
                <a
                  className="single-job-card__link flex-center"
                  href="mailto:contact@shiftstore.com.my?subject=Apply for Software Developer"
                >
                  Apply
                </a>
              </div>
            </div>
            <div className="single-job-card">
              <div className="single-job-card__content">
                <div className="single-job-card__details">
                  <span className="single-job-card__type single-job-card__type--design">
                    Design
                  </span>
                  <div className="single-job-card__location">
                    <img src="img/careers/location.svg" alt="Location:" />
                    <span>Johor Bahru</span>
                  </div>
                </div>
                <h3 className="single-job-card__title">Design Director</h3>
                <a className="single-job-card__link flex-center" href="mailto:contact@shiftstore.com.my?subject=Apply for Design Director">
                  Apply
                </a>
              </div>
            </div>
            <div className="single-job-card">
              <div className="single-job-card__content">
                <div className="single-job-card__details">
                  <span className="single-job-card__type single-job-card__type--design">
                    Design
                  </span>
                  <div className="single-job-card__location">
                    <img src="img/careers/location.svg" alt="Location:" />
                    <span>Petaling Jaya</span>
                  </div>
                </div>
                <h3 className="single-job-card__title">UI/UX Designer</h3>
                <a className="single-job-card__link flex-center" href="mailto:contact@shiftstore.com.my?subject=Apply for UI/UX Designer">
                  Apply
                </a>
              </div>
            </div>
            <div className="single-job-card">
              <div className="single-job-card__content">
                <div className="single-job-card__details">
                  <span className="single-job-card__type single-job-card__type--sales">
                    Sales
                  </span>
                  <div className="single-job-card__location">
                    <img src="img/careers/location.svg" alt="Location:" />
                    <span>Kuala Lumpur</span>
                  </div>
                </div>
                <h3 className="single-job-card__title">Account Executive</h3>
                <a className="single-job-card__link flex-center" href="mailto:contact@shiftstore.com.my?subject=Apply for Account Executive">
                  Apply
                </a>
              </div>
            </div>
            <div className="single-job-card">
              <div className="single-job-card__content">
                <div className="single-job-card__details">
                  <span className="single-job-card__type single-job-card__type--sales">
                    Sales
                  </span>
                  <div className="single-job-card__location">
                    <img src="img/careers/location.svg" alt="Location:" />
                    <span>Penang</span>
                  </div>
                </div>
                <h3 className="single-job-card__title">Sales Manager</h3>
                <a className="single-job-card__link flex-center" href="mailto:contact@shiftstore.com.my?subject=Apply for Sales Manager">
                  Apply
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="breadcrumb container">
          <Link href="/">
            <a>Home</a>
          </Link>
          <img
            className="breadcrumb__arrow"
            src="img/breadcrumb-arrow.svg"
            alt="Right Arrow >"
          />
          <span>Careers</span>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Careers;

import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  
  return (
    <div className="App">
      <>
  {/*[if lte IE 9]>
<p class="browserupgrade">
  You are using an <strong>outdated</strong> browser. Please
  <a href="https://browsehappy.com/">upgrade your browser</a> to improve
  your experience and security.
</p>
    <![endif]*/}
  {/* ========================= preloader start ========================= */}
  {
    loader ? (
    <div className="preloader">
    <div className="loader">
      <div className="spinner">
        <div className="spinner-container">
          <div className="spinner-rotator">
            <div className="spinner-left">
              <div className="spinner-circle" />
            </div>
            <div className="spinner-right">
              <div className="spinner-circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    ) : null
  }
  {/* preloader end */}
  {/* ========================= header start ========================= */}
  <header className="header ">
    <div className="navbar-area">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg ">
              <a className="navbar-brand" href="index.html">
                <img src="assets/images/logo/logo.svg" alt="Logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon" />
                <span className="toggler-icon" />
                <span className="toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse sub-menu-bar"
                id="navbarSupportedContent"
              >
                <div className="ms-auto">
                  <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a className="page-scroll active" href="#home">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#feature-1">
                        Features
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="" href="#0">
                        Testimonial
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="" href="#0">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="" href="#0">
                        Team
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-btn">
                <a href="#0" className="main-btn btn-hover">
                  Signup
                </a>
              </div>
              {/* navbar collapse */}
            </nav>
            {/* navbar */}
          </div>
        </div>
        {/* row */}
      </div>
      {/* container */}
    </div>
    {/* navbar area */}
  </header>
  {/* ========================= header end ========================= */}
  {/* ========================= hero-section start ========================= */}
  <section id="home" className="hero-section" 
    style={{
      backgroundImage: `url(assets/images/hero/hero-bg.svg)`,
    }}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-10">
          <div className="hero-content">
            <h1>
              You are using free lite version of <span>SaaSdeck</span>
            </h1>
            <p>
              Please, purchase full version of the template to get all sections,
              elements and permission to remove footer credits.
            </p>
            <a href="#0" className="main-btn btn-hover">
              Start Free Trial
            </a>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 offset-xxl-1">
          <div className="hero-image text-center text-lg-start">
            <img src="assets/images/hero/hero-image.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*=========================Features start===================================== */}
  <section className="templatesShowcase"
  
  >
  <div className="container">
    <article className="row">
      <div className="col-small-12 col-xlarge-10 col-xlarge-offset-1">
        <header className="templatesShowcase-header">
         
          <h2 className="templatesShowcase-title">
            Features to help you get started
          </h2>
          <p className="templatesShowcase-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          </p>
        </header>
        <div className="templatesShowcase-row">
          <div className="templatesShowcase-items">
            {/* TODO: Add animation with `data-animate-scroll` */}
            <a className="templatesShowcase-item">
              <img
                className="templatesShowcase-item-image"
                src="https://luna1.co/fbea55.png"
                alt=""
              />
              <p className="templatesShowcase-item-information">
                <span className="templatesShowcase-item-name">
                  Product launch
                </span>
                <span className="templatesShowcase-item-type">List View</span>
              </p>
            </a>
            <a className="templatesShowcase-item">
              <img
                className="templatesShowcase-item-image"
                src="https://luna1.co/681b4a.png"
                alt=""
              />
              <p className="templatesShowcase-item-information">
                <span className="templatesShowcase-item-name">
                  Creative requests
                </span>
                <span className="templatesShowcase-item-type">List View</span>
              </p>
            </a>
            <a className="templatesShowcase-item">
              <img
                className="templatesShowcase-item-image"
                src="https://luna1.co/82896d.png"
                alt=""
              />
              <p className="templatesShowcase-item-information">
                <span className="templatesShowcase-item-name">
                  Editorial calendar
                </span>
                <span className="templatesShowcase-item-type">List View</span>
              </p>
            </a>
            <a className="templatesShowcase-item">
              <img
                className="templatesShowcase-item-image"
                src="https://luna1.co/1d81ac.png"
                alt=""
              />
              <p className="templatesShowcase-item-information">
                <span className="templatesShowcase-item-name">
                  Marketing project plan
                </span>
                <span className="templatesShowcase-item-type">List View</span>
              </p>
            </a>
            <a className="templatesShowcase-item">
              <img
                className="templatesShowcase-item-image"
                src="https://luna1.co/d75ded.png"
                alt=""
              />
              <p className="templatesShowcase-item-information">
                <span className="templatesShowcase-item-name">
                  Campaign management
                </span>
                <span className="templatesShowcase-item-type">List View</span>
              </p>
            </a>
            <a className="templatesShowcase-item">
              <img
                className="templatesShowcase-item-image"
                src="https://luna1.co/e9ff45.png"
                alt=""
              />
              <p className="templatesShowcase-item-information">
                <span className="templatesShowcase-item-name">
                  Event planning
                </span>
                <span className="templatesShowcase-item-type">List View</span>
              </p>
            </a>
          </div>
          <a className="templatesShowcase-all" href="#" title="">
            <div className="templatesShowcase-all-text">
              View Invision Case Study
              <div className="templateShowcase-arrow">
                <div className="templateShowcase-arrow-clip">
                  <svg
                    width="21px"
                    height="14px"
                    viewBox="0 0 21 14"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g stroke="none" strokeWidth={1}>
                      <path d="M14.0384446,0 L12.8846104,1.00339949 L17.5361471,6.23552253 L0,6.23552253 L0,7.76448894 L17.5361471,7.76448894 L12.8846104,12.996612 L14.0384638,14 L20,7.00020068 L14.0384446,0 Z" />
                    </g>
                  </svg>
                  <svg
                    width="21px"
                    height="14px"
                    viewBox="0 0 21 14"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g stroke="none" strokeWidth={1}>
                      <path d="M14.0384446,0 L12.8846104,1.00339949 L17.5361471,6.23552253 L0,6.23552253 L0,7.76448894 L17.5361471,7.76448894 L12.8846104,12.996612 L14.0384638,14 L20,7.00020068 L14.0384446,0 Z" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </article>
  </div>
</section>

  {/* ========================= Features-section end ========================= */}
  {/* ========================= hero-section end ========================= */}
  {/* ========================= feature-section-1 start ========================= */}
  <section id="feature-1" className="feature-section-1">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 order-last order-lg-first">
          <div className="feature-image text-center text-lg-start">
            <img src="assets/images/feature/feature-image-1.svg" alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-md-10">
          <div className="feature-content-wrapper">
            <div className="section-title">
              <h2 className="mb-20">
                Perfect Solution Thriving Online Business
              </h2>
              <p className="mb-30">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                dinonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem.Lorem ipsum dolor sit amet.
              </p>
              <a href="#0" className="main-btn btn-hover border-btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ========================= feature-section-1 end ========================= */}
  {/* ========================= feature-section-2 start ========================= */}
  <section id="feature-2" className="feature-section-2">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-10">
          <div className="feature-content-wrapper">
            <div className="section-title">
              <h2 className="mb-30">
                Quick &amp; Easy to <br className="d-none d-sm-block" /> Use
                Bootstrap Template
              </h2>
              <p className="mb-30">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                dinonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem.Lorem ipsum dolor sit amet.
              </p>
              <a href="#0" className="main-btn btn-hover border-btn">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="feature-image text-lg-end">
            <img src="assets/images/feature/feature-image-2.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ========================= feature-section-2 end ========================= */}
  {/* ========================= cta-section start ========================= */}
  <section id="cta" className="cta-section pt-120"

  >
    <div className="container">
      <div className="cta-wrapper"
        style={{
          backgroundImage: `url(assets/images/cta/cta-bg.svg)`,
        }}
      >
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-5">
            <div className="cta-title section-title">
              <h2>
                Get Started With <br /> SaaSdeck Today
              </h2>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="subscribe-form-wrapper">
              <form action="#">
                <input type="email" placeholder="Enter your email" />
                <button className="main-btn btn-hover">Start Free Trial</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ========================= cta-section end ========================= */}
  {/* ========================= footer start ========================= */}
  <footer className="footer pt-160">
    <div className="shape">
      <img src="assets/images/footer/shape-1.svg" alt="" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="footer-widget">
            <h3>Follow On</h3>
            <ul className="social-links">
              <li>
                <a href="#0">
                <i class="lni lni-facebook-oval"></i>
                </a>
              </li>
              <li>
                <a href="#0">
                  <i class="lni lni-linkedin-original" />
                </a>
              </li>
              <li>
                <a href="#0">
                <i class="lni lni-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#0">
                <i class="lni lni-twitter-original"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
          <div className="footer-widget">
            <h3>About Us</h3>
            <ul className="links">
              <li>
                <a href="#0">Home</a>
              </li>
              <li>
                <a href="#0">About</a>
              </li>
              <li>
                <a href="#0">Features</a>
              </li>
              <li>
                <a href="#0">Pricing</a>
              </li>
              <li>
                <a href="#0">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6">
          <div className="footer-widget">
            <h3>Services</h3>
            <ul className="links">
              <li>
                <a href="#0">SaaS Focused</a>
              </li>
              <li>
                <a href="#0">Awesome Design</a>
              </li>
              <li>
                <a href="#0">Ready to Use</a>
              </li>
              <li>
                <a href="#0">Essential Selection</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10">
          <div className="footer-widget">
            <div className="logo">
              <a href="index.html">
                {" "}
                <img src="assets/images/logo/logo.svg" alt="logo" />{" "}
              </a>
            </div>
            <p className="desc">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              dinonumy eirmod tempor invidunt.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <p>
          Design and Developed By{" "}
          <a href='https://rajatbhaskare.tech/' target='_blank'>Rajat Bhaskare</a>
        </p>
      </div>
    </div>
  </footer>
  {/* ========================= footer end ========================= */}
  {/* ========================= scroll-top ========================= */}
  <a href="#" className="scroll-top btn-hover">
    <i className="lni lni-chevron-up" />
  </a>
  {/* ========================= JS here ========================= */}
</>

    </div>
  );
}

export default App;

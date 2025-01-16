import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../src/App.css";
import { motion } from "motion/react";
import { useRef, useEffect } from "react";
import logo from "./Game Images/Asset 1.png";
import img4 from "./Game Images/img4.png";
import img7 from "./Game Images/img7.png";
import img8 from "./Game Images/img8.png";
import img9 from "./Game Images/img9.png";
import img10 from "./Game Images/img10.png";
import logo1 from "./Game Images/logo (1).png";
import logo2 from "./Game Images/logo (2).png";
import logo3 from "./Game Images/logo (3).png";
import logo4 from "./Game Images/logo (4).png";
import logo5 from "./Game Images/logo (5).png";
import logo6 from "./Game Images/logo (6).png";
import logo7 from "./Game Images/logo (7).png";
import logo8 from "./Game Images/logo (8).png";
import { Link } from "react-router-dom";
function Home() {
  // userefs
  let Dot = useRef();
  let readmore = useRef();
  let readmoreButton = useRef();
  let readlessButton = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container-fluid back-main long">
        <nav className="navbar navbar-expand-lg py-0  navbar-dark nav-back ">
          <div className="container-fluid ">
            <a className="navbar-brand ms-3" href="/">
              <motion.img
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                src={logo}
                title="Brand"
                style={{ height: "45px", width: "110px" }}
                alt="logo"
                className="d-inline-block align-top"
              />
            </a>
            <motion.button
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </motion.button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  ms-auto me-3">
                <motion.li
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="nav-item text-center"
                >
                  <Link
                    to={"/"}
                    className="nav-link custom-transition"
                    style={{
                      color: "red",
                      fontWeight: "800",
                      fontSize: "20px",
                      textShadow: "3px 3px 5px black",
                    }}
                    onClick={() => window.location.reload()}
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="link-item text-center"
                >
                  <Link
                    className="nav-link custom-transition"
                    to={"/Projects"}
                    style={{
                      color: "white",
                      fontSize: "20px",
                      textShadow: "3px 3px 5px black",
                    }}
                  >
                    Projects
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="link-item text-center"
                >
                  <Link
                    className="nav-link custom-transition"
                    to={"/About"}
                    style={{
                      color: "white",
                      fontSize: "20px",
                      textShadow: "3px 3px 5px black",
                    }}
                  >
                    About
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="link-item text-center"
                >
                  <Link
                    className="nav-link custom-transition"
                    to={"/Contact"}
                    style={{
                      color: "white",
                      fontSize: "20px",
                      textShadow: "3px 3px 5px black",
                    }}
                  >
                    Contact
                  </Link>
                </motion.li>
              </ul>
            </div>
          </div>
        </nav>
        {/* End of Nav */}
        <div className="container-fluid  heading display-5">
          <div className="row ">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="col-11 text-center"
            >
              <span className={` text-shadow-2`}>Welcome We're Cool</span>
            </motion.div>
          </div>
        </div>
        <div className="container-fluid heading2 ">
          <div className="row">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-12 text-center"
            >
              <span className="display-1 text-shadow-2">
                Game Development Studio
              </span>
            </motion.div>
          </div>
        </div>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-12 text-center ">
              <motion.p
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="fs-3 text-shadow-2 "
                style={{ color: "red", fontWeight: "800" }}
              >
                OUR SERVICES
              </motion.p>
            </div>
          </div>
        </div>
        <div className="container-fluid services text-center">
          <div className="container-fluid mb-5 ">
            <div
              style={{ display: "flex", justifyContent: "space-evenly" }}
              className="row"
            >
              <motion.div
                initial={{ opacity: 0, rotateY: "360deg" }}
                whileInView={{ rotateY: "0deg", opacity: 1 }}
                viewport={{ once: true, margin: "-180px" }}
                style={{ overflow: "hidden" }}
                className={`col-lg-3 mb-2 text-center back-g object-fit-contain  rounded`}
              >
                <p
                  className={`h4 `}
                  style={{ color: "red", marginTop: "20px" }}
                >
                  Art
                </p>
                <i className={`fa-brands fa-artstation mt-4  `}></i>
                <p style={{ fontSize: "15px", marginTop: "40px" }}>
                  Art is a diverse range of human activity and its resulting
                  product that involves creative or imaginative talent
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, rotateY: "360deg" }}
                whileInView={{ rotateY: "0deg", opacity: 1 }}
                viewport={{ once: true, margin: "-180px" }}
                transition={{ delay: 0.3 }}
                style={{ overflow: "hidden" }}
                className="col-lg-3 mb-2 text-center back-g object-fit-contain  rounded"
              >
                <p
                  className={`h4 `}
                  style={{ color: "red", marginTop: "20px" }}
                >
                  Software Testing
                </p>
                <i className={`fa-brands fa-uncharted mt-4  `}></i>
                <p style={{ fontSize: "15px", marginTop: "40px" }}>
                  Art is a diverse range of human activity and its resulting
                  product that involves creative or imaginative talent
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, rotateY: "360deg" }}
                whileInView={{ rotateY: "0deg", opacity: 1 }}
                viewport={{ once: true, margin: "-180px" }}
                transition={{ delay: 0.5 }}
                style={{ overflow: "hidden" }}
                className="col-lg-3 mb-2 text-center back-g object-fit-contain  rounded"
              >
                <p
                  className={`h4 `}
                  style={{ color: "red", marginTop: "20px" }}
                >
                  Animation Production
                </p>
                <i className={`fa-solid fa-dragon mt-4 `}></i>
                <p style={{ fontSize: "15px", marginTop: "40px" }}>
                  Art is a diverse range of human activity and its resulting
                  product that involves creative or imaginative talent
                </p>
              </motion.div>
            </div>
            <div
              className="row"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <motion.div
                initial={{ opacity: 0, rotateY: "360deg" }}
                whileInView={{ rotateY: "0deg", opacity: 1 }}
                viewport={{ once: true, margin: "-180px" }}
                style={{ overflow: "hidden" }}
                className="col-lg-3 mb-2 text-center back-g object-fit-contain  rounded"
              >
                <p className={`h4`} style={{ color: "red", marginTop: "20px" }}>
                  Game Design
                </p>
                <i className={`fa-solid fa-pen-nib mt-4`}></i>
                <p style={{ fontSize: "15px", marginTop: "40px" }}>
                  Art is a diverse range of human activity and its resulting
                  product that involves creative or imaginative talent
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, rotateY: "360deg" }}
                whileInView={{ rotateY: "0deg", opacity: 1 }}
                viewport={{ once: true, margin: "-180px" }}
                transition={{ delay: 0.3 }}
                style={{ overflow: "hidden" }}
                className="col-lg-3 mb-2 text-center back-g object-fit-contain  rounded"
              >
                <p className={`h4`} style={{ color: "red", marginTop: "20px" }}>
                  Mobile Game Development
                </p>
                <i className={`fa-solid fa-mobile mt-4 `}></i>
                <p style={{ fontSize: "15px", marginTop: "40px" }}>
                  Art is a diverse range of human activity and its resulting
                  product that involves creative or imaginative talent
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, rotateY: "360deg" }}
                whileInView={{ rotateY: "0deg", opacity: 1 }}
                viewport={{ once: true, margin: "-180px" }}
                transition={{ delay: 0.5 }}
                style={{ overflow: "hidden" }}
                className="col-lg-3 mb-2 text-center back-g object-fit-contain  rounded"
              >
                <p
                  className={`h4 `}
                  style={{ color: "red", marginTop: "20px" }}
                >
                  AR Game Development
                </p>
                <i className={`fa-solid fa-glasses mt-4 `}></i>
                <p style={{ fontSize: "15px", marginTop: "40px" }}>
                  Art is a diverse range of human activity and its resulting
                  product that involves creative or imaginative talent
                </p>
              </motion.div>
            </div>
            <div
              className="row"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <motion.div
                initial={{ opacity: 0, rotateY: "360deg" }}
                whileInView={{ rotateY: "0deg", opacity: 1 }}
                viewport={{ once: true, margin: "-180px" }}
                style={{ overflow: "hidden" }}
                className="col-lg-3 mb-2 text-center back-g object-fit-contain  rounded"
              >
                <p
                  className={`h4 `}
                  style={{ color: "red", marginTop: "20px" }}
                >
                  NFT Game Development
                </p>
                <i className={`fa-solid fa-images mt-4 `}></i>
                <p style={{ fontSize: "15px", marginTop: "40px" }}>
                  Art is a diverse range of human activity and its resulting
                  product that involves creative or imaginative talent
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, rotateY: "360deg" }}
                whileInView={{ rotateY: "0deg", opacity: 1 }}
                viewport={{ once: true, margin: "-180px" }}
                transition={{ delay: 0.3 }}
                style={{ overflow: "hidden" }}
                className="col-lg-3 mb-2 text-center back-g object-fit-contain  rounded"
              >
                <p className={`h4`} style={{ color: "red", marginTop: "20px" }}>
                  Maintenance
                </p>
                <i className={`fa-solid fa-brush mt-4 `}></i>
                <p style={{ fontSize: "15px", marginTop: "40px" }}>
                  Art is a diverse range of human activity and its resulting
                  product that involves creative or imaginative talent
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, rotateY: "360deg" }}
                whileInView={{ rotateY: "0deg", opacity: 1 }}
                viewport={{ once: true, margin: "-180px" }}
                transition={{ delay: 0.5 }}
                style={{ overflow: "hidden" }}
                className="col-lg-3 mb-2 text-center back-g object-fit-contain  rounded"
              >
                <p
                  className={`h4 `}
                  style={{ color: "red", marginTop: "20px" }}
                >
                  Full Cycle Game Development
                </p>
                <i className={`fa-solid fa-arrows-spin  mt-4  `}></i>
                <p style={{ fontSize: "15px", marginTop: "40px" }}>
                  Art is a diverse range of human activity and its resulting
                  product that involves creative or imaginative talent
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className=" container-fluid connector-1"></div>
      <div className="container-fluid background-2">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-12 text-center ">
              <motion.p
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-120px" }}
                className="fs-3 text-shadow-2 "
                style={{ color: "red", fontWeight: "800", marginTop: "30px" }}
              >
                ABOUT US
              </motion.p>
            </div>
          </div>
        </div>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-12 text-center ">
              <motion.p
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ delay: 0.3 }}
                className="fs-4 text-shadow-2 "
                style={{ color: "white", fontWeight: "800" }}
              >
                We're a team of super artists
              </motion.p>
            </div>
          </div>
        </div>
        <div className={`container-fluid`}>
          <div className={`row justify-content-between `}>
            <div className=" col-lg-7 text-center">
              <motion.p
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ delay: 0.5 }}
                className={`fs-6 py-lg-5`}
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "600",
                  textShadow: "1px 1px 1px rgb(0,0,0)",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                voluptatibus non aliquam recusandae! Quae minus totam ex velit
                delectus eaque.
                <span
                  className="Dot"
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                  ref={Dot}
                >
                  ...
                </span>
                <span
                  ref={readmore}
                  style={{ color: "white", fontWeight: "600" }}
                  className="read-More fs-6"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  modi repudiandae illum, eum vitae minus labore soluta
                  provident consequuntur esse iure dolore. Odio laboriosam
                  veniam tenetur molestias deserunt, debitis at. Sed, ratione
                  facilis veritatis laudantium cum perferendis facere sit et.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  expedita, voluptate aperiam laudantium accusamus fuga vero
                  quae accusantium illo similique pariatur? Beatae, laboriosam
                  alias sit nesciunt quam doloremque saepe dolore dolorum velit
                  est voluptas et iure corrupti quae! Nisi distinctio odio eos
                  quod numquam illo iste repellat fuga commodi impedit.
                </span>
              </motion.p>
              <motion.button
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.7 }}
                data-aos="fade-up"
                id="readMOre"
                style={{ marginBottom: "20px" }}
                ref={readmoreButton}
                onClick={() => {
                  readmore.current.style.display = "inline";
                  readmoreButton.current.style.display = "none";
                  readlessButton.current.style.display = "inline";
                  Dot.current.style.display = "none";
                }}
              >
                Read More
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.7 }}
                data-aos="fade-up"
                className={`lessread `}
                style={{ marginBottom: "20px" }}
                onClick={() => {
                  readmore.current.style.display = "none";
                  readmoreButton.current.style.display = "inline";
                  readlessButton.current.style.display = "none";
                  Dot.current.style.display = "inline";
                }}
                ref={readlessButton}
              >
                Read Less
              </motion.button>
            </div>
            <div className="  col-lg-5  text-center mb-5" style={{overflowX:"hidden"}}>
              <motion.img
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-180px" }}
                transition={{ delay: 0.4 }}
                src={img4}
                className={`img1 img-fluid `}
                alt="img4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="connector-2"></div>
      <div className="background-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <motion.p
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-120px" }}
                className="fs-3 text-shadow-2 popular"
                style={{ color: "red", fontWeight: "800" }}
              >
                POPULAR PLATFORMS
              </motion.p>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{ color: "white" }}>
          <div className="row mt-0 mt-lg-5 mb-5">
            <div className="col">
              <motion.p
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ delay: 0.3 }}
                className={`display-3 text-shadow-2 text-center `}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                culpa!
              </motion.p>
            </div>
          </div>
        </div>

        {/* Accordion */}

        <div className="container mb-5" style={{ marginTop: "40px" }}>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            className="accordion acco-1"
            id="accordionPanelsStayOpenExample"
          >
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ delay: 0.3 }}
              className={`accordion-item `}
              style={{ overflowY: "hidden" }}
            >
              <h2 className={`accordion-header `}>
                <button
                  className="accordion-button "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  <span
                    className="ms-5 fs-4 fw-bold"
                    style={{ textShadow: "1px 1px 1px black" }}
                  >
                    PC
                  </span>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className={`accordion-collapse collapse show  `}
              >
                <div
                  className="accordion-body text-center "
                  style={{ textShadow: "1px 1px 1px black" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  fugit rem aut labore totam delectus minima, quidem ratione
                  porro quam ullam! Fuga harum porro officia odit tempore
                  sapiente unde? Dignissimos sunt nihil ipsum provident,
                  suscipit non libero sapiente perferendis ea quae incidunt
                  culpa harum. Libero sequi quod maiores corrupti voluptate!
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ delay: 0.6 }}
              className={`accordion-item `}
              style={{ overflowY: "hidden" }}
            >
              <h2 className={`accordion-header `}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  <span
                    className="ms-5  fs-4 fw-bold"
                    style={{ textShadow: "1px 1px 1px black" }}
                  >
                    MOBILE
                  </span>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className={`accordion-collapse collapse `}
              >
                <div
                  className="accordion-body text-center"
                  style={{ textShadow: "1px 1px 1px black" }}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Velit nihil, reiciendis cumque veniam, necessitatibus eum nisi
                  temporibus nulla dolorum veritatis quidem quia, eaque iste
                  sequi. Laboriosam velit cupiditate mollitia deleniti quaerat
                  ipsam repellat repellendus. Dolore sint dolorum rerum, nulla
                  obcaecati fugit harum ullam expedita voluptatibus veniam illum
                  nostrum sunt eos.
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ delay: 0.9 }}
              className={`accordion-item `}
              style={{ overflowY: "hidden" }}
            >
              <h2 className={`accordion-header `}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  <span
                    className="ms-5  fs-4 fw-bold"
                    style={{ textShadow: "1px 1px 1px black" }}
                  >
                    CONSOLE
                  </span>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className={`accordion-collapse collapse `}
              >
                <div
                  className="accordion-body text-center"
                  style={{ textShadow: "1px 1px 1px black" }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Incidunt eum cum obcaecati natus quibusdam aspernatur sapiente
                  neque dicta deleniti dolorum atque ipsum, aut, dolorem velit.
                  Inventore consectetur laudantium dolorem optio amet, et
                  accusantium. In officia qui beatae ab, dignissimos commodi
                  sint corporis totam minus, repudiandae, velit optio fugiat
                  nisi recusandae?
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 1.1 }}
              className={`accordion-item `}
              style={{ overflowY: "hidden" }}
            >
              <h2 className={`accordion-header `}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelStayOpen-collapseFour"
                  aria-expanded="false"
                  aria-controls="panelStayOpen-collapseFour"
                >
                  <span
                    className="ms-5  fs-4 fw-bold"
                    style={{ textShadow: "1px 1px 1px black" }}
                  >
                    AR | VR
                  </span>
                </button>
              </h2>
              <div
                id="panelStayOpen-collapseFour"
                className={`accordion-collapse collapse `}
              >
                <div
                  className="accordion-body text-center"
                  style={{ textShadow: "1px 1px 1px black" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  nulla corporis doloremque cupiditate fuga minima perferendis
                  odit saepe error cum amet totam molestiae quae et neque,
                  deserunt omnis fugit explicabo iste quia maiores. Eos quam ad
                  beatae quis accusamus nobis? Eligendi tenetur pariatur
                  corrupti totam natus similique, dolor tempora sunt!
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Blured Connector */}
      <div className="connector-3"></div>
      {/* Main 4 */}
      <div className="background-4">
        <div className="container-sm">
          <div className="row">
            {/* Title */}
            <motion.div
            initial={{x:-200,opacity:0}}
            whileInView={{x:0,opacity:1}}
            viewport={{once:true,margin:"-120px"}}

              className="fs-3  text-center text-shadow-2 "
              style={{ color: "red", fontWeight: "800", marginTop: "30px" }}
            >
              OUR POPULAR GAME PROJECTS
            </motion.div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="  col-lg-6"></div>
            {/* Link to Project page */}
            <motion.div
            initial={{x:-200,opacity:0}}
            whileInView={{x:0,opacity:1}}
            viewport={{once:true,margin:"-120px"}}
            className=" col-lg-6 text-center">
              <Link
                to={"/Projects"}
                className="custom-t-without-b "
                style={{
                  color: "white",
                  fontSize: "25px",
                  textDecoration: "none",
                }}
              >
                All Projects <i className="fa-solid fa-caret-right fs-5"></i>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="container text-center mt-5" style={{overflowX:"hidden"}}>
          <div className="row justify-content-evenly mb-lg-5" >
            {/* Game 1 */}

            <motion.div 
            initial={{x:-200,opacity:0}}
            whileInView={{x:0,opacity:1}}
            viewport={{once:true,margin:"-120px"}}
            transition={{delay:0.3}} className="col-lg-3 mb-5 d-flex justify-content-center">
              <div
                className={`card `}
                style={{ width: "18rem", height: "25rem" }}
              >
                <img src={img7} className="card-img-top" alt="img7"></img>
                <div className="card-body text-shadow-2">
                  <h5 className="card-title mt-2">PUBG MOBILE</h5>
                  <p className="card-text  mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quam, incidunt?
                  </p>
                </div>
              </div>
            </motion.div >

            {/* Game 2 */}

            <motion.div 
                initial={{ opacity: 0, rotateY: "360deg" }}
                whileInView={{ rotateY: "0deg", opacity: 1 }}
                viewport={{ once: true, margin: "-180px" }}
                transition={{ delay: 0.3 }} className="col-lg-3  mb-5 d-flex justify-content-center">
              <div
                className={`card `}
                style={{ width: "18rem", height: "25rem" }}
              >
                <img src={img8} className="card-img-top" alt="img7"></img>
                <div className="card-body text-shadow-2">
                  <h5 className="card-title mt-2">
                    FAR CRY 1 | 2 | 3 | 4 | 5 | 6
                  </h5>
                  <p className="card-text  mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quam, incidunt?
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Game 3 */}

            <motion.div
            initial={{x:200,opacity:0}}
            whileInView={{x:0,opacity:1}}
            viewport={{once:true,margin:"-120px"}}
            transition={{delay:0.3}} className="col-lg-3  mb-5 d-flex justify-content-center">
              <div
                className={`card `}
                style={{ width: "18rem", height: "25rem" }}
              >
                <img src={img9} className="card-img-top" alt="img7"></img>
                <div className="card-body text-shadow-2">
                  <h5 className="card-title mt-2 ">GTA V</h5>
                  <p className="card-text  mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quam, incidunt?
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Game 4 */}
          <div className="row justify-content-center">
            <motion.div
                initial={{ opacity: 0, rotateY: "360deg" }}
                whileInView={{ rotateY: "0deg", opacity: 1 }}
                viewport={{ once: true, margin: "-180px" }}
                transition={{ delay: 0.3 }} className="col-lg-3  mb-5 d-flex justify-content-center">
              <div
                className={`card  `}
                style={{ width: "18rem", height: "25rem" }}
              >
                <img src={img10} className="card-img-top" alt="img10"></img>
                <div className="card-body text-shadow-2">
                  <h5 className="card-title mt-2 ">CALL OF DUTY MOBILE</h5>
                  <p className="card-text  mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quam, incidunt?
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Title */}
        <div className="container-fluid" style={{overflowX:"hidden"}}>
          <div className="row">
            <div className="col">
              <motion.div
            initial={{x:200,opacity:0}}
            whileInView={{x:0,opacity:1}}
            viewport={{once:true,margin:"-120px"}}
                className="fs-3  text-center text-shadow-2 mb-4"
                style={{ color: "red", fontWeight: "800", marginTop: "30px" }}
              >
                WHY CHOOSE US
              </motion.div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <motion.p
            initial={{x:-200,opacity:0}}
            whileInView={{x:0,opacity:1}}
            viewport={{once:true,margin:"-120px"}}
            transition={{delay:0.3}}
                className={`display-3 text-center text-shadow-2 `}
                style={{ color: "white" }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                quia provident asperiores iure sapiente debitis ullam fugit ad
                pariatur architecto?
              </motion.p>
            </div>
          </div>
          <div className="container mt-5" style={{overflow:'hidden'}}>
            <div className="row justify-content-evenly mb-lg-5">
              {/* STD 1 */}
              <motion.div
              initial={{y:100,opacity:0}}
              whileInView={{y:0,opacity:1}}
              viewport={{margin:"-100px",once:true}} 
              className="col-lg-3 mb-5 d-flex justify-content-center">
                <div className={`card text-center `} style={{ width: "18rem" }}>
                  <div className="card-body text-shadow-2">
                    <h5
                      className="card-title mt-2 fs-3"
                      style={{ color: "white" }}
                    >
                      High Standards
                    </h5>
                    <p className="card-text  mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam maiores et illum. Quam, incidunt?
                    </p>
                  </div>
                </div>
              </motion.div>
              {/* STD 2 */}
              <motion.div
              initial={{y:100,opacity:0}}
              whileInView={{y:0,opacity:1}}
              viewport={{margin:"-100px",once:true}}
              transition={{delay:0.3}}
              className="col-lg-3  mb-5 d-flex justify-content-center">
                <div className={`card text-center `} style={{ width: "18rem" }}>
                  <div className="card-body text-shadow-2">
                    <h5
                      className="card-title mt-2 fs-3"
                      style={{ color: "white" }}
                    >
                      Coperative Spirit
                    </h5>
                    <p className="card-text  mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing Lorem
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Adipisci, aliquid? elit. Quam, incidunt?
                    </p>
                  </div>
                </div>
              </motion.div>
              {/* STD 3 */}
              <motion.div
              initial={{y:100,opacity:0}}
              whileInView={{y:0,opacity:1}}
              viewport={{margin:"-100px",once:true}}
              transition={{delay:0.5}}
              className="col-lg-3  mb-5 d-flex justify-content-center">
                <div className={`card text-center `} style={{ width: "18rem" }}>
                  <div className="card-body text-shadow-2 ">
                    <h5
                      className="card-title mt-2 fs-3"
                      style={{ color: "white" }}
                    >
                      Creative Passion
                    </h5>
                    <p className="card-text  mt-4">
                      Lorem ipsum dolor sit amet, dolorum minima necessitatibus
                      natus ipsum ea excepturi doloremque itaque distinctio?
                      consectetur adipisicing elit. Quam, incidunt?
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* Main 5 */}
      <div className="background-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <motion.div
              initial={{x:-200,opacity:0}}
              whileInView={{x:0,opacity:1}}
              viewport={{margin:"100px",once:true}}
                className="fs-3  text-center text-shadow-2 mb-5 "
                style={{ color: "red", fontWeight: "800", marginTop: "30px" }}
              >
                TRUSTED BY
              </motion.div>
            </div>
          </div>
          <div
            className="container-fluid"
            style={{ overflowY: "hidden", height: "auto" }}
          >
            <div className="row d-flex justify-content-evenly">
              {/* Logo 1 */}
              <motion.div
                initial={{y:150,opacity:0}}
                whileInView={{y:0,opacity:1}}
                viewport={{margin:"-100px",once:true}} className="col-md-6 col-lg-4 col-xl-3 text-center mb-3">
                <img
                  src={logo1}
                  className={`  back-drop  `}
                  alt=""
                  style={{ width: "250px" }}
                />
              </motion.div>
              {/* Logo 2 */}
              <motion.div
                initial={{y:150,opacity:0}}
                whileInView={{y:0,opacity:1}}
                viewport={{margin:"-100px",once:true}}
                transition={{delay:0.1}}
                className="col-md-6 col-lg-4 col-xl-3 text-center mb-3">
                <img
                  src={logo2}
                  className={` back-drop `}
                  alt=""
                  style={{ width: "250px" }}
                />
              </motion.div>
              {/* Logo 3 */}
              <motion.div 
                initial={{y:150,opacity:0}}
                whileInView={{y:0,opacity:1}}
                viewport={{margin:"-100px",once:true}}
                transition={{delay:0.2}}className="col-md-6 col-lg-4 col-xl-3 text-center mb-3 ">
                <img
                  src={logo3}
                  className={` back-drop `}
                  alt=""
                  style={{ width: "250px" }}
                />
              </motion.div>
              {/* Logo 4 */}
              <motion.div 
                initial={{y:150,opacity:0}}
                whileInView={{y:0,opacity:1}}
                viewport={{margin:"-100px",once:true}}
                transition={{delay:0.3}}className="col-md-6 col-lg-4 col-xl-3 text-center mb-3 ">
                <img
                  src={logo4}
                  className={` back-drop `}
                  alt=""
                  style={{ width: "250px" }}
                />
              </motion.div>
            </div>
            <div className="row mt-md-5 d-flex justify-content-evenly mb-2">
              {/* Logo 5 */}
              <motion.div 
                initial={{y:150,opacity:0}}
                whileInView={{y:0,opacity:1}}
                viewport={{margin:"-100px",once:true}}
                transition={{delay:0.4}}className="col-md-6 col-lg-4 col-xl-3 text-center mb-3 ">
                <img
                  src={logo5}
                  className={` back-drop `}
                  alt=""
                  style={{ width: "250px" }}
                />
              </motion.div>
              {/* Logo 6 */}
              <motion.div 
                initial={{y:150,opacity:0}}
                whileInView={{y:0,opacity:1}}
                viewport={{margin:"-100px",once:true}}
                transition={{delay:0.5}}className="col-md-6 col-lg-4 col-xl-3 text-center mb-3 ">
                <img
                  src={logo6}
                  className={` back-drop  `}
                  alt=""
                  style={{ width: "250px" }}
                />
              </motion.div>
              {/* Logo 7 */}
              <motion.div 
                initial={{y:150,opacity:0}}
                whileInView={{y:0,opacity:1}}
                viewport={{margin:"-100px",once:true}}
                transition={{delay:0.6}}className="col-md-6 col-lg-4 col-xl-3 text-center mb-3 ">
                <img
                  src={logo7}
                  className={` back-drop `}
                  alt=""
                  style={{ width: "250px" }}
                />
              </motion.div>
              {/* Logo 8 */}
              <motion.div 
                initial={{y:150,opacity:0}}
                whileInView={{y:0,opacity:1}}
                viewport={{margin:"-100px",once:true}}
                transition={{delay:0.7}}className="col-md-6 col-lg-4 col-xl-3 text-center ">
                <img
                  src={logo8}
                  className={` back-drop `}
                  alt=""
                  style={{ width: "250px" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid Footer" style={{ overflowX: "hidden" }}>
        <div className="row">
          <div className="col-md-4 text-center">
            <div className="img-last mt-5">
              <motion.img
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                src={logo}
                style={{ height: "60px" }}
                alt="LOGO"
              />
            </div>
            <motion.p
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="lead mt-2"
              style={{ color: "white" }}
            >
              {" "}
              Copyright &copy; GAME DEV 2024
            </motion.p>
          </div>
          <div
            className="col-md-4 text-center"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="first-logo fs-5"
            >
              <Link className="Last-links" to={"/"}
                style={{ color: "red" }}>
                Home
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="second-logo fs-5"
            >
              <Link className="Last-links" to={"/Projects"}>
                Projects
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="third-logo fs-5"
            >
              <Link className="Last-links" to={"/About"}>
                About
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="fourth-logo fs-5"
            >
              <Link
                className="Last-links"
                to={"/Contact"}
              >
                Contact
              </Link>
            </motion.div>
          </div>
          <div className="col-md-4 text-center addText">
            <div className="address mt-4">
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="fs-6"
              >
                Somewhere on earth
              </motion.p>
            </div>
            <div className="mail">
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="fs-6"
              >
                Contact@gmail.com
              </motion.p>
            </div>
            <div className="tele">
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="fs-6"
              >
                +94 761 008 358
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <Link to={"/Contact"} className="get-in">
        Get In Touch
      </Link>
      <div className="float" style={{ textShadow: ".5px .5px .5px white" }}>
        <a href="tel:94761008358">
          <i className="fa-brands fa-whatsapp" style={{ color: "#59ff00" }}></i>
        </a>
        <a href="https://www.youtube.com/">
          <i className="fa-brands fa-youtube" style={{ color: "#ff0000" }}></i>
        </a>
        <a href="https://web.facebook.com/">
          <i className="fa-brands fa-facebook" style={{ color: "#005eff" }}></i>
        </a>
        <a href="https://x.com/?lang=en">
          <i className="fa-brands fa-x-twitter" style={{ color: "black" }}></i>
        </a>
      </div>
    </>
  );
}

export default Home;

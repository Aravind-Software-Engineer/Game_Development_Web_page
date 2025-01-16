import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../src/App.css";
import logo from "./Game Images/Asset 1.png";
import { Link } from "react-router-dom";
import { useRef, useState,useEffect } from "react";
import video_1 from "./Game Images/live1.mp4";
import video_2 from "./Game Images/live2.mp4";
import video_3 from "./Game Images/live3.mp4";
import { motion } from "framer-motion";
function Projects() {
  useEffect(() => {
  window.addEventListener("load",updateSize());
    window.scrollTo(0, 0);
  }, []);
  let [winSize, setWinSize] = useState();
  
  function updateSize() {
    // height.innerHTML = window.innerHeight;
    setWinSize(window.innerWidth);
  }
  window.addEventListener("resize", updateSize);
  let first_video = useRef();
  let second_video = useRef();
  let third_video = useRef();
  return (
    <>
      <div className="container-fluid Project-first-bg">
        <nav className="navbar navbar-expand-lg py-0 navbar-dark nav-back">
          <div className="container-fluid">
            <a className="navbar-brand ms-3" href="/">
              <motion.img
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                src={logo}
                style={{ height: "45px", width: "110px" }}
                alt="logo"
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
              className="collapse navbar-collapse"
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
                    style={{ color: "white", fontSize: "20px" }}
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
                    onClick={() => window.location.reload()}
                    to={"/Projects"}
                    style={{
                      color: "red",
                      fontWeight: "800",
                      fontSize: "20px",
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
                    style={{ color: "white", fontSize: "20px" }}
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
                    style={{ color: "white", fontSize: "20px" }}
                  >
                    Contact
                  </Link>
                </motion.li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row ">
            <div className="col">
              <motion.p
                initial={{ x: -300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="display-5"
                style={{ marginTop: "20%" }}
              >
                Have a look at our
              </motion.p>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <motion.p
                initial={{ x: -300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="display-2"
                style={{
                  marginLeft: "20%",
                  marginTop: "-5%",
                  fontWeight: "700",
                }}
              >
                Projects
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      {winSize < 992 ? "" : <div className="separator-2"></div>}
      <div className="container-fluid bg-flow">
        <div className="row" style={{overflow:`${winSize<992 ?"hidden":"none"}`}}>
          <motion.div className="col-lg-3 me-lg-auto ms-lg-5 mb-lg-5 text-lg-start text-center"  initial={{x:-200,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{margin:"-150px",once:true}} transition={{delay:0.5}}>
            <p className="h2 mt-5">
              <span style={{ color: "rgb(101,61,61)" }}>Doom</span>
              <span style={{ color: "rgb(224, 33, 5" }}>Eternal</span>
            </p>
            <p className="fs-6 lead">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur,
              adipisicing elit.
            </p>
            <p className="fs-5 mt-3 text-white shado">Game type : FPS</p>
            <p className="fs-5 mt-3 text-white shado">Technology : I Tech 7</p>
            <p className="fs-5 mt-3 text-white shado">Platform : PC,PS,XBOX</p>
            <p className="fs-5 mt-3 text-white shado">
              Developed by : Game Dev&trade;
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true ,margin:"-100px"}}
            className="col-lg-6 ms-auto me-5"
            style={{ background: "black" }}
          >
            <motion.video
              ref={first_video}
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true ,margin:"-100px"}}
              transition={{ delay: 0.5 }}
              onMouseOver={() => first_video.current.pause()}
              onMouseLeave={() => first_video.current.play()}
              src={video_1}
              id="first-video"
              loop
              autoPlay={true}
              muted={true}
              controls={false}
              style={{ height: "100%", width: "100%", zIndex: "12" }}
            ></motion.video>
          </motion.div>
        </div>
      </div>
      {winSize < 992 ? "" : <div className="separator-1"></div>}
      {winSize < 992 ? (
        <div className="container-fluid bg-flow" style={{overflow:"hidden"}}>
          <div className="row d-lg-flex">
            <motion.div className="col-lg-3 me-lg-auto ms-lg-5 mb-lg-5 text-lg-start text-center"  initial={{x:-200,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{margin:"-150px",once:true}} transition={{delay:0.5}}>
              <p className="h2 mt-5">
                <span style={{ color: "rgb(99, 75, 63)" }}>Pubg</span>
                <span style={{ color: "rgb(32, 32, 32)" }}> Mobile</span>
              </p>
              <p className="fs-6 lead">
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                consectetur, adipisicing elit.
              </p>
              <p className="fs-5 mb-3 text-white shado">Game type : FPS</p>
              <p className="fs-5 mt-3 text-white shado">
                Technology : I Tech 9
              </p>
              <p className="fs-5 mt-3 text-white shado">
                Platform : MOBILE,EMMULATOR
              </p>
              <p className="fs-5 mt-3 text-white shado">
                Developed by : Game Dev&trade;
              </p>
            </motion.div>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              viewport={{ once: true ,margin:"-100px"}}
              whileInView={{ x: 0, opacity: 1 }}
              className="col-lg-6 ms-auto me-5"
              style={{ background: "black"}}
            >
              <motion.video
                initial={{ x: -200, opacity: 0 }}
                viewport={{ once: true,margin:"-100px" }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                ref={second_video}
                onMouseOver={() => second_video.current.pause()}
                onMouseLeave={() => second_video.current.play()}
                src={video_2}
                id="first-video"
                loop
                autoPlay={true}
                muted={true}
                controls={false}
                style={{ height: "100%", width: "100%", zIndex: "13" }}
              ></motion.video>
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="container-fluid bg-flow-2">
          <div className="row">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true ,margin:"-100px"}}
              className="col-lg-6 me-auto ms-lg-5"
              style={{ background: "black"}}
            >
              <motion.video
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true,margin:"-100px" }}
                transition={{delay:0.5}}
                ref={second_video}
                onMouseOver={() => second_video.current.pause()}
                onMouseLeave={() => second_video.current.play()}
                src={video_2}
                id="second-video"
                loop
                autoPlay={true}
                muted={true}
                controls={false}
                style={{ height: "100%", width: "100%", zIndex: "13" }}
              ></motion.video>
            </motion.div>
            <motion.div className="col-lg-3 me-lg-auto ms-lg-5 mb-lg-5 text-lg-start text-center"  initial={{x:200,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{margin:"-150px",once:true}} transition={{delay:0.5}}>
              <p className="h2 mt-5">
                <span style={{ color: "rgb(99, 75, 63)" }}>Pubg</span>
                <span style={{ color: "rgb(32, 32, 32)" }}> Mobile</span>
              </p>
              <p className="fs-6 lead">
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                consectetur, adipisicing elit.
              </p>
              <p className="fs-5 text-white shado">Game type : FPS</p>
              <p className="fs-5 text-white shado">Technology : I Tech 9</p>
              <p className="fs-5 text-white shado">
                Platform : MOBILE,EMMULATOR
              </p>
              <p className="fs-5 text-white shado">
                Developed by : Game Dev&trade;
              </p>
            </motion.div>
          </div>
        </div>
      )}
      {winSize < 992 ? "" : <div className="separator-2"></div>}
      <div className="container-fluid bg-flow-3">
        <div className="row"  style={{overflow:`${winSize<992 ?"hidden":"none"}`}}>
          <motion.div className="col-lg-3 me-lg-auto ms-lg-5 mb-lg-5 text-lg-start text-center" initial={{x:-200,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{margin:"-150px",once:true}} transition={{delay:0.5}}>
            <p className="h2 mt-5 ">
              <span style={{ color: "rgb(154, 247, 0)" }}>Call</span> Of{" "}
              <span style={{ color: "rgb(22,62,8)" }}>Duty</span>
            </p>
            <p className="fs-6 lead">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur,
              adipisicing elit.
            </p>
            <p className="fs-5 mt-3 text-white shado">Game type : FPS</p>
            <p className="fs-5 mt-3 text-white shado">Technology : I Tech 7</p>
            <p className="fs-5 mt-3 text-white shado">Platform : PC,PS,XBOX</p>
            <p className="fs-5 mt-3 text-white shado">
              Developed by : Game Dev &trade;
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin:"-100px" }}
            className="col-lg-6 ms-auto me-5 "
            style={{ background: "black"}}
          >
            <motion.video
              initial={{ x: 200, opacity: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{delay:0.5}}
              ref={third_video}
              onMouseOver={() => third_video.current.pause()}
              onMouseLeave={() => third_video.current.play()}
              src={video_3}
              id="third-video"
              loop
              autoPlay={true}
              muted={true}
              controls={false}
              style={{ height: "100%", width: "100%" }}
            ></motion.video>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="container-fluid Footer" style={{overflowX:"hidden"}}>
        <div className="row">
          <div className="col-md-4 text-center" >
            <div className="img-last mt-5">
              <motion.img  
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{delay:.3}}
                src={logo} style={{ height: "60px" }} alt="LOGO" />
            </div>
            <motion.p   
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{delay:.5}}
                viewport={{ once: true }}  className="lead mt-2" style={{ color: "white" }}>
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
                viewport={{ once: true }} className="first-logo fs-5">
              <Link className="Last-links" to={"/"}>
                Home
              </Link>
            </motion.div>
            <motion.div   
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{delay:0.3}}
                className="second-logo fs-5">
              <Link className="Last-links" to={"/Projects"}
                style={{ color: "red" }}>
                Projects
              </Link>
            </motion.div>
            <motion.div    
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{delay:0.5}} className="third-logo fs-5">
              <Link className="Last-links" to={"/About"}>
                About
              </Link>
            </motion.div>
            <motion.div    
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{delay:0.7}}
                className="fourth-logo fs-5">
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
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }} className="fs-6"> Somewhere on earth</motion.p>
            </div>
            <div className="mail">
              <motion.p    
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{delay:0.3}} className="fs-6">Contact@gmail.com</motion.p>
            </div>
            <div className="tele">
              <motion.p    
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{delay:0.5}} className="fs-6">+94 761 008 358</motion.p>
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

export default Projects;

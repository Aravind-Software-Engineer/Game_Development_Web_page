import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../src/App.css";
import {useEffect} from "react";
import logo from "./Game Images/Asset 1.png";
import { Link } from "react-router-dom";
import {motion} from "motion/react"
import passion from "./Game Images/passion.jpg"
import logo1 from "./Game Images/logo (1).png";
import logo2 from "./Game Images/logo (2).png";
import logo3 from "./Game Images/logo (3).png";
import logo4 from "./Game Images/logo (4).png";
import logo5 from "./Game Images/logo (5).png";
import logo6 from "./Game Images/logo (6).png";
import logo7 from "./Game Images/logo (7).png";
import logo8 from "./Game Images/logo (8).png";
function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container-fluid back-main">
      <nav className="navbar navbar-expand-lg py-0 navbar-dark nav-back">
        <div className="container-fluid">
          <a className="navbar-brand ms-3"  href="/">
            <motion.img src={logo}
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}style={{ height: "45px", width: "110px" }} alt="logo" />
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
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav  ms-auto me-3">
              <motion.li
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }} className="nav-item text-center">
                <Link to={'/'} className="nav-link custom-transition" style={{color:'white',fontSize:'20px',textShadow:"3px 3px 5px black"}}>Home</Link>
              </motion.li>
              <motion.li
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }} className="link-item text-center">
              <Link className="nav-link custom-transition" to={"/Projects"} style={{color:'white',fontSize:'20px',textShadow:"3px 3px 5px black"}} >
                Projects
              </Link>
              </motion.li>
              <motion.li 
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}className="link-item text-center">
              <Link className="nav-link custom-transition" to={"/About"} style={{color:'red',fontWeight:'800',fontSize:'20px',textShadow:"3px 3px 5px black"}} onClick={()=>window.location.reload()} >
                About
              </Link>
              </motion.li>
              <motion.li
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }} className="link-item text-center">
              <Link className="nav-link custom-transition" to={"/Contact"} style={{color:'white',fontSize:'20px',textShadow:"3px 3px 5px black"}} >
                Contact
              </Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
      

      <Link
        to={"/Contact"}
        className="get-in"
      >
        Get In Touch
      </Link>




      <div className="background-1-about">
      <div className="container-fluid">
        <div className="row" >
          <div className="col ">
            <motion.p
                initial={{x:-150,opacity:0}}
                whileInView={{x:0,opacity:1}}
                viewport={{margin:"-100px",once:true}} 
                className="fs-3" style={{marginTop:"100px",marginLeft:"10%",color:"white"}}>A few words</motion.p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row" >
          <div className="col ">
            <motion.p
                initial={{x:-150,opacity:0}}
                whileInView={{x:0,opacity:1}}
                viewport={{margin:"-100px",once:true}}
                transition={{delay:0.3}} 
            className="display-1" style={{marginTop:"10px",marginLeft:"20%",color:"white",fontWeight:"700"}}>About Us</motion.p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row" >
          <div className="col text-center">
            <motion.p
                initial={{x:150,opacity:0}}
                whileInView={{x:0,opacity:1}}
                viewport={{margin:"-100px",once:true}}
                transition={{delay:0.5}} 
            className="display-4 mb-5" style={{marginTop:"10px",color:"white"}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ducimus sequi debitis quod tempore et sit, minus molestiae vero placeat!</motion.p>
          </div>
        </div>
      </div>
      </div>
      <div className="container-fluid text-center passion-div">
        <motion.img 
                initial={{y:150,opacity:0}}
                whileInView={{y:0,opacity:1}}
                viewport={{margin:"-150px",once:true}}
                src={passion} alt="passion " style={{width:"90%",marginTop:"-5%",marginBottom:"50px"}}/>
      </div>
      <div className="container-fluid background-2-about">
        <div className="container">
          <div className="row">
            <div className="col">
          <motion.p
                initial={{x:-150,opacity:0}}
                whileInView={{x:0,opacity:1}}
                viewport={{margin:"-100px",once:true}}
          className="fs-3 text-shadow-2 ms-5 mt-5"
                style={{ color: "red", fontWeight: "800" }}>SOME GAMING FACTS</motion.p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <motion.p
                initial={{x:150,opacity:0}}
                whileInView={{x:0,opacity:1}}
                viewport={{margin:"-100px",once:true}}
                transition={{delay:0.3}} 
              className="fs-5 mt-3" style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium provident, aliquam eveniet vel laboriosam aperiam! adipisicing elit. Magnam, earum.</motion.p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row d-lg-flex justify-content-lg-around">
          <motion.div
                initial={{x:-150,opacity:0}}
                whileInView={{x:0,opacity:1}}
                viewport={{margin:"-100px",once:true}}
          className="col-lg-3 text-center ">
            <p className="" style={{fontSize:"8rem",color:"red"}}>
              15
            </p>
            <p className="fs-4 " style={{color:"white"}}>Years of experience</p>
          </motion.div>
          <motion.div
                initial={{x:-150,opacity:0}}
                whileInView={{x:0,opacity:1}}
                viewport={{margin:"-100px",once:true}}
                transition={{delay:0.3}} 
          className="col-lg-3 text-center ">
          <p className="" style={{fontSize:"8rem",color:"red"}}>
              120+
            </p>
            <span className="fs-4 " style={{color:"white"}}>Clients that love us</span>
          </motion.div>
          <motion.div
                initial={{x:150,opacity:0}}
                whileInView={{x:0,opacity:1}}
                viewport={{margin:"-100px",once:true}}
                transition={{delay:0.3}} 
          className="col-lg-3 text-center ">
          <p className="" style={{fontSize:"8rem",color:"red"}}>
              75+
            </p>
            <span className="fs-4 " style={{color:"white"}}>Talented artists</span>
          </motion.div>
          <motion.div
                initial={{x:150,opacity:0}}
                whileInView={{x:0,opacity:1}}
                viewport={{margin:"-100px",once:true}}
          className="col-lg-3 text-center ">
          <p className="" style={{fontSize:"8rem",color:"red"}}>
              50&gt;
            </p>
            <span className="fs-4 " style={{color:"white"}}>Games developed</span>
          </motion.div>
        </div>
      </div>
      <div className="container mt-5 text-center pb-5">
        <motion.p
        initial={{y:150,opacity:0}}
        whileInView={{y:0,opacity:1}}
        viewport={{margin:"-100px",once:true}}
        transition={{delay:0.3}} 
        className="fs-3 " style={{color:'white'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam deserunt laudantium soluta magnam veniam explicabo, quaerat excepturi ad, nostrum consectetur mollitia maxime dolore aut recusandae, qui modi nesciunt provident saepe.</motion.p>
      </div>

      </div>
      <div className="container-fluid bagk-linear">
        <div className="container mb-5">
          <div className="row">
            <div className="col container">
              <motion.p
              initial={{x:-150,opacity:0}}
              whileInView={{x:0,opacity:1}}
              viewport={{margin:"-100px",once:true}}
              className="fs-3 text-shadow-2" style={{color:"red",fontWeight:"800"}}>WHAT DRIVE US</motion.p>
            </div>
          </div>
        </div>
        <div className="container pb-5" style={{color:"white"}}>
          <div className="row">
            <motion.div
              initial={{x:-150,opacity:0}}
              whileInView={{x:0,opacity:1}}
              viewport={{margin:"-100px",once:true}}
              transition={{delay:0.3}}   
            className="col-lg-4 text-center border rounded-2 mb-5">
              <p className="fs-2 m-5">Our Mission</p>
              <p className="fs-5">
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
              </p>
            </motion.div>
            <motion.div
              initial={{x:150,opacity:0}}
              whileInView={{x:0,opacity:1}}
              viewport={{margin:"-100px",once:true}}
              transition={{delay:0.3}}  
            className="col-lg-4 text-center offset-lg-4 border mb-5 rounded-2 ">
              <p className="fs-2 m-5">Our vision</p>
              <p className="fs-5 mb-5 ">
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="background-3-about">
      <div className="container-fluid">
          <div className="row">
            <div className="col">
            <div
              className="fs-3  text-center text-shadow-2 mb-5 "
              style={{ color: "red", fontWeight: "800", marginTop: "30px" }}
            >
              TRUSTED BY
            </div>
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
      









      {/* Footer */}
      <div className="container-fluid Footer" >
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
              <Link className="Last-links" to={"/Projects"}>
                Projects
              </Link>
            </motion.div>
            <motion.div    
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{delay:0.5}} className="third-logo fs-5">
              <Link className="Last-links" to={"/About"}
                style={{ color: "red" }}>
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
    </>
  );
}

export default About;
            
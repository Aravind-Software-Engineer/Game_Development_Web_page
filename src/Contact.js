import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../src/App.css";
import axios from "axios";
import { useEffect } from "react";
import logo from "./Game Images/Asset 1.png";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import emailjs from '@emailjs/browser'

function Contact() {
  let [Sname, setSname] = useState("");
  let [Semail, setEmail] = useState("");
  let [Smessage, setMessage] = useState("");
  let Loader = useRef();
  let form =useRef()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let submitMessage = (e) => {

    e.preventDefault();
    if (Sname !== "" && Semail !== "" && Smessage !== "") {
      Loader.current.style.display = "flex";
      emailjs.sendForm("service_auw6ml5","template_3bnzqla",form.current,{
        publicKey:"cgtdr9DiskjHyqnzx"
      }).then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      axios
        .post(
          "http://localhost:3210/Send",
          { Sname, Semail, Smessage },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          Loader.current.style.display = "none";
          setEmail("")
          setSname("")
          setMessage("")
          alert("Sumitted")
        })
        .catch((err) =>{ console.log(err)
          Loader.current.style.display = "none";
        });
    }
    else{
      alert("Fill out all the fields")
    }
  };
  return (
    <>
      <div class=" loader" ref={Loader}>
      </div>
      <div className="container-fluid back-main">
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
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  ms-auto me-3">
                <motion.li
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="nav-item text-center "
                >
                  <Link
                    to={"/"}
                    className="nav-link custom-transition"
                    style={{
                      color: "white",
                      fontSize: "20px",
                      textShadow: "3px 3px 5px black",
                    }}
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
                      color: "red",
                      fontWeight: "800",
                      fontSize: "20px",
                      textShadow: "3px 3px 5px black",
                    }}
                    onClick={() => window.location.reload()}
                  >
                    Contact
                  </Link>
                </motion.li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="contact-1-background contact-first container-fluid">
        <div className="row ">
          <div className="col-lg-4 offset-lg-1 m-for-cont-99">
            <motion.p
              className="fs-3 text-shadow-2"
              style={{
                fontWeight: "800",
                color: "red",
                textTransform: "uppercase",
              }}
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              Get In Touch
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container-fluid contact-background-1">
        <div className="container-fluid">
          <div className="row ">
            <div className="col offset-lg-2">
              <motion.p
                className="display-1 text-shadow-2 mb-lg-5 mt-5"
                style={{ fontWeight: "700", color: "white" }}
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                Contact
              </motion.p>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-lg-5">
          <div className="row">
            <div
              className="col-lg-6 text-center mb-5"
              style={{ color: "white" }}
            >
              <motion.p
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="fs-4 mb-5 mt-lg-5 text-shadow-2"
              >
                Contact info
              </motion.p>
              <motion.p
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="fs-4  text-shadow-2"
              >
                Phone : +94761008358
              </motion.p>
              <motion.p
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="fs-4 text-shadow-2"
              >
                Email : info@gmail.com
              </motion.p>
              <motion.p
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="fs-4 text-shadow-2"
              >
                Address : Somewhere, on earth
              </motion.p>
            </div>
            <div className="col-lg-6 text-center mb-5">
              <motion.p
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className=" lead text-shadow-2"
                style={{ color: "white" }}
              >
                Send a message for more informations
              </motion.p>
              <form ref={form} onSubmit={submitMessage}>
                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="form-floating mb-4"
                >
                  <input
                    type="text"
                    id="Sname"
                    className=" form-control"
                    placeholder="Name"
                    autoComplete="name"
                    value={Sname}
                    name="Sname"
                    onChange={(e) => setSname(e.target.value)}
                  />
                  <label htmlFor="Sname">Name : </label>
                </motion.div>
                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="form-floating mb-4"
                >
                  <input
                    type="text"
                    id="Semail"
                    name="Semail"
                    placeholder="Email : "
                    className=" form-control"
                    autoComplete="email"
                    value={Semail}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="Semail">Email : </label>
                </motion.div>
                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="form-floating"
                >
                  <textarea
                    className="form-control"
                    value={Smessage}
                    placeholder="Leave a message here"
                    id="message"
                    name="Smessage"
                    title={"Without White Space $ Above 3 Letters"}
                    style={{ height: "100px", resize: "none" }}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <label htmlFor="message">Message : </label>
                </motion.div>
                <motion.button
                  initial={{ x: 200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  type="submit"
                  className="btn btn-light mt-5"
                >
                  {" "}
                  Submit{" "}
                </motion.button>
              </form>
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
                style={{ color: "red" }}
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

export default Contact;

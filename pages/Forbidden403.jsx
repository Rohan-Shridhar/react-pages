import "./Forbidden403.css";
import PropTypes from "prop-types";
export default function Forbidden403({bgcolor, color,scaleonhover, codesize, title, titlesize, message, messagesize, homelink, buttonbgcolor, buttoncolor, buttonmessage, buttonsize}) {
  const bgColor = bgcolor || Forbidden403.defaultProps.bgcolor;
  const textColor = color || Forbidden403.defaultProps.color;
  const scaleOnHover = scaleonhover || Forbidden403.defaultProps.scaleonhover;
  const codeSize = codesize || Forbidden403.defaultProps.codesize;
  const heading = title || Forbidden403.defaultProps.title;
  const titleSize = titlesize || Forbidden403.defaultProps.titlesize;
  const messageContent = message || Forbidden403.defaultProps.message;
  const messageSize = messagesize || Forbidden403.defaultProps.messagesize;
  const homeUrl = homelink || Forbidden403.defaultProps.homelink;
  const buttonBgColor = buttonbgcolor || Forbidden403.defaultProps.buttonbgcolor;
  const buttonColor = buttoncolor || Forbidden403.defaultProps.buttoncolor;
  const buttonMessage = buttonmessage || Forbidden403.defaultProps.buttonmessage;
  const buttonSize = buttonsize || Forbidden403.defaultProps.buttonsize;

  return (
    <div className={scaleOnHover?"forbidden-page-animation":"forbidden-page"} style={{color: textColor, backgroundColor: bgColor}}> 
        <i className="fa-solid fa-lock"></i>     
        <h1 style={{fontSize: codeSize}}>403</h1>
        <h2 style={{fontSize: titleSize}}>{heading}</h2>
        <p style={{fontSize: messageSize}}>{messageContent}</p>
        <button href={homeUrl} style={{backgroundColor: buttonBgColor, color: buttonColor, fontSize: buttonSize}}>{buttonMessage}</button>
    </div>
  );
}

Forbidden403.defaultProps = {
  bgcolor: "#ffffff",
  color: "#000000",
  scaleonhover: false,
  codesize: "4rem",
  title: "Access Denied",
  titlesize: "2rem",
  message: "Sorry, you do not have permission to access this page",
  messagesize: "1rem",
  homelink: "/",
  buttonbgcolor: "#000000",
  buttoncolor: "#ffffff",
  buttonmessage: "Go back Home",
  buttonsize: "1rem"
}

Forbidden403.propTypes = {
  bgcolor: PropTypes.string,
  color: PropTypes.string,
  scaleonhover: PropTypes.bool,
  codesize: PropTypes.string,
  title: PropTypes.string,
  titlesize: PropTypes.string,
  message: PropTypes.string,
  messagesize: PropTypes.string,
  homelink: PropTypes.string,
  buttonbgcolor: PropTypes.string,
  buttoncolor: PropTypes.string,
  buttonmessage: PropTypes.string,
  buttonsize: PropTypes.string
}



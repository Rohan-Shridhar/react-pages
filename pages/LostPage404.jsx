import "./LostPage404.css";
import PropTypes from "prop-types";
export default function LostPage404({bgcolor, color,scaleonhover, codesize, title, titlesize, message, messagesize, homelink, buttonbgcolor, buttoncolor, buttonmessage, buttonsize}) {
  const bgColor = bgcolor || LostPage404.defaultProps.bgcolor;
  const textColor = color || LostPage404.defaultProps.color;
  const scaleOnHover = scaleonhover || LostPage404.defaultProps.scaleonhover;
  const codeSize = codesize || LostPage404.defaultProps.codesize;
  const heading = title || LostPage404.defaultProps.title;
  const titleSize = titlesize || LostPage404.defaultProps.titlesize;
  const messageContent = message || LostPage404.defaultProps.message;
  const messageSize = messagesize || LostPage404.defaultProps.messagesize;
  const homeUrl = homelink || LostPage404.defaultProps.homelink;
  const buttonBgColor = buttonbgcolor || LostPage404.defaultProps.buttonbgcolor;
  const buttonColor = buttoncolor || LostPage404.defaultProps.buttoncolor;
  const buttonMessage = buttonmessage || LostPage404.defaultProps.buttonmessage;
  const buttonSize = buttonsize || LostPage404.defaultProps.buttonsize;

  return (
    <div className={scaleOnHover?"lost-page-animation":"lost-page"} style={{color: textColor, backgroundColor: bgColor}}>      
        <h1 style={{fontSize: codeSize}}>404</h1>
        <h2 style={{fontSize: titleSize}}>{heading}</h2>
        <p style={{fontSize: messageSize}}>{messageContent}</p>
        <button href={homeUrl} style={{backgroundColor: buttonBgColor, color: buttonColor, fontSize: buttonSize}}>{buttonMessage}</button>
    </div>
  );
}

LostPage404.defaultProps = {
  bgcolor: "#ffffff",
  color: "#000000",
  scaleonhover: false,
  codesize: "4rem",
  title: "Page Not Found",
  titlesize: "2rem",
  message: "Sorry, the page you are looking for does not exists",
  messagesize: "1rem",
  homelink: "/",
  buttonbgcolor: "#000000",
  buttoncolor: "#ffffff",
  buttonmessage: "Go back Home",
  buttonsize: "1rem"
}

LostPage404.propTypes = {
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



import construction from "./assets/construction.png";
import construct from "./assets/construct.gif";
function App() {
  return (
    <>
      <div className="Container">
        <div></div>
        <div>
          <h1>Site Under Construction</h1>
          <img src={construction} alt="Under Construction" className="construction-gif" loading="eager" style={{ aspectRatio: '1 / 1' }} />
          <h1>We are creating something cool ⚙️</h1>
        </div>
        <div></div>
      </div>
    </>
  );
}
export default App;

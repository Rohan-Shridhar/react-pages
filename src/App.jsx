import { useState } from "react";

function App() {
  const [isAnnoyed, setIsAnnoyed] = useState(false);

  return (
    <div className="container">
      {/* Developer Desk Scene */}
      <div className="scene">
        {/* Human Figure */}
        <div
          className={`human ${isAnnoyed ? "annoyed" : ""}`}
          onMouseEnter={() => setIsAnnoyed(true)}
          onMouseLeave={() => setIsAnnoyed(false)}
        >
          <div className="head">
            <div className="face">
              <div className="eyebrow eyebrow-left"></div>
              <div className="eyebrow eyebrow-right"></div>
              <div className="eye eye-left"></div>
              <div className="eye eye-right"></div>
              <div className="mouth"></div>
            </div>
          </div>
          <div className="torso"></div>
          <div className="arm arm-left"></div>
          <div className="arm arm-right"></div>
          <div className="leg leg-left"></div>
          <div className="leg leg-right"></div>
        </div>

        {/* Desk */}
        <div className="desk">
          <div className="desk-top"></div>
          <div className="desk-leg desk-leg-left"></div>
          <div className="desk-leg desk-leg-right"></div>
        </div>

        {/* Laptop on desk */}
        <div className="laptop">
          <div className="laptop-screen">
            <div className="screen-content"></div>
            <div className="dnd-sticker">DND</div>
          </div>
          <div className="laptop-base"></div>
        </div>

        {/* Coffee Mug */}
        <div className="mug">
          <div className="steam">
            <div className="steam-wisp"></div>
            <div className="steam-wisp"></div>
            <div className="steam-wisp"></div>
          </div>
          <div className="mug-body"></div>
          <div className="mug-handle"></div>
        </div>
      </div>

      {/* Text Content */}
      <div className="icon">🔧</div>
      <h1 className="heading">Website under maintenance</h1>
      <p className="subtext">
        We're working hard to improve your experience. Please check back soon.
      </p>
      <p className="subtext tagline">Fixing bugs… please don't disturb.</p>
    </div>
  );
}

export default App;

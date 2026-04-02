import { useState } from "react";
import mobileImg from "./assets/co-worker.png";

function App() {

  return (
    <div className="container">
      {/* Text Content */}
      <div className="icon">🔧</div>
      <h1 className="heading">Website under maintenance</h1>
      <p className="subtext">
        We're working hard to improve your experience. Please check back soon.
      </p>
      <p className="subtext tagline">Fixing bugs… please don't disturb.</p>
      {/* Developer Desk Scene */}
      <img src={mobileImg} alt="Construction" className="mobile-scene" />
      
      <div className="scene">


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
          </div>
          <div className="laptop-base"></div>
        </div>

        {/* DnD Sign Hanging off table */}
        <div className="dnd-sign">
          <div className="dnd-hole"></div>
          <span>Do Not</span>
          <span>Disturb</span>
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

        {/* Flying Bugs */}
        <div className="bug bug-1"></div>
        <div className="bug bug-2"></div>
        <div className="bug bug-3"></div>
        <div className="bug bug-4"></div>
      </div>
    </div>
  );
}

export default App;

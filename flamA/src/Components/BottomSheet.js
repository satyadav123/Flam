import { useState } from "react";
import "./BottomSheet.css";

export default function BottomSheet() {
  const [set, update] = useState(true);

  const handleBox = () => {
    update(!set);
  };

  return (
    <div >
      <div className={`mobile ${set ? "open" : ""}`} onClick={handleBox}>
        <div className="top-camera"></div>
        <div className={`inner-box ${set ? "open" : ""}`}>
          <div className="hr-line"></div>
          <div className="Content">
            <h1>React</h1>
            <h1>Spring</h1>
            <h1>Bottom</h1>
            <h1>For</h1>
            <h1>FlamSpark</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

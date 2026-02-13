import React from "react";
import "./GitStatus.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const GitStatus = () => {
  return (
    <div id="git" className="gitstatus">
      <div className="gitstatus-tital">
        <h1>Git Status</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="gitstatus-container">
        <div className="img1">
          <img
            src="https://camo.githubusercontent.com/259d271748c08cd337667884e0bd76b7c258c6a81b5f125c8e8ae75129dcb5a8/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d53617479616d2d31392d313926"
            alt=""
          />
        </div>

        <div className="img2">
          <img
            src="https://camo.githubusercontent.com/bf057741f44adb005a29b62917e01e2af8c633e95b959e89c495702ab35e0736/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d53617479616d2d31392d31392673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"
            alt=""
          />
        </div>

        <div className="img3">
          <img
            src="https://camo.githubusercontent.com/9d12b6009b5069ce8f27d3fa37f69dfb4442dbc20844fa755bd4da91fbbdb37b/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d53617479616d2d31392d31392673686f775f69636f6e733d74727565266c6f63616c653d656e"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default GitStatus;

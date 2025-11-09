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
        <div>
          <img
            src="https://camo.githubusercontent.com/b2a22b27f1bcb766baff14d3a5ae001f48cd284d85ab506f6354759c97b054c3/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d73617479616d31393731312673686f775f69636f6e733d74727565266c6f63616c653d656e"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://camo.githubusercontent.com/49f8ef08ec1b2635d7af6608dda50dc27c26979aa6a5bc8bce45350bd2f668d6/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d73617479616d31393731312673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://camo.githubusercontent.com/8a2016a2859df5839be7f09eb6437b5ba13e538f6e994d94bdf5022560955bea/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d73617479616d313937313126"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default GitStatus;

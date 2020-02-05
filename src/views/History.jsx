import React from "react";
import { connect } from "react-redux";

import HealthCard from "../components/dashboard/HealthCard";
import Navbar from "../components/layout/Navbar";
import TitleBar from "../components/layout/TitleBar";
import HistoryList from "../components/history/HistoryList";

function History(props) {
  return (
    <div className="history">
      <Navbar />
      <div className="history-content container">
        <TitleBar {...props} title="History" />

        <HealthCard {...props} />
        <HistoryList {...props} />
      </div>
    </div>
  );
}

export default connect(state => {
  return {
    
  };
})(History);
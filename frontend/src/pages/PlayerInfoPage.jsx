import React from "react";
import styles from "./PlayerInfoPage.module.css";
import PlayerInfoComponent from "../components/PlayerInfoComponent";

function PlayerInfoPage() {
  return (
    <div className={styles.playerInfoPage}>
      <PlayerInfoComponent />
    </div>
  );
}

export default PlayerInfoPage;

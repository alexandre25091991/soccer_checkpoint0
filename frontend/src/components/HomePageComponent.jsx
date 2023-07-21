// HomePageComponent.js
import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaFutbol } from "react-icons/fa";
import "./HomePageComponent.css";
import logoImage from "../assets/logook.png";

function HomePageComponent() {
  const [players, setPlayers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  useEffect(() => {
    const fetchAllPlayers = async () => {
      try {
        const response = await axios.get("http://localhost:5032/player");
        if (response.data) {
          setPlayers(response.data[0]);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchAllPlayers();
  }, []);

  useEffect(() => {
    setFilteredPlayers(
      players.filter(
        (player) =>
          player.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
          player.last_name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [players, searchValue]);

  return (
    <div className="homePageContainer">
      <div className="logoContainer">
        <img src={logoImage} alt="Logo" className="logoImage" />
        <h1 className="titleOfSite">Wild Code Soccer</h1>
        <img src={logoImage} alt="Logo" className="logoImage" />
      </div>
      <div className="searchBarreContainer">
        <input
          type="text"
          placeholder="Rechercher par nom de joueur..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="PlayersListContainer">
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Information</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlayers.map((player) => (
              <tr key={player.id}>
                <td>
                  <img
                    src={player.image}
                    alt=""
                    className="playerImageHomeContainer"
                  />
                </td>
                <td>{player.first_name}</td>
                <td>{player.last_name}</td>
                <td>
                  <Link to={`/player/infos/${player.id}`}>
                    <FaFutbol className="soccerBallContainer" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomePageComponent;

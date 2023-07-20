import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
// eslint-disable-next-line import/no-duplicates
import { useParams } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { AiOutlineDelete } from "react-icons/ai";
// eslint-disable-next-line import/no-extraneous-dependencies
import { MdEdit } from "react-icons/md";
// eslint-disable-next-line import/no-extraneous-dependencies
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
// eslint-disable-next-line import/no-duplicates
import { useNavigate } from "react-router-dom"; // Importez useNavigate au lieu de useHistory
import "./PlayerInfoComponent.css";

function PlayerInfoComponent() {
  const [player, setPlayer] = useState({});
  const [teams, setTeams] = useState([]);
  const [teamDropdownDisabled, setTeamDropdownDisabled] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate(); // Utilisez useNavigate à la place de useHistory

  useEffect(() => {
    const fetchPlayerById = async () => {
      try {
        const response = await axios.get(`http://localhost:5032/player/${id}`);
        if (response.data) {
          setPlayer(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    const fetchTeams = async () => {
      try {
        const response = await axios.get("http://localhost:5032/teams");
        if (response.data) {
          setTeams(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchPlayerById();
    fetchTeams();
  }, [id]);

  useEffect(() => {
    if (player.team_id) {
      // Désactive le menu déroulant si le joueur a une équipe
      setTeamDropdownDisabled(true);
    }
  }, [player]);

  const handleChange = (e) => {
    // eslint-disable-next-line radix
    const selectedTeamId = parseInt(e.target.value);
    setPlayer({ ...player, team_id: selectedTeamId });
  };

  const handleDeletePlayer = async () => {
    try {
      await axios.delete(`http://localhost:5032/player/${id}`);
      // Une fois que la suppression est effectuée, redirigez vers la page HomePage
      navigate("/players");
    } catch (err) {
      console.error(err);
    }
  };

  if (!player.id) {
    return <div>Aucune information de joueur trouvée.</div>;
  }

  return (
    <div className="InfoContainer">
      <div className="infoAndPhotoPlayerContainer">
        <div className="PlayersContainer">
          <table>
            <thead>
              <tr className="PlayersListHeaderRow">
                <th>Prénom</th>
                <th>Nom</th>
                <th>Nationalité</th>
                <th>Age</th>
                <th>Position</th>
                <th>Equipe</th>
                <th>Photo</th>
                <th>Supprimer</th>
                <th>Modifier</th>
                <th>Valider</th>
              </tr>
            </thead>
            <tbody>
              <tr key={player.id}>
                <td>{player.first_name}</td>
                <td>{player.last_name}</td>
                <td>{player.nationality}</td>
                <td>{player.age}</td>
                <td>{player.position}</td>
                <td>
                  {teamDropdownDisabled ? (
                    <input
                      type="text"
                      name="team_id"
                      value={player.team_id}
                      disabled
                    />
                  ) : (
                    <select
                      className="multipleChoicesMenu"
                      name="team_id"
                      value={player.team_id}
                      onChange={handleChange}
                    >
                      <option
                        value=""
                        aria-label="Sélectionner une équipe"
                        disabled
                        hidden
                      />
                      {teams.map((team) => (
                        <option key={team.id} value={team.id}>
                          {team.id}
                        </option>
                      ))}
                    </select>
                  )}
                </td>
                <td>
                  <img src={player.image} alt="" className="playerImage" />
                </td>
                <td>
                  <AiOutlineDelete
                    className="icon"
                    onClick={handleDeletePlayer}
                  />
                </td>
                <td>
                  <MdEdit className="icon" />
                </td>
                <td>
                  <IoIosCheckmarkCircleOutline className="icon" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PlayerInfoComponent;

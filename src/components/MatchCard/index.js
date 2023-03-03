import './index.css'

const MatchCard = props => {
  const {details} = props
  const updatedDetails = {
    competingTeam: details.competing_team,
    competingTeamLogo: details.competing_team_logo,
    result: details.result,
    matchStatus: details.match_status,
  }
  const {competingTeam, competingTeamLogo, result, matchStatus} = updatedDetails
  return (
    <li className="card">
      <img
        className="image"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="heading">{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard

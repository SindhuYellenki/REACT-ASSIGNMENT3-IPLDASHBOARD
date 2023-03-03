import './index.css'

const LatestMatch = props => {
  const {details} = props
  const updatedDetails = {
    competingTeam: details.competing_team,
    competingTeamLogo: details.competing_team_logo,
    date: details.date,
    firstInnings: details.first_innings,
    id: details.id,
    venue: details.venue,
    secondInnings: details.second_innings,
    matchStatus: details.match_status,
    umpires: details.umpires,
    result: details.result,
    manOfTheMatch: details.man_of_the_match,
  }
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    venue,
    secondInnings,
    matchStatus,
    umpires,
    result,
    manOfTheMatch,
  } = updatedDetails

  return (
    <div className="latestMatchDetails">
      <div className="left">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div className="center">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="image"
        />
      </div>
      <div className="right">
        <h1>First Innings</h1>
        <p>{firstInnings}</p>
        <h1>Second Innings</h1>
        <p>{secondInnings}</p>
        <h1>Man Of The Match</h1>
        <p>{manOfTheMatch}</p>
        <h1>Umpires</h1>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch

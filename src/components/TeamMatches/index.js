import {Component} from 'react'
import Loader from 'react-loader-spinner'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {isFetching: true, teamDetails: {}}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    console.log(updatedData)
    this.setState({isFetching: false, teamDetails: updatedData})
  }

  renderData = () => {
    const {teamDetails} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamDetails
    console.log(teamBannerUrl)
    console.log(recentMatches)
    return (
      <div className="textContainer">
        <img className="banner" src={teamBannerUrl} alt="team banner" />
        <div className="latestMatch">
          <h1 className="latestMatch-text">Latest Matches</h1>
          <LatestMatch details={latestMatchDetails} />
          <ul className="listContainer">
            {recentMatches.map(each => (
              <MatchCard details={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  getLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isFetching, teamDetails} = this.state
    return (
      <div className="details-bg-container">
        {isFetching && this.getLoader()}
        {!isFetching && this.renderData()}
      </div>
    )
  }
}

export default TeamMatches

import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {isFetching: true, teamList: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({isFetching: false, teamList: updatedData})
  }

  getLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isFetching, teamList} = this.state
    console.log(isFetching, teamList)
    return (
      <Link to="/">
        <div className="bg-container">
          <div className="heading-container">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
              alt="ipl logo"
            />
            <h1 className="heading">IPL Dashboard</h1>
          </div>
          {isFetching && this.getLoader()}
          {!isFetching && (
            <ul className="listContainer">
              {teamList.map(each => (
                <TeamCard details={each} key={each.id} />
              ))}
            </ul>
          )}
        </div>
      </Link>
    )
  }
}

export default Home

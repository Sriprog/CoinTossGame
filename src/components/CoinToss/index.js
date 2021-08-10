import {Component} from 'react'
import './index.css'

const headImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    resImg: headImgUrl,
    headCount: 0,
    tailCount: 0,
  }

  onTossGame = () => {
    const result = Math.floor(Math.random() * 2)
    if (result === 0) {
      this.setState({resImg: headImgUrl})
      this.setState(prevState => ({headCount: prevState.headCount + 1}))
    } else {
      this.setState({resImg: tailImgUrl})
      this.setState(prevState => ({tailCount: prevState.tailCount + 1}))
    }
  }

  getTotalPlayed = () => {
    const {headCount, tailCount} = this.state
    const totalCount = headCount + tailCount
    return totalCount
  }

  render() {
    const {resImg, headCount, tailCount} = this.state
    const TotalCount = this.getTotalPlayed()
    return (
      <div className="app-con">
        <div className="game-con">
          <h1 className="game-name">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img className="img" alt="toss result" src={resImg} />
          <button className="toss-coin" type="button" onClick={this.onTossGame}>
            Toss Coin
          </button>
          <div className="results-con">
            <p className="result">Total:{TotalCount}</p>
            <p className="result">Heads:{headCount}</p>
            <p className="result">Tails:{tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

//import awards from './awards.json';

function winnerBlock (props) {
  //let listed = awards[props.wid - 1];
  return (
    <div className="winnerBlock">
      <div className="winnerDetails">
      </div>
      <div className="winnerImage">
        {/* <img src={ 'https://assetwise.co.th/photocontest/' + awards[props.wid - 1].url } alt=""/> */}
      </div>
    </div>
  )
}

export default winnerBlock;
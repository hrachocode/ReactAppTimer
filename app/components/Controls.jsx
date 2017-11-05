var React = require('React');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChanged: React.PropTypes.func.isRequired
  },
  onStatusChanged: function(newStatus) {
    return () => {
      this.props.onStatusChanged(newStatus);
    };
  },
  render: function(){
    var {countdownStatus} = this.props;

    var renderStartButton = () => {
      if(countdownStatus === "started"){
        return <button onClick={this.onStatusChanged("paused")} className='button secondary'>Pause</button>
      }else{
        return <button onClick={this.onStatusChanged("started")} className="button primary">Start</button>
      }
    };
    return(
      <div className='controls'>
        {renderStartButton()}
        <button onClick={this.onStatusChanged("stopped")} className='button alert hollow'>Clear</button>
      </div>)
  }
});

module.exports = Controls;
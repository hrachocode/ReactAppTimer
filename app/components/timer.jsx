var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },
  componentDidUpdate: function(prevProps, prevState) {
    if(this.state.timerStatus !== prevState.timerStatus){
      switch (this.state.timerStatus){
        case "started":
          this.startTimer();
          break;
        case "stopped":
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      }
    }
  },
  componenetWillUnmount: function() {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.count +1;
      this.setState({
        count: newCount >= 0 ? newCount: 0
      });

      if(newCount === 0){
        this.setState({timerStatus: "stopped"})
      }
    }, 1000);
  },
  handleStatusChange: function (newTimerStatus) {
    this.setState({
      timerStatus: newTimerStatus
    })
  },
  render: function () {
    var {count, timerStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChanged={this.handleStatusChange}/>
      </div>
    )
  }
});

module.exports = timer;
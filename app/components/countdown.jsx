var React = require('react');
var Clock = require('Clock');
var countdown = React.createClass({
  
  render: function(){
    return(
      <div>
        <Clock formatSecond={61} />
      </div>
    )
  }
});

module.exports = countdown;
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('Should exist', () => {
    expect(Timer).toExist();
  });

  it('Should increment seconds when timer Starts', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />);
    
    timer.handleStatusChange('started');
    expect(timer.state.count).toBe(0);

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe("started");
      expect(timer.state.count).toBe(1);
      done();
    }, 1001);
  });

  it('Should Pause seconds when timer Paused', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />);
    
    timer.setState({count: 10});
    timer.handleStatusChange('paused');
    expect(timer.state.count).toBe(10);

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe("paused");
      expect(timer.state.count).toBe(10);
      done();
    }, 1001);
  });

  it('Should Clear seconds when timer Stopped', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />);
    
    timer.setState({count: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('stopped');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe("stopped");
      expect(timer.state.count).toBe(0);
      done();
    }, 1001);
  });
});
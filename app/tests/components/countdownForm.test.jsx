var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  
  it("should exist", () => {
    expect(CountdownForm).toExist();
  });

  it("Should call onsetCountdown if valid seconds entered", () => {
    var spy = expect.createSpy();       
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    var el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit(el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);  
  });

  it("Should call not onsetCountdown if invalid seconds entered", () => {
  var spy = expect.createSpy();       
  var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
  var el = $(ReactDOM.findDOMNode(countdownForm));

  countdownForm.refs.seconds.value = 'abc';
  TestUtils.Simulate.submit(el.find('form')[0]);

  expect(spy).toNotHaveBeenCalled();  
  });
});
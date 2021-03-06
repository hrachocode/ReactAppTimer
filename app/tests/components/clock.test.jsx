var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
  it('Should expect that clock Exists', () => {
    expect(Clock).toExist();
  });

  describe("render", () => {
    it("shoud render to DOM without Production errors", () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={61} />);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find(".clock-text").text();

      expect(actualText).toBe("01:01");
    });
  });

  describe('formatSeconds', () => {
    it('Should format seconds', () =>{
      var clock = TestUtils.renderIntoDocument(<Clock />);
      var seconds = 615;
      var expected = "10:15";
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('Should Expect when min/sec are less than 10', () => {
      var clock = TestUtils.renderIntoDocument(<Clock />);
      var seconds = 61;
      var expected = "01:01";
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });



});


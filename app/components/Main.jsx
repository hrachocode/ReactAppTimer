var React = require('react');
var Nav  = require('Nav');

var Main = (props) => {
		return(
			<div>
				<div>
					<div>
					<Nav />
					<h4>React Timer Application </h4>
						{props.children}
					</div>
				</div>
			</div>
		)
}

module.exports = Main;
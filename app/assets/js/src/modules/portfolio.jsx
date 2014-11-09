var React = require('react');

var Projects = require('./projects');

var Portfolio = React.createClass({
    render: function() {
        return (
            <div>
                <h2>{this.props.sectionName}</h2>
                <ul className="portfolioList"></ul>

                <h3>Other projects</h3>
                <Projects />
            </div>
        );
    }
});

React.render(
    <Portfolio sectionName="Portfolio" />,
    document.getElementById('portfolio')
);
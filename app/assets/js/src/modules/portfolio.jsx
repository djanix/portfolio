var React = require('react');

var Portfolio = React.createClass({
    render: function() {
        return <h2>{this.props.sectionName}</h2>;
    }
});

React.render(
    <Portfolio sectionName="Portfolio" />,
    document.getElementById('portfolio')
);
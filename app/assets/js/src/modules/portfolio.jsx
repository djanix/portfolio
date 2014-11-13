var React = require('react');

var Projects = require('./projects');
var PortfolioItem = require('./portfolioItem');

var Portfolio = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        this.loadCommentsFromServer();
    },
    loadCommentsFromServer: function() {
        $.ajax({
            url: this.props.jsonUrl,
            dataType: 'json',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function() {
        var listPortfolio = this.state.data.map(function(item, i) {
            return (
                <PortfolioItem item={item} />
            );
        });

        return (
            <div>
                <h2>{this.props.sectionName}</h2>

                <ul className="portfolioList">
                    {listPortfolio}
                </ul>

                <h3>Other projects</h3>
                <Projects />
            </div>
        );
    }
});

React.render(
    <Portfolio sectionName="Portfolio" jsonUrl="/data/work.json" />,
    document.getElementById('portfolio')
);
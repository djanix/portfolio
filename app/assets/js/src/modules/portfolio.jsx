var React = require('react');

var Projects = require('./projects');
var PortfolioItem = require('./portfolioItem');

var Portfolio = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        this.loadData();
    },
    loadData: function() {
        $.ajax({
            url: this.props.jsonUrl,
            dataType: 'json',
            success: function(data) {
                this.setState({data: data});
                this.animate();
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    animate: function () {
        var $container = $(this.refs.container.getDOMNode());

        $container.find('li').waypoint(function () {
            var $item = $(this);
            var itemsPerRow = 3;

            //if (window.deviceType == 'tablet') {
            //    itemsPerRow = 2;
            //} else if (window.deviceType == 'mobile') {
            //    itemsPerRow = 1;
            //}

            var position = $item.index() % itemsPerRow;
            var delay = Math.round((1/3 * position) * 500);

            setTimeout(function () {
                $item.addClass('is-visible');
            }, delay);
        }, {
            offset: '100%',
            triggerOnce: true
        });
    },
    render: function() {
        var listPortfolio = this.state.data.map(function(item, i) {
            return (
                <PortfolioItem item={item} />
            );
        });

        return (
            <div ref="container">
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
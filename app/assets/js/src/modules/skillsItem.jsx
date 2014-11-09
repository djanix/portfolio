var React = require('react');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            currentPercent: 0
        }
    },
    componentDidMount: function(){
        this.animateSkillPercent();
    },
    animateSkillPercent: function () {
        var self = this;
        var $element = $(this.getDOMNode());

        $element.waypoint(function() {
            $(this).addClass('is-active');
            self.calculateSkillPercent();
        }, {triggerOnce: true, offset: '80%'});
    },
    calculateSkillPercent: function () {
        var self = this;
        var intervalCalls = 1;
        var animateVal = setInterval(function() {
            intervalCalls ++;

            var newValue = Math.round(intervalCalls * (self.props.percent / 100));
            self.setState({currentPercent: newValue});

            if (self.state.currentPercent >= self.props.percent) {
                clearInterval(animateVal);
            }
        }, 20);
    },
    render: function() {
        var divStyle = {
            width: this.props.percent + '%'
        };

        return (
            <li>
                <div className="detail">
                    <span>{this.props.name}</span>
                </div>
                <div className="percent clearfix" style={divStyle}>
                    <span className="right">{this.state.currentPercent}%</span>
                </div>
            </li>
        );
    }
});
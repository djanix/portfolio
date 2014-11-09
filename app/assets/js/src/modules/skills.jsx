var React = require('react');
require('waypoints');

var Skills = React.createClass({
    getInitialState: function(){
        return {
            skillset: [
                {
                    name: 'html / css',
                    percent: 98
                }, {
                    name: 'javascript',
                    percent: 90
                }, {
                    name: 'photoshop',
                    percent: 75
                },
                {
                    name: 'php',
                    percent: 45
                }
            ],
            interests: [
                'NodeJS',
                'Angular',
                'React',
                'Grunt / Gulp',
                'Browserify',
                'Git',
                'Arduino'
            ]
        }
    },
    render: function() {
        var listSkillset = this.state.skillset.map(function(item, i) {
            return (
                <SkillsItem  name={item.name} percent={item.percent} />
            );
        });

        var listInterests = this.state.interests.map(function(item) {
            return (
                <SkillsInterests name={item} />
            );
        });

        return (
            <div className="wrapper">
                <div className="skillset">
                    <h2>{this.props.sectionName}</h2>
                    <ul>{listSkillset}</ul>
                </div>
                <div className="interests">
                    <h3>Interests</h3>
                    <ul>{listInterests}</ul>
                </div>
            </div>
        );
    }
});

var SkillsItem = React.createClass({
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
                <div className="detail clearfix">
                    <span className="left">{this.props.name}</span>
                    <span className="right">{this.state.currentPercent}%</span>
                </div>
                <div className="percent" style={divStyle}></div>
            </li>
        );
    }
});

var SkillsInterests = React.createClass({
    render: function() {
        return (
            <li>{this.props.name}</li>
        );
    }
});

React.render(
    <Skills sectionName="Skills" />,
    document.getElementById('skills')
);
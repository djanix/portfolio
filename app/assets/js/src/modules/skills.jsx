var React = require('react');

var Skills = React.createClass({
    getInitialState: function(){
        return {
            skillset: [
                {
                    name: 'html / css',
                    currentPercent: 0,
                    percent: 98
                }, {
                    name: 'javascript',
                    currentPercent: 0,
                    percent: 90
                }, {
                    name: 'photoshop',
                    currentPercent: 0,
                    percent: 75
                },
                {
                    name: 'php',
                    currentPercent: 0,
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
        var listSkillset = this.state.skillset.map(function(item) {
            return (
                <li>
                    <div className="detail clearfix">
                        <span className="left">{item.name}</span>
                        <span className="right">{item.currentPercent}%</span>
                    </div>
                    <div className="percent" data-percent={item.percent}></div>
                </li>
            );
        });

        var listInterests = this.state.interests.map(function(item) {
            return (
                <li>{item}</li>
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

React.render(
    <Skills sectionName="Skills" />,
    document.getElementById('skills')
);
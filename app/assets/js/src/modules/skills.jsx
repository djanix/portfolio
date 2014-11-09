var React = require('react');

require('waypoints');

var SkillsInterests = require('./skillsInterests');
var SkillsItem = require('./skillsItem');

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

React.render(
    <Skills sectionName="Skills" />,
    document.getElementById('skills')
);
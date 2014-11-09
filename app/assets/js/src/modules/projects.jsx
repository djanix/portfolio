var React = require('react');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            projects: [
                {
                    name: 'Base project boilerplate',
                    link: 'https://github.com/djanix/base-structure'
                }, {
                    name: 'jQuery switcher',
                    link: 'http://djanix.github.io/jquery.switcher/'
                }, {
                    name: 'Leap motion basic experiment',
                    link: './experiments/leap_motion/index.html'
                }
            ]
        }
    },
    render: function() {
        var listProjects = this.state.projects.map(function(item, i) {
            return (
                <li>
                    <a href={item.link}>
                        {item.name} &#10140;
                    </a>
                </li>
            );
        });

        return (<ul className="projectsList">{listProjects}</ul>);
    }
});
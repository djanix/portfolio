var React = require('react');
var smoothScroll = require('smooth-scroll');

var Menu = React.createClass({
    navigation: function(data) {
        var self = this;
        $.smoothScroll({
            scrollTarget: data.href,
            easing: 'easeInOutExpo',
            speed: 1000,
            afterScroll: function () {
                $(self.getDOMNode()).find('.active').removeClass('active');
                $(self.getDOMNode()).find('[href="' + data.href + '"]').addClass('active');
            }
        });
    },
    render: function() {
        return (
            <nav>
                <a className="aboutMe active" href="#aboutMe" onClick={this.navigation.bind(null, {href:"#aboutMe"})}>
                    <span className="sprite icon_about"></span>
                    <span className="text">about me</span>
                </a>

                <a className="skills" href="#skills" onClick={this.navigation.bind(null, {href:"#skills"})}>
                    <span className="sprite icon_skills"></span>
                    <span className="text">skills</span>
                </a>

                <a className="portfolio" href="#portfolio" onClick={this.navigation.bind(null, {href:"#portfolio"})}>
                    <span className="sprite icon_portfolio"></span>
                    <span className="text">portfolio</span>
                </a>
            </nav>
        );
    }
});

React.render(
    <Menu />,
    $('header').find('.right')[0]
);
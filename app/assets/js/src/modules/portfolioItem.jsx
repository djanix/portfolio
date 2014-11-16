var React = require('react');

module.exports = React.createClass({
    render: function() {
        var imgPath = "/assets/img/portfolio/" + this.props.item.images.thumb;

        //if (window.deviceType == 'tablet' || window.deviceType == 'mobile') {
        //    activeClass = 'is-active';
        //}

        return (
            <li>
                <a href={this.props.item.link}>
                    <img src={imgPath} alt="" height="200" width="350" />
                </a>

                <div className="info">
                    <p>{this.props.item.title}</p>
                    <p className="link">
                        Link: <a href={this.props.item.link}>{this.props.item.link}</a>
                    </p>
                    <p>Date: {this.props.item.date}</p>
                    <p>While working at: <a href={this.props.item.company.link}>{this.props.item.company.name}</a></p>
                </div>
            </li>
        );
    }
});
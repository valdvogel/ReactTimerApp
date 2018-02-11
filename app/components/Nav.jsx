var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function(){
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            React Timer App
                        </li>
                        <li className="menu-text">
                            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
                        </li>
                        <li className="menu-text">
                            <IndexLink to="/" activeClassName="active-link">Countdown</IndexLink>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            Created by <a href="http://ithub.com.br/valdvogel" target="_blank">José Valdvogel</a>
                        </li>
                    </ul>
                </div>
                
            </div>
            
            
        );
    }

});

module.exports = Nav;
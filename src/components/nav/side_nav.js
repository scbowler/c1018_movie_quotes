import React, { Component } from 'react';

class SideNav extends Component {
    componentDidMount(){
        M.Sidenav.init(this.navRef);
    }

    render(){
        return (
            <ul ref={(element) => {this.navRef = element}} className="sidenav" id="side-nav">
                {this.props.links}
            </ul>
        );
    }
}

export default SideNav;

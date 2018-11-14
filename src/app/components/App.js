import React, {Component} from "react";

const styles = {
    transition: 'all 1s ease-out'
};

export class App extends Component {

    state = {
        opacity: 1,
        scale: 1
    };

    onHide = () => {
        this.setState({
            opacity: 0
        });
    }

    onScale = () => {
        this.setState({
            scale: this.state.scale > 1 ? 1 : 1.3
        });
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper orange darken-2">
                        <ul className="left">
                            <li className="active"><a href="#">TRANSITIONS</a></li>
                            <li><a href="#">ANIMATIONS</a></li>
                            <li><a href="#">REACTJS + CSS TRANSITIONS</a></li>
                            <li><a href="#">REACTJS + CSS ANIMATIONS</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="s12">

                        </div>
                    </div>

                    <div className="row">
                        <div className="s8 offset-s2 center-align">
                            <div className="card deep-purple z-depth-2"
                                style={{
                                     ...styles, 
                                     opacity: this.state.opacity, 
                                     transform: `scale( ${this.state.scale} )`
                                     }}
                                >
                                <div className="card-content white-text">
                                    <span className="card-title">Animaciones con React js</span>
                                    <p>CSS y ReactJS animaciones ... &lt;3</p>
                                </div>
                                <div className="card-action">
                                    <a onClick={this.onHide} style={{cursor: 'pointer'}}>HIDE</a>
                                    <a onClick={this.onScale} style={{cursor: 'pointer'}}>SCALE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

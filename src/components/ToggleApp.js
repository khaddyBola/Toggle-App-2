import React from "react";

class ToggleApp extends React.Component {
    constructor(props) {
        super(props)

        this.checkBtn = this.checkBtn.bind(this)
        this.state = {
            visibility: false
        }
    }

    checkBtn() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
  
    render() {
        return (
        <div>
            <div className="container">
                <h1 className="toggle-header">Hello world! 👩‍💻😇</h1>
                <button className="btnBig" onClick={this.checkBtn}>{this.state.visibility ? 'Hide detail' : 'Show detail'}</button>
                {this.state.visibility ? <p>Here are your details....</p> : null}
            </div>
            
        </div>)
    }
}
export default ToggleApp;
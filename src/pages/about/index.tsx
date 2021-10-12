import React from "react";

import "./styles.css";


const FADE_DURATION = 500;

class Application extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      fadeTransition: null,
      fadeState: "fade-in"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Create a timer that runs after quote
    // fades out
    const timeout = setTimeout(() => {
      this.setState({
        fadeTransition: null,
        fadeState: "fade-in"
      });
    }, FADE_DURATION);

    // Stop any existing transition
    clearTimeout(this.state.fadeTransition);

    // Update state to perform the fade out from
    // current quote
    this.setState({
      fadeState: "fade-out",
      fadeTransition: timeout
    });
  }

  render() {
    return (
		<>
      <div
        className={`fade-wrapper ${this.state.fadeState}`}
        style={{ transitionDuration: `${FADE_DURATION}ms` }}
      >
        <h1>Hello</h1>
		
      </div>
	  <button
          onClick={this.handleClick}
        >
          New Quote
        </button>
	  </>
    );
  }
}
export default Application;

// ReactDOM.render(<Application />, document.getElementById("root"));

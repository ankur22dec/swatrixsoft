import React from "react";
import ImageView from "../../../../components/ImageView";
import './style.scss';

const FADE_DURATION = 750;

let timeoutLog:any = null;
let AUTO_CHANGE = 10000;

class AglieWay extends React.Component<any, any> {
	constructor(props:any) {
		super(props);
		this.state = {
			activeIndex: 0,
			fadeTransition: null,
			fadeState: "fade-in"
		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount(){
		if(window.innerWidth > 767){
			timeoutLog = setTimeout(() => {
				this.textUpdateInterval();
			}, AUTO_CHANGE);
		}
	}

	textUpdateInterval(reset: boolean = false) {
		const { solutions } = this.props;
		timeoutLog = setTimeout(() => {
			if(this.state.activeIndex === (solutions.length-1)) {
				this.handleClick(0);
			} else {
				this.handleClick(this.state.activeIndex + 1);
			}
			this.textUpdateInterval();
		}, AUTO_CHANGE);
	}

	handleClick(index: number, reset: boolean = false) {
		const { solutions } = this.props;
		if(reset) {
			clearTimeout(timeoutLog);
			timeoutLog = setTimeout(() => {
				if(this.state.activeIndex === (solutions.length-1)) {
					this.handleClick(0);
				} else {
					this.handleClick(this.state.activeIndex + 1);
				}
				this.textUpdateInterval();
			}, AUTO_CHANGE);
		}

		// Create a timer that runs after quote
		// fades out
		const timeout = setTimeout(() => {
			this.setState({
				fadeTransition: null,
				fadeState: "fade-in",
				activeIndex: index,
			});
		}, FADE_DURATION);

		// Stop any existing transition
		clearTimeout(this.state.fadeTransition);

		// Update state to perform the fade out from
		// current quote
		this.setState({
			...this.state,
			fadeState: "fade-out",
			fadeTransition: timeout
		});
	}

	render() {
		const { solutions } = this.props;
		
		return (
			<>
				<div className="container">
					<div className="solution-container">
						<div className="solution-pagins sr-from-bottom-4">
							<ul>
								{
									solutions.map((data: any, key: number) => {
										return (
											<li 
												key={key}
												onClick={() => this.handleClick(key, true)}
												className={key === this.state.activeIndex ? 'active': ''}
											>
												{data.title}
											</li>
										)
									})
								}
							</ul>
						</div>
						<div className="solution-images sr-from-bottom-5">
							<ul>
								<li 
									className={`active fade-wrapper ${this.state.fadeState}`}
									style={{ transitionDuration: `${FADE_DURATION}ms` }}
								>
									<ImageView src={solutions[this.state.activeIndex].image} alt={solutions[this.state.activeIndex].title} />
								</li>
							</ul>
						</div>
						<div className="solution-desc sr-from-bottom-6">
							<ul>
								<li className="active">
									<div
										className={`desc-div fade-wrapper ${this.state.fadeState}`}
										style={{ transitionDuration: `${FADE_DURATION}ms` }}
									>
										<h5>{solutions[this.state.activeIndex].title}</h5>
										<p>{solutions[this.state.activeIndex].description}</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default AglieWay;
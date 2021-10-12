import React from 'react';
import ImageView from '../../../components/ImageView';
import { Link } from 'react-router-dom';

function TechonologyTop(props: any) {
	function getActive(name: string) {
		return (name === props.id) ? 'tech-active' : '';
	}
    return (
        <div className={`tech-navigator ${props.className}`} id={props.id}>
            <ul>
                <li className={`mob-nav ${getActive('mobile-tech')}`}>
					<a href="#mobile-tech">
						<div></div>
					</a>
                </li>
                <li className={`web-nav ${getActive('web-tech')}`}>
					<a href="#web-tech">
						<div></div>
					</a>
                </li>
                <li  className={`front-nav ${getActive('front-tech')}`}>
					<a href="#front-tech">
						<div></div>
					</a>
                </li>
                <li className={`cloud-nav ${getActive('cloud-tech')}`}>
					<a href="#cloud-tech">
						<div></div>
					</a>
                </li>
                <li className={`uiux-nav ${getActive('uiux-tech')}`}>
					<a href="#uiux-tech">
						<div></div>
					</a>
                </li>
            </ul>
        </div>
    );
}

function TechonologyName(props: any) {
    return (
        <div className="col-md-4">
            <div className={`cmr-tech-xicon ${props.className}`}>
                <div className="spriteOne spt-mobile-tech"></div>
            </div>
            <div>
			{props.name === 'MOBILE' ? (
				 <h2 className="cmr-title sr-from-bottom-1">
					<b>{props.name}</b>
					<br />
					Technologies
				</h2>
			) : (
				<h3 className="cmr-title sr-from-bottom-1">
					<b>{props.name}</b>
					<br />
					Technologies
				</h3>
			)}
               
            </div>
        </div>
    )
}

function TechonoglyItem(props: any) {
	return (
		<div className="col sr-from-bottom-1 techstop-item">
			<Link to={props.link}>
			<ImageView src={props.image} alt="App" />
			<h5>{props.name}</h5>
			</Link>
		</div>
	)
}

function TechnologyList(props: any) {
    const { items }: any = props;
    return (
        <div className="cmr-tech-part">
			{
				items.map((data: any, index: number) => {
					return (
						<div key={index} className={`${data.className} technology_row`}>
							<div className="container">
								<div className="tech-layer"></div>
								<div className="row">
									<TechonologyTop className="sr-from-bottom-1" id={data.className} />
									<TechonologyName name={data.title} className="sr-from-bottom-1" />
									{
										(data.hasType) ? 
											(
												<div className="col-md-8">
												<div className="cmr-techstop">
													{
														data.list.map((item: any, subIndex: number) => {
															return (
																<div key={subIndex} className="row justify-content-start mb-5 techstop-list">
																	<div className="col-12">
																	<h3 className="mobile-techstop-category">
																		{item.name}
																	</h3>
																	</div>
																	{
																		item.item.map((obj: any, key: number) => {
																			return <TechonoglyItem name={obj.name} image={obj.image} key={key} link={obj.link}/>
																		})
																	}
																</div>
															)
														})
													}
												</div>
											</div>
											)
										: (
											<div className="col-md-8">
												<div className="cmr-techstop">
													<div className="row justify-content-start techstop-list">
														{
															data.list.map((obj: any, key: number) => {
																return <TechonoglyItem name={obj.name} image={obj.image} key={key} link={obj.link}/>
															})
														}
													</div>
												</div>
											</div>
										)
									}
								</div>
							</div>
						</div>
					)
				})
			}
        </div>
    )
}

export default TechnologyList;

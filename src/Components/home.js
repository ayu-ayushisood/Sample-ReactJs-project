import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import Slider from 'react-slick';


import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';

class Home extends Component {
	constructor(props) {
	    super(props);
	    this.handleLoginClick = this.handleLoginClick.bind(this);
	    this.handleLogoutClick = this.handleLogoutClick.bind(this);
	    this.state = {isLoggedIn: false};
	}
	handleLoginClick() {
	    this.setState({isLoggedIn: true});
	  }

	  handleLogoutClick() {
	    this.setState({isLoggedIn: false});
	  }
	
  	render() {
  		const isLoggedIn = this.state.isLoggedIn;
	    let button;

	    if (isLoggedIn) {
	      button = <LogoutButton onClick={this.handleLogoutClick} />;
	    } else {
	      button = <LoginButton onClick={this.handleLoginClick} />;
	    }
	    const settings = {
	      dots: true,
	      infinite: true,
	      speed: 500,
	      slidesToShow: 4,
	      slidesToScroll: 3,
	      autoplay:true,
	      autoplaySpeed: 2000,
	      cssEase: "linear"

	    };  
	    return (
	      	<div className="homepage">
	      		<div className="home-hero"></div>
			    <Grid>
			  		<Row className="show-grid">
				    	<Col lg={12}>
				      		<Form inline className="h-top">
					      		<FormGroup controlId="formInlineName">
									<ControlLabel>Name</ControlLabel>{' '}
								    <FormControl type="text" placeholder="Name" />
								</FormGroup>{' '}
								<FormGroup controlId="formInlineEmail">
								   <ControlLabel>Email</ControlLabel>{' '}
								   <FormControl type="email" placeholder="name@example.com" />
								</FormGroup>{' '}
								<div>
							        <Greeting isLoggedIn={isLoggedIn} />
							        {button}
							    </div>
							</Form>
							<hr />
				    	</Col>
				    	<Col lg={12}>
					    	<div className="h-heading">
					    		<h1 id="team"> Our Team </h1>
					    		<Slider {...settings}>
						    		<div className="img">
						    			<img src={image1} />
						    		</div>
						    		<div className="img">
						    			<img src={image2} />
						    		</div>
						    		<div className="img">
						    			<img src={image3} />
						    		</div>
						    		<div className="img">
						    			<img src={image4} />
						    		</div>	
						    		<div className="img">
						    			<img src={image5} />
						    		</div>	
						    		<div className="img">
						    			<img src={image6} />
						    		</div>	
						    		<div className="img">
						    			<img src={image7} />
						    		</div>	
						    	</Slider>				    		
					    	</div>
				    	</Col>
					</Row>
			    </Grid>
			</div>
	    );
  	}
}
function UserGreeting(props) {
  return <div className="login-greet"> <h3>Hola!</h3> </div>;
}

function GuestGreeting(props) {
  return <div className="login-greet"> <h3>Please sign up.</h3> </div>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
function LoginButton(props) {
	return (
	    <button onClick={props.onClick} className="btn-style">
	    Login
		</button>
	);
}
function LogoutButton(props) {
    return (
	    <button onClick={props.onClick} className="btn-style">
           Logout
	    </button>
	);
}
export default Home;




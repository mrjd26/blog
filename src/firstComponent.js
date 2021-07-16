import React from 'react';

    const colorBank = ["Fushsia", "Peru", "NavajoWhite", "PapayaWhip", "LightSlateGray",
                        "DarkSlateGray", "Gainsboro", "MistyRose", "Cornsilk", "MediumSlateBlue",
                      "LightSteelBlue", "LawnGreen", "RebeccaPurple", "LightGoldenrodYellow",
                      "Tomato", "Salmon"];


class Widget extends React.Component {

  constructor(props) {
    super(props);

      this.state = {
        brand: "Ford",
        model: "Escape",
        color: "",
        year: 2007,
	msg: ''
      };
    }
   
    success = position => {
      const lati = position.coords.latitude;
      const longi = position.coords.longitude;
      console.log(`lati: ${lati} longi: ${longi}`);
    }
    error = () => {console.log('error')};


    changeColor = (a,b) => {

      navigator.geolocation.getCurrentPosition(this.success, this.error);
      const randomElement = colorBank[Math.floor(Math.random() * colorBank.length)];
      this.setState({color:randomElement});
      this.setState({msg: b.clientX +"Holy cow! How could you ?!You went and changed the background color to"})
    }

    render() {
      return (
        <div style={{backgroundColor: this.state.color}}>
	  <p>Here is my first {this.props.color} react component</p>
	  <p>woo hoo</p>
	      <p> Oh and did you know.  In the driveway <br></br>
	      a {this.state.year} {this.state.brand} {this.state.model}
	      <br></br>Yeah, I know, Im pretty cool </p>

           <button type="button"
	           onClick={(e) => this.changeColor("goal",e)}>Don't click this ! Don't Do it!!</button>

           <p> {this.state.msg} {this.state.color}! </p>
        
	</div>
        
	      
        
      )
    }
}

export default Widget;

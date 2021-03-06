import React from 'react';

const SCALE_NAMES = {c: 'Celsius', f: 'Fahrenheit'};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onTemperatureInputChange(event.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>
          Enter temperature in {SCALE_NAMES[scale]}
        </legend>
        <input value = {temperature} onChange = {this.handleChange} />
        <BoilingVerdict temperature = {temperature}/>
      </fieldset>
    )
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {scale: 'c', temperature: ''};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }
  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;

    return (
      <div>
        <TemperatureInput scale='c' temperature={celsius} onTemperatureInputChange={this.handleCelsiusChange}/>
        <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureInputChange={this.handleFahrenheitChange}/>
      </div>
    )
  }
}

export default Calculator;

function BoilingVerdict(props) {
  if (props.temperature > 100) {
    return <p>The water would boil.</p>
  }

  return <p>The water wouldn't boil.</p>
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

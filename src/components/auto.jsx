import React, { PureComponent } from 'react';

class Auto extends PureComponent {
  constructor() {
    super();
    this.state = {
      inputVal: ''
    }

    this.selectName = this.selectName.bind(this);
  }

  selectName(e) {
    this.setState({ inputVal: e.target.innerHTML });
  }

  update(val) {
    let newState = Object.assign({}, this.state);

    return e => {
      newState[val] = e.target.value;
      this.setState({
        inputVal: newState[val]   
      })
    }
  }

  render() {
    let nameList = this.props.names.filter(name => {
        return name.toLowerCase().includes(this.state.inputVal.toLowerCase())
      })
      .map((name, idx) => {
        return <li key={name + idx} onClick={this.selectName}>{name}</li>
      });
    
    if (nameList.length == 0) {
      nameList = 'No Results Found';
    }
   
    console.log(this.state);
    return (
      <div className="widget__item">
        <div className="widget__title"> 
          <h1> autocomplete </h1>
        </div>
        <div className="auto__display"> 
          <input placeholder={'Search...'} value={this.state.inputVal} onChange={this.update('inputVal')}/>
          <p> {nameList} </p>
        </div>
      </div>
    )
  } 
}

export default Auto;
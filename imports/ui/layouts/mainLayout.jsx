import React from 'react';

export class MainLayout extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount() {

	}

	render(){
		return (
      <div id="MainLayout">
        {this.props.children}
      </div>
		)
	}
}

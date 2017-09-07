import React from 'react';

export class Index extends React.Component{
	constructor(){
		super();
	}

	componentDidMount() {
		this.tl = new TimelineMax();
		const cube1 = this.refs.side1;
		const cube2 = this.refs.side2;
		const cube3 = this.refs.side3;
		this.tl
		.add("start")
			//.set([this.refs.side1,this.refs.side2,this.refs.side3,this.refs.side4,this.refs.side5,this.refs.side6], {transformOrigin:"center center 50%"})
			.set(cube2, {rotationX:90, y:-300, transformOrigin:"center center 150px"}, "start")
			.set(cube3, {rotationY:-90, y:-600, transformOrigin:"center center 150px"}, "start")
			.to(cube1, 1, {rotationX:-90, transformOrigin:"center center 150px" }, "start")
			.to(cube2, 1, {rotationX:"-=90" }, "start")
			// .to(cube3, 1, {rotationX:"-=90", transformOrigin:"center center 0px"}, "start")
			// .to([cube3, cube2, cube1], 1, {rotationY:"+=90" }, "start+=1")
			.to(this.refs.container, 1, {rotationY:"+=90", transformOrigin:"center center 150px" }, "start+=1")
			//.to(cube1, 1, {}, "start+=1")
			//.to(this.refs.side1, 10, { rotationX:360, ease:Power0.easeNone})
		;
	}

  handlePlay(){
    this.tl.play(0);
  }

	render(){
		return (
      <div className="wrapper">
        <button className="play" onClick={e => (this.handlePlay())}>Play</button>
        <div className='container' ref='container'>
  				<div className='side side1' ref='side1'><h1>1</h1></div>
  				<div className='side side2' ref='side2'><h1>2</h1></div>
  				<div className='side side3' ref='side3'><h1>3</h1></div>
  				<div className='side side4' ref='side4'></div>
  				<div className='side side5' ref='side5'></div>
  				<div className='side side6' ref='side6'></div>
  			</div>
      </div>
		)
	}
}

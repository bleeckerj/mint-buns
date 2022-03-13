import React, { useState, useContext, Component } from "react";
import { ethers } from 'ethers';
import Button from 'react-bootstrap/Button';
import { Container, Col, Row, Form } from "react-bootstrap";
//import JsColor from JsColor2
import "./styles.css";

// import Npm randomcolor Package
import randomColor from "randomcolor";
let provider;

const divStyle = {
    width: '100%',
    paddingBottom: '.2em',
};

function formatDate(date) {
    return date.toLocaleDateString();
}

class Burger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textColor: `rgb(165,161, 24)`,
            famfam: 'foo'
        };
        this.toggleChildColor = this.toggleChildColor.bind(this);
    }

    toggleChildColor() {
        console.log("HELLO?");
        this.setState(state => ({
            textColor: `rgb(255,0,0)`
        }));
    }

    render() {
        console.log(this.state);
        return (
            <div id="container">
                <div id="main">
                    <p>Parent val: {this.state.textColor.toString()}</p>
                    <BunTop />
                    <TextLine_1 textColor={this.state.textColor} />
                    <TextLine_2 textColor={this.state.textColor} />
                    <TextLine_3 textColor={this.state.textColor} />
                    <TextLine_4 textColor={this.state.textColor} />
                    <BunBottom />

                    <TestButton onChange={this.toggleChildColor} />
                </div>
            </div>
        )
    }

}

export class TestButton extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = this.props.state;
        // console.log(this.props.state);
        this.state = { textColor: this.props.textColor };
        this.handleClick = this.handleClick.bind(this);
        this.state.onChange = this.props.onChange;
        // console.log(this.state.onChange);
        // this.state.onChange();

    }

    handleClick() {
        this.state.textColor = 'rgb(255,0,0)';
        // console.log(this.state);
        // console.log(this.state.onChange);
        this.state.onChange('rgb(255,0,0)');
        //console.log(this.refs.name);
    }

    render() {
        return (
            <Button variant="secondary" onClick={this.handleClick} size="lg">Large button</Button>
        );
    }

}

function BunTop(props) {
    return (
        <div id="bun-top"><img src="images/bun-top.png" style={{ width: '100%', paddingBottom: '.2em', }} /></div>
    )

}

function BunBottom(props) {
    return (
        <div id="bun-bottom"><img src="images/bun-bottom.png" style={{ width: '100%' }} /></div>
    )
}

class TextLine_1 extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { textColor: props.textColor };
    }

    render() {
        console.log(this.props);
        return (
            <span class="hatchshow_temp" style={{ display: 'block', marginBottom: '0.3em', marginTop: '0.2em', lineHeight: '93.5px', height: '130.9px', }}>
                <span class="hsjs" style={{ color: this.props.textColor, whiteSpace: 'pre', fontSize: '187px', 'visibility': 'visible', }}>just</span>
            </span>
        )
    }
}

class TextLine_2 extends React.Component {
    constructor(props) {
        super(props);
        //this.state = { textColor: props.textColor };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }
    render() {
        return (
            <span class="hatchshow_temp" style={{ display: 'block', marginBottom: '0.0em', lineHeight: '75.5px', height: '105.69999999999999px' }}>
                <span class="hsjs" style={{ color: this.props.textColor, whiteSpace: 'pre', fontSize: '151px', visibility: 'visible', }}>start</span>
            </span>
        )
    }
}

class TextLine_3 extends React.Component {
    constructor(props) {
        super(props);
        //this.state = { textColor: props.textColor };
    }

    render() {
        return (
            <span class="hatchshow_temp" style={{ display: 'block', marginBottom: '0.1em', lineHeight: '93.5px', height: '91.69999999999999px', }}>
                <span class="hsjs" style={{ color: this.props.textColor, whiteSpace: 'pre', fontSize: '131px', visibility: 'visible', }}>typing</span>
            </span>
        )
    }
}

class TextLine_4 extends React.Component {
    constructor(props) {
        super(props);
        //this.state = { textColor: props.textColor };
    }
    render() {
        return (
            <span class="hatchshow_temp" style={{ display: 'block', marginBottom: '0.0em', lineHeight: '80.5px', height: '22.4px' }}>
                <span class="hsjs" style={{ color: this.props.textColor, whiteSpace: 'pre', fontSize: '30px', visibility: 'visible', }}>(backspace enter work)</span>
            </span>
        )
    }
}

class BGColorPicker extends React.Component {
    constructor(props) {
        super(props);
        //this.state = { textColor: props.textColor };
    }
    render() {
        return (
            <button id="bgColorPicker" class="jscolor {valueElement:'chosen-value', value:bgColor, width:485,height:300, position:'top', onFineChange:'updateBGColor2(this.toHEXString())'}">Button!</button>
        )
    }
}

function updateBGColor(color) {
    console.log(color);
    bgColor = color;
    $('mobileKeyboardKludge').css('color',color);
    document.getElementById('bun').style.removeProperty('background-color');
    document.getElementById('bun').style.removeProperty('background');
	$('body').css('background-color', color);
	$('bun').css('background',color);
	$('bun').css('background-color', color);
	document.getElementById('containerTop').style.background = color; 
	document.getElementById('bgColorPicker2').jscolor.fromString('#'+color);
	document.getElementById('bgColorPicker2').innerHTML="Add Background Gradient";
	document.getElementById('bgColorPicker').innerHTML="Pick Background Color";
}


function ContainerBottom(props) {
    return (
        <div id="containerBottom">
            <div id="controls">
                <div class="mobileShow">
                    <input id="mobileKeyboardKludge" type="text" value="Tap Here to Type" onFocus="keyboardFocus();"></input>
                </div>
                <div id="colorPicker" style={{textAlign:'center', margin:'0 auto',}}>
                <div>
                    <BGColorPicker/>
                    {/* <button id="bgColorPicker" class="jscolor" onClick={() => updateBGColor('#ffffff')}></button> */}
                        {/* <button id="bgColorPicker" class="jscolor {valueElement:'chosen-value', value:bgColor, width:485,height:300, position:'top', onFineChange:'updateBGColor(this.toHEXString())'}">Pick Background Color</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
// rgb(165, 61, 24)
function BunMain(props) {
    return (
        <>
            <div id="containerTop">
                <div id="bun">
                    <Burger />
                </div>
            </div>
            <>
                <ContainerBottom />
            </></>

    );
}


export default BunMain;
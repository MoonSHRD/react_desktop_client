import {Component} from "react";
import React from "react";
import {
    Tab,
    Tabs,
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
    Button,
    ButtonToolbar
} from 'react-bootstrap';
let eth = require('../../core/eth/index');

class Unauthed extends Component {

    state = {
        key: 1
    };

    constructor(props) {
        super(props);

        this.state = {
            key: 1
        };
    }

    handleSelect = (key) => {
        console.log(this.state);
        this.setState({ key });
    };

    render() {
        return (
            <Tabs
                activeKey={this.state.key}
                onSelect={this.handleSelect}
                id="controlled-tab-example"
            >
                <Tab eventKey={1} title="Tab 1">
                    <Mnemonic/>
                </Tab>
                <Tab eventKey={2} title="Tab 2" >
                    Tab 2 content
                </Tab>
            </Tabs>
        );
    }
}

class Mnemonic extends Component{

    length=12;

    constructor(props, context) {
        super(props, context);

        this.state = {
            value: '',
            valid: false
        };
    }

    generateMnemonic = () => {
        this.setState({ value: eth.generate_mnemonic() });
    };

    generateAccount = () => {
        const key=eth.generate_account(this.state.value).privateKey;
    };

    getValidationState = () => {
        const mnem=this.state.value;
        const words=mnem.split(/\s+/);
        const err=mnem.substr(-1,1)===" ";
        const words_count = words.length;
        const length = this.state.value.length;
        if (words_count >= this.length && !err) {

            return 'success';
        }
        else if (length > 0) {
            return 'error';
        }
        return null;
    };

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };

    render() {
        return (
            <form>
                <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                >
                    <ControlLabel>Mnemonic</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter words"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>must be {this.length} or more words</HelpBlock>
                </FormGroup>
                <ButtonToolbar>
                    <Button bsStyle="primary" onClick={this.generateMnemonic}>Generate mnemonic</Button>
                    <Button bsStyle="success" onClick={this.generateAccount} disabled={!this.state.valid}>Next</Button>
                </ButtonToolbar>
            </form>
        );
    }
}

export default Unauthed;
import React, { Component } from 'react';
import { Route } from 'react-router';
import { AutoComplete } from './components/Autocomplete';
import './App.css';
export default class App extends Component {
    displayName = App.name
    constructor(props) {
        super(props);
        this.state = { users: [], loading: false }
    }

    //fetch data from the employee class
    async componentDidMount() {
        fetch('/api/Employee')
            .then(res => { return res.json() })
            .then(data => {
                let getData = data.res;
                this.setState({ users: data, loading: true })
            }

            );
    }
    render() {
        const items = [...this.state.users]
        console.log(this.state.loading)
        //show AutoComplete component after success promise
        let showAc = null;
        showAc = (
            <div>
                {
                    <AutoComplete items={this.state.users} />
                }

            </div>

        )
        return (
            <div className="container">
                <h1 className="text-center text-uppercase">looking for en employee?</h1>
                {showAc}
            </div>
        );
    }
}
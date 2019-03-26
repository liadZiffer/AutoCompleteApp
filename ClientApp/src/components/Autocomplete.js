import React, { Component } from 'react';

export class AutoComplete extends Component {
    displayName = AutoComplete.name
    constructor(props) {
        super(props);
        this.items = props.items;//get the items from the App Controller
        console.log(props);
        this.state = {
            suggestions: [],
            text: '',
            focus:false
        };

    }
    //sort func
    compare(a, b)  {
    // Use toUpperCase() to ignore character casing
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    let comparison = 0;
    if (nameA > nameB) {
        comparison = 1;
    } else if (nameA < nameB) {
        comparison = -1;
    }
    return comparison;
}
    
    // sort()- is for sort alphbaticly
    //filter- is used for item match the regex v returns array
    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        let data = this.props.items;
        if (value.length > 0) {
            //create pattern with regex i its used for case senstive user input
            const regex = new RegExp(`[a-zA-Z]*${value}`, 'i');
            //const regex = new RegExp('[abc]' + `^${value}`, 'i');
            suggestions = data.sort(this.compare);
            suggestions = data.map(item => item).filter(item => regex.test(item.name));
            console.log(suggestions);
            
        }
        this.setState(() => ({ suggestions ,text:value }));

    }
    renderSuggestions() {
        //extract the sugg from the state
        const { suggestions, text } = this.state;
        console.log(text);
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
            {
                suggestions.map((item, index) =>
                    <li className="li_suggest" key={index} onClick={() => this.selectSuggestions(item)} >
                        <span className="suggest_content">
                            <img className="app_image" src={item.imageUrl} />
                                <span className="name">
                                    <span className="highlight"></span>
                                    <span className="">{item.name}</span>
                                    <p className="text-left title">{item.workTitle}</p>
                                </span>
                               
                            </span>
                           
                </li>)}
            </ul>
            )
    }

    selectSuggestions(value) {
        this.setState(() => ({
            text: value.name,
            suggestions:[],
        }) )
    }
    handleFocus = (e) => {
        
        let data = [...this.props.items];
        let text = this.state;
        let suggestions = [];
        suggestions = data.sort(this.compare);
        //check if thers a text in input if yes return null else- return the sort suggest array
        if (this.state.text.length > 0) {
            //this.setState({ suggestions: [] });
            return null
        }
        else {
            e.target.focus();
            this.setState({ suggestions: suggestions });
        }

    }
    handleOnBlur = (e) => {
        const value = e.target.value;
        //if value is bigger then zero dont make blur
        if (value.length>0) {
            return null;
        }
        let data = [...this.props.items];
        data.sort(this.compare);
        
        console.log('value length:' +value)
        setTimeout(() => {
            console.log("blur")

            this.setState({ suggestions: [] })
        }, 300)
        this.renderSuggestions()
              
    }

    render() {
        const { text } = this.state;
        return (
          
            <div>
                <input type='text' value={text} placeholder="Knowledge managment"
                    onChange={this.onTextChanged}
                    onClick={this.handleFocus}
                    onBlur={this.handleOnBlur} />
                {this.renderSuggestions()}
            </div>
        );
    }
}

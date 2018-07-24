import React, { Component } from 'react'

class CreateArticle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            alert: 'd-none'
        };
        this.textAreaStyles = {
            resize: 'none'
        };
        this.onCreateArticle = this.onCreateArticle.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggleAlert = this.toggleAlert.bind(this);
        this.deleteInputs = this.deleteInputs.bind(this);
    }
    
    deleteInputs() {
        this.setState({title:'', content: ''});
    }

    toggleAlert() {
        const alertState = this.state.alert;
        let newState;
        switch(alertState) {
            case 'd-none':
                newState = 'd-block';
                break;
            case 'd-block':
                newState = 'd-none';
                break;
        }
        this.setState({alert: newState});
        console.log(alertState);
    }

    onCreateArticle(e) {
        if(this.state.title.length < 5) {
            this.toggleAlert();
            this.deleteInputs();
            e.preventDefault();
            e.stopPropagation();
        } else {
            this.props.handleArticleCreate({title: this.state.title, content: this.state.content});
            this.deleteInputs();
        }
    }
    
    handleInputChange(e) {
        const target = e.target.name;
        const value = e.target.value;
        this.setState({
            [target]: value
        });
    }

    render() {
        return (
            <React.Fragment>
            <div className={"alert alert-warning alert-dismissible fade show w-100 mx-auto " + this.state.alert} role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                <button type="button" className="close" onClick={this.toggleAlert} data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className={"main-form row w-100 mx-auto " + this.state.validated}>
                <div className="input-group mb-3">
                    <input type="text" placeholder="Title..." value={this.state.title} name="title" onChange={this.handleInputChange} className="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <p className={this.state.titleErrClass}>{this.state.titleErr}</p>
                </div>
                <div className="input-group input-group-sm mb-3">
                    <textarea placeholder="Body..." value={this.state.content} name="content" onChange={this.handleInputChange} placeholder="Enter article content..." className="form-control" style={this.textAreaStyles} aria-label="With textarea"></textarea>
                    <p className={this.state.contentErrClass}>{this.state.contentErr}</p>
                </div>  
                <div className="w-100"></div>
                <div className="text-center w-100">
                    <button onClick={this.onCreateArticle} className="btn btn-outline-dark">Submit Article!</button>
                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default CreateArticle;

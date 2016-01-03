import React from 'react'
import Display from './display'
import Form from './form'

class Note extends React.Compnent{
    constructor(){
        super();
        this.state = {
            editing: false
        }
    }
    componentWillMount(){
        this.style = {
            right: this.randomBetween(0, window.innerWidth -150) + 'px',
            top: this.randomBetween(0, window.innerHeight -150) + 'px',
            transform: 'rotate(' + this.randomBetween(-15, 15) + 'deg)'
        }
    }
    componentDidMount(){
        $(this.getDOMNote()).draggable();
    }
    randomBetween(min, max){
        return (min + Math.ceil(Math.random() * max));
    }
    edit(){
        this.setState({ editing: true });
    }
    save(){
        this.props.onChange(this.refs.newText.getDOMNote().value, this.props.index);
        this.setState({ editing: false });
    }
    remove(){
        this.props.onRemove(this.props.index);
    }
    render(){
            if(this.state.editing){
                return Form;   
            }else{
                return Display;
            }
    }
}

export default Note;
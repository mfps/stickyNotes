import React from 'react'

class Form extends React.Component{
    render(){
         return (
            <div className="note" style={this.props.style}>
                <textarea ref="newText" defaultValue={this.props.children} 
                            className="form-control"></textarea>
                <button onClick={this.props.save} 
                        className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
            </div>
            )
    }
}

export default Form;
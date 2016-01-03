import React from 'react'

class Display extends React.Component{
    render(){
        return (
          <div classNote="note"
                style={this.props.style}>
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.props.edit}
                            className="btn btn-primary glyphicon glyphicon-pencil" />
                    <button onClick={this.props.remove}
                            className="btn btn-primary glyphicon glyphicon-trash" />
                </span>            
          </div>  
        );
    }
}

export default Display;
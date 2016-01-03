import React from 'react'

import Note from './note'

class Board extends React.Component{
    constructor(){
        super();
        this.state = {
            notes: []
        }
    }
    
    componentWillMount(){
        let self = this;
        if(this.props.count){
            $.getJSON("http://baconipsum.com/api/?type=all-meat&sentences=" +
                this.props.count + "&start-with-lorem=1&callback=?", (results) => {
                   results[0].split('. ').forEach((sentence) => {
                      self.add(sentence.supstring(0,40)); 
                   });
                });
        }    
    }
    
    nextId(){
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++
    }
    
    add(text){
        let arr = this.state.notes;
        arr.push({
           id: this.nextId(),
           note: text 
        });
        this.setState({ notes: arr });
    }
    update(newText, i){
        let arr = this.state.notes;
        arr[i].note = newText;
        this.setState({ notes: arr });
    }
    remove(i){
        let arr = this.state.notes;
        arr.splice(i, 1);
        this.setState({ notes: arr });
    }
    eachNote(note, i){
        return (
            <div>
                <Note key={note.id}
                        index={i}
                        onChange={this.update}
                        onRemove={this.remove}      
                >{note.note}</Note>
            </div>  
        );
    }
    
    
    
    render(){
        return (
            <div className="borad">
                {this.state.notes.map(this.eachNote)}
                <button className="btn btn-sm btn- success glyphicon glyphicon-plus"
                        onCLick={this.add.bind(null, "new Note")} />
            </div>  
        );
    }
};

export default Board;
Board.propTypes = {
    count: function(props, propName) {
            if (typeof props[propName] !== "number"){
                return new Error('The count property must be a number');
            }
            if (props[propName] > 100) {
                return new Error("Creating " + props[propName] + " notes is ridiculous");
            }
        }
};




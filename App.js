import React, { Component } from 'react';
import Note from './components/Note';
import './App.css';

class App extends Component {

  constructor(){
    super();
   
    //super(props);
    this.state ={
      noteText:'',
      notes:[],
    }
  }
  

  //Updates the note
  updateNoteText(noteText){
    this.setState({noteText: noteText.target.value})
  }

  //Add a Note
  addNote(){
    if (this.state.noteText === '') {return}
    
    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({ noteText: ''});
    this.textInput.focus();
  }

  //Keypress event 'enter'
  handleKeyPress=(event) =>{
    if(event.key === 'Enter'){
      
    }
  }

  //Delete notes
  deleteNote(index){
    let notesArr = this.state.notes;
    notesArr.splice(index, 1);
    this.setState({notes: notesArr})
    this.textInput.focus();
  }

  render() {
    
    let notes = this.state.notes.map((val, key)=>{
      return <Note key={key} text={val}
      deleteMethod={ ()=> this.deleteNote(key)}/>
    })

    return (
      <div className="container">
        <div className="header">React To-Do App</div>
        {notes}
        
        <div className="button" onClick={this.addNote.bind(this)} >+</div> 
        
        <input type="text"
                ref={((input) => {this.textInput = input})} 
                className="textInput"
                value={this.state.noteText}
                onChange ={noteText => this.updateNoteText(noteText)}
                onKeyPress={this.handleKeyPress.bind(this)}
                autofocus="true"     
        />

      </div>
    );
  }
}

export default App;

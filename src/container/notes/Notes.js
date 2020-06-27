import React from 'react';
import Navbar from '../navbar/Navbar';
import '../notes/Notes.css';
import ListItems from './listItems/ListItems';

class Notes extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            items : [],
            currentItem:{
                note : '',
                key : ''
            }
        }
        this.addNote = this.addNote.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    
    handleInput(e){
        this.setState({
          currentItem:{
            note: e.target.value,
            key: new Date().getTime()
          }
        })
      }
      
      addNote(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        
        if (newItem.note !== ""){
            const newItems = [...this.state.items, newItem];
        this.setState({
            items : newItems,
            currentItem : {
                note : '',
                key : ''
            }
        },console.log(this.state.items))
        }console.log(newItem);
        
    }
    deleteItem(key){
        const filteredItems = this.state.items.filter(item => item.key!== key);
        this.setState({
            items : filteredItems
        })
    }
    setUpdate(value,key)
    {
        const items = this.state.items;
        items.map(item => {
            if (item.key === key){
                item.note = value;
            }
        })
        this.setState({
            items : items
        })
    }
    render(){
        return(
            <main id = "notes">
                <Navbar/>
                <form onSubmit={this.addNote} className="note-card">
                    <div className= "create-note">
                        
                        <textarea type="text" name="note" className="note-content" placeholder="Add note here..." 
                                  value= {this.state.currentItem.note} onChange={this.handleInput}></textarea>
                    </div>
                    <input type ="submit" className = "add-note" value="Add Note"></input>
                </form>
                <ListItems items = {this.state.items}
                 deleteItem={this.deleteItem} 
                 setUpdate={this.setUpdate}></ListItems>
            </main>
        );
    }
}
export default Notes;
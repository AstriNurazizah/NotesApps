import React from 'react';
import PropTypes from 'prop-types';

class NoteInput extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            title: '',
            body:''
        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
          return {
            title: event.target.value,
          }
        });
      }
    
    onBodyChangeEventHandler(event) {
        this.setState(() => {
          return {
            body: event.target.value,
          }
        });
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render(){
        return(
            
            <form className='border border-solid rounded-md p-2 font-medium ' onSubmit={this.onSubmitEventHandler}>
                <input type="text" 
                className='text-lg mt-8 bg-transparent block w-80 p-2 rounded border border-solid mx-auto' 
                placeholder="Judul ..." 
                value={this.state.title} 
                onChange={this.onTitleChangeEventHandler} 

                />
                <textarea type="text" 
                className='text-lg mt-8 bg-transparent block w-80 p-2 rounded border border-solid mx-auto mb-8' 
                placeholder="Tulis Catatan ... " 
                value={this.state.body} 
                onChange={this.onBodyChangeEventHandler} 

                />
                <button type="submit" className='text-lg mt-4 bg-transparent mb-6 py-2 px-10 rounded-lg border border-solid mx-auto flex justify-center items-center'>
                Submit
                </button>
            </form>
            
                
           
        )
    }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
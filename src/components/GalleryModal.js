import React, { Component } from 'react';



export default class GalleryModal extends Component {
    render() {
      
      if (this.props.show === false) {
        console.log("esta es la props", this.props.show)
        return null;
      }
      
      return(

        <div show={this.props.isOpen} className='modal-overlay' onClick={this.props.onClick} name={this.props.name}>

          <div className='modal-body'>

            <a className='modal-close' href='#img' onClick={this.props.onClick}>
              <span className='fa fa-times'></span>
            </a>

            <img src={this.props.src} alt='' />

          </div>

        </div>
      )
    }
  }
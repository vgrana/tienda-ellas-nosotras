import React, { Component } from 'react';
import GalleryImage  from './components/GalleryImage';
import GalleryModal from './components/GalleryModal';
import portada3 from './components/image/portada3.jpg'
import portada4 from './components/image/portada4.jpg';
import portada2 from './components/image/portada2.jpg';
import portada5 from './components/image/portada5.jpg';
import portada6 from './components/image/portada6.jpg';
import portada7 from './components/image/portada7.jpg';

// import portada1 from "../components/image/portada1.jpg";
// import portada5 from  'https://scontent.faep8-2.fna.fbcdn.net/v/t1.0-9/130135130_2631194593858419_7555392943736780225_o.jpg?_nc_cat=109&ccb=2&_nc_sid=a26aad&_nc_ohc=7aChekoad1QAX_jszNb&_nc_ht=scontent.faep8-2.fna&oh=03ad8d6255c519674a191a082a938f86&oe=5FFE6D3F'

import    './Gallery.css';


 let imgUrls = [
   
   portada2,
    portada3,
     portada4,
     portada5,
     portada6,
    portada7
  //  'portada3',
  //  'portada4'


// 'https://scontent.faep8-2.fna.fbcdn.net/v/t1.0-9/130135130_2631194593858419_7555392943736780225_o.jpg?_nc_cat=109&ccb=2&_nc_sid=a26aad&_nc_ohc=7aChekoad1QAX_jszNb&_nc_ht=scontent.faep8-2.fna&oh=03ad8d6255c519674a191a082a938f86&oe=5FFE6D3F',

// 'https://scontent.faep8-1.fna.fbcdn.net/v/t1.0-9/128758909_2629853430659202_6387408458106182726_o.jpg?_nc_cat=101&ccb=2&_nc_sid=a26aad&_nc_ohc=kyBiW5sFZ_cAX9KPIRi&_nc_ht=scontent.faep8-1.fna&oh=7cf14fc6bf087745a88dcc7c4721a290&oe=6000D290',
// 'https://scontent.faep8-1.fna.fbcdn.net/v/t1.0-9/129162539_2628133420831203_5151661928732708561_o.jpg?_nc_cat=105&ccb=2&_nc_sid=a26aad&_nc_ohc=CyKmnDFuF-4AX9KT-nf&_nc_ht=scontent.faep8-1.fna&oh=191508361631da37b256d05f559e15bf&oe=5FFF62C0'
    // 'https://source.unsplash.com/k3IogSsONd4/800x600',
    // 'https://source.unsplash.com/gThfDnqgfMw/800x600',
    // 'https://source.unsplash.com/_1x_x8Vtg2w/800x600',
    // 'https://source.unsplash.com/TFP_s4_jRuE/800x600',
    // 'https://source.unsplash.com/pElM4yerF5Q/800x600',
    // 'https://source.unsplash.com/sFsy8CKyQ5c/800x600',
    // 'https://source.unsplash.com/0WGucY1VHI0/800x600',
    // 'https://source.unsplash.com/1ciHU-qPifY/800x600',
    // 'https://source.unsplash.com/JZCJotPa96c/800x600',
    // 'https://source.unsplash.com/8X19catOuNI/800x600',
    // 'https://source.unsplash.com/_GDff35-Pa8/800x600',
    // 'https://source.unsplash.com/XYok1nBGvhk/800x600'
 ]



export default class Gallery extends Component{
    //constructor(props) {
     // super(props);
      
      state = {
        isOpen: false,
        // url: ''
        img: ''
      }
      
  //}

  //con pie de pagina distinto para cada foto
  // render() {
  //   return (
  //     <div class="row">
  //     <div class="col s12 m7">
  //       <div class="card">
  //         <div class="card-image">
  //           <img src="/components/image/portada2.jpg"/>
  //           <span class="card-title">Card Title</span>
  //         </div>
  //         <div class="card-content">
  //           <p>I am a very simple card. I am good at containing small bits of information.
  //           I am convenient because I require little markup to use effectively.</p>
  //         </div>
  //         <div class="card-action">
  //           <a href="#">This is a link</a>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //   );
  // }
    
    render() {
      return(

        <div  className='container-fluid gallery-container'>
          {/* <img src={portada2} alt="" /> */}
          <div className='row'>
            {
              imgUrls.map((img, index) => {
                 return ( 
                 <div key={index} className='col-sm-2 col-md-3 col-xl-2'>

                    <div className='gallery-card'>
                    
                      {/* <GalleryImage  className='gallery-thumbnail' src={url} alt={'Image number ' + (index + 1)} /> */}
                       <GalleryImage  className='gallery-thumbnail' src = {img} alt={'Image number ' + (index + 1)} />
                      
                      <span className='card-icon-open fa fa-expand-arrows-alt' value={img} onClick={() => this.openModal(img)}></span>
                      {/* <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                  </div>
                 )
               })
             }
          </div>
          
          <GalleryModal show={this.state.isOpen} onClick={this.closeModal} src={this.state.img} /> 

        </div>

        
        
      )
    }

        
    // Function for opening modal dialog
    // I change the function to a arrow functions to avoid to declare the binding in the constructor
    openModal = (img) => {
     
       this.setState({
         isOpen: true,
         img: img
       });
     }
  
    // Function for closing modal dialog
    // I change the function to a arrow functions to avoid to declare the binding in the constructor
    closeModal = () => { 
      
       this.setState({
        isOpen: false,
        img: ''
      });
    }
  }
import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage
} from 'mdb-react-ui-kit';

export default function Card() {
  return (
    <MDBCard background='dark' className='text-white' style={{ width: '50%', height:'30%', margin: 'auto' }}>
      <MDBCardImage style={{ width: '100%', height: 'auto' }} src='https://mdbootstrap.com/img/new/slides/017.webp' alt='...' />
      <MDBCardOverlay>
        <MDBCardTitle style={{ fontSize: '24px', fontWeight: 'bold' }}>Card title</MDBCardTitle>
        <MDBCardText style={{ color: 'gray' }}>
          This is a wider card with supporting text below as a natural lead-in to additional content. This
          content is a little bit longer.
        </MDBCardText>
  
      </MDBCardOverlay>
    </MDBCard>
  );
}
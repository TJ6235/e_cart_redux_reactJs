import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost ,faAnchor, faHippo } from '@fortawesome/free-solid-svg-icons';


function Footer() {
  return (
    <>
    
     <MDBFooter  className='text-center' color='white' bgColor='primary'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1 rounded shadow' href='#!' role='button'>
          <FontAwesomeIcon icon={faGhost} />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 rounded shadow' href='#!' role='button'>
          <FontAwesomeIcon icon={faAnchor} />          
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 rounded shadow' href='#!' role='button'>
          <FontAwesomeIcon icon={faHippo} />
                           </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 rounded shadow' href='#!' role='button'>
          <FontAwesomeIcon icon={faGhost} />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 rounded shadow' href='#!' role='button'>
          <FontAwesomeIcon icon={faGhost} />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 rounded shadow' href='#!' role='button'>
          <FontAwesomeIcon icon={faGhost} />  
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>  
              <MDBCol size="auto">
                <p className='pt-2 text-light'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput style={{ color: 'blue' }} color='primary' contrast type='email' label='ecart@gmail.com' className='mb-4 text-primary'/>
              </MDBCol>
              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4 rounded shadow'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p className='text-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase text-light'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-light'>
                    HomePage
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-light'>
                    WishList
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-light'>
                   Cart
                  </a>
                </li>
              
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase text-light'>Guides</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-light'>
                    React
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-light'>
                   React BootStrap
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-light'>
                    BootSwatch
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-light'>
                    Material Ui
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase text-light'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-light'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-light'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-light'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-light'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase text-light'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-light'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-light'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-light'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-light'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3 text-light' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-light' href='https://mdbootstrap.com/'>
        ecart@gmail.com
        </a>
      </div>
    </MDBFooter>
   
    </>
    
  )
}

export default Footer
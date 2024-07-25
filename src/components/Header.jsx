import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

const wishlistArray = useSelector((state)=>state.wishlistReducer)
const cartArray = useSelector((state)=>state.cartReducer)

  return (
    <>
      <Navbar expand="lg" className="bg-primary">
        <Container>
          <Link to={'/'}><FontAwesomeIcon className='fa-2x me-3 text-warning' icon={faCartShopping} /></Link>
          <Navbar.Brand className='fw-bold fs-4 text-light' href="#">E-Cart</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Link to={'/wishlist'}>
              <Button id='navBtn' className='btn shadow rounded me-4 p-2'>
                <FontAwesomeIcon className='me-2 text-danger' icon={faHeart} />Wishlist
                <Badge className='ms-3 mb-3' badgeContent={wishlistArray?.length} color="primary"></Badge>
              </Button>
            </Link>
            <Link to={'/cart'}>
              <Button id='navBtn2' className='btn shadow rounded p-2'>
                <FontAwesomeIcon className='me-2 text-warning' icon={faCartShopping} /> Cart
                <Badge className='ms-3 mb-3' badgeContent={cartArray?.length} color="primary"></Badge>
              </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

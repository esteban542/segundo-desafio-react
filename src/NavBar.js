import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = ()  => {
    return(
        <Navbar  className='nav'>
        <Container>
        <Navbar.Brand href="#home" style={{color:'white'}}>Navbar
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home" style={{color:'white'}}>Home</Nav.Link>
          <Nav.Link href="#features" style={{color:'white'}}>Features</Nav.Link>
          <Nav.Link href="#pricing" style={{color:'white'}}>Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}
export default NavBar;
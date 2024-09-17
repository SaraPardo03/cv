import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MainNav() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark" className="bg-body-tertiary main-nav">
      <Container>
        <Navbar.Brand href="/" className='brand-name'>SP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link href="/about">à propos</Nav.Link>
            <Nav.Link href="/projects">projets</Nav.Link>
            <Nav.Link href="/contact">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;
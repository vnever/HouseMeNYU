import {Navbar, Nav, Container, NavDropdown, Button} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <LinkContainer to="/">
                <Navbar.Brand href="/">NYU HOUSE ME</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Neighbourhoods" id="collasible-nav-dropdown">
                  <NavDropdown.Item>Brooklyn</NavDropdown.Item>
                  <NavDropdown.Item>Greenwich Village</NavDropdown.Item>
                  <NavDropdown.Item>Upper East Side</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>See All</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <LinkContainer to="/admin">
                    <Nav.Link>
                        Admin
                        <span className="position-absolute top-1 start-10 translate-middle 
                        p-2 bg-danger border border-light rounded-circle"></span>
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                    <Nav.Link>
                        Login
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                    <Nav.Link>
                        Register
                    </Nav.Link>
                </LinkContainer>
                <NavDropdown title="John Doe" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/user/my-hearted">My Hearted</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/user">My Profile</NavDropdown.Item>
                  <NavDropdown.Item>Logout</NavDropdown.Item>
                </NavDropdown>
                <LinkContainer to="/hearted">
                     <Button to="/hearted"> 
                        <i class="bi bi-heart-fill"></i>
                    </Button>
                </LinkContainer>
            
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default HeaderComponent
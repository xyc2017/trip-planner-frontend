import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header(prop){
    return(
        
            <Navbar bg="dark" variant={'dark'} expand="lg">
              <Container>
                <Navbar.Brand href="/"><h1>My Trip Planner</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link ><Link to='/'>
                        <div>Home</div>
                    </Link></Nav.Link>
                    <Nav.Link ><Link to='/trips/new'>
                        <div>New Trip</div>
                    </Link></Nav.Link>
                    <Nav.Link ><Link to='/trips/pasttrips'>
                        <div>Past Trip</div>
                    </Link></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }

export default Header
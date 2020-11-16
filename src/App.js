import logo from './logo.svg';
import './App.css';
import {Container, Row, Col, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form>
            <Row>
              <Col md>
                  <Form.Group controlId="formEmail">
                  <Form.Label>Email Adress</Form.Label>
                  <Form.Control type="email" placeholder="Example@mail.com" />
                  <Form.Text className="text-muted">
                    we'll never share your email address, trust us!
                  </Form.Text>
                   </Form.Group>
              </Col>
              <Col md>
                  <Form.Group controlId="formEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="password" />
                  <Form.Text className="text-muted">
                    we'll never share your email address, trust us!
                  </Form.Text>
                </Form.Group>                
              </Col>              
            </Row>
            <Button variant="secondary" type="submit">login</Button>            
          </Form>

          <Card className="mb-3" style={{color:"#000"}}>
            <Card.Img src="https://picsum.photos/200/50"/>
            <Card.Body>
              <Card.Title>
                Card Title Example
              </Card.Title>
              <Card.Text>
                Card Text Example
              </Card.Text>
              <Button variant="warning">warning</Button>
            </Card.Body>
          </Card>
          <Breadcrumb>
            <Breadcrumb.Item>test</Breadcrumb.Item>
            <Breadcrumb.Item active>test</Breadcrumb.Item>
            <Breadcrumb.Item>test</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant="success">this is a button</Alert>
          <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;

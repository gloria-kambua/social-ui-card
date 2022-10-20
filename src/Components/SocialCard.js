import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from './profile-image.jpg'
// import '/Assets/Styles/myStyles.scss'
import './myStyles.scss';
import { FaGithubAlt,FaTwitterSquare } from 'react-icons/fa';
import SocialCardContent from './SocialCardContent';

 class SocialCard extends Component {
  fnGoToGithubPage=()=>{
    window.location.href=`https://github.com/gloria-kambua`;
  }
  fnGoToTwitterPage=()=>window.location.href=`https://twitter.com/GkVickie`;

  render() {
    return (
      <div>
        <Card  className='social-card'>
          <Card.Img variant="top" src={profile}/>
          <SocialCardContent/>
          <Card.Body>
            <Row>
              <Col>
                <Button variant="light" onClick={this.fnGoToGithubPage}><FaGithubAlt/>Github</Button>
              </Col>
              <Col>
                <Button variant="secondary" onClick={this.fnGoToTwitterPage}><FaTwitterSquare/>Twitter</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default SocialCard
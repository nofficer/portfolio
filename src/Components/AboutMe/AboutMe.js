
import React from 'react';

import { Row, Col, Image } from 'antd';
import '../../App.css'

import officerfootball2 from './officer_football2.jpg'

import linkedin from './linkedin.jpg'
import officer from './officer2.jpg'

import WindowSize from '../Util/WindowSize'
import { fontColor } from '../../globalvars.js'

const headerStyle = {
  fontSize: '50px',
  color: fontColor,
  fontFamily:'Tourney',

  marginTop:'4vh'
}

const imageStyle = {

  borderRadius:'100%'
}





const AboutMe = () => {
  var size = WindowSize()

  var width = size.width

  if(width>600){
    return(
      <div >
        <Row align='middle'>
          <Col align='middle' span={2}></Col>
          <Col align='middle' span={8}><h1 style={headerStyle}>About Me</h1></Col>
          <Col align='middle' span={8}></Col>
          <Col align='middle' span={6}></Col>
        </Row>
        <Row align='middle'>
          <Col align='middle' span={2}></Col>
          <Col align='middle' span={8}><div className='AboutMeDiv'><p className='sectionHeader'>Hi, I'm Nathan. I'm a full stack developer located in Toronto. I have a serious passion for data and creating intuitive, simple and easy-to-use solutions for consuming and presenting that data in beautiful user interfaces.
          <br/>
          <br/>
          I'm an obsessive problem solver, detail oriented and self motivated. My specialty is in finance and I thoroughly enjoy blending that domain knowledge with my tech expertise to create powerful applications.



          </p></div></Col>
          <Col align='middle' span={14}>
          <Image
              style={imageStyle}
              width={'40%'}
              src={linkedin}
              preview={false}
            />
            </Col>

        </Row>
        <Row align='middle'>
          <Col align='middle' span={2}></Col>
          <Col align='middle' span={8}>

          </Col>
          <Col align='middle' span={8}></Col>
          <Col align='middle' span={6}></Col>
        </Row>
        <Row>

        </Row>


      </div>



    )
  }
  else{
    return(
      <div >
        <Row align='middle'>

          <Col align='middle' span={24}>
            <h1 style={headerStyle}>About Me</h1>


          </Col>

        </Row>
        <Row align='middle'>

          <Col align='middle' span={24}><div className='AboutMeDiv'><p className='sectionHeader'>Hi, I'm Nathan. I'm a full stack developer located in Toronto. I have a serious passion for data and creating intuitive, simple and easy-to-use solutions for consuming and presenting that data in beautiful user interfaces.
          <br/>
          <br/>
          I'm an obsessive problem solver, detail oriented and self motivated. My specialty is in finance and I thoroughly enjoy blending that domain knowledge with my tech expertise to create powerful applications.



          </p></div></Col>

          <Col align='middle' span={14}>

            </Col>

        </Row>
        <Row align='middle'>
          <Col align='middle' span={2}></Col>
          <Col align='middle' span={8}>

          </Col>
          <Col align='middle' span={8}></Col>
          <Col align='middle' span={6}></Col>
        </Row>
        <Row>

        </Row>


      </div>

    )
  }

}





export default AboutMe

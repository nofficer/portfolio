

import { Row, Col,Image,Carousel } from 'antd';

import ezcomp from './ezcomp-2.PNG'
import officerchess from './officerchess.PNG'
import portfolioPlaceholder from './portfolio.PNG'
import easyCompMobile from './easyCompMobile.png'

import WindowSize from '../Util/WindowSize'
import React, { useRef } from 'react';
import sleep from './Sleeper'

const contentStyle = {
  height: '100%',
  color: '#fff',
  margin:'5vh',
  textAlign: 'center',
  background: '#000000',
  backgroundColor: 'transparent',
};
const textStyle = {
  color: '#fff'
}
const imageStyle = {
  margin:'5vh',
  borderRadius:'25px'
}
const headerStyle = {
  fontSize: '40px',
  color: '#fff',
  fontFamily: 'Tourney'
}
const linkStyleGreen = {
  color: '#52c41a',
  margin:'auto'
}
const linkStyleBlue = {
  color: '#1890ff',
  margin:'auto'
}
const linkStyleGold = {
  color: '#faad14',
  margin:'auto'
}
const linkStyleRed = {
  color: '#f5222d',
  margin:'auto'
}




const ProjectCarousel = () => {
  const ref = useRef()

  // To detect whether we are on mobile
  var size = WindowSize()
  var width = size.width
  const props = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  if(width>600){
    return(
      <Carousel accessibility pauseOnHover pauseOnFocus autoplaySpeed={15000} autoplay>

        <div className='AboutMeDiv' >
          <h3 style={contentStyle}>
          <Row>
            {/*First give ourselves a bit of space*/}
            <Col span={1}>
            </Col>
            {/*This is the image of the project*/}
            <Col span={9}>
            <Row>
                <Image
                  style={imageStyle}
                  width={'100%'}
                  src={ezcomp}
                />

            </Row>

            </Col>
            <Col span={2}>
            </Col>
          {  /*This is where the image of the project ends
            Next is the project title and description*/}
            <Col span={12}>
              <Row>
                <br/>
              </Row>
              <h2 style={headerStyle}>
              EasyComp
              </h2>
              <Row>
                <br/>
                <p style={textStyle}>
                Easycomp bridges the gap between accounting and sales by automating the sales compensation process. Built with Flask, React, MySql and GCP this powerful tool provides automated calculation, sales reporting and user dashboards.
                </p>

              </Row>
              <Row >
                <br/>
                <a className='easycomplink'  href='https://ui-dot-portfolio-320419.nn.r.appspot.com/' >

                EasyComp Demo

                </a>


                <a  href='https://easycomp.ca' style={linkStyleBlue}>

                EasyComp Website
                </a>

              </Row>
              <Row >
                <br/>
                  <p className='showcreds' >
                  User: Manager Pass: hello

                  </p>
              </Row>
              <Row >
                <br/>
                  <p style={{'margin':'auto',fontSize:'8px'}}>


                  </p>
              </Row>

            </Col>
          </Row>



          </h3>
        </div>
        <div className='AboutMeDiv'>
        <h3 style={contentStyle}>
        <Row>
          {/*First give ourselves a bit of space*/}
          <Col span={1}>
          </Col>
          {/*This is the image of the project*/}
          <Col span={9}>



          <Row>


              <Image
                style={imageStyle}
                width={'100%'}
                src={officerchess}
              />

          </Row>

          </Col>
          <Col span={2}>
          </Col>
        {  /*This is where the image of the project ends
          Next is the project title and description*/}
          <Col span={12}>
            <Row>
              <br/>


            </Row>
            <h2 style={headerStyle}>
            OfficerChess
            </h2>
            <Row>

            <p style={textStyle}>
            The ultimate chess grandmaster! A chess AI built with a convolutional neural network and minimax to predict the most effective move. Built with Flask and React. Deployed on heroku so the server takes a minute to spin up but once it does you can enjoy chess even if you're too good for your friends!
            </p>

            </Row>
            <Row >
              <br/>
              <a  href='https://officerchess.herokuapp.com' style={linkStyleGreen}>

              Chess AI

              </a>
              <a  href='https://github.com/nofficer/chessbackend' style={linkStyleBlue}>

              Chess Engine Repo

              </a>
              <a  href='https://github.com/nofficer/ChessFrontEnd' style={linkStyleRed}>

              Chess Front-End Repo

              </a>


            </Row>

          </Col>
        </Row>



        </h3>
        </div>
        <div className='AboutMeDiv'>
        <h3 style={contentStyle}>
        <Row>
          {/*First give ourselves a bit of space*/}
          <Col span={1}>
          </Col>
          {/*This is the image of the project*/}
          <Col span={9}>



          <Row>


              <Image
                style={imageStyle}
                width={'100%'}
                height={'100%'}
                src={portfolioPlaceholder}
              />

          </Row>

          </Col>
          <Col span={2}>
          </Col>
        {  /*This is where the image of the project ends
          Next is the project title and description*/}
          <Col span={12}>
            <Row>
              <br/>


            </Row>
            <h2 style={headerStyle}>
            NathanOfficer.com
            </h2>
            <Row>

            <p style={textStyle}>
            The website you're currently browsing! Built with react and deployed on the Google Cloud Platform App Engine.
            </p>

            </Row>
            <Row >
              <br/>

              <a  href='https://github.com/nofficer/portfolio' style={linkStyleBlue}>

              Portfolio Repo

              </a>



            </Row>

          </Col>
        </Row>



        </h3>
        </div>

        <div className='AboutMeDiv'>
        <h3 style={contentStyle}>
        <Row>
          {/*First give ourselves a bit of space*/}
          <Col span={1}>
          </Col>
          {/*This is the image of the project*/}
          <Col span={9}>



          <Row>


              <Image
                style={imageStyle}
                width={'100%'}
                height={'100%'}
                src={easyCompMobile}
              />

          </Row>

          </Col>
          <Col span={2}>
          </Col>
        {  /*This is where the image of the project ends
          Next is the project title and description*/}
          <Col span={12}>
            <Row>
              <br/>


            </Row>
            <h2 style={headerStyle}>
            EasyComp Mobile
            </h2>
            <Row>

            <p style={textStyle}>
            The lightweight mobile version of the EasyComp Solution. Built with React-Native this enables your team to review their performance even when they're on the go!
            </p>

            </Row>
            <Row >
              <br/>

              <a  href='https://easycomp.ca' style={linkStyleBlue}>

              EasyComp Website

              </a>



            </Row>

          </Col>
        </Row>



        </h3>
        </div>

      </Carousel>
    )
  }
  else{
    return(
      <Carousel pauseOnHover pauseOnFocus autoplaySpeed={15000} autoplay>
        <div className='AboutMeDiv' >
          <Row align='middle'>
            <Col align='middle' span={24}>
              <h2 style={headerStyle}>
                EasyComp
              </h2>
            </Col>
          </Row>
          <Row align='middle'>
            <Col align='middle' span={24}>
              <Image

                width={'100%'}
                src={ezcomp}
              />
            </Col>
          </Row>
          <Row align='middle'>
            <Col align='middle' span={24}>
              <p style={textStyle}>
              Easycomp bridges the gap between accounting and sales by automating the sales compensation process. Built with Flask, React, MySql and GCP this powerful tool provides automated calculation, sales reporting and user dashboards.
              </p>
            </Col>
          </Row>
          <Row align='middle'>
            <Col align='middle' span={12}>
              <a  href='https://ui-dot-portfolio-320419.nn.r.appspot.com/' style={linkStyleGreen}>
                EasyComp Demo
              </a>

            </Col>
            <Col align='middle' span={12}>
              <a  href='https://easycomp.ca' style={linkStyleBlue}>

                EasyComp Website
              </a>
            </Col>
          </Row>
          <Row >
            <br/>
              <p className='showcredsmobile' >
              User: Manager Pass: hello

              </p>
          </Row>
          <Row align='middle'>
            <br/>
            <br/>
          </Row>
        </div>

        <div className='AboutMeDiv' >
          <Row align='middle'>
            <Col align='middle' span={24}>
              <h2 style={headerStyle}>
                OfficerChess
              </h2>
            </Col>
          </Row>
          <Row align='middle'>
            <Col align='middle' span={24}>
              <Image

                width={'100%'}
                src={officerchess}
              />
            </Col>
          </Row>
          <Row align='middle'>
            <Col align='middle' span={24}>
              <p style={textStyle}>
                The ultimate chess grandmaster! A chess AI built with a convolutional neural network and minimax to predict the most effective move. Built with Flask and React. Deployed on heroku so the server takes a minute to spin up but once it does you can enjoy chess even if you're too good for your friends!
              </p>
            </Col>
          </Row>
          <Row align='middle'>
            <Col align='middle' span={8}>
              <a  href='https://officerchess.herokuapp.com' style={linkStyleGreen}>
              Chess AI
              </a>
            </Col>
            <Col align='middle' span={8}>
              <a  href='https://github.com/nofficer/chessbackend' style={linkStyleBlue}>
              Chess Engine Repo
              </a>
            </Col>
            <Col align='middle' span={8}>
              <a  href='https://github.com/nofficer/ChessFrontEnd' style={linkStyleRed}>
              Chess Front-End Repo
              </a>
            </Col>
          </Row>
          <Row align='middle'>
            <br/>
            <br/>
          </Row>
        </div>

        <div className='AboutMeDiv' >
          <Row align='middle'>
            <Col align='middle' span={24}>
              <h2 style={headerStyle}>
                NathanOfficer.com
              </h2>
            </Col>
          </Row>
          <Row align='middle'>
            <Col align='middle' span={24}>
              <Image

                width={'100%'}
                src={portfolioPlaceholder}
              />
            </Col>
          </Row>
          <Row align='middle'>
            <Col align='middle' span={24}>
              <p style={textStyle}>
              The website you're currently browsing! Built with react and deployed on the Google Cloud Platform App Engine.
              </p>
            </Col>
          </Row>
          <Row align='middle'>
            <Col align='middle' span={24}>
              <a  href='https://github.com/nofficer/portfolio' style={linkStyleBlue}>
              Portfolio Repo
              </a>
            </Col>
          </Row>
          <Row align='middle'>
            <br/>
            <br/>
          </Row>
        </div>

        <div className='AboutMeDiv' >
          <Row align='middle'>
            <Col align='middle' span={24}>
              <h2 style={headerStyle}>
                EasyComp Mobile
              </h2>
            </Col>
          </Row>
          <Row align='middle'>
            <Col align='middle' span={24}>
              <Image

                width={'100%'}
                src={easyCompMobile}
              />
            </Col>
          </Row>
          <Row align='middle'>
            <Col align='middle' span={24}>
              <p style={textStyle}>
              The lightweight mobile version of the EasyComp Solution. Built with React-Native this enables your team to review their performance even when they're on the go!
              </p>
            </Col>
          </Row>
          <Row align='middle'>
            <Col align='middle' span={24}>
            <a  href='https://easycomp.ca' style={linkStyleBlue}>

            EasyComp Website
            </a>
            </Col>
          </Row>
          <Row align='middle'>
            <br/>


            <br/>
          </Row>
        </div>
      </Carousel>
    )
  }



}

export default ProjectCarousel

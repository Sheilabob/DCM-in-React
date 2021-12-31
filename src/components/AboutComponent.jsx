import React, {useState} from 'react';
import { Card, CardImg, CardTitle, CardBody, Collapse, CardHeader, Button, TabContent, TabPane, Nav,
    NavItem, NavLink, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import classnames from 'classnames';


function AboutPage() {

    const [toggleLevel1, setTogglelevel1] = useState();
    const [toggleLevel2, setTogglelevel2] = useState();

    const [currentActiveTab, setCurrentActiveTab] = useState('1');
  
    const toggle = tab => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab);
    }

    return (
        <>
            {/* <Button><Link to="/directory">Rooms For Rent</Link></Button> */}
            <Card className="m-1">
                <div className="container">
                    <div className="row">
                <CardImg className="col-6" src="/assets/images/verticalPiano.jpeg" height="350" alt="vertical hands playing piano" />
                <div className="col text-left">
                <CardTitle>
                <h2>Hello and Welcome!</h2>  
                </CardTitle>
                <CardBody>
                    <p>If you are here, I hope it's because you love music! I have been teaching piano lessons since 1996.  I currently teach elementary music at HMK Elementary School in Moab, UT.  Helping students become better musicians and enrich their lives is my passion.  Read more below!</p>
                    <h3>- Ms. Sheila</h3>
                </CardBody>
                </div>
                </div>
                </div>
            </Card>
            <div style={{
            display: 'block', width: 700, padding: 30
        }}>
            <h1>All About DCM</h1>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '1'
                        })}
                        onClick={() => { toggle('1'); }}
                    >
                        Teaching Philosophy
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '2'
                        })}
                        onClick={() => { toggle('2'); }}
                    >
                        Policies and Tuition
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '3'
                        })}
                        onClick={() => { toggle('3'); }}
                    >
                        Bio
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={currentActiveTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                        <h2>Teaching Philosophy</h2>
                        <p>There are three important parts to my teaching philosophy.  FIRST: Learning music is just like learning a language.  It requires constant, small amounts of reinforcement (5 minutes a day is better than 35 minutes once a week), and accessing it through speaking and listening first before reading.  Listening to music is part of practice, singing music is part of practice, playing music is part of practice, and reading music is the final piece of the puzzle. It is important to me to help young musicians in their quest to become good musicians who can hear, create, and read music. SECOND: Everyone learns differently.  Some people learn best by seeing, some learn best by hearing, some people learn best by doing, etc.  It is important to me to access the strengths of each students' learning styles to maximize learning and then to help develop the weaker strategies. THIRD: Music is fun, and everyone learns best when they are having fun!</p>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                        <h2>Policies and Tuition</h2>
                        <p>Monthly Tuition is $85.  This includes weekly lessons (sometimes there are 3, sometimes there are 4, just depends on the month). It also includes recitals and any other incidental events. Students are allowed to miss 1 lesson per semester and reschedule for a make-up (for sickness, vacation, etc.).  To encourage good practice, I offer a $10/month discount for students who practice at least 4 days per week every week (length of practice is determined by lesson assignments and age).</p>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                        <Col sm="12">
                        <h2>Biography</h2>
                                    <p>Ms. Sheila started studying piano at age 5.  At age 9, due to a family move, she got a new piano teacher, Marge DeGiovanni, who taught using the Suzuki Method (a language-development oriented method that focuses on ear-training).  She studied piano pedagogy (the art of teaching piano) in college, graduating with a B.A. in 1999.  She continued studying music in graduate school, working also as a professional accompanist and piano teacher until she earned her M.A. in music in 2006.  She moved to Moab the year before completing grad school, and in addition to teaching piano lessons, began teaching elementary music in the fall of 2007.  She has also taught guitar, ukulele, and singing lessons.  She is currently the music teacher at HMK Elementary School for grades K-6. She holds certifications in Suzuki Piano Instruction and Orff-Schulwerk Music Instruction.</p>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div >
        </>
    );
}

export default AboutPage;
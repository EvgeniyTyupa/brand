import SimpleButton from 'Components/Button/SimpleButton'
import Container from 'Components/Container/Container'
import React from 'react'
import { useTranslation } from 'react-i18next'
import classes from './Main.module.css'

import ballons from '../../Assets/ballons.jpeg'
import squares from '../../Assets/squares.jpg'
import apple from '../../Assets/apple.jpg'
import pen from '../../Assets/pen.png'
import trener from '../../Assets/trener.png'

import { cx } from 'Utils/classnames'

const Main = (props) => {
    const { t } = useTranslation()

    return(
        <div className={classes.main}>
            <div className={classes.homeBlock}>
                <Container className={classes.home}>
                    <div className={classes.homeSide}>
                        <div className={classes.header}>
                            <h1>{t("home.title")}</h1>
                            <span>{t("home.subTitle")}</span>
                        </div>
                        <p className={classes.sub}>{t("home.sub")}</p>
                    </div>
                    <div className={classes.homeSide}>
                        <p className={classes.homeText}>{t("home.text")}</p>
                    </div>
                </Container>
                <Container className={classes.home}>
                    <div className={classes.homeSide}>
                        <SimpleButton text={t("home.button")} className={classes.homeBut}/>
                    </div>
                    <div className={classes.homeSide}>
                        <div className={classes.dates}>
                            <span>20, 22,</span>
                            <span>26, 29 {t("home.july")},</span>
                            <span>3 {t("home.aug")}</span>
                        </div>
                    </div>
                </Container>
            </div>
            <Container className={classes.redBlackLine}>
                <div className={classes.redLine}/>
                <div className={classes.blackLine}/>
            </Container>
            <Container className={classes.rpp}>
                <div className={classes.wordBlock}>
                    <span className={classes.rppHeader}>{t("rpp.one.title")}</span>
                    <span className={classes.rppText}>{t("rpp.one.text")}</span>
                </div>
                <div className={classes.wordBlock}>
                    <span className={classes.rppHeader}>{t("rpp.two.title")}</span>
                    <span className={classes.rppText}>{t("rpp.two.text")}</span>
                </div>
                <div className={classes.wordBlock}>
                    <span className={classes.rppHeader}>{t("rpp.three.title")}</span>
                    <span className={classes.rppText}>{t("rpp.three.text")}</span>
                </div>
            </Container>
            <div className={classes.aboutBlock}>
                <div className={classes.empty}>
                    <div className={classes.emptyGray}/>
                    <div className={classes.emptyWhite}/>    
                </div>
                <div className={classes.aboutBody}>
                    <Container className={classes.about}>
                        <img src={ballons} className={classes.aboutBallons}/>
                        <div className={classes.aboutSide}>
                            <ul>
                                <li>{t("about.one")}</li>
                                <li>{t("about.two")}</li>
                                <li>{t("about.three")}</li>
                                <li>{t("about.four")}</li>
                                <li>{t("about.five")}</li>
                                <li>{t("about.six")}</li>
                                <li>{t("about.seven")}</li>
                                <li>{t("about.eight")}</li>
                            </ul>
                        </div>
                    </Container>
                </div>
            </div>
            <Container className={classes.course}>
                <div className={classes.courseText}>
                    <h2>{t("course.title")}</h2>
                    <p>{t("course.one")}<br/>{t("course.two")}</p>
                    <p>{t("course.three")}</p>
                    <p>{t("course.four")}</p>
                    <p><strong>{t("course.five")}</strong></p>
                    <p>{t("course.six")}</p>
                    <p>{t("course.seven")}</p>
                </div>
                <img src={squares}/>
            </Container>
            <SimpleButton text={t("home.button")} className={cx(classes.homeBut, classes.courseBut)}/>
            <div className={classes.whoBlock}>
                <div className={classes.empty}>
                    <div className={classes.emptyGray}/>
                    <div className={classes.emptyWhite}>
                        <h2>{t("who.title")}</h2>
                    </div>
                </div>
                <div className={classes.whoBody}>
                    <Container className={classes.who}>
                        <img src={apple}/>
                        <div className={classes.whoPoints}>
                            <ul>
                                <li>{t("who.one")}</li>
                                <li>{t("who.two")}</li>
                                <li>{t("who.three")}</li>
                                <li>{t("who.four")}</li>
                                <li>{t("who.five")}</li>
                                <li>{t("who.six")}</li>
                            </ul>
                        </div>
                    </Container>
                </div>
                <div className={classes.empty}>
                    <div className={classes.emptyWhite}/>    
                    <div className={classes.emptyGray}/>
                </div>
            </div>
            <Container className={classes.programTitle}>
                <h2>{t("program.title")}</h2>
            </Container>
            <div className={classes.programBlock}>
                <div className={classes.empty}>
                    <div className={classes.emptyWhite}/>
                    <div className={cx(classes.emptyGray, classes.emptySmallGray)}/>
                </div>
                <div className={classes.programBody}>
                    <Container className={classes.program}>
                        <div className={classes.programSide}>
                            <div className={classes.programPoint}>
                                <h4>
                                    <img src={pen}/>
                                    <span>{t("program.one.title")}</span>
                                </h4>                      
                                <span className={classes.programDate}>{t("program.one.date")}</span>
                                <ul>
                                    <li>{t("program.one.one")}</li>
                                    <li>{t("program.one.two")}</li>
                                    <li>{t("program.one.three")}</li>
                                </ul>
                            </div>
                            <div className={classes.programPoint}>
                                <h4>
                                    <img src={pen}/>
                                    <span>{t("program.two.title")}</span>
                                </h4>                        
                                <span className={classes.programDate}>{t("program.two.date")}</span>
                                <ul>
                                    <li>{t("program.two.one")}</li>
                                </ul>
                            </div>
                            <div className={classes.programPoint}>
                                <h4>
                                    <img src={pen}/>
                                    <span>{t("program.three.title")}</span>
                                </h4>                      
                                <span className={classes.programDate}>{t("program.three.date")}</span>
                                <ul>
                                    <li>{t("program.three.one")}</li>
                                    <li>{t("program.three.two")}</li>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.programSide}>
                            <div className={classes.programPoint}>
                                <h4>
                                    <img src={pen}/>
                                    <span>{t("program.four.title")}</span>
                                </h4>                        
                                <span className={classes.programDate}>{t("program.four.date")}</span>
                                <ul>
                                    <li>{t("program.four.one")}</li>
                                    <li>{t("program.four.two")}</li>
                                    <li>{t("program.four.three")}</li>
                                </ul>
                            </div>
                            <div className={classes.programPoint}>
                                <h4>
                                    <img src={pen}/>
                                    <span>{t("program.five.title")}</span>
                                </h4>                   
                                <span className={classes.programDate}>{t("program.five.date")}</span>
                                <ul>
                                    <li>{t("program.five.one")}</li>
                                    <li>{t("program.five.two")}</li>
                                    <li>{t("program.five.three")}</li>
                                    <li>{t("program.five.four")}</li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                    <SimpleButton text={t("home.button")} className={classes.homeBut}/>
                </div>
            </div>
            <Container className={classes.trener}>
                <h2>{t("trener.title")}</h2>
                <div className={classes.trenerImage}>
                    <img src={trener}/>
                </div>
            </Container>
        </div>
    )
}

export default Main
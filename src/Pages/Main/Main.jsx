import SimpleButton from 'Components/Button/SimpleButton'
import Container from 'Components/Container/Container'
import React from 'react'
import { useTranslation } from 'react-i18next'
import classes from './Main.module.css'

import ballons from '../../Assets/ballons.jpeg'
import squares from '../../Assets/squares.jpg'
import apple from '../../Assets/apple.jpg'
import pen from '../../Assets/pen.png'
import trenerMob from '../../Assets/trener_mob.png'


import { cx } from 'Utils/classnames'
import SocialLinks from 'Components/SocialLinks/SocialLinks'
import SubscribeForm from 'Components/SubscribeForm/SubscribeForm'
import { useRef, useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Main = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    const { t } = useTranslation()

    const priceRef = useRef(null)

    const handleScrollToPrice = () => {
        priceRef.current.scrollIntoView()
    }

    return(
        <div className={classes.main}>
            <div className={classes.homeBlock}>
                <Container className={classes.home}>
                    <div className={classes.homeSide}>
                        <div className={classes.header}>
                            <h1 data-aos="fade-right">{t("home.title")}</h1>
                            <span data-aos="fade-right" data-aos-delay="400">{t("home.subTitle")}</span>
                        </div>
                        <p className={classes.sub} data-aos="fade-left" data-aos-delay="800">{t("home.sub")}</p>
                    </div>
                    <div className={classes.homeSide}>
                        <p className={classes.homeText} data-aos="fade-left" data-aos-delay="1200">{t("home.text")}</p>
                    </div>
                </Container>
                <Container className={classes.home}>
                    <div className={classes.homeSide} data-aos="fade-up" data-aos-delay="2200">
                        <SimpleButton action={handleScrollToPrice} text={t("home.button")} className={classes.homeBut}/>
                    </div>
                    <div className={classes.homeSide}>
                        <div className={classes.dates} data-aos="fade" data-aos-delay="1600">
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
            <Container className={classes.rpp} >
                <div className={classes.wordBlock} data-aos="fade-up">
                    <span className={classes.rppHeader}>{t("rpp.one.title")}</span>
                    <span className={classes.rppText}>{t("rpp.one.text")}</span>
                </div>
                <div className={classes.wordBlock} data-aos="fade-up">
                    <span className={classes.rppHeader}>{t("rpp.two.title")}</span>
                    <span className={classes.rppText}>{t("rpp.two.text")}</span>
                </div>
                <div className={classes.wordBlock} data-aos="fade-up">
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
                            <ul data-aos="fade-left">
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
            <Container className={classes.course} >
                <div className={classes.courseText} id="course" data-aos="fade-right">
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
            <SimpleButton action={handleScrollToPrice} text={t("home.button")} className={cx(classes.homeBut, classes.courseBut)}/>
            <div className={classes.whoBlock} id="who">
                <div className={classes.empty}>
                    <div className={classes.emptyGray}/>
                    <div className={classes.emptyWhite}>
                        <h2 data-aos="fade-down">{t("who.title")}</h2>
                    </div>
                </div>
                <div className={classes.whoBody}>
                    <Container className={classes.who}>
                        <img src={apple}/>
                        <div className={classes.whoPoints}>
                            <ul data-aos="fade-left">
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
                <h2 data-aos="fade-right">{t("program.title")}</h2>
            </Container>
            <div className={classes.programBlock} id="program">
                <div className={classes.empty}>
                    <div className={classes.emptyWhite}/>
                    <div className={cx(classes.emptyGray, classes.emptySmallGray)}/>
                </div>
                <div className={classes.programBody}>
                    <Container className={classes.program}>
                        <div className={classes.programSide} data-aos="fade-up">
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
                        <div className={classes.programSide} data-aos="fade-up">
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
                    <SimpleButton action={handleScrollToPrice} text={t("home.button")} className={classes.homeBut}/>
                </div>
            </div>
            <Container className={classes.trener}>
                <h2 id="trener" data-aos="fade">{t("trener.title")}</h2>
                <p>{t("trener.name")}</p>
                <img src={trenerMob} className={classes.trenerMob}/>
                <div className={classes.trenerImage}>
                    <span className={classes.trenerTextOne}>{t("trener.main.one")}</span>
                    <span className={classes.trenerTextTwo}>{t("trener.main.two")}</span>
                    <span className={classes.trenerTextThree}>{t("trener.main.three")}</span>
                    <span className={classes.trenerTextFour}>{t("trener.main.four")}</span>
                    <span className={classes.trenerTextFive}>{t("trener.main.five")}</span>
                </div>
                <div className={classes.trenerInfo}>
                    <ul>
                        <li>{t("trener.main.one")}</li>
                        <li>{t("trener.main.two")}</li>
                        <li>{t("trener.main.three")}</li>
                        <li>{t("trener.main.four")}</li>
                        <li>{t("trener.main.five")}</li>
                        <li>{t("trener.info.one")}</li>
                        <li>{t("trener.info.two")}</li>
                        <li>{t("trener.info.three")}</li>
                        <li>{t("trener.info.four")}</li>
                        <li>{t("trener.info.five")}</li>
                    </ul>
                </div>
               
            </Container>
            <div className={classes.priceBlock} id="price" ref={priceRef}>
                <h2>{t("price.title")}</h2>
                <div className={classes.empty}>
                    <div className={cx(classes.emptyGray, classes.emptySmallGray)}/>
                    <div className={classes.emptyWhite}/>
                </div>
                <div className={classes.priceBody}>
                    <Container className={classes.price}>
                        <div className={classes.priceItem} data-aos="fade-up">
                            <h5>{t("price.one.title")}</h5>
                            <ul>
                                <li>{t("price.one.one")}</li>
                                <li>{t("price.one.two")}</li>
                                <li>{t("price.one.three")}</li>
                                <li>{t("price.one.four")}</li>
                                <li>{t("price.one.five")}</li>
                            </ul>
                            <p>999 грн / <br/> 35 $</p>
                            <SimpleButton text={t("price.buy")}/>
                        </div>  
                        <div className={classes.priceItem} data-aos="fade-up">
                            <h5>{t("price.two.title")}</h5>
                            <ul>
                                <li>{t("price.two.one")}</li>
                                <li>{t("price.two.two")}</li>
                                <li>{t("price.two.three")}</li>
                                <li>{t("price.two.four")}</li>
                                <li>{t("price.two.five")}</li>
                                <li>{t("price.two.six")}</li>
                                <li>{t("price.two.seven")}</li>
                                <li>{t("price.two.eight")}</li>
                            </ul>
                            <p>1299 грн / <br/> 45 $</p>
                            <SimpleButton text={t("price.buy")}/>
                        </div> 
                        <div className={classes.priceItem} data-aos="fade-up">
                            <h5>{t("price.three.title")}</h5>
                            <ul>
                                <li>{t("price.three.one")}</li>
                                <li>{t("price.three.two")}</li>
                                <li>{t("price.three.three")}</li>
                                <li>{t("price.three.four")}</li>
                                <li>{t("price.three.five")}</li>
                                <li>{t("price.three.six")}</li>
                                <li>{t("price.three.seven")}</li>
                                <li>{t("price.three.eight")}</li>
                                <li>{t("price.three.nine")}</li>
                            </ul>
                            <p>5500 грн / <br/> 200 $</p>
                            <SimpleButton text={t("price.buy")}/>
                        </div> 
                    </Container>
                </div>
                <div className={classes.empty}>
                    <div className={classes.emptyWhite}/>
                    <div className={cx(classes.emptyGray, classes.emptySmallGray)}/>
                </div>
            </div>
           
            <Container className={classes.footer}>
                <SocialLinks className={classes.footerLinks}/>
                <SubscribeForm/>
            </Container>
            
        </div>
    )
}

export default Main
import React from 'react';

//styles
import classes from './contact.module.css';

import {FiMapPin, FiMail, FiPhone, FiGlobe} from 'react-icons/fi';
import Input from '../../../auth/components/inputs/Input';
import { Button } from '../../../../components';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact(props) {
    AOS.init();

    return (
        <div className={classes.container} >
            <h2>Contact <span>Us</span></h2>
            <p className={classes.intro}>For more info or guidiance get in touch with us</p>
            <div className={classes.main} data-aos="fade-up">
                <div className={classes.itemCotnainer}>
                    <div className={classes.item}>
                        <div className={classes.icon3}>
                            <FiMapPin />
                        </div>
                        <p><span>Address:</span> No 69 Piedmont St, Worcester, MA 01610, USA</p>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.icon2}>
                            <FiMail />
                        </div>
                        <p><span>Mail:</span> support@apexcorpinvestment.com</p>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.icon}>
                            <FiPhone />
                        </div>
                        <p><span>Phone:</span> +1 (352) 469 1650</p>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.icon4}>
                            <FiGlobe />
                        </div>
                        <p><span>Website:</span> www.apexcorpinvestment.com</p>
                    </div>
                </div>

                <div className={classes.inputsContainer}>
                    <Input title={'Fullname'} onChange={() => console.log('')}/>
                    <Input title={'Subject'} onChange={() => console.log('')}/>
                    <p>Message</p>
                    <textarea />
                    <Button onClick={() => console.log('')} name='Sumbit Message' />
                </div>
            </div>
        </div>
    );
}

export default Contact;
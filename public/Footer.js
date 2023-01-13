import React from 'react';
import Footer from './styles/footer.js';
import TwitterLogo from '../../images/Twitter.png';
import FacebookLogo from '../../images/Facebook.png';
import YouTubeLogo from '../../images/YouTube.png';
import LinkedInLogo from '../../images/LinkedIn.png';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>About Us</Footer.Title>
                        <li className='FooterRow'><a target="rel=noopener" href="https://www.solent.ac.uk/disclaimer/privacy-policy">Privacy policy</a></li>
                        <li className='FooterRow'><a target="rel=noopener" href="https://www.solent.ac.uk/disclaimer/cookies">Cookies</a></li>
                        <li className='FooterRow'><a target="rel=noopener" href="https://www.solent.ac.uk/disclaimer">Disclaimer</a></li>
                        <li className='FooterRow'><a target="rel=noopener" href="https://students.solent.ac.uk/accessibility">Accessibility statement</a></li>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Social</Footer.Title>
                        <li className='FooterSocials'><a target="rel=noopener" href="https://twitter.com/solentuni"><img src={TwitterLogo} alt="Twitter Logo" /></a></li>
                        <li className='FooterSocials'><a target="rel=noopener" href="https://www.facebook.com/SolentUniversity/"><img src={FacebookLogo} alt="Facebook Logo" /></a></li>
                        <li className='FooterSocials'><a target="rel=noopener" href="https://www.youtube.com/user/SolentUniOfficial"><img src={YouTubeLogo} alt="YouTube Logo" /></a></li>
                        <li className='FooterSocials'><a target="rel=noopener" href="https://www.linkedin.com/school/solentuni/"><img src={LinkedInLogo} alt="LinkedIn Logo" /></a></li>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}
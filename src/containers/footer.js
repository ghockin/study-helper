import React from 'react';
import Footer from '../components/footer';
import TwitterLogo from '../images/Twitter.png';
import FacebookLogo from '../images/Facebook.png';
import YouTubeLogo from '../images/YouTube.png';
import LinkedInLogo from '../images/LinkedIn.png';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
            <Footer.Column>
                    <Footer.Link href='#'><a target="rel=noopener" href="https://www.solent.ac.uk/disclaimer/privacy-policy">Privacy policy</a></Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href='#'><a target="rel=noopener" href="https://www.solent.ac.uk/disclaimer/cookies">Cookies</a></Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href='#'><a target="rel=noopener" href="https://www.solent.ac.uk/disclaimer">Disclaimer</a></Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href='#'><a target="rel=noopener" href="https://students.solent.ac.uk/accessibility">Accessibility statement</a></Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#"><a target="rel=noopener" href="https://twitter.com/solentuni"><img src={TwitterLogo} alt="Twitter Logo" /></a></Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#"><a target="rel=noopener" href="https://www.facebook.com/SolentUniversity/"><img src={FacebookLogo} alt="Facebook Logo" /></a></Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#"><a target="rel=noopener" href="https://www.youtube.com/user/SolentUniOfficial"><img src={YouTubeLogo} alt="YouTube Logo" /></a></Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#"><a target="rel=noopener" href="https://www.linkedin.com/school/solentuni/"><img src={LinkedInLogo} alt="LinkedIn Logo" /></a></Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}
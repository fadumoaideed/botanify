import React from 'react'
import Link from 'next/link'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'
import {
   FooterContainer,
   FooterContent,
   FooterSections,
   FooterSection,
   FooterTitle,
   FooterLink,
   SocialLinksContainer,
   SocialLink,
   CopyrightContainer
} from './footer.styles'

const Footer: React.FC = () => {
   return (
      <FooterContainer>
         <FooterContent>
            <FooterSections>
               {/* Plant Care Section */}
               <FooterSection>
                  <FooterTitle>Plant Care</FooterTitle>
                  <Link href="/plant-care" passHref legacyBehavior>
                     <FooterLink>Our Plant Care Guide</FooterLink>
                  </Link>
               </FooterSection>

               {/* Contact Section */}
               <FooterSection>
                  <FooterTitle>Contact Us</FooterTitle>
                  <FooterLink href="mailto:hello@botanify.com">
                     hello@botanify.com
                  </FooterLink>
               </FooterSection>

               {/* Social Media Section */}
               <FooterSection>
                  <FooterTitle>Follow Us</FooterTitle>
                  <SocialLinksContainer>
                     <SocialLink
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <FaInstagram size={24} />
                     </SocialLink>
                     <SocialLink
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <FaTwitter size={24} />
                     </SocialLink>
                     <SocialLink
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <FaFacebook size={24} />
                     </SocialLink>
                  </SocialLinksContainer>
               </FooterSection>
            </FooterSections>

            {/* Copyright */}
            <CopyrightContainer>
               <p>
                  &copy; {new Date().getFullYear()} Botanify. All rights
                  reserved.
               </p>
            </CopyrightContainer>
         </FooterContent>
      </FooterContainer>
   )
}

export default Footer

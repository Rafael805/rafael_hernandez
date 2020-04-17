import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebookSquare,
  faLinkedin,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faBaby } from '@fortawesome/free-solid-svg-icons';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Icon = styled(FontAwesomeIcon)`
  color: white;
  margin: 20px;
  font-size: 3.5rem;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Text = styled.div`
  font-size: 1rem;
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
`;

const ContactPage = () => {
  return (
    <MainContainer>
      <ul
        style={{
          textAlign: 'left',
          display: 'inline-block',
          listStyleType: 'none',
        }}
      >
        <li>
          <SocialContainer>
            <Anchor
              href="https://www.instagram.com/_rafaelhernandez/"
              target="_blank"
            >
              <Icon icon={faInstagram} />
            </Anchor>
            <Text>@_rafaelhernandez</Text>
          </SocialContainer>
        </li>
        <li>
          <SocialContainer>
            <Anchor
              href="https://www.facebook.com/profile.php?id=100022630700549"
              target="_blank"
            >
              <Icon icon={faFacebookSquare} />
            </Anchor>
            <Text>Rafael Hernandez</Text>
          </SocialContainer>
        </li>
        <li>
          <SocialContainer>
            <Anchor
              href="https://www.linkedin.com/in/rafael-hernandez/"
              target="_blank"
            >
              <Icon icon={faLinkedin} />
            </Anchor>
            <Text>www.linkedin.com/in/rafael-hernandez/</Text>
          </SocialContainer>
        </li>
        <li>
          <SocialContainer>
            <Anchor href="https://github.com/Rafael805/" target="_blank">
              <Icon icon={faGithubSquare} size="4x" />
            </Anchor>
            <Text>Rafael805</Text>
          </SocialContainer>
        </li>
        <li>
          <SocialContainer>
            <Anchor
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <Icon icon={faBaby} size="4x" />
            </Anchor>
            <Text>Baby Photos</Text>
          </SocialContainer>
        </li>
      </ul>
    </MainContainer>
  );
};

export default ContactPage;

import React, { FC } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import './styles.css';

interface HomepageSectionProps {
  header?: string;
  description?: string;
  className?: string;
}

const HomepageSection: FC<HomepageSectionProps> = (props) => {
  return (
    <div className={clsx('homepage__section', props.className)}>
      <div className='homepage__container'>
        {props.header && <h2 className='homepage__header'>{props.header}</h2>}
        {props.description && <p className='homepage__description'>{props.description}</p>}
        {props.children}
      </div>
    </div>
  )
}

export default function HomeLayout() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout description={siteConfig.tagline} >
      <div className='homepage'>
        <HomepageSection className='homepage__section--gradient'>
          <div className='header'>
            <div className='header__text'>
              <h1 className='header__title'>The complete reference for IOTA</h1>
              <p className='header__paragraph' >
                Build apps capable of taking millions of users on journeys they’ve never been on before. Simple. Scalable. Secure.
              </p>
              <div className='header__buttons'>
                <Link className='header__button button button--outline button--primary'>Learn about IOTA</Link>
                <Link className='header__button button button--primary'>Start building</Link>
              </div>
            </div>
            <img className='header__image' src='img/homepage/header.svg' />
          </div>
        </HomepageSection>
        <HomepageSection header='About IOTA'>
          <div className='about__cards'>
            <Link className='about__card'>
              <div className='about__icon'>{'\ue907'}</div>
              <h3 className='about__title'>What is IOTA?</h3>
              <p className='about__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit, pharetra proin quis egestas.</p>
            </Link>
            <Link className='about__card'>
              <div className='about__icon'>{'\ue907'}</div>
              <h3 className='about__title'>Get IOTA token</h3>
              <p className='about__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit, pharetra proin quis egestas.</p>
            </Link>
            <Link className='about__card'>
              <div className='about__icon'>{'\ue90a'}</div>
              <h3 className='about__title'>Pick a wallet</h3>
              <p className='about__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit, pharetra proin quis egestas.</p>
            </Link>
          </div>
        </HomepageSection>
        <HomepageSection
          header='Shimmer & IOTA'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit, pharetra proin quis egestas risus augue ante justo. Pharetra proin quis egestas risus augue ante justo.'
        >
          <div className='networks__cards'>
            <div className='networks__card'>
              <div className='networks__body'>
                <div className='networks__icon networks__icon--shimmer'>{'\ue907'}</div>
                <span className='networks__label'>Experimental</span>
                <h2 className='networks__title'>Shimmer Network</h2>
                <p className='networks__paragraph'>
                  Build and test your project.<br/>Port it later on to the mainnet.
                </p>
              </div>
              <div className='networks__body'>
                <ul className='networks__features'>
                  <li className='networks__feature networks__feature--done'>Lorem ipsum ipsum</li>
                  <li className='networks__feature networks__feature--done'>Lorem ipsum</li>
                  <li className='networks__feature networks__feature--done'>Lorem ipsum Lorem ipsum</li>
                </ul>
                <Link className='networks__button button button--outline button--primary'>
                  Learn more
                </Link>
              </div>
            </div>
            <div className='networks__card'>
              <div className='networks__body'>
                <div className='networks__icon networks__icon--iota'>{'\ue907'}</div>
                <span className='networks__label'>Stable</span>
                <h2 className='networks__title'>IOTA Mainnet</h2>
                <p className='networks__paragraph'>
                  Sit amet, consectetur adipiscing elit. Augue faucibus pellentesque convallis magna.
                </p>
              </div>
              <div className='networks__body'>
                <ul className='networks__features'>
                  <li className='networks__feature networks__feature--done'>Lorem ipsum ipsum</li>
                  <li className='networks__feature'>To be announced</li>
                  <li className='networks__feature'>To be announced</li>
                </ul>
                <Link className='networks__button button button--outline button--primary'>
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </HomepageSection>
      </div>
    </Layout>
  );
}

import Head from 'next/head'
import ListContainer from './listContainer';
import data from "../public/data.json";
import { PeopleContext } from "./PeopleContext.js";
import {useState} from 'react';

export default function Home() {
  const [people, setPeople] = useState(data.data);

  return (
    <div className="container">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Rule of Thumb</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet" />
      </Head>
      <nav className="nav" role="navigation">
        <div className="max-centered">
          <h1 className="nav__logo">Rule of thumb.</h1>
          <button className="nav__hamburger icon-button" alt="Open Menu">
            <svg width={25} height={20} xmlns="http://www.w3.org/2000/svg"><path d="M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z" fill="#FFF" fillRule="nonzero" /></svg>
          </button>
          <ul className="nav__links">
            <li>
              <a href="#">Past Trials</a>
            </li>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">Login / Sign Up</a>
            </li>
            <li>
              <form>
                <input className="nav__search-input" aria-label="search" type="text" />
                <button className="nav__search icon-button" alt="Search" type="submit">
                  <img src="img/search.svg" alt="search" />
                </button>
              </form>
            </li>
          </ul>
        </div>
      </nav>
      <header className="hero">
        <img className="hero__background" srcSet="img/pope-francis.png 750w, img/pope-francis.@2x.png 1440w" sizes="(min-width: 750px) 1440px, 100vw" src="img/pope-francis.png" alt="Pope Francis" />
        <div className="max-centered">
          <div className="hero__featured-card">
            <div className="featured-card__glass-background" />
            <div className="featured-card__content">
              <p className="featured-card__hairline">What's your opinion on</p>
              <h2 className="featured-card__title">Pope Francis?</h2>
              <p className="featured-card__desc">
                He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
              </p>
              <p className="featured-card__more-info">
                <a href="http://wikipedia.com">
                  <svg className="featured-card__more-info-icon" preserveAspectRatio="xMaxYMid meet" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 18"><path d="M27 .303c0 .1-.032.2-.09.28a.255.255 0 01-.2.125 2.46 2.46 0 00-1.453.602 5.676 5.676 0 00-1.166 1.952l-6.127 14.533c-.04.135-.152.203-.337.203a.374.374 0 01-.337-.203l-3.436-7.564-3.952 7.564a.374.374 0 01-.337.203.34.34 0 01-.349-.203L3.196 3.262a5.052 5.052 0 00-1.19-1.89A3.161 3.161 0 00.267.708.23.23 0 01.086.6.378.378 0 010 .355C0 .118.064 0 .192 0 .73 0 1.29.025 1.876.075c.544.053 1.056.078 1.536.078.49 0 1.067-.026 1.732-.078C5.839.025 6.456 0 6.994 0c.128 0 .192.118.192.355 0 .235-.04.352-.119.352a2.308 2.308 0 00-1.268.43c-.297.22-.47.581-.463.963.015.263.08.521.192.757l4.975 11.826 2.824-5.614-2.631-5.807A7.637 7.637 0 009.53 1.257a2.274 2.274 0 00-1.382-.55A.208.208 0 017.986.6a.4.4 0 01-.078-.245c0-.237.054-.355.168-.355.494-.002.987.023 1.477.075.46.054.92.08 1.382.078.48 0 .988-.026 1.525-.078C13.013.025 13.558 0 14.094 0c.128 0 .192.118.192.355 0 .235-.038.352-.119.352-1.073.078-1.61.399-1.61.963.047.414.174.814.373 1.175l1.74 3.72 1.732-3.403c.209-.37.333-.786.36-1.215 0-.775-.536-1.188-1.61-1.24-.097 0-.144-.117-.144-.352a.44.44 0 01.071-.24c.05-.077.098-.115.145-.115.385 0 .857.025 1.418.075.536.053.978.078 1.322.078a13.6 13.6 0 001.093-.065A16.806 16.806 0 0120.584 0c.095 0 .142.1.142.303 0 .27-.088.405-.263.405-.54.036-1.061.224-1.508.544a6.937 6.937 0 00-1.423 2.01l-2.308 4.492 3.125 6.702 4.614-11.294c.149-.36.23-.745.24-1.137 0-.828-.537-1.267-1.61-1.317-.097 0-.145-.118-.145-.353 0-.237.071-.355.216-.355.392 0 .857.025 1.394.075.496.053.914.078 1.25.078.409-.003.818-.03 1.224-.078.483-.05.915-.075 1.3-.075.111 0 .168.1.168.303z" fill="#FFF" fillRule="nonzero" /></svg>More information
                </a>
              </p>
              <p className="featured-card__cta">
                What’s Your Veredict?
              </p>
              <div className="featured-card__buttons">
                <button className="icon-button" aria-label="thumbs up">
                  <img src="img/thumbs-up.svg" alt="thumbs up" />
                </button>
                <button className="icon-button" aria-label="thumbs down">
                  <img src="img/thumbs-down.svg" alt="thumbs down" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__closing-gauge">
          <div className="closing-gauge__left">
            <span className="closing-gauge__title">closing in</span>
          </div>
          <div className="closing-gauge__right">
            <span className="closing-gauge__number">22</span>
            <span className="closing-gauge__desc">days</span>
          </div>
        </div>
      </header>
      <div className="max-centered">
        <aside className="banner banner-top" role="doc-tip" aria-label="Speak Out">
          <div className="banner__left">
            <span className="banner__hairline">Speak out. Be heard.</span>
            <span className="banner__title">Be counted</span>
          </div>
          <div className="banner__right">
            <p className="banner__text">
              Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
            </p>
          </div>
          <button className="icon-button" aria-label="close">
            <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg"><g stroke="#000" strokeWidth={2} fill="none" fillRule="evenodd"><path d="M1 19L19 1M1 1l18 18" /></g></svg>
          </button>
        </aside>
        <main role="main">
          {/* Start: Implementation */}
          <PeopleContext.Provider value={[people, setPeople]}>
            <ListContainer className="list-container"/>
          </PeopleContext.Provider>
          {/* End: Implementation */}
        </main>
        <aside className="banner banner-bottom" role="doc-tip" aria-label="Submit a name">
          <img srcSet="img/bg-people.png 750w, img/bg-people.@2x.png 1440w" sizes="(min-width: 750px) 1440px, 100vw" className="banner__background" src="img/bg-people.png" alt="" role="none" />
          <div className="banner__left">
            <h2 className="banner__heading">Is there anyone else you would want us to add?</h2>
          </div>
          <div className="banner__right">
            <button className="banner__cta">
              Submit a name
            </button>
          </div>
        </aside>
        <hr role="separator" />
        <footer className="footer">
            <div className="footer__links">
              <ul>
                <li>
                  <a href="#">Terms and Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="footer__social">
              <span>Follow us</span>
              <ul>
                <li>
                  <a href="#">
                    <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg"><path d="M24 1.325v21.35c0 .732-.593 1.325-1.325 1.325H16.56v-9.294h3.12l.467-3.622H16.56V8.771c0-1.048.292-1.763 1.796-1.763h1.918v-3.24a25.663 25.663 0 00-2.795-.143c-2.766 0-4.659 1.688-4.659 4.788v2.671H9.691v3.622h3.128V24H1.325A1.325 1.325 0 010 22.676V1.325A1.325 1.325 0 011.325 0h21.35A1.325 1.325 0 0124 1.325z" fill="#262626" fillRule="nonzero" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg width={26} height={23} xmlns="http://www.w3.org/2000/svg"><path d="M23.329 6.204c.01.23.01.458.01.687A15.182 15.182 0 01-.008 19.688c.421.05.845.075 1.27.073a10.7 10.7 0 006.627-2.289 5.335 5.335 0 01-4.984-3.704c.798.151 1.62.12 2.404-.094a5.346 5.346 0 01-4.276-5.233v-.073a5.396 5.396 0 002.413.666 5.357 5.357 0 01-1.654-7.127A15.15 15.15 0 0012.79 7.484a5.898 5.898 0 01-.135-1.217 5.336 5.336 0 019.228-3.652 10.612 10.612 0 003.392-1.29 5.368 5.368 0 01-2.351 2.955 10.811 10.811 0 003.07-.843 10.868 10.868 0 01-2.664 2.767z" fill="#262626" fillRule="nonzero" /></svg>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
        <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

        <style jsx global>{`
        :root {
          --color-green-positive: 60, 187, 180;
          --color-yellow-negative: 249, 173, 29;
          --color-dark-background: rgba(0, 0, 0, .4);
          --color-darker-background: rgba(0, 0, 0, .6);
          --color-darker-gray: rgba(51, 51, 51, 1);
          --color-dark-gray: rgba(70, 70, 70, 1);
          --color-light-gray: rgba(235, 235, 235, 1);
          --color-light-background: rgba(255, 255, 255, .4);
          --color-lighter-background: rgba(255, 255, 255, .8);
          --color-white: rgba(255, 255, 255, 1);
        }
      
        html,
        body {
          padding: 0;
          margin: 0;
          width: 100%;
          background-color: var(--color-white);
          font-family: 'Lato', sans-serif;
          font-size: 12px;
          font-weight: 400;
        }
        body {
          position: relative;
      }
      
      a, a:visited {
          color: var(--color-white);
      }
      
      button {
          font-family: 'Lato', sans-serif;
      }
      
      ul {
          padding: 0;
          margin: 0;
          list-style: none;
      }
      
      hr[role="separator"] {
          border: 0 none;
          border-bottom: 2px dotted var(--color-dark-gray);
          margin: 1.5rem 1rem;
      }
      
      .nav {
          position: fixed;
          z-index: 2;
          top: 0;
          display: flex;
          width: calc(100vw - 2rem);
          min-height: 10rem;
          justify-content: space-between;
          padding: 0 1rem;
          background: linear-gradient(
              to bottom, 
              rgba(0, 0, 0, .8) 0%, 
              rgba(0, 0, 0, 0) 80%
          );
      }
      
      .icon-button {
          padding: 0;
          border: 0;
          background-color: transparent;
      }
      
      .icon-button[aria-label="thumbs up"] {
          background-color: rgba(var(--color-green-positive), .8);
      }
      
      .icon-button[aria-label="thumbs up"]:hover {
          background-color: rgba(var(--color-green-positive), 1);
      }
      
      .icon-button[aria-label="thumbs down"] {
          background-color: rgba(var(--color-yellow-negative), .8);
      }
      
      .icon-button[aria-label="thumbs down"]:hover {
          background-color: rgba(var(--color-yellow-negative), 1);
      }
      
      .icon-button > img {
          width: 100%;
          height: 100%;
      }
      
      .nav__logo {
          margin: 2.5rem 0 0;
          color: var(--color-white);
          font-size: 2rem;
          font-weight: 400;
          line-height: 2.5rem;
      }
      
      .nav__hamburger {
          position: relative;
          top: 2rem;
          right: 1rem;
          width: 25px;
          height: 20px;
      }
      
      .nav__links {
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          display: flex;
          width: 100vw;
          height: calc(100vh - 4rem);
          flex-direction: column;
          padding: 4rem 0 2rem;
          background-color: var(--color-darker-background);
          transform: translateX(100vw);
      }
      
      .nav__links li {
          width: 100%;
          margin: 3rem 0;
          font-size: 2rem;
          text-align: center;
      }
      
      .nav__links a {
          color: var(--color-white);
          text-decoration: none;
      }
      
      .nav__hamburger:focus + .nav__links,
      .nav__links:focus-within {
          transform: translateX(0);
      }
      
      .nav__links li:last-child {
          order: -1;
      }
      
      .nav__search {
          width: 24px;
          height: 24px;
          margin-left: .5rem;
      }
      
      .nav__search-input {
          width: 25vw;
          border: 0;
          border-bottom: 2px solid var(--color-white);
          background-color: transparent;
          border-radius: 0;
          color: var(--color-white);
          font-family: 'Lato', sans-serif;
          font-size: 1.5rem;
          transition: width .2s ease-in;
      }
      
      .nav__search-input:focus {
          width: 60vw;
          outline: 0 none;
      }
      
      .hero {
          position: relative; 
          overflow: hidden;
          height: 80vw;
          min-height: 35rem;
          max-height: 38rem;
          margin-bottom: 2rem;
      }
      
      .hero__background {
          position: absolute;
          left: -35vw;
          width: 160vw;
          height: 100%;
          object-fit: cover;
      }
      
      .hero__featured-card {
          position: relative;
          top: 5.5rem;
          left: 1rem;
          overflow: hidden;
          width: 55vw;
          max-height: 25rem;
      }
      
      .hero__closing-gauge {
          position: absolute;
          bottom: 0;
          display: flex;
          width: 100%;
          height: 3rem;
          background-color: var(--color-light-background);
      }
      
      .featured-card__glass-background {
          position: absolute;
          top: -20%;
          left: -20%;
          width: 140%;
          height: 140%;
          background:
              center no-repeat linear-gradient(
                  var(--color-dark-background),
                  var(--color-dark-background)
              ),
              -25vw 0/160vw no-repeat url('../img/pope-francis.png');
          filter: blur(1rem);
      }
      
      .featured-card__content {
          position: relative;
          padding: 1rem;
          color: var(--color-white);
      }
      
      .featured-card__hairline {
          margin: 0;
          font-weight: 300;
          white-space: nowrap;
      }
      
      .featured-card__title {
          margin: 0;
          font-size: 3rem;
          font-weight: 400;
          line-height: 1;
      }
      
      .featured-card__desc {
          display: -webkit-box;
          overflow: hidden;
          max-height: 10.5rem;
          margin: 1rem 0;
          -webkit-box-orient: vertical;
          font-size: 1.25rem;
          font-weight: 300;
          -webkit-line-clamp: 6;
          text-overflow: ellipsis;
      }
      
      .featured-card__cta {
          font-weight: 700;
      }
      
      .featured-card__buttons {
          display: flex;
          justify-content: space-between;
          margin: 0 -1rem -1rem;
      }
      
      .featured-card__buttons > .icon-button {
          width: 50%;
          height: 2.75rem;
      }
      
      .featured-card__buttons > .icon-button > img {
          max-width: 1.25rem;
      }
      
      .closing-gauge__left {
          position: relative;
          display: flex;
          width: 30%;
          align-items: center;
          justify-content: flex-end;
          padding: 0 .25rem 0 0;
          background-color: var(--color-dark-background);
          color: var(--color-white);
          font-weight: 300;
          text-transform: uppercase;
      }
      
      .closing-gauge__left:after {
          position: absolute;
          right: -.5rem;
          display: block;
          width: 0;
          height: 0;
          border-top: 0.25rem solid transparent;
          border-bottom: 0.25rem solid transparent;
          border-left: 0.5rem solid var(--color-dark-background);
          content: ' ';
      }
      
      .closing-gauge__right {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 0 0 0 .75rem;
      }
      
      .closing-gauge__number {
          color: var(--color-dark-gray);
          font-size: 1.5rem;
          font-weight: 400;
      }
      
      .closing-gauge__desc {
          color: var(--color-dark-gray);
          font-size: 1.5rem;
          font-weight: 300;
      }
      
      .banner {
          position: relative;
          display: flex;
          overflow: hidden;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          margin: 1rem;
          background-color: var(--color-light-gray);
      }
      
      .banner__background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          object-fit: cover;
          opacity: .2;
          pointer-events: none;
      }
      
      .banner-top .banner__left {
          flex-basis: 40%;
          padding-right: 1rem;
      }
      
      .banner-top .banner__left > .banner__hairline {
          color: var(--color-dark-gray);
          font-size: 1.25rem;
          font-weight: 300;
          letter-spacing: -.07rem;
      }
      
      .banner-top .banner__left > .banner__title {
          display: block;
          color: var(--color-dark-gray);
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -.05rem;
      }
      
      .banner-top .banner__right {
          flex-basis: 60%;
      }
      
      .banner-top .banner__text {
          margin: 0;
          color: var(--color-dark-gray);
          font-size: 1.25rem;
          font-weight: 300;
          letter-spacing: -.05rem;
      }
      
      .banner-bottom {
          flex-direction: column;
          padding: 1rem 3rem;
          margin-top: 2rem;
      }
      
      .banner-bottom .banner__heading {
          position: relative;
          margin: 0 0 1rem;
          color: var(--color-dark-gray);
          font-size: 2rem;
          font-weight: 400;
          text-align: center;
      }
      
      .banner-bottom .banner__right {
          width: 100%;
      }
      
      .banner-bottom .banner__cta {
          position: relative;
          display: block;
          width: 100%;
          padding: 1rem 0;
          border: 2px solid var(--color-darker-background);
          background: transparent;
          color: var(--color-darker-gray);
          font-size: 1.5rem;
      }
      
      main[role="main"] {
          padding: 0 1rem;
          margin-top: 2rem;
      }
      
      main h2,
      main h3,
      main h4 {
          color: var(--color-dark-gray);
          font-weight: 300;
      }
      
      main h2 {
          margin: 0 0 2rem;
          font-size: 2rem;
      }
      
      .footer {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin: 0 1rem 3rem;
      }
      
      .footer__links li {
          padding: .5rem 0;
          font-size: 1.25rem;
      }
      
      .footer__links li a {
          color: var(--color-dark-gray);
          text-decoration: none;
      }
      
      .footer__links li a:hover {
          color: var(--color-darker-gray);
          text-decoration: underline;
      }
      
      .footer__social > span {
          color: var(--color-darker-gray);
          font-size: 1.25rem;
          text-align: right;
      }
      
      .footer__social > ul {
          display: flex;
          margin-top: 1rem;
      }
      
      .footer__social > ul > li {
          margin-right: 1rem;
      }
      
      .featured-card__more-info {
          display: none;
      }
      
      .featured-card__more-info-icon {
          width: 1.5rem;
          height: 1rem;
          margin-right: .5rem;
      }
      
      .banner-top .icon-button {
          display: none;
      }
      
      .max-centered {
          display: contents;
      }
      
      @media all and (min-width: 500px) {
          .banner-top .banner__left {
              flex-basis: 30%;
          }
      
          .banner-top .banner__right {
              flex-basis: 70%;
          }
      }
      
      @media all and (min-width: 768px) {
          html, body {
              font-size: 14px;
          }
      
          .hero {
              max-height: 38rem;
          }
      
          .hero__background {
              top: -6.5rem;
              left: 0;
              width: 110vw;
              height: auto;
          }
      
          .featured-card__glass-background {
              background:
                  center no-repeat linear-gradient(var(--color-dark-background), var(--color-dark-background)),
                  7vw -6.5rem/115vw auto no-repeat url(../img/pope-francis.png);
          }
      
          .featured-card__content {
              padding: 2rem 1.5rem;
          }
      
          .featured-card__more-info {
              display: inline-block;
              margin: 0;
              font-weight: 300;
          }
      
          .featured-card__buttons {
              margin: 0 -1.5rem -2rem;
          }
      
          .banner-top .banner__left {
              flex-basis: 20%;
          }
      
          .banner-top .banner__right {
              flex-basis: 80%;
          }
      
          .banner-bottom {
              flex-direction: row;
              justify-content: space-between;
              padding: 1rem 2rem;
          }
      
          .banner-bottom .banner__background {
              top: -230%;
          }
      
          .banner-bottom .banner__right {
              width: auto;
          }
      
          .banner-bottom .banner__heading {
              margin-bottom: 0;
              font-size: 1.5rem;
          }
      
          .banner-bottom .banner__cta {
              width: 16rem;
          }
      
          .footer {
              align-items: flex-start;
          }
      
          .footer__links ul,
          .footer__social {
              display: flex;
          }
      
          .footer__links ul li {
              padding: 0;
              margin-right: 2rem;
              font-size: 1rem;
          }
      
          .footer__social {
              align-items: center;
          }
      
          .footer__social span {
              margin-right: 1rem;
              color: var(--color-dark-gray);
              font-size: 0.833rem;
          }
      
          .footer__social > ul {
              margin-top: 3px;
          } 
      }
      
      @media all and (min-width: 1100px) {
          html, body {
              font-size: 18px;
          }
      
          .max-centered {
              position: relative;
              display: block;
              width: 100vw;
              max-width: 1100px;
              margin-right: auto;
              margin-left: auto;
          }
      
          .max-centered > *,
          .max-centered > hr[role="separator"] {
              margin-right: 0;
              margin-left: 0;
          }
      
          .max-centered main {
              padding: 0;
          }
      
          .nav {
              min-height: 22vh;
          }
      
          .nav__logo {
              margin-top: 3rem;
          }
      
          .nav__hamburger {
              display: none;
          }
      
          .nav__links {
              position: absolute;
              top: 3rem;
              right: 0;
              left: auto;
              width: 40vw;
              height: auto;
              flex-direction: row;
              align-items: center;
              justify-content: flex-end;
              padding: 0;
              background-color: transparent;
              transform: translateX(0);
          }
      
          .nav__links li {
              width: fit-content;
              margin: 0 1rem 0 0;
              font-size: 1rem;
              font-weight: 300;
              text-align: right;
          }
      
          .nav__links li:last-child {
              order: 0;
          }
      
          .nav__search {
              width: 2rem;
              height: 2rem;
          }
      
          .nav__search-input {
              display: none;
          }
      
          .hero {
              min-height: 700px;
          }
      
          .hero__background {
              top: -2.5rem;
              left: 0;
              width: 100vw;
              height: auto;
          }
      
          .hero__featured-card {
              left: 0;
              width: 50%;
              min-width: 600px;
              max-height: unset;
              margin-top: 2.5rem;
          }
      
          .featured-card__glass-background {
              background:
                  center no-repeat linear-gradient(var(--color-dark-background), var(--color-dark-background)),
                  calc(-50vw + 650px) -6rem/105vw auto no-repeat url(../img/pope-francis.png);
          }
      
          .featured-card__content {
              padding: 2rem 1.5rem;
          }
      
          .featured-card__desc {
              max-width: 85%;
              margin: 2rem 0 1rem;
          }
      
          .featured-card__cta {
              margin: 1rem 0 2rem;
              font-size: 1.5rem;
          }
      
          .featured-card__buttons {
              margin: 0 -1.5rem -2rem;
          }
      
          .featured-card__buttons > .icon-button {
              height: auto;
          }
      
          .featured-card__buttons > .icon-button > img {
              max-width: 2rem;
              height: 2rem;
              margin: 1.3rem 0;
          }
      
          .closing-gauge__left {
              padding-right: 1rem;
          }
      
          .closing-gauge__right {
              padding-left: 1rem;
          }
      
          .closing-gauge__title {
              font-size: 1.25rem;
          }
      
          .closing-gauge__number,
          .closing-gauge__desc {
              font-size: 2rem;
          }
      
          .closing-gauge__left:after {
              border-top-width: 0.33rem;
              border-bottom-width: 0.33rem;
          } 
      
          .banner-top .banner__text,
          .banner-top .banner__left > .banner__hairline {
              font-size: 1rem;
          }
      
          .banner-top .banner__left > .banner__title {
              font-size: 1.5rem;
              letter-spacing: 0;
          }
      
          .banner-top .icon-button {
              display: block;
              margin-left: 2rem;
          }
      
          .banner-bottom .banner__cta {
              width: 20rem;
          }
      
          main h2 {
              font-size: 2.5rem;
          }
      
          hr[role="separator"] {
              margin: 2rem 0;
          }

        }
        .list-container {
          justify-content: space-between;
        }
      
      `}</style>
      </div>
      )
}

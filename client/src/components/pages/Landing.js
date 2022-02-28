import React from "react";
import "./../assets/Landing.css";
import SmoothScroll from "smooth-scroll";
import Carousel from "./../layout/Carousel";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export default function Landing() {
  return (
    <>
      <header id='header'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12 intro-text'>
                 <a
                    href='/Signup'
                    className='btn btn-custom btn-lg'
                  >
                    Sign Up
                  </a>{' '}
                  <a
                    href='/Login'
                    className='btn btn-custom btn-lg'
                  >
                    Login
                  </a>{' '}
                  <p>Tandem Fandom is THE people finding app for the Who's Whovian of your favorite fandoms!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
          <div id='features' className='text-center'>
          <div className='container'>
            {/* <div className='col-md-10 col-md-offset-1 section-title'> */}<div className='section-title'>
              <h2>Features</h2>
            </div>
            <div className=''>
              <Carousel/>
            </div>
          </div>
        </div>
        </>
    )
}

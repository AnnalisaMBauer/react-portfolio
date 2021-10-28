import React from 'react';
import {Slider, Slide, Caption} from 'react-materialize';

function Header(){
return (
<Slider
  fullscreen={false}
  options={{
    duration: 500,
    height: 400,
    indicators: true,
    interval: 6000
  }}
>
  <Slide image={<img alt="" src="https://user-images.githubusercontent.com/87721575/132913782-9d9b3185-3846-444c-8ef1-0ed828521688.png"/>}>
    <Caption placement="center">
      <h3>
        Feeling Hungry?
      </h3>
      <h5 className="light grey-text text-lighten-3">
      Have you ever been stuck not knowing what to eat for dinner? Our web app will generate a recipe for you. Just choose from chicken, beef, or vegan options and a recipe will generate. Too tired to cook? Our web app will also suggest the nearest restaurant to you. You also have the option to add and remove your favorite recipes.
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://user-images.githubusercontent.com/87721575/136629029-62e2a0b9-0c0e-4ff4-9b00-c623b92e20eb.mp4"/>}>
    <Caption placement="left">
      <h3>
        Coding Jobs
      </h3>
      <h5 className="light grey-text text-lighten-3">
      Coding Jobs is a site we have created to make it easier for the tech community to find and apply for jobs in their field. It requires a login so that applicants can view job listings and businesses can post said listings, using Bulma, Handlebars, Javascript, and some CSS we were able to bring this site to life.
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://lorempixel.com/780/580/nature/3"/>}>
    <Caption placement="right">
      <h3>
        Right Aligned Caption
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Here's our small slogan.
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://lorempixel.com/580/250/nature/4"/>}>
    <Caption placement="center">
      <h3>
        This is our big Tagline!
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Here's our small slogan.
      </h5>
    </Caption>
  </Slide>
</Slider>
)
}

export default Header;
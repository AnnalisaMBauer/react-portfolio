import React from 'react';
import {Slider, Slide, Caption} from 'react-materialize';

function Header(){
return (
<Slider

  className='z-depth-1'
  fullscreen={false}
  options={{
    duration: 500,
    height: 400,
    indicators: true,
    interval: 6000
  }}
>
  <Slide image={<img alt="Feeling Hungry App" src="https://user-images.githubusercontent.com/87721575/132913782-9d9b3185-3846-444c-8ef1-0ed828521688.png"/>}>
    <Caption placement="center">
      <h3 href='https://mbelfrom.github.io/group-project-mag/'>
        Feeling Hungry?
      </h3>
      <h5 className="light grey-text text-lighten-3">
      Have you ever been stuck not knowing what to eat for dinner? Our web app will generate a recipe for you. Just choose from chicken, beef, or vegan options and a recipe will generate. Too tired to cook? Our web app will also suggest the nearest restaurant to you. You also have the option to add and remove your favorite recipes.
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="Coding Jobs App" src="https://github.com/AnnalisaMBauer/react-portfolio/blob/main/src/img/project2.png?raw=true"/>}>
    <Caption placement="left">
      <h3 href='https://coding-jobs-345234.herokuapp.com'>
        Coding Jobs
      </h3>
      <h5 className="light grey-text text-lighten-3">
      Coding Jobs is a site we have created to make it easier for the tech community to find and apply for jobs in their field. It requires a login so that applicants can view job listings and businesses can post said listings, using Bulma, Handlebars, Javascript, and some CSS we were able to bring this site to life.
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="Project 3" src="https://lorempixel.com/780/580/nature/3"/>}>
    <Caption placement="right">
      <h3>
        Project 3
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Project 3 information
      </h5>
    </Caption>
  </Slide>
</Slider>
)
}

export default Header;
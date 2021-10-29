import React from "react";
import {Row, Col, Card, Icon, CardTitle} from 'react-materialize'

function Portfolio(){
return(
<Row>
  <Col
    m={6}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="https://fitness--trackerr.herokuapp.com/?id=6179ad6e3690ed0016e0af73">This is a Link</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://user-images.githubusercontent.com/87721575/138014305-8e6fbfcd-a3e0-4a0b-b9bf-8e30c9ae88b3.png">Deployed Application</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      Here is the standard card with an image thumbnail.
    </Card>
  </Col>
  <Col
    m={6}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="#">This is a Link</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Deployed Application</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      Here is the standard card with an image thumbnail.
    </Card>
  </Col>
  <Col
    m={6}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="https://mbelfrom.github.io/group-project-mag/">Deployed Application</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://user-images.githubusercontent.com/87721575/132913782-9d9b3185-3846-444c-8ef1-0ed828521688.png">Feeling Hungry</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
  Have you ever been stuck not knowing what to eat for dinner? Our web app will generate a recipe for you. Just choose from chicken, beef, or vegan options and a recipe will generate. Too tired to cook? Our web app will also suggest the nearest restaurant to you. You also have the option to add and remove your favorite recipes.
    </Card>
  </Col>
  <Col
    m={6}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="https://coding-jobs-345234.herokuapp.com">Deployed Application</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://github.com/AnnalisaMBauer/react-portfolio/blob/main/src/img/project2.png?raw=true">Coding Jobs</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
   Coding Jobs is a site we have created to make it easier for the tech community to find and apply for jobs in their field. It requires a login so that applicants can view job listings and businesses can post said listings, using Bulma, Handlebars, Javascript, and some CSS we were able to bring this site to life.
    </Card>
  </Col>
</Row>

)
}

export default Portfolio;
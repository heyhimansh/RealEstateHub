// import React from 'react';
// import { Container, Title, Text, Button, Group } from '@mantine/core';
// import { Illustration } from './illustration.jsx';
// import classes from './error.css?inline';

// function NothingFoundBackground() {
//   return (
//     <Container className={classes.root}>
//       <div className={classes.inner}>
//         <Illustration className={classes.image} />
//         <div className={classes.content}>
//           <Title className={classes.title}>Nothing to see here</Title>
//           <Text c="dimmed" size="lg" ta="center" className={classes.description}>
//             Page you are trying to open does not exist. You may have mistyped the address, or the
//             page has been moved to another URL. If you think this is an error contact support.
//           </Text>
//           <Group justify="center">
//             <Button size="md">Take me back to home page</Button>
//           </Group>
//         </div>
//       </div>
//     </Container>
//   );
// }

// export default NothingFoundBackground;

import React from "react";
import { Title, Text, Button, Container, Group } from "@mantine/core";
import "./error.css";

function NothingFoundBackground() {
  return (
    <div>
      <Container className="root">
        <div className="label">404</div>
        <Title className="title">You have found a secret place.</Title>
        <Text c="dimmed" size="lg" ta="center" className="description">
          Unfortunately, this is only a 404 page. You may have mistyped the
          address, or the page has been moved to another URL.
        </Text>
        <br />
        <Group style={{ justifyContent: "center" }}>
          <Button variant="subtle" size="md">
            Take me back to the home page
          </Button>
        </Group>
      </Container>
    </div>
  );
}

export default NothingFoundBackground;

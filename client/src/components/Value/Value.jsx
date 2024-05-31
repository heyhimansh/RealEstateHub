import React from "react";
import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  useMantineTheme,
} from "@mantine/core";
import {
  IconGauge,
  IconUser,
  IconCookie,
  IconCoinBitcoin,
  IconCashBanknote,
  IconCash,
} from "@tabler/icons-react";
import classes from "./Value.css";

const mockdata = [
  {
    title: "Best Interest Rates on the Market",
    description:
      "Finding your dream home is exciting, and securing the best mortgage rate makes it even better. Our expert team constantly monitors the market to offer you the most competitive interest rates. With our tailored mortgage solutions, you can save money and invest in your future with confidence.",
    icon: IconGauge,
  },
  {
    title: "Expert Advice",
    description:
      "Our experienced real estate professionals are here to guide you every step of the way, offering personalized advice and support tailored to your unique needs. Benefit from in-depth market analysis, accurate property valuations, and skilled negotiation to secure the best deals. ",
    icon: IconUser,
  },
  {
    title: "Best Price on the Market",
    description:
      "We guarantee the best prices for both buyers and sellers. Our extensive network and cutting-edge technology allow us to provide unmatched value. Whether you are purchasing your first home or selling a property, our pricing strategies ensure you get the best deal possible. ",
    icon: IconCash,
  },
];

export default function Value() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => {
    const IconComponent = feature.icon;
    return (
      <Card
        key={feature.title}
        shadow="md"
        radius="md"
        className={classes.card}
        padding="xl"
      >
        <IconComponent
          style={{ width: "50px", height: "50px" }}
          stroke={2}
          color={theme.colors.blue[6]}
        />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    );
  });

  return (
    <Container size="lg" py="65px">
      <Group position="center">
        <Badge variant="filled" size="lg">
          Best company ever
        </Badge>
      </Group>
      {/* <span className="set">Exceptional Services Tailored for You </span>
          <span style={{color :"black"}}></span> */}
      
      <h2  className="set" >
        Exceptional Services Tailored for You
      </h2>

      <Text
        color="dimmed"
        className={classes.description}
        align="center"
        mt="md"
      >
        Our comprehensive real estate services are designed to meet your unique
        needs, providing unparalleled support and expertise every step of the
        way. Experience the difference with personalized solutions that ensure
        your success in the market.
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}

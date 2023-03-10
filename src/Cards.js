// TODO: answer here
import { Box, Image, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card({ card }) {
  return (
    <Link to={`/card/${card.id}`}>
      <Box className="yugioh-card">
        <Image src={card.card_images[0].image_url} />
        <Heading textAlign={"center"} as={"h2"} size="md">
          {card.name}
        </Heading>
      </Box>
    </Link>
  );
}

export default Card;

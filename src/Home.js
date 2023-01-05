import { useEffect, useState } from "react";
import { SimpleGrid, Select, Container } from "@chakra-ui/react";
import Card from "./Cards";

// TODO: answer here

function Home() {
  // TODO: answer here
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const url =
      "https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4";
    const response = await fetch(url);
    const data = await response.json();
    setCardData(data.data);
    setIsLoading(false);
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  function sortData(type) {
    setCardData(card => {
      return [...card].sort((a, b) => {
        if (a[type] < b[type]){
          return -1;
        }
        if (a[type] > b[type]){
          return 1;
        }
        return 0;
      })
    })
    
  }

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <Container maxW="container.lg" marginY="4">
      <Select name="sort" onChange={(e) => sortData(e.target.value)} placeholder="Sort by" marginBottom={4}>
        <option value="name">Name</option>
        <option value="atk">Attack</option>
        <option value="def">Defence</option>
      </Select>
      <SimpleGrid columns={[1, 2, 4]} spacing={5}>
        {cardData.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Home;

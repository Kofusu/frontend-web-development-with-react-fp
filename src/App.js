// TODO: answer here
import { Routes, Route } from "react-router-dom"
import { Box, Center, Heading } from "@chakra-ui/react"
import Home from "./Home"
import Detail from "./Detail"

const App = () => {
  const MyRouter = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card">
        <Route path=":id" element={<Detail />} />
      </Route>
      <Route path="*" element={<h1>404 Page not found!</h1>} />
    </Routes>
  )

  return (
    <div className="App">
      {/* Navbar */}
      <Box w="100vw" bg="#b25819" p={6}>
        <Center>
          <Heading as="h1" color="#e2ded5">
            Yugi-Oh Card Deck
          </Heading>
        </Center>
      </Box>

      {/* Route */}
      <MyRouter />
    </div>
  );
};

export default App;

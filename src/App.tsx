import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* Your application code goes here */}
    </ChakraProvider>
  );
}

export default App;

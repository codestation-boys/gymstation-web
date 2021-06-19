import { Flex, SimpleGrid, Box, Text, Divider, Center, Stack } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";

export default function Partners() {
  return (
    <Flex w="100%">
      <Sidebar />
      <SimpleGrid
        flex="1"
        gap="14"
        minChildWidth="320px"
        align="flex-start"
        p="8"
      >
        <Stack
          direction="row"
          bg="gray.600"
          h="85px"
          p={4}
          spacing={4}
          borderRadius={12}
          align="center"
        >
          <Text>1.2km</Text>

          <Divider orientation="vertical" />

          <Stack direction="column" h="100%" spacing={1}>
            <Text>Arthur</Text>

            <Divider orientation="horizontal" />

            <Stack spacing={3} direction="row" align="center">
              <Text>Sair do Sedent.</Text>
              <Box w="6px" h="6px" bg="white" borderRadius={3}></Box>
              <Text>Caminhada</Text>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          bg="gray.600"
          h="85px"
          p={4}
          spacing={4}
          borderRadius={12}
          align="center"
        >
          <Text>1.2km</Text>

          <Divider orientation="vertical" />

          <Stack direction="column" h="100%" spacing={1}>
            <Text>Arthur</Text>

            <Divider orientation="horizontal" />

            <Stack spacing={3} direction="row" align="center">
              <Text>Sair do Sedent.</Text>
              <Box w="6px" h="6px" bg="white" borderRadius={3}></Box>
              <Text>Caminhada</Text>
            </Stack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Flex>
  );
}
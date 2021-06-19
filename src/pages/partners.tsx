import { Flex, SimpleGrid, Box, Text, Divider, Center, Stack } from "@chakra-ui/react";
import { PartnerBox } from "../components/PartnerBox";
import { Sidebar } from "../components/Sidebar";

export default function Partners() {
  return (
    <Flex w="100%">
      <Sidebar />
      <SimpleGrid
        flex="1"
        gap="14"
        minChildWidth="320px"
        h="100%"
        align="flex-start"
        p="8"
      >
        <PartnerBox
          distance={1.2}
          partner="Arthur"
          activity="Caminhada"
          goal="Sair do Sedent."
        />

        <PartnerBox
          distance={1.3}
          partner="Savio Castelo"
          activity="Caminhada"
          goal="Sair do Sedent."
        />

        <PartnerBox
          distance={1.4}
          partner="Jhonata Gutemberg"
          activity="Academia"
          goal="Perder peso"
        />

        <PartnerBox
          distance={1.9}
          partner="Ana Julia"
          activity="Academia"
          goal="Perder peso"
        />
      </SimpleGrid>
    </Flex>
  );
}
import Head from "next/head";
import { Flex, SimpleGrid, Icon, Heading } from "@chakra-ui/react";
import { RiMapPinUserFill } from "react-icons/ri";
import { PartnerBox } from "../components/PartnerBox";
import { Sidebar } from "../components/Sidebar";

export default function Partners() {
  return (
    <Flex w="100%">
      <Head>
        <title>GymStation | Encontrar parceiros de treino</title>
      </Head>

      <Sidebar />

      <Flex direction="column" w="100%" h="100%">
        <Flex align="center" mt="16" mb="2">
          <Icon as={RiMapPinUserFill} w="28px" h="34px" mr="4" />
          <Heading size="lg" fontSize="24px">
            Encontrar parceiros de treino
          </Heading>
        </Flex>

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
    </Flex>
  );
}
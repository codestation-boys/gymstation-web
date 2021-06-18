import {
  Avatar,
  Box,
  Flex,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  Divider,
} from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiDossierLine,
  RiNewspaperLine,
} from "react-icons/ri";
import { FaDumbbell } from "react-icons/fa";
import { useSession } from "next-auth/client";

export function Sidebar() {
  const [session] = useSession();

  return (
    <Box as="aside" w="64" m="2.5rem" display={["none", "none", "block"]}>
      <Stack spacing="12">
        <Box boxSize="16" width="218px" height="48px">
          <Image src="/images/logo_row_wide.svg" alt="Gymstation logo" />
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" align="center" href="/dashboard">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>
            <Link display="flex" align="center" href="/blog">
              <Icon as={RiNewspaperLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Blog
              </Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            CADASTROS
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" align="center">
              <Icon as={RiDossierLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Medições
              </Text>
            </Link>
            <Link display="flex" align="center">
              <Icon as={FaDumbbell} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Treino
              </Text>
            </Link>
          </Stack>
        </Box>
        {session?.user ? (
          <>
            <Divider />
            <Box>
              <Flex direction="row" spacing="2">
                <Avatar
                  size="md"
                  name={session.user.name}
                  src={session.user.image}
                />
                <Box ml="2">
                  <Text fontSize="lg" fontWeight="medium">
                    {session.user.name}
                  </Text>
                  <Text fontSize="sm" fontWeight="normal">
                    {session.user.email}
                  </Text>
                </Box>
              </Flex>
            </Box>
          </>
        ) : (
          <></>
        )}
      </Stack>
    </Box>
  );
}

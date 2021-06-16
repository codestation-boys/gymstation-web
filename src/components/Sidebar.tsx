import {Box, Icon, Link, Stack, Text} from "@chakra-ui/react";
import {RiDashboardLine, RiDossierLine, RiNewspaperLine} from "react-icons/ri";
import {FaDumbbell} from "react-icons/fa";

export function Sidebar() {
  return (
    <Box as='aside' w='64' mr='8'>
      <Stack spacing='12' align='flex-start'>
        <Box>
          <Text fontWeight='bold' color='gray.400' fontSize='small'>
            GERAL
          </Text>
          <Stack spacing='4' mt='8' align='stretch'>
            <Link display='flex' align='center'>
              <Icon as={RiDashboardLine} fontSize='20'/>
              <Text ml='4' fontWeight='medium'>Dashboard</Text>
            </Link>
            <Link display='flex' align='center'>
              <Icon as={RiNewspaperLine} fontSize='20'/>
              <Text ml='4' fontWeight='medium'>Blog</Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight='bold' color='gray.400' fontSize='small'>
            CADASTROS
          </Text>
          <Stack spacing='4' mt='8' align='stretch'>
            <Link display='flex' align='center'>
              <Icon as={RiDossierLine} fontSize='20'/>
              <Text ml='4' fontWeight='medium'>Medições</Text>
            </Link>
            <Link display='flex' align='center'>
              <Icon as={FaDumbbell} fontSize='20'/>
              <Text ml='4' fontWeight='medium'>Treino</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
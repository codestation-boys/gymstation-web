import {Flex, Text, Input, Icon, HStack, Box, Avatar, Image} from "@chakra-ui/react";
import {RiNotificationLine, RiSearchLine, RiUserAddLine} from "react-icons/ri";

export function Header() {
    return (
        <Flex
            as='header'
            width='100%'
            maxWidth={1480}
            height='20'
            mx='auto'
            mt='4'
            align='center'
            px='6'
        >
            <Box boxSize="16" >
                <Image src="/images/logo.svg" alt="GYMSTATION" />
            </Box>


            <Flex
                align='center'
                ml='auto'
            >
                <HStack
                    spacing='8' mx='8' pr='8' py='1' color='gray.300'
                    borderRightWidth={1} borderColor='gray.700'
                >
                    <Icon as={RiNotificationLine} fontSize='20'/>
                </HStack>
                <Flex
                align='center'

                >
                    <Box mr='4' textAlign='right'>
                        <Text>Enos Andrade</Text>
                        <Text color='gray.300' fontSize='small'>
                            enosads@gmail.com
                        </Text>
                    </Box>
                    <Avatar size='md' name='Enos Andrade' src='https://github.com/enosads.png'/>
                </Flex>
            </Flex>
        </Flex>

    );
}
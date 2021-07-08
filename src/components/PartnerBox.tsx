import { Stack, Text, Divider, Box, Heading } from "@chakra-ui/react";

type PartnerBoxProps = {
  partner: string,
  goal: string,
  activity: string,
  distance: number
}

export function PartnerBox(
  { partner, goal, activity, distance }: PartnerBoxProps) {

  return (
    <Stack
      direction="row"
      bg="gray.600"
      h="85px"
      p={4}
      spacing={4}
      borderRadius={12}
      fontWeight="bold"
      align="center"
    >
      <Text fontSize="1.125rem">{distance}km</Text>

      <Divider orientation="vertical" />

      <Stack direction="column" h="100%" spacing={1}>
        <Heading size="md">{partner}</Heading>

        <Divider orientation="horizontal" />

        <Stack spacing={3} direction="row" align="center">
          <Text noOfLines={1}>{goal}</Text>
          <Box w="6px" h="6px" bg="white" borderRadius={3}></Box>
          <Text>{activity}</Text>
        </Stack>
      </Stack>
    </Stack>
  )
}
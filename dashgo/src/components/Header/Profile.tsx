import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Thaís Silveira</Text>
          <Text color="gray.300" fontSize="small">
            thais_lsilveira@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Thaís Silveira"
        src="https://avatars.githubusercontent.com/u/34002389?v=4"
      />
    </Flex>
  )
}

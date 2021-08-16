import { Box, Text, Flex, Card } from "rebass";
import Image from "next/image";

const PostLaunch = () => {
  return (
    <>
      <Flex
        justifyContent="space-between"
        mx={[0, 2]}
        mb={[5, 7]}
        flexWrap={["wrap"]}
      >
        <Card
          width={[1, 1 / 2]}
          sx={{
            borderRadius: 16,
          }}
          p={[0, 3]}
          mb={[4]}
        >
          <Box
            height="300px"
            sx={{
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Image
              quality="70"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
              src="/studio.png"
            />
          </Box>
          <Text fontSize={[4]} py={[2]}>
            Eagle studio
          </Text>
        </Card>
        <Card
          width={[1, 1 / 2]}
          sx={{
            borderRadius: 16,
          }}
          p={[0, 3]}
          mb={[4]}
        >
          <Box
            height={["200px", "300px"]}
            sx={{
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Image
              quality="70"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
              src="/ip_development.png"
            />
          </Box>
          <Text fontSize={[4]} py={[2]}>
            IP development
          </Text>
        </Card>
        <Card
          width={[1]}
          sx={{
            borderRadius: 16,
          }}
          p={[0, 3]}
          mb={[4]}
        >
          <Box
            height="500px"
            sx={{
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Image
              quality="70"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
              src="/walk_of_fame.png"
            />
          </Box>
          <Text fontSize={[4]} py={[2]}>
            NFThodlers have a chance to star in developed projects
          </Text>
        </Card>
        <Card
          width={[1]}
          sx={{
            borderRadius: 16,
          }}
          p={[0, 3]}
          mb={[4]}
        >
          <Box
            height={["130px", "350px"]}
            sx={{
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Image
              quality="70"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
              src="/nft_ticket.png"
            />
          </Box>
          <Text fontSize={[4]} py={[2]}>
            NFT serves as ticket to future IP projects & is a marketed
            collectible
          </Text>
        </Card>
      </Flex>
    </>
  );
};

export default PostLaunch;

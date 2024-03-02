import React from "react";
import { Box, Container, VStack, Heading, Text, Image, Flex, IconButton, Link, useColorMode, useColorModeValue, Button } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub, FaMoon, FaSun } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={4} as="header">
        <Flex justifyContent="space-between" width="full" align="center">
          <Heading as="h1" size="xl">
            George Clinton
          </Heading>
          <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} isRound={true} size="md" alignSelf="flex-start" onClick={toggleColorMode} variant="ghost" />
        </Flex>
        <Text fontSize="lg" color={textColor}>
          Full-Stack Developer, Music Enthusiast, and Life-Long Learner
        </Text>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1518105570919-e342af1a8275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxHZW9yZ2UlMjBDbGludG9ufGVufDB8fHx8MTcwOTQwMzM4M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="George Clinton" />
        <Flex gap={2}>
          <Link isExternal href="https://twitter.com/georgeclinton">
            <IconButton aria-label="Twitter" icon={<FaTwitter />} />
          </Link>
          <Link isExternal href="https://linkedin.com/in/georgeclinton">
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} />
          </Link>
          <Link isExternal href="https://github.com/georgeclinton">
            <IconButton aria-label="GitHub" icon={<FaGithub />} />
          </Link>
        </Flex>
      </VStack>

      <VStack spacing={4} as="main" align="flex-start" marginTop={8}>
        <Heading as="h2" size="lg">
          About Me
        </Heading>
        <Text color={textColor}>Hi there! I'm a passionate software engineer with over 10 years of experience in building web applications. I specialize in JavaScript and have extensive knowledge in React.js. I'm also a big fan of funk music and play bass guitar in my free time.</Text>

        <Heading as="h2" size="lg">
          Projects
        </Heading>
        <VStack spacing={3} align="flex-start">
          <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" width="full" bg={bgColor}>
            <Heading as="h3" size="md">
              Funky Portfolio
            </Heading>
            <Text mt={2} color={textColor}>
              A React-based portfolio showcasing my work and music. Features an interactive gallery of projects and a music player for my latest tracks.
            </Text>
            <Button mt={2} as="a" href="https://funkyportfolio.com" target="_blank">
              View Project
            </Button>
          </Box>
          {/* More project boxes can be added here */}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;

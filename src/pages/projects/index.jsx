import { Box, Text, Icon, SlideFade, SimpleGrid } from '@chakra-ui/react';
import{ Container, Footer, ProjectCard } from '../../components'
import { getProjectDetails } from '../../services';
import { SiWebpack } from 'react-icons/si'
import Head from 'next/head';

function Projects({ project }) {

    return (
    <Container height="100vh" >
    <Head>
        <title>Projects | Bloug goBloug</title>
        <link rel="icon" href="https://cdn.discordapp.com/attachments/949216626715279391/953555857524789288/Amogus.png" />
    </Head>

    <Box marginX="auto" paddingX="5" textAlign="center">
        <SlideFade in={true} offsetY="3em" delay={0.4}>
            <Text marginTop='24' marginBottom={`10`} marginLeft="-1" fontSize="4xl">
                Projects
                <Icon as={SiWebpack} marginLeft='3' w={7} h={7} color="#008E6E" />
            </Text>
            <SimpleGrid marginTop="20" marginX="auto" paddingX="5" columns={[1, null, 2]} spacing='40px'>
                {project.map((item, index) => (
                    <ProjectCard project={item.node} key={index} />
                    ))}
            </SimpleGrid>
        </SlideFade>
    </Box>
    <Footer />
</Container>
    )

}

export default Projects

export async function getStaticProps() {
    const project = (await getProjectDetails()) || [];
    return {
        props: { project }
    };
}
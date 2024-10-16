import { Div, H1, P } from '@stylin.js/elements';

const Hero = () => {
  return (
    <Div display="flex" alignItems="center" flexDirection="column">
      <Div
        pt="3rem"
        height="30rem"
        display="flex"
        alignItems="center"
        flexDirection="column"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundImage="url('/img/background.webp')"
      >
        <Div display="flex" alignItems="center" flexDirection="column">
          <Div color="#fff" display="flex" justifyContent="center">
            <H1
              mb="2rem"
              fontSize={['2rem', '2rem', '2rem', '3.75rem', '3.75rem']}
            >
              SUICOIN Terminal
            </H1>
          </Div>
          <Div color="#fff" maxWidth="48rem">
            <P
              fontWeight="500"
              textAlign="center"
              lineHeight="1.875rem"
              fontSize={['0.875rem', '0.875rem', '0.875rem', '1rem', '1rem']}
            >
              SUI Terminal is an open-source, lightweight version of Jupiter
              that offers an end-to-end swap flow solution. Easily integrate it
              into your HTML for seamless swaps across platforms.
            </P>
          </Div>
        </Div>
      </Div>
      <Div
        p="1.5rem"
        gap="1rem"
        mt="-13rem"
        width="76rem"
        bg="#171f28"
        display="flex"
        height="47.5rem"
        borderRadius="1rem"
      >
        <Div
          bg="black"
          height="100%"
          width="16.5rem"
          borderRadius="inherit"
        ></Div>
        <Div
          bg="black"
          height="100%"
          width="fill-available"
          borderRadius="inherit"
        ></Div>
      </Div>
    </Div>
  );
};

export default Hero;

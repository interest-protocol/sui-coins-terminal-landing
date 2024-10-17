import { Button, Div, Span } from '@stylin.js/elements';

const HeroModal = () => {
  return (
    <Div
      px={['1rem', '2rem', '2rem', 'unset', 'unset']}
      mt={['-3rem', '-3rem', 'unset', 'unset', 'unset']}
      display="flex"
      width="21.813rem"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Button
        mb="1rem"
        bg="#28282F"
        border="none"
        cursor="pointer"
        height="12.688rem"
        borderRadius="1rem"
        nHover={{
          opacity: '0.7',
        }}
        width={[
          'fill-available',
          'fill-available',
          '16.5rem',
          '16.5rem',
          '16.5rem',
        ]}
      />
      <Span color="#fff" fontWeight="700" fontSize="0.875rem">
        Click to Launch Terminal Modal
      </Span>
    </Div>
  );
};

export default HeroModal;

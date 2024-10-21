import { SwapTerminal } from '@interest-protocol/sui-coins-terminal';
import { Div } from '@stylin.js/elements';

const IntegratedTerminal = () => {
  return (
    <Div
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      width={['90%', '90%', '90%', '50%', '50%']}
      height="90%"
    >
      <SwapTerminal
        typeIn="0x2::sui::SUI" // SUI address
        projectAddress="0xdb3a22be6a37c340c6fd3f67a7221dfb841c818442d856f5d17726f4bcf1c8af" // Project DAO address
        typeOut="0x07ab9ba99abd9af0d687ae55079601192be5a12d1a21c8c4cd9f1a17519111e0::emoji::EMOJI" // Target coin address
      />
    </Div>
  );
};

export default IntegratedTerminal;

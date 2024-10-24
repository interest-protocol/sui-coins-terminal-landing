import { Aggregator } from '@interest-protocol/sui-coins-terminal';

export interface AddonsFormProps {
  coinInType: string;
  coinOutType: string;
  fixedCoinIn: boolean;
  slippage: `${number}`;
  fixedCoinOut: boolean;
  aggregator: Aggregator;
  fixedAmountIn: boolean;
  projectAddress: string;
  fixedAmountOut: boolean;
}

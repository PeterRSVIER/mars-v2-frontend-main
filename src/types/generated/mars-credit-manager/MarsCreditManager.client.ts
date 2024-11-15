// @ts-nocheck
/**
 * This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from '@cosmjs/cosmwasm-stargate'
import { StdFee } from '@cosmjs/amino'
import {
  HealthContractBaseForString,
  IncentivesUnchecked,
  Uint128,
  Decimal,
  OracleBaseForString,
  ParamsBaseForString,
  RedBankUnchecked,
  SwapperBaseForString,
  ZapperBaseForString,
  InstantiateMsg,
  KeeperFeeConfig,
  Coin,
  ExecuteMsg,
  AccountKind,
  Action,
  ActionAmount,
  Int128,
  Condition,
  Comparison,
  LiquidateRequestForVaultBaseForString,
  VaultPositionType,
  SwapperRoute,
  AccountNftBaseForString,
  PerpsBaseForString,
  OwnerUpdate,
  Action2,
  Expiration,
  Timestamp,
  Uint64,
  CallbackMsg,
  Addr,
  HealthState,
  LiquidateRequestForVaultBaseForAddr,
  ChangeExpected,
  PnL,
  ActionCoin,
  VaultBaseForString,
  AstroRoute,
  AstroSwap,
  OsmoRoute,
  OsmoSwap,
  ConfigUpdates,
  NftConfigUpdates,
  VaultBaseForAddr,
  HealthValuesResponse,
  QueryMsg,
  ActionKind,
  VaultPositionAmount,
  VaultAmount,
  VaultAmount1,
  UnlockingPositions,
  VaultPosition,
  LockingVaultAmount,
  VaultUnlockingPosition,
  ArrayOfAccount,
  Account,
  PaginationResponseForTriggerOrderResponse,
  TriggerOrderResponse,
  TriggerOrder,
  Metadata,
  ArrayOfCoinBalanceResponseItem,
  CoinBalanceResponseItem,
  ArrayOfSharesResponseItem,
  SharesResponseItem,
  ArrayOfDebtShares,
  DebtShares,
  ArrayOfVaultPositionResponseItem,
  VaultPositionResponseItem,
  PaginationResponseForVaultUtilizationResponse,
  VaultUtilizationResponse,
  ConfigResponse,
  OwnerResponse,
  RewardsCollector,
  ArrayOfCoin,
  Positions,
  DebtAmount,
  PerpPosition,
  PnlAmounts,
  ArrayOfVaultBinding,
  VaultBinding,
  VaultPositionValue,
  CoinValue,
} from './MarsCreditManager.types'
export interface MarsCreditManagerReadOnlyInterface {
  contractAddress: string
  accountKind: ({ accountId }: { accountId: string }) => Promise<AccountKind>
  accounts: ({
    limit,
    owner,
    startAfter,
  }: {
    limit?: number
    owner: string
    startAfter?: string
  }) => Promise<ArrayOfAccount>
  config: () => Promise<ConfigResponse>
  vaultUtilization: ({ vault }: { vault: VaultBaseForString }) => Promise<VaultUtilizationResponse>
  allVaultUtilizations: ({
    limit,
    startAfter,
  }: {
    limit?: number
    startAfter?: string
  }) => Promise<PaginationResponseForVaultUtilizationResponse>
  positions: ({
    accountId,
    action,
  }: {
    accountId: string
    action?: ActionKind
  }) => Promise<Positions>
  allCoinBalances: ({
    limit,
    startAfter,
  }: {
    limit?: number
    startAfter?: string[][]
  }) => Promise<ArrayOfCoinBalanceResponseItem>
  allDebtShares: ({
    limit,
    startAfter,
  }: {
    limit?: number
    startAfter?: string[][]
  }) => Promise<ArrayOfSharesResponseItem>
  totalDebtShares: () => Promise<DebtShares>
  allTotalDebtShares: ({
    limit,
    startAfter,
  }: {
    limit?: number
    startAfter?: string
  }) => Promise<ArrayOfDebtShares>
  allVaultPositions: ({
    limit,
    startAfter,
  }: {
    limit?: number
    startAfter?: string[][]
  }) => Promise<ArrayOfVaultPositionResponseItem>
  estimateProvideLiquidity: ({
    coinsIn,
    lpTokenOut,
  }: {
    coinsIn: Coin[]
    lpTokenOut: string
  }) => Promise<Uint128>
  estimateWithdrawLiquidity: ({ lpToken }: { lpToken: Coin }) => Promise<ArrayOfCoin>
  vaultPositionValue: ({
    vaultPosition,
  }: {
    vaultPosition: VaultPosition
  }) => Promise<VaultPositionValue>
  allTriggerOrders: ({
    limit,
    startAfter,
  }: {
    limit?: number
    startAfter?: string[][]
  }) => Promise<PaginationResponseForTriggerOrderResponse>
  allAccountTriggerOrders: ({
    accountId,
    limit,
    startAfter,
  }: {
    accountId: string
    limit?: number
    startAfter?: string
  }) => Promise<PaginationResponseForTriggerOrderResponse>
  vaultBindings: ({
    limit,
    startAfter,
  }: {
    limit?: number
    startAfter?: string
  }) => Promise<ArrayOfVaultBinding>
}
export class MarsCreditManagerQueryClient implements MarsCreditManagerReadOnlyInterface {
  client: CosmWasmClient
  contractAddress: string
  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client
    this.contractAddress = contractAddress
    this.accountKind = this.accountKind.bind(this)
    this.accounts = this.accounts.bind(this)
    this.config = this.config.bind(this)
    this.vaultUtilization = this.vaultUtilization.bind(this)
    this.allVaultUtilizations = this.allVaultUtilizations.bind(this)
    this.positions = this.positions.bind(this)
    this.allCoinBalances = this.allCoinBalances.bind(this)
    this.allDebtShares = this.allDebtShares.bind(this)
    this.totalDebtShares = this.totalDebtShares.bind(this)
    this.allTotalDebtShares = this.allTotalDebtShares.bind(this)
    this.allVaultPositions = this.allVaultPositions.bind(this)
    this.estimateProvideLiquidity = this.estimateProvideLiquidity.bind(this)
    this.estimateWithdrawLiquidity = this.estimateWithdrawLiquidity.bind(this)
    this.vaultPositionValue = this.vaultPositionValue.bind(this)
    this.allTriggerOrders = this.allTriggerOrders.bind(this)
    this.allAccountTriggerOrders = this.allAccountTriggerOrders.bind(this)
    this.vaultBindings = this.vaultBindings.bind(this)
  }
  accountKind = async ({ accountId }: { accountId: string }): Promise<AccountKind> => {
    return this.client.queryContractSmart(this.contractAddress, {
      account_kind: {
        account_id: accountId,
      },
    })
  }
  accounts = async ({
    limit,
    owner,
    startAfter,
  }: {
    limit?: number
    owner: string
    startAfter?: string
  }): Promise<ArrayOfAccount> => {
    return this.client.queryContractSmart(this.contractAddress, {
      accounts: {
        limit,
        owner,
        start_after: startAfter,
      },
    })
  }
  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {},
    })
  }
  vaultUtilization = async ({
    vault,
  }: {
    vault: VaultBaseForString
  }): Promise<VaultUtilizationResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      vault_utilization: {
        vault,
      },
    })
  }
  allVaultUtilizations = async ({
    limit,
    startAfter,
  }: {
    limit?: number
    startAfter?: string
  }): Promise<PaginationResponseForVaultUtilizationResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_vault_utilizations: {
        limit,
        start_after: startAfter,
      },
    })
  }
  positions = async ({
    accountId,
    action,
  }: {
    accountId: string
    action?: ActionKind
  }): Promise<Positions> => {
    return this.client.queryContractSmart(this.contractAddress, {
      positions: {
        account_id: accountId,
        action,
      },
    })
  }
  allCoinBalances = async ({
    limit,
    startAfter,
  }: {
    limit?: number
    startAfter?: string[][]
  }): Promise<ArrayOfCoinBalanceResponseItem> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_coin_balances: {
        limit,
        start_after: startAfter,
      },
    })
  }
  allDebtShares = async ({
    limit,
    startAfter,
  }: {
    limit?: number
    startAfter?: string[][]
  }): Promise<ArrayOfSharesResponseItem> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_debt_shares: {
        limit,
        start_after: startAfter,
      },
    })
  }
  totalDebtShares = async (): Promise<DebtShares> => {
    return this.client.queryContractSmart(this.contractAddress, {
      total_debt_shares: {},
    })
  }
  allTotalDebtShares = async ({
    limit,
    startAfter,
  }: {
    limit?: number
    startAfter?: string
  }): Promise<ArrayOfDebtShares> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_total_debt_shares: {
        limit,
        start_after: startAfter,
      },
    })
  }
  allVaultPositions = async ({
    limit,
    startAfter,
  }: {
    limit?: number
    startAfter?: string[][]
  }): Promise<ArrayOfVaultPositionResponseItem> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_vault_positions: {
        limit,
        start_after: startAfter,
      },
    })
  }
  estimateProvideLiquidity = async ({
    coinsIn,
    lpTokenOut,
  }: {
    coinsIn: Coin[]
    lpTokenOut: string
  }): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      estimate_provide_liquidity: {
        coins_in: coinsIn,
        lp_token_out: lpTokenOut,
      },
    })
  }
  estimateWithdrawLiquidity = async ({ lpToken }: { lpToken: Coin }): Promise<ArrayOfCoin> => {
    return this.client.queryContractSmart(this.contractAddress, {
      estimate_withdraw_liquidity: {
        lp_token: lpToken,
      },
    })
  }
  vaultPositionValue = async ({
    vaultPosition,
  }: {
    vaultPosition: VaultPosition
  }): Promise<VaultPositionValue> => {
    return this.client.queryContractSmart(this.contractAddress, {
      vault_position_value: {
        vault_position: vaultPosition,
      },
    })
  }
  allTriggerOrders = async ({
    limit,
    startAfter,
  }: {
    limit?: number
    startAfter?: string[][]
  }): Promise<PaginationResponseForTriggerOrderResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_trigger_orders: {
        limit,
        start_after: startAfter,
      },
    })
  }
  allAccountTriggerOrders = async ({
    accountId,
    limit,
    startAfter,
  }: {
    accountId: string
    limit?: number
    startAfter?: string
  }): Promise<PaginationResponseForTriggerOrderResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_account_trigger_orders: {
        account_id: accountId,
        limit,
        start_after: startAfter,
      },
    })
  }
  vaultBindings = async ({
    limit,
    startAfter,
  }: {
    limit?: number
    startAfter?: string
  }): Promise<ArrayOfVaultBinding> => {
    return this.client.queryContractSmart(this.contractAddress, {
      vault_bindings: {
        limit,
        start_after: startAfter,
      },
    })
  }
}
export interface MarsCreditManagerInterface extends MarsCreditManagerReadOnlyInterface {
  contractAddress: string
  sender: string
  createCreditAccount: (
    accountKind: AccountKind,
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[],
  ) => Promise<ExecuteResult>
  updateCreditAccount: (
    {
      accountId,
      accountKind,
      actions,
    }: {
      accountId?: string
      accountKind?: AccountKind
      actions: Action[]
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[],
  ) => Promise<ExecuteResult>
  repayFromWallet: (
    {
      accountId,
    }: {
      accountId: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[],
  ) => Promise<ExecuteResult>
  executeTriggerOrder: (
    {
      accountId,
      triggerOrderId,
    }: {
      accountId: string
      triggerOrderId: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[],
  ) => Promise<ExecuteResult>
  updateConfig: (
    {
      updates,
    }: {
      updates: ConfigUpdates
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[],
  ) => Promise<ExecuteResult>
  updateOwner: (
    ownerUpdate: OwnerUpdate,
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[],
  ) => Promise<ExecuteResult>
  updateNftConfig: (
    {
      config,
      ownership,
    }: {
      config?: NftConfigUpdates
      ownership?: Action2
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[],
  ) => Promise<ExecuteResult>
  callback: (
    callbackMsg: CallbackMsg,
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[],
  ) => Promise<ExecuteResult>
  updateBalanceAfterDeleverage: (
    {
      accountId,
      pnl,
    }: {
      accountId: string
      pnl: PnL
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[],
  ) => Promise<ExecuteResult>
}
export class MarsCreditManagerClient
  extends MarsCreditManagerQueryClient
  implements MarsCreditManagerInterface
{
  client: SigningCosmWasmClient
  sender: string
  contractAddress: string
  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress)
    this.client = client
    this.sender = sender
    this.contractAddress = contractAddress
    this.createCreditAccount = this.createCreditAccount.bind(this)
    this.updateCreditAccount = this.updateCreditAccount.bind(this)
    this.repayFromWallet = this.repayFromWallet.bind(this)
    this.executeTriggerOrder = this.executeTriggerOrder.bind(this)
    this.updateConfig = this.updateConfig.bind(this)
    this.updateOwner = this.updateOwner.bind(this)
    this.updateNftConfig = this.updateNftConfig.bind(this)
    this.callback = this.callback.bind(this)
    this.updateBalanceAfterDeleverage = this.updateBalanceAfterDeleverage.bind(this)
  }
  createCreditAccount = async (
    accountKind: AccountKind,
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[],
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        create_credit_account: accountKind,
      },
      fee,
      memo,
      _funds,
    )
  }
  updateCreditAccount = async (
    {
      accountId,
      accountKind,
      actions,
    }: {
      accountId?: string
      accountKind?: AccountKind
      actions: Action[]
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[],
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        update_credit_account: {
          account_id: accountId,
          account_kind: accountKind,
          actions,
        },
      },
      fee,
      memo,
      _funds,
    )
  }
  repayFromWallet = async (
    {
      accountId,
    }: {
      accountId: string
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[],
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        repay_from_wallet: {
          account_id: accountId,
        },
      },
      fee,
      memo,
      _funds,
    )
  }
  executeTriggerOrder = async (
    {
      accountId,
      triggerOrderId,
    }: {
      accountId: string
      triggerOrderId: string
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[],
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        execute_trigger_order: {
          account_id: accountId,
          trigger_order_id: triggerOrderId,
        },
      },
      fee,
      memo,
      _funds,
    )
  }
  updateConfig = async (
    {
      updates,
    }: {
      updates: ConfigUpdates
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[],
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        update_config: {
          updates,
        },
      },
      fee,
      memo,
      _funds,
    )
  }
  updateOwner = async (
    ownerUpdate: OwnerUpdate,
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[],
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        update_owner: ownerUpdate,
      },
      fee,
      memo,
      _funds,
    )
  }
  updateNftConfig = async (
    {
      config,
      ownership,
    }: {
      config?: NftConfigUpdates
      ownership?: Action2
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[],
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        update_nft_config: {
          config,
          ownership,
        },
      },
      fee,
      memo,
      _funds,
    )
  }
  callback = async (
    callbackMsg: CallbackMsg,
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[],
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        callback: callbackMsg,
      },
      fee,
      memo,
      _funds,
    )
  }
  updateBalanceAfterDeleverage = async (
    {
      accountId,
      pnl,
    }: {
      accountId: string
      pnl: PnL
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[],
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        update_balance_after_deleverage: {
          account_id: accountId,
          pnl,
        },
      },
      fee,
      memo,
      _funds,
    )
  }
}
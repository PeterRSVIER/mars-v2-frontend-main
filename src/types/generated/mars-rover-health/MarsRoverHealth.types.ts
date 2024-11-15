// @ts-nocheck
/**
 * This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

export interface InstantiateMsg {
  credit_manager?: string | null
  owner: string
}
export type ExecuteMsg =
  | {
      update_owner: OwnerUpdate
    }
  | {
      update_config: {
        credit_manager: string
      }
    }
export type OwnerUpdate =
  | {
      propose_new_owner: {
        proposed: string
      }
    }
  | 'clear_proposed'
  | 'accept_proposed'
  | 'abolish_owner_role'
  | {
      set_emergency_owner: {
        emergency_owner: string
      }
    }
  | 'clear_emergency_owner'
export type QueryMsg =
  | {
      health_values: {
        account_id: string
        action: ActionKind
      }
    }
  | {
      health_state: {
        account_id: string
        action: ActionKind
      }
    }
  | {
      config: {}
    }
export type ActionKind = 'default' | 'liquidation'
export interface ConfigResponse {
  credit_manager?: string | null
  owner_response: OwnerResponse
}
export interface OwnerResponse {
  abolished: boolean
  emergency_owner?: string | null
  initialized: boolean
  owner?: string | null
  proposed?: string | null
}
export type HealthState =
  | 'healthy'
  | {
      unhealthy: {
        max_ltv_health_factor: Decimal
      }
    }
export type Decimal = string
export type Uint128 = string
export interface HealthValuesResponse {
  above_max_ltv: boolean
  has_perps: boolean
  liquidatable: boolean
  liquidation_health_factor?: Decimal | null
  liquidation_threshold_adjusted_collateral: Uint128
  max_ltv_adjusted_collateral: Uint128
  max_ltv_health_factor?: Decimal | null
  perps_pnl_losses: Uint128
  perps_pnl_profit: Uint128
  total_collateral_value: Uint128
  total_debt_value: Uint128
}
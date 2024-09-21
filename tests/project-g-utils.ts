import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AddUser,
  Approval,
  ApprovalForAll,
  OrderCancelled,
  OrderCreated,
  OrderStatusMessage,
  OrderUpdated,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Transfer
} from "../generated/ProjectG/ProjectG"

export function createAddUserEvent(role: Bytes, account: Address): AddUser {
  let addUserEvent = changetype<AddUser>(newMockEvent())

  addUserEvent.parameters = new Array()

  addUserEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  addUserEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return addUserEvent
}

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createOrderCancelledEvent(
  orderId: string,
  amount: BigInt,
  customer: Address
): OrderCancelled {
  let orderCancelledEvent = changetype<OrderCancelled>(newMockEvent())

  orderCancelledEvent.parameters = new Array()

  orderCancelledEvent.parameters.push(
    new ethereum.EventParam("orderId", ethereum.Value.fromString(orderId))
  )
  orderCancelledEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  orderCancelledEvent.parameters.push(
    new ethereum.EventParam("customer", ethereum.Value.fromAddress(customer))
  )

  return orderCancelledEvent
}

export function createOrderCreatedEvent(
  to: Address,
  amount: BigInt,
  orderId: string
): OrderCreated {
  let orderCreatedEvent = changetype<OrderCreated>(newMockEvent())

  orderCreatedEvent.parameters = new Array()

  orderCreatedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam("orderId", ethereum.Value.fromString(orderId))
  )

  return orderCreatedEvent
}

export function createOrderStatusMessageEvent(
  orderId: string,
  statusMessage: string
): OrderStatusMessage {
  let orderStatusMessageEvent = changetype<OrderStatusMessage>(newMockEvent())

  orderStatusMessageEvent.parameters = new Array()

  orderStatusMessageEvent.parameters.push(
    new ethereum.EventParam("orderId", ethereum.Value.fromString(orderId))
  )
  orderStatusMessageEvent.parameters.push(
    new ethereum.EventParam(
      "statusMessage",
      ethereum.Value.fromString(statusMessage)
    )
  )

  return orderStatusMessageEvent
}

export function createOrderUpdatedEvent(
  orderId: string,
  status: string
): OrderUpdated {
  let orderUpdatedEvent = changetype<OrderUpdated>(newMockEvent())

  orderUpdatedEvent.parameters = new Array()

  orderUpdatedEvent.parameters.push(
    new ethereum.EventParam("orderId", ethereum.Value.fromString(orderId))
  )
  orderUpdatedEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromString(status))
  )

  return orderUpdatedEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

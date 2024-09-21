import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import { AddUser } from "../generated/schema"
import { AddUser as AddUserEvent } from "../generated/ProjectG/ProjectG"
import { handleAddUser } from "../src/project-g"
import { createAddUserEvent } from "./project-g-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let role = Bytes.fromI32(1234567890)
    let account = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAddUserEvent = createAddUserEvent(role, account)
    handleAddUser(newAddUserEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddUser created and stored", () => {
    assert.entityCount("AddUser", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AddUser",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "role",
      "1234567890"
    )
    assert.fieldEquals(
      "AddUser",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "account",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

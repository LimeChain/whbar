// SPDX-License-Identifier: Apache-2.0
pragma solidity =0.6.12;
pragma experimental ABIEncoderV2;

contract Staker {
  address public owner;

  constructor(address _owner) public {
    owner = _owner;
  }

  receive() external payable {}

  function withdraw(uint _amount, address payable _to) external returns (bytes memory) {
    require(owner == msg.sender, 'Sender is not the owner');
    require(address(this).balance >= _amount, 'Insufficient amount');
    require(_to != address(0), 'Invalid recipient address');

    (bool sent, bytes memory data) = _to.call{ value: _amount }('');
    require(sent, 'Failed to send HBAR');

    return data;
  }
}

// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity ^0.8.0;
import '@openzeppelin/contracts/access/Ownable.sol';

contract Staker is Ownable {
  receive() external payable {}

  function withdraw(uint256 _amount, address _to) external onlyOwner {
    require(address(this).balance >= _amount, 'Insufficient amount');
    require(_to != address(0), 'Invalid recipient address');

    (bool success, ) = _to.call{ value: _amount }(new bytes(0));
    require(success, 'Failed to send HBAR');
  }
}

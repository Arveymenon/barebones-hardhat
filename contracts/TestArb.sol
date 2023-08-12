// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract TestArb {

    constructor() {}

    function getCurrentValue1 () public pure returns (uint256) {
        return 2.5e10;
    }

    function getCurrentValue2 () public pure returns (uint256) {
        return 2.6e10;
    }

    function executeArb() public pure returns (bool) {
        return true;
    }
}
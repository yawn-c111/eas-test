// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/extensions/AccessControlEnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

import "./interfaces/ISample20.sol";

contract Sample20 is ERC20Upgradeable, AccessControlEnumerableUpgradeable, UUPSUpgradeable, ISample20 {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    function initialize() initializer public {
        __ERC20_init("Sample20", "S20");
        __AccessControlEnumerable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _grantRole(MINTER_ROLE, _msgSender());
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(AccessControlEnumerableUpgradeable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function mintByMinter(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
        _mint(to, amount);

        emit MintByMinter(to, amount, balanceOf(_msgSender()), totalSupply());
    }

    function burn(uint256 amount) public {
        require(balanceOf(_msgSender()) >= amount, "ERC20: burn amount exceeds balance");

        _burn(_msgSender(), amount);

        emit Burn(_msgSender(), amount, balanceOf(_msgSender()), totalSupply());
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyRole(DEFAULT_ADMIN_ROLE) {}
}
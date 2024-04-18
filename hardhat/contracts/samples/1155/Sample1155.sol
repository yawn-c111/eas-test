// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/extensions/AccessControlEnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

import "./interfaces/ISample1155.sol";

contract Sample1155 is ERC1155Upgradeable, AccessControlEnumerableUpgradeable, UUPSUpgradeable, ISample1155 {
    string public name;
    string public symbol;
    uint256 public tokenIds;

    struct TokenURIParam {
        string name;
        string description;
        string image;
    }

    function initialize() initializer public {
        __ERC1155_init("");
        __AccessControlEnumerable_init();
        __UUPSUpgradeable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);

        name = "Sample1155";
        symbol = "S1155";
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(IERC165, ERC1155Upgradeable, AccessControlEnumerableUpgradeable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function mintByAdmin(address to, uint256 tokenId, uint256 value) public onlyRole(DEFAULT_ADMIN_ROLE) {
        _mint(to, tokenId, value, "");

        emit MintByAdmin(to, tokenId, value, balanceOf(to, tokenId));
    }

    function burn(uint256 tokenId, uint256 value) public {
        require(balanceOf(_msgSender(), tokenId) == value, "ERC1155: burn amount exceeds balance");
        _burn(_msgSender(), tokenId, value);

        emit Burn(_msgSender(), tokenId, value, balanceOf(_msgSender(), tokenId));
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyRole(DEFAULT_ADMIN_ROLE) {}
}


// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/extensions/AccessControlEnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

import "./interfaces/ISample1155Offchain.sol";

contract Sample1155Offchain is ERC1155Upgradeable, AccessControlEnumerableUpgradeable, UUPSUpgradeable, ISample1155Offchain {
    uint256 public tokenIds;
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    string public name;
    string public symbol;

    mapping(uint256 => string) public totalURIs;

    function initialize() initializer public {
        __ERC1155_init("");
        __AccessControlEnumerable_init();
        __UUPSUpgradeable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _grantRole(MINTER_ROLE, _msgSender());

        name = "Sample1155Offchain";
        symbol = "S1155Off";
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(IERC165, ERC1155Upgradeable, AccessControlEnumerableUpgradeable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function uri(uint256 tokenId) public view override(IERC1155MetadataURI, ERC1155Upgradeable) returns (string memory) {
        return totalURIs[tokenId];
    }

    function register(uint256 tokenId, string calldata _tokenURI) public onlyRole(MINTER_ROLE) {
        totalURIs[tokenId] = _tokenURI;
    }

    function mintByMinter(address to, uint256 tokenId, uint256 value) public onlyRole(MINTER_ROLE) {
        _mint(to, tokenId, value, "");

        emit MintByMinter(to, tokenId, value, balanceOf(to, tokenId));
    }

    function burn(uint256 tokenId, uint256 value) public {
        require(balanceOf(_msgSender(), tokenId) == value, "ERC1155: burn amount exceeds balance");
        _burn(_msgSender(), tokenId, value);

        emit Burn(_msgSender(), tokenId, value, balanceOf(_msgSender(), tokenId));
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyRole(DEFAULT_ADMIN_ROLE) {}
}


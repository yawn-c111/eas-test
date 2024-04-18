// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/extensions/AccessControlEnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

import "./interfaces/ISample721Offchain.sol";

contract Sample721Offchain is ERC721Upgradeable, AccessControlEnumerableUpgradeable, UUPSUpgradeable, ISample721Offchain {
    uint256 public tokenIds;
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    mapping(uint256 => string) public totalURIs;
    
    function initialize() initializer public {
        __ERC721_init("Sample721Offchain", "S721Off");
        __AccessControlEnumerable_init();
        __UUPSUpgradeable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _grantRole(MINTER_ROLE, _msgSender());
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(IERC165, ERC721Upgradeable, AccessControlEnumerableUpgradeable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
    
    function tokenURI(uint256 tokenId) public view override(IERC721Metadata, ERC721Upgradeable) returns (string memory) {
        return totalURIs[tokenId];
    }

    function mintByMinter(address to, string calldata _tokenURI) public onlyRole(MINTER_ROLE) {
        uint256 tokenId = tokenIds;
        totalURIs[tokenId] = _tokenURI;
        _mint(to, tokenId);
        ++tokenIds;

        emit MintByMinter(_msgSender(), to, tokenId, _tokenURI, balanceOf(to));
    }

    function burn(uint256 tokenId) public {
        require(ownerOf(tokenId) == _msgSender(), "ERC721: burn of token that is not own");
        _burn(tokenId);

        emit Burn(_msgSender(), tokenId, balanceOf(_msgSender()));
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyRole(DEFAULT_ADMIN_ROLE) {}
}


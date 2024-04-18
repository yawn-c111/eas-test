// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/extensions/AccessControlEnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

import "./interfaces/ISample721Onchain.sol";

contract Sample721Onchain is ERC721Upgradeable, AccessControlEnumerableUpgradeable, UUPSUpgradeable, ISample721Onchain {
    uint256 public tokenIds;
    mapping(uint256 => TokenURIParam) public tokenURIParams;
    
    function initialize() initializer public {
        __ERC721_init("Sample721Onchain", "S721On");
        __AccessControlEnumerable_init();
        __UUPSUpgradeable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(IERC165, ERC721Upgradeable, AccessControlEnumerableUpgradeable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function tokenURI(uint256 tokenId) public view override(IERC721Metadata, ERC721Upgradeable) returns (string memory) {
        TokenURIParam memory tokenURIParam = tokenURIParams[tokenId];
        return
        string(abi.encodePacked(
            "data:application/json;base64,",
            Base64.encode(
                bytes(abi.encodePacked(
                    '{"name":"', tokenURIParam.name,
                    '", "description":"', tokenURIParam.description,
                    '", "image": "', tokenURIParam.image,
                    '"}'
                ))
            )
        ));
    }

    function mintByAdmin(address to, TokenURIParam calldata tokenURIParam) public onlyRole(DEFAULT_ADMIN_ROLE) {
        uint256 tokenId = tokenIds;
        ++tokenIds;
        tokenURIParams[tokenId] = tokenURIParam;
        _mint(to, tokenId);

        emit MintByAdmin(_msgSender(), to, tokenId, tokenURIParam, balanceOf(to));
    }

    function burn(uint256 tokenId) public {
        require(ownerOf(tokenId) == _msgSender(), "ERC721: burn of token that is not own");
        _burn(tokenId);

        emit Burn(_msgSender(), tokenId, balanceOf(_msgSender()));
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyRole(DEFAULT_ADMIN_ROLE) {}
}


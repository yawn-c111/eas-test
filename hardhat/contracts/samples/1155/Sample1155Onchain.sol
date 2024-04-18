// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/extensions/AccessControlEnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

import "./interfaces/ISample1155Onchain.sol";

contract Sample1155Onchain is ERC1155Upgradeable, AccessControlEnumerableUpgradeable, UUPSUpgradeable, ISample1155Onchain {
    string public name;
    string public symbol;
    uint256 public tokenIds;

    mapping(uint256 => TokenURIParam) public tokenURIParams;

    function initialize() initializer public {
        __ERC1155_init("");
        __AccessControlEnumerable_init();
        __UUPSUpgradeable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);

        name = "Sample1155Onchain";
        symbol = "S1155On";
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(IERC165, ERC1155Upgradeable, AccessControlEnumerableUpgradeable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function uri(uint256 tokenId) public view override(IERC1155MetadataURI, ERC1155Upgradeable) returns (string memory) {
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

    function register(uint256 tokenId, TokenURIParam calldata tokenURIParam) public onlyRole(DEFAULT_ADMIN_ROLE) {
        tokenURIParams[tokenId] = tokenURIParam;
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


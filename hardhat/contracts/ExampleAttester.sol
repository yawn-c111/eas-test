pragma solidity 0.8.24;

import { IEAS, AttestationRequest, AttestationRequestData } from "@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol";
import { NO_EXPIRATION_TIME, EMPTY_UID, Attestation } from "@ethereum-attestation-service/eas-contracts/contracts/Common.sol";

/// @title ExampleAttester
/// @notice Ethereum Attestation Service - Example
contract ExampleAttester {
    error InvalidEAS();

    // The address of the global EAS contract.
    IEAS private immutable _eas;

    /// @notice Creates a new ExampleAttester instance.
    /// @param eas The address of the global EAS contract.
    constructor(IEAS eas) {
        if (address(eas) == address(0)) {
            revert InvalidEAS();
        }

        _eas = eas;
    }

    /// @notice Attests to a schema that receives a uint256 parameter.
    /// @param schema The schema UID to attest to.
    /// @param inputNum The uint256 value to pass to to the resolver.
    /// @param inputStr The string value to pass to to the resolver.
    /// @return The UID of the new attestation.
    function attestData(bytes32 schema, address recipient, uint256 inputNum, string calldata inputStr) external returns (bytes32) {
        return
            _eas.attest(
            AttestationRequest({
                schema: schema,
                data: AttestationRequestData({
                    recipient: recipient,
                    expirationTime: NO_EXPIRATION_TIME, // No expiration time
                    revocable: true,
                    refUID: EMPTY_UID, // No references UI
                    data: abi.encode(inputNum, inputStr), // Encode a single uint256 as a parameter to the schema
                    value: 0 // No value/ETH
                })
            })
        );
    }

    function decodeAttestationData(bytes32 uid) external view returns (uint256, string memory) {
        Attestation memory attestation = _eas.getAttestation(uid);
        (uint256 decodedNum, string memory decodedStr) = abi.decode(attestation.data, (uint256, string));

        return (decodedNum, decodedStr);
    }
}
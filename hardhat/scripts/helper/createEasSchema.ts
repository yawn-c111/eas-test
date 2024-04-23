import { SchemaRegistry } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from 'ethers';

export const createEasSchema = async (signer: ethers.Signer, schemaRegistryContractAddress: string, schema: string, resolverAddress: string, revocable: boolean) => {
    const schemaRegistry = new SchemaRegistry(schemaRegistryContractAddress);

    schemaRegistry.connect(signer);

    const transaction = await schemaRegistry.register({
        schema,
        resolverAddress,
        revocable,
    });

    // Optional: Wait for transaction to be validated
    await transaction.wait();
}
export const calcEncodedMetadata = (name: string, description: string, image: string): string => {
    const jsonString = `{"name":"${name}", "description":"${description}", "image": "${image}"}`;

    const base64EncodedString = Buffer.from(jsonString).toString("base64");

    const resultString =
        "data:application/json;base64," + base64EncodedString;

    return resultString;
};
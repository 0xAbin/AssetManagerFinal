import { publicClient } from "@/lib/vimConfig";
import { assetmanagerAbi } from "@/lib/AssetManager";
import { address } from "@/lib/contracts";
import { convertBYTS } from "@/lib/Bytes32toString"


export const getCryptoAssets = async(args: string) => {
  const response = await publicClient.readContract({
    address: address,
    abi: assetmanagerAbi,
    functionName: "cryptoAssets",
    args: [BigInt(args)],
  })
//   console.log(response)
  if (response) {
    const StructuredForamt = {
        id: response[0].toString(),
        isWhitelisted: response[1].toString(),
        assetTickName: convertBYTS(response[2].toString()),
        intitalPrice: response[3].toString(),
        TOKEN_DECIMALS_PRECISION: response[4].toString(),
        TOKEN_PRICE_PRECISION: response[5].toString(),
        isIsolatedPoolAllowed: response[6].toString(),
        isSharedPoolAllowed: response[7].toString(),
        isDecentralisedSourceEnabled: response[8].toString(),
        isCentralisedSourceEnabled: response[9].toString(),
    }
    //  console.log(StructuredForamt)
    return StructuredForamt;
  }
  return response;
};


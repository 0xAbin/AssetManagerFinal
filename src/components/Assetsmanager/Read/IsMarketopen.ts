import { publicClient } from "@/lib/vimConfig";
import { assetmanagerAbi } from "@/lib/AssetManager";
import { address } from "@/lib/contracts";

export const getisMarketOpen = async (args: string) => {
  return await publicClient.readContract({
    address: address,
    abi: assetmanagerAbi,
    functionName: "isMarketOpen",
    args: [BigInt(args)],
  });
};

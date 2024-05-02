import { publicClient } from "@/lib/vimConfig";
import { assetmanagerAbi } from "@/lib/AssetManager";
import { address } from "@/lib/contracts";

export const getAllowedChainids = async () => {
  try {
    const response = await publicClient.readContract({
      address: address,
      abi: assetmanagerAbi,
      functionName: "allowedChainId",
    });
    return response;
  } catch (error) {
    console.error("Error fetching allowed chain IDs:", error);
    throw error;
  }
};
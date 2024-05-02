import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  type BaseError,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { assetmanagerAbi } from "@/lib/AssetManager";
import { address } from "@/lib/contracts";
import { toast } from "sonner";
import * as React from "react";

const TransferOwner = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  async function transferOwner(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newOwner = formData.get("newOwner") as `0x${string}`;
    const write = await writeContract({
      address: address,
      abi: assetmanagerAbi,
      functionName: "transferOwnership",
      args: [newOwner],
    });
    write;
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const handleToast = (message: string, type = "default") => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "info":
        toast.info(message);
        break;
      case "warning":
        toast.warning(message);
        break;
      default:
        toast(message);
    }
    return null;
  };

  return (
    <>
      <CardContent className="flex flex-col gap-3">
        <form onSubmit={transferOwner}>
          <p className="text-sm text-rose-600 flex gap-2 ">
            Transfer Owner =
            <span className="text-slate-300 flex items-center ">
              <Input name="newOwner" placeholder="New Owner Address" required />
            </span>
            <Button disabled={isPending} className="h-6" type="submit">
              {isPending ? "Confirming..." : "Click"}
            </Button>
            {hash && handleToast(`Transaction Hash: ${hash}`, "info")}
            {isConfirming && <div>Confirming</div>}
            {isConfirmed && <div>Confirmed</div>}
            {error && handleToast((error as BaseError).shortMessage || error.message, "error")}
          </p>
        </form>
      </CardContent>
    </>
  );
};

export default TransferOwner;
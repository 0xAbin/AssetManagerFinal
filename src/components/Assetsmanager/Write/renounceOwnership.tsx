import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { type BaseError, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { assetmanagerAbi } from "@/lib/AssetManager";
import { address } from "@/lib/contracts";
import { toast } from "sonner";

const RenounceOwnerShip = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const handleRenounceOwner = async () => {
    const write = await writeContract({
      address: address,
      abi: assetmanagerAbi,
      functionName: "renounceOwnership",
    });
    write;
    toast.info("Sign Transaction");
  };

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

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
        <p className="text-sm text-rose-600 flex gap-2 ">
          Renounce OwnerShip <span className="text-slate-300 flex items-center "></span>
          <Button className="h-6">
            <AlertDialog>
              <AlertDialogTrigger>Click</AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently make The Contract Useless
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction  type="button" disabled={isPending} onClick={handleRenounceOwner} >
                    {isPending ? "Confirming..." : "Yes"}
                    {hash && handleToast(`Transaction Hash: ${hash}`, "info")}
                    {isConfirming && <div>Confirming</div>}
                    {isConfirmed && <div>Confirmed</div>}
                    {error && handleToast((error as BaseError).shortMessage || error.message, "error")}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </Button>
        </p>
      </CardContent>
    </>
  );
};

export default RenounceOwnerShip;
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Footer = () => {
  return (
    <>
      <div className=" bg-slate-800 h-[30px] flex justify-between items-center mt-[92px]  bottom-0 fixed w-full" >
        <div className="flex justify-between items-center w-full ml-16 mr-16">
          <div>
            <h4 className="font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">Operational</h4>
          </div>
          <div>
            <Popover>
              <PopoverTrigger>Contracts</PopoverTrigger>
              <PopoverContent>
                <a
                  className="text-sm flex gap-2 justify-between"
                  href="https://sepolia.arbiscan.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h1>Asset</h1>{" "}
                  <img src="/assets/externallink.svg" width={10} height={10} />
                </a>
                <a
                  className="text-sm flex gap-2 justify-between"
                  href="https://sepolia.arbiscan.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h1>Market</h1>{" "}
                  <img src="/assets/externallink.svg" width={10} height={10} />
                </a>
                <a
                  className="text-sm flex gap-2 justify-between"
                  href="https://sepolia.arbiscan.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h1>Oracle</h1>{" "}
                  <img src="/assets/externallink.svg" width={10} height={10} />
                </a>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

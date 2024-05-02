import { WagmiProvider, createConfig, http } from "wagmi";
import { arbitrumSepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";


const ARB_SEP_RPC  = "https://arb-sepolia.g.alchemy.com/v2/0VujL5kt_QI0Xt7fT5Xy8FCekacxPPC_";
const WALLETCONNECT = "b3e275bd03d0f994672d0823110b5edf"

const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [arbitrumSepolia],
    transports: {
      // RPC URL for each chain
      [arbitrumSepolia.id]: http(
        `${ARB_SEP_RPC}`,
      ),
    },

    // Required API Keys
    walletConnectProjectId: WALLETCONNECT,

    // Required App Info
    appName: "V2 Contract",

    // Optional App Info
    appDescription: "FXDX CONTRACT",
    appUrl: "https://family.co", 
    appIcon: "https://family.co/logo.png", 
  }),
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
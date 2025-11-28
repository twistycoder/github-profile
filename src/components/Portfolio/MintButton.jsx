"use client";

import { useState } from "react";
import { Gem, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function MintButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle, minting, success

  const handleMint = () => {
    setIsOpen(true);
    setStatus("minting");
    setTimeout(() => {
      setStatus("success");
    }, 3000);
  };

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 text-purple-400 hover:text-purple-300"
              onClick={handleMint}
            >
              <Gem className="w-5 h-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Mint as NFT</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-black/90 border-white/10 backdrop-blur-xl text-white sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <Gem className="w-6 h-6 text-purple-500" />
              Mint Portfolio
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Preserve your developer legacy on the blockchain.
            </DialogDescription>
          </DialogHeader>

          <div className="py-8 flex flex-col items-center justify-center text-center">
            {status === "minting" && (
              <div className="space-y-4">
                <Loader2 className="w-12 h-12 text-purple-500 animate-spin mx-auto" />
                <p className="text-lg font-medium">Minting to Ethereum...</p>
                <p className="text-sm text-gray-500">
                  Confirming transaction...
                </p>
              </div>
            )}

            {status === "success" && (
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-green-500" />
                </div>
                <p className="text-lg font-bold text-green-400">
                  Successfully Minted!
                </p>
                <div className="bg-white/5 p-3 rounded-lg text-xs font-mono text-gray-400 break-all">
                  0x71C...9A23
                </div>
                <Button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  View on OpenSea
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

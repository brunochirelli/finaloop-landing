"use client";

import Image from "next/image";
import { HubspotProvider } from "next-hubspot";

import reportImg from "@/assets/images/app-dashboard-mock.png";
import HubspotForm from "@/components/HubspotForm/HubspotForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function GuideDownloadDialog() {
  return (
    <HubspotProvider>
      <Dialog>
        <Button size={"lg"} asChild>
          <DialogTrigger>Get Your Full Guide</DialogTrigger>
        </Button>

        <DialogContent aria-describedby="Fill out the form">
          <DialogTitle>
            <Image alt="" className="mb-4" src={reportImg} />
            <p>
              <span className="text-primary">Profit Unlocked:</span> Your Guide
              to Ecommerce Accounting for DTC & Shopify Businesses
            </p>
          </DialogTitle>
          <DialogDescription asChild>
            <HubspotForm />
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </HubspotProvider>
  );
}

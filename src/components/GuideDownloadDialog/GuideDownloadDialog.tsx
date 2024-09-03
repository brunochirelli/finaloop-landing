"use client";

import { HubspotProvider } from "next-hubspot";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import reportImg from "@/assets/images/app-dashboard-mock.png";
import Image from "next/image";
import HubspotForm from "../HubspotForm/HubspotForm";
import { Button } from "../ui/button";

export default function GuideDownloadDialog() {
  return (
    <HubspotProvider>
      <Dialog>
        <Button asChild size={"lg"}>
          <DialogTrigger>Get Your Full Guide</DialogTrigger>
        </Button>

        <DialogContent aria-describedby="Fill out the form">
          <DialogTitle>
            <Image src={reportImg} alt="" className="mb-4" />
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

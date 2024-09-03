import "./HubspotForm.css";
import { useHubspotForm } from "next-hubspot";

export default function HubspotForm() {
  const { loaded, error, formCreated } = useHubspotForm({
    region: "na1",
    portalId: "20191864",
    formId: "e6f4dd61-1393-40c6-8a82-2dd87f364232",
    target: "#hubspot-form",
  });

  return <span id="hubspot-form" data-testid="hs-form"></span>;
}

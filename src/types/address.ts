export interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  type: "Home" | "Work"; // Updated from "Building" to "Work" based on RadioGroup
  isDefault: boolean;
}

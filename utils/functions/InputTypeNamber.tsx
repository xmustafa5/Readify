import { ChangeEvent } from "react";

export function handleInputTypeNumber(event: ChangeEvent<HTMLInputElement>) {
  const value = event.target.value;
  event.target.value = value.replaceAll(/[^0-9]/g, "");
}
export function handleInputPhoneNumber(event: ChangeEvent<HTMLInputElement>) {
  let value = event.target.value;
  value = value.replaceAll(/[^0-9]/g, "");
  if (!value.startsWith("07")) {
    value = value.replaceAll(/[^0]/g, "");
  }
  if (value.length > 11) {
    value = value.slice(0, 11);
  }
  event.target.value = value;
}

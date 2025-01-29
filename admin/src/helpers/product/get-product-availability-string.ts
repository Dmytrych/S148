import {locale} from "@/locale/ua";

export function getProductAvailabilityString(inStock: boolean) {
  return inStock ? locale.ready_for_shipment : locale.out_of_stock;
}
export interface ShopifyCustomer {
  id: number;
  tags: string[];
}

export interface ShopifyAddress {
  country: string;
  postal_code: string | null;
  province: string | null;
  city: string | null;
  name: string | null;
  address1: string | null;
  address2: string | null;
  address3: string | null;
  latitude: number | null;
  longitude: number | null;
  phone: string | null;
  fax: string | null;
  email: string | null;
  address_type: string | null;
  company_name: string | null;
}

export interface ShopifyItem {
  name: string;
  sku: string;
  quantity: number;
  grams: number;
  price: number;
  vendor: string;
  requires_shipping: boolean;
  taxable: boolean;
  fulfillment_service: string;
  properties: Record<string, any>;
  product_id: number;
  variant_id: number;
}

export interface ShopifyRate {
  origin: ShopifyAddress;
  destination: ShopifyAddress;
  items: ShopifyItem[];
  currency: string;
  locale: string;
  order_totals: {
    subtotal_price: number;
    total_price: number;
    discount_amount: number;
  };
  customer: ShopifyCustomer | null;
}

export interface RateRequestPayload {
  rate: ShopifyRate;
}

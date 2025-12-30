# Shopify Carrier Service

A simple example service demonstrating how to create a carrier service that responds to Shopify's carrier service API POST requests. This service provides shipping rate calculations based on customer data.

## Overview

This is a minimal Express.js server that implements a carrier service endpoint compatible with Shopify's carrier service API. The example demonstrates how to:

- Receive rate requests from Shopify
- Process customer and order data
- Return shipping rates based on business logic

## Features

- TypeScript implementation with type-safe request/response handling
- Express.js server with JSON body parsing
- Example logic for VIP customer free shipping
- Type definitions for Shopify carrier service payloads

## Prerequisites

- Node.js (v18 or higher recommended)
- pnpm (v9.10.0)

## Installation

```bash
pnpm install
```

## Usage

Start the development server:

```bash
pnpm start
```

The server will start on `http://localhost:3000`.

## API Endpoint

### POST /rates

Receives rate requests from Shopify and returns available shipping rates.

**Request Body:**

The endpoint expects a JSON payload matching Shopify's carrier service rate request format:

```json
{
  "rate": {
    "origin": { ... },
    "destination": { ... },
    "items": [ ... ],
    "currency": "USD",
    "locale": "en",
    "order_totals": {
      "subtotal_price": 100.00,
      "total_price": 100.00,
      "discount_amount": 0.00
    },
    "customer": {
      "id": 123,
      "tags": ["VIP"]
    }
  }
}
```

**Response:**

Returns an array of shipping rates. Each rate object includes:

- `service_name`: Display name for the shipping option
- `service_code`: Unique identifier for the rate
- `description`: Description shown to customers
- `total_price`: Shipping cost as a string
- `currency`: Currency code (e.g., "USD")

**Example Response:**

```json
[
  {
    "service_name": "My Rate Provider",
    "service_code": "free_shipping_vip",
    "description": "Free Shipping for VIP Customers",
    "total_price": "0",
    "currency": "USD"
  }
]
```

## Example Logic

The current implementation demonstrates conditional rate calculation:

- If the customer has a "VIP" tag, returns free shipping
- Otherwise, returns an empty array (no rates available)

You can modify the logic in `routes/rates.ts` to implement your own shipping rate calculations based on:
- Customer tags or attributes
- Order total
- Shipping destination
- Item weight or dimensions
- Any other data available in the request payload

## Shopify Configuration

To use this service with Shopify:

1. Deploy this service to a publicly accessible URL
2. Create a Shopify mutation to `createCarrierService` endpoint and enter your service URL for the callback Url(e.g., `https://your-domain.com/rates`)
3. Shopify will POST rate requests to this endpoint during checkout

## Project Structure

```
.
├── index.ts           # Express server setup
├── routes/
│   ├── rates.ts      # Rate calculation endpoint
│   └── types.ts      # TypeScript type definitions
└── package.json      # Dependencies and scripts
```

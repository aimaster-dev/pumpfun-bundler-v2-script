Here’s a professionally rewritten version of the **Pumpfun Bundler README** for improved clarity, structure, and tone:

---

# Pumpfun Bundler SDK – README

## Overview

**Pumpfun Bundler SDK** is a high-performance, self-bundling script designed for seamless interaction with the Pump.fun platform. It enables users to launch a token and simulate initial traction by purchasing it with 25 buyers in a single bundled transaction. Built for speed and efficiency, this tool simplifies token creation, buying, and selling using the Pumpfun ecosystem.

---

## 🚀 Installation

```bash
npm install pumpdotfun-sdk
```

---

## ⚙️ Setup & Usage

1. **Configure Environment**

Create a `.env` file in your project root, referencing the structure in `.env.example`. At a minimum, set your `HELIUS_RPC_URL`.

2. **Fund the Generated Wallet**

Ensure the generated wallet (from the script) has at least `0.004 SOL` for transaction costs.

3. **Edit Token Metadata**

Customize your token launch details in the `metadata` object:

```ts
const metadata = {
  name: "Bolt token",
  symbol: "Bolt",
  description: "Brave Veer & Bolt",
  image: "./upload/img.jpg",
  showName: true,
  createdOn: "https://pump.fun",
  twitter: "https://x.com/pepa_inu",
  telegram: "https://t.me/pepaonsols",
  website: "https://www.pepa-inu.com"
};
```

4. **Run the Script**

```bash
npx ts-node example/basic/index.ts
```

### Example Output

* **Token Page on Pump.fun:**
  [View Token](https://pump.fun/2q4JLenwD1cRhzSLu3uPMQPw4fTEYp7bLtfmBwFLb48v)

---

## 📦 SDK Class: `PumpDotFunSDK`

### `createAndBuy()`

Creates a token and buys it using SOL.

```ts
async createAndBuy(
  creator: Keypair,
  mint: Keypair,
  createTokenMetadata: CreateTokenMetadata,
  buyAmountSol: bigint,
  slippageBasisPoints?: bigint,
  priorityFees?: PriorityFee,
  commitment?: Commitment,
  finality?: Finality
): Promise<TransactionResult>
```

### `buy()`

Buys a specified amount of tokens.

```ts
async buy(
  buyer: Keypair,
  mint: PublicKey,
  buyAmountSol: bigint,
  slippageBasisPoints?: bigint,
  priorityFees?: PriorityFee,
  commitment?: Commitment,
  finality?: Finality
): Promise<TransactionResult>
```

### `sell()`

Sells a specified token amount.

```ts
async sell(
  seller: Keypair,
  mint: PublicKey,
  sellTokenAmount: bigint,
  slippageBasisPoints?: bigint,
  priorityFees?: PriorityFee,
  commitment?: Commitment,
  finality?: Finality
): Promise<TransactionResult>
```

### `addEventListener()`

Subscribes to real-time PumpFun events.

```ts
addEventListener<T extends PumpFunEventType>(
  eventType: T,
  callback: (event: PumpFunEventHandlers[T], slot: number, signature: string) => void
): number
```

### `removeEventListener()`

Removes a registered event listener.

```ts
removeEventListener(eventId: number): void
```

---

## 📡 Event Subscription Example

### Script: `example/events/events.ts`

Set up listeners for `createEvent`, `tradeEvent`, and `completeEvent`.

```ts
const createEventId = sdk.addEventListener("createEvent", (event, slot, signature) => {
  console.log("createEvent", event, slot, signature);
});
```

Run the script:

```bash
npx ts-node example/events/events.ts
```

---

## 🧪 Running Examples

* **Basic Example (Create & Buy Token):**

  ```bash
  npx ts-node example/basic/index.ts
  ```

* **Event Listener Example:**

  ```bash
  npx ts-node example/events/events.ts
  ```

---

## 🤝 Contributing

We welcome contributions to improve this project. Please open an issue or submit a pull request.

---

## 📬 Contact

Telegram: [aimaster-dev](https://t.me/aimasterdev)


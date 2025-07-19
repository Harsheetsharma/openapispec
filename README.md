# ⚡ Hono Cloudflare API

This is a lightweight and fast API project built using [Hono](https://hono.dev/) It includes a simple OpenAPI spec and generated client SDKs for easy integration.

---

## 📦 Features

- ⚡️ **Hono** - ultrafast web framework for Cloudflare Workers
- 🌐 **OpenAPI 3.0** - standard API documentation and type generation
- 📤 **Auto-generated API clients** - for seamless integration with frontend/backend apps
- ☁️ **Cloudflare Workers** - globally distributed, serverless deployment
- 🧪 Simple `/user/{id}` GET and POST endpoints

---

## 📁 Project Structure
.
```
├── src/
│ └── index.ts # Main API entry using Hono
├── spec.json # OpenAPI 3.0 specification
├── wrangler.jsonc # Cloudflare configuration
├── package.json
└── README.md
```
---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Run Locally
```bash
npm run dev
```

---

📘 API Documentation
Endpoint: /user/{id}
GET /user/{id}
Retrieve user details by ID.

Path Parameter
id (string): Required, 1-10 characters
Response
{
  "name": "john",
  "age": 20,
  "id": "123"
}

---

🧰 Tooling

Hono

### 1. Cloudflare Workers

### 2. OpenAPI Generator

### 3. Wrangler CLI




---
**Description**:

Env Shield is a powerful utility for managing and safeguarding your environment variables in JavaScript and TypeScript projects. With Env Shield, you can precisely define the environment variables you expect to receive and specify their data types.

**Key Features**:

- Define expected environment variables and their types using a simple configuration.
- Automatically validate and parse environment variables, ensuring they meet your criteria.
- Receive strongly-typed values, making your code more robust and preventing runtime errors.
- Supports various data types, including strings, numbers, JSON, ports, URLs, and emails.
- Easily integrate into your project and enhance its reliability.

**Usage Example**:

```typescript
import { EnvShield } from 'env-shield';

const envShield = new EnvShield(process.env, {
    API_KEY: { type: EnvVariableType.STR },
    PORT: { type: EnvVariableType.PORT },
    DATABASE_URL: { type: EnvVariableType.URL },
    EMAIL: { type: EnvVariableType.EMAIL },
});

const apiKey = envShield.getVar('API_KEY');
const port = envShield.getVar('PORT');
const databaseUrl = envShield.getVar('DATABASE_URL');
const email = envShield.getVar('EMAIL');

// Now you can confidently use these variables with their expected types.
```

**Get Started**:

To start using Env Shield in your projects, simply install it via npm or yarn:

```
npm install env-shield
```

**Contributions**:

We welcome contributions from the community. Feel free to submit issues, pull requests, or suggestions to help make Env Shield even better.

---

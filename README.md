
---
**Description**:

Env Shield is a powerful utility for managing and safeguarding your environment variables in JavaScript and TypeScript projects. With Env Shield, you can precisely define the environment variables you expect to receive and specify their data types.

**Key Features**:

- Define expected environment variables and their types using a simple configuration.
- Automatically validate and parse environment variables, ensuring they meet your criteria.
- Receive strongly-typed values, making your code more robust and preventing runtime errors.
- Supports various data types, including strings, numbers, JSON, ports, URLs, and emails.
- Easily integrate into your project and enhance its reliability.

**Custom Validators**:

Env Shield is designed to be extensible, allowing you to define your own custom validators for environment variables. If you have specific validation requirements that go beyond the built-in validators, you can easily create your own validator functions.

To create a custom validator, simply define a function with the following signature:

```typescript
(value: string) => any
```

Your custom validator should take a string as input (the environment variable value) and return any valid JavaScript value based on your validation logic.

Here's an example of how you can define and use a custom validator:

```typescript
import { EnvShield } from 'env-shield';

// Define a custom validator for an imaginary environment variable 'CUSTOM_VAR'
function customValidator(value: string) {
    // Implement your custom validation logic here
    if (value === 'validValue') {
        return value;
    } else {
        throw new Error('Custom validation failed');
    }
}

const envShield = new EnvShield(process.env, {
    CUSTOM_VAR: customValidator,
});

const customVar = envShield.getVar('CUSTOM_VAR');
```

With custom validators, you have the flexibility to enforce your own validation rules and ensure that your environment variables meet your specific requirements.

**Usage Example**:

```typescript
import { EnvShield, isString, isPort, isUrl, isEmail, isDatabaseUrl } from 'env-shield';

const envShield = new EnvShield({
    API_KEY: isString,
    PORT: isPort,
    API_URL: isUrl,
    EMAIL: isEmail,
    DB_URL: isDatabaseUrl,
    // Add your custom validators here
    CUSTOM_VAR: customValidator,
});

const apiKey = envShield.getVar('API_KEY');
const port = envShield.getVar('PORT');
const apiUrl = envShield.getVar('API_URL');
const email = envShield.getVar('EMAIL');
const customVar = envShield.getVar('CUSTOM_VAR');

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

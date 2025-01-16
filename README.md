# FlexAuthAPI Demo Website

**The official website showcasing FlexAuthAPI integration.**

If you're looking for inspiration on how to integrate FlexAuthAPI, this is the resource you need.
The project demonstrates how to seamlessly integrate FlexAuthAPI into a high-scale website, simulating real-world conditions.

## Technical environment

- **Language**
  - TypeScript 5
- **Framework / Lib**
  - NextJs 14
  - React 18
- **Presentation**
  - Shadcn
  - TailwindCSS
- **Cloud**
  - Vercel
  - AWS Lambda
  - MinIO (AWS S3 API)

## Engineering

> Adopting this engineering approach may seem excessive for the scope of this demo, but it was done intentionally. The engineering approach demonstrates the seamless integration and immediate compatibility of FlexAuthAPI within the context of projects relying on complex architectural patterns for high-scale applications or systems.

The project incorporates three well-known design patterns commonly used in high-scale applications to enhance scalability, maintainability, and support for large team collaboration: **Hexagonal Architecture**, Domain-Driven Design (**DDD**), and Command Query Responsibility Segregation (**CQRS**).

### Workflow Diagram Sample: User Registration

To help developers understand how this demo application has been built and navigate its structure, the diagram below illustrates the user registration process. It provides a clear view of the actual flow of data and the interaction between components, highlighting the integration of key architectural principles in this project.

![User Registration Workflow](./public/images/user-registration-workflow.png)

## Todo

### Use Cases (DDD)

- [ ] User registration
- [ ] User authentication
- [ ] MFA setup
- [ ] User authentication (with 2FA challenge)

### Features

- [ ] Email management (event-driven)

## License

This project is licensed under the GNU Affero General Public License (AGPL) v3.0 with a Non-Commercial Clause.

### Terms:

- You are free to use, modify, and distribute the project under the terms of the AGPL v3.0, provided that the software is used for non-commercial purposes only.
- If you make modifications to the project and distribute it, you must share the source code of the modified version under the same license.
- Any use of the software over a network must also be disclosed under the same terms if the software is modified.

For the full license text, please refer to the [LICENSE](./LICENSE.md) file in the repository.

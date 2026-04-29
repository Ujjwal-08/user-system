# User System API

## Features
- JWT Authentication
- Password Reset via Email
- Secure Token Expiration
- Email Delivery via SMTP
- Validation and Middleware Support

## Password Reset Flow
1. User requests reset
2. Token generated with expiry
3. Email sent
4. Token validated with expiration check
5. Password updated securely
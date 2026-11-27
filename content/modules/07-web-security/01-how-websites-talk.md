---
title: How Websites Talk: Requests and Cookies
summary: Browsers, servers, requests, responses and cookies.
minutes: 7
---

Every click is a **request** from your browser and a **response** from the server.

```chart:http-flow

```

## Parts of a request

| Part    | Example                            |
| ------- | ---------------------------------- |
| Method  | `GET` (read) or `POST` (send)      |
| URL     | `/login`                           |
| Headers | Extra info, like your browser type |
| Body    | Form data such as your username    |

## Status codes

- **200** OK
- **301** Moved
- **403** Forbidden
- **404** Not found
- **500** Server error

## Cookies

Web pages forget you between clicks. A **cookie** is a small note the server asks your browser to keep, like a wristband at a festival. It proves you already logged in.

If an attacker steals your session cookie, they can **be you**. That is why cookies need flags such as `HttpOnly` and `Secure`.

## Remember

- Never trust anything that comes from the browser. Users can change it.
- Protect session cookies.

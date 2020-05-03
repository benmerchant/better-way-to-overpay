# Better Way To Overpay: a MEVN app

## /MongoDB Version 0 ChangeLog

### 2020.05.02, Version 0.3.1 (currentgit ), @benmerchant

- PR #26
- initialize ESLint
- delete `createUsers`
- tell ESLint to ingore windows EOL
- tell ESLint to allow console.warn,info,error
- tell ESLint no semicolons

### 2020.05.02, Version 0.3.0 (Stable), @benmerchant

- PR #23
- create `wipeout.ts` to empty

### 2020.05.03, Version 0.2.0 (Stable), @benmerchant

- PR #24
- move `.gitignore` from root dir to MongoDB
- add /dist to `.gitignore`
- add types `init.ts` db query function calls
- buff `tsconfig.json` with more options
- create `wipeout.ts`
- create `/src` & move all .ts files into it
- create `.env` (not committed)

### 2020.04.25, Version 0.1.0 (Stable), @benmerchant

- install MongoDB v3.5.6 Node.js Client
- PR #10 - (first pull request)
- create `init.ts`
- create `/documents` & move documents into it
  - automobiles
  - contracts
  - creditCardSystems
  - users
- `createUser.ts` (does not work, shouldn't've pushed)

## Express.js

### 2020.05.02, Version 0.4.0 (Current)

- PR #30
- initialize ESLint
- set ESLint rules
  - linebreak-style: windows
  - console.log: only [warn, error, info]
  - no semicolons
  - single quotes
  - no error for absent extension
  - add settings for extensions and node resolver
- fix linting errors
- add linting script in `package.json`
- move files into `/src`

### 2020.05.02, Version 0.3.0 (Stable)

- PR #22
- set up automobile model, controller, route
- set up contact model, controller, route
- set up creditCardSystems model, controller, route

### 2020.05.01, Version 0.2.0 (Stable)

- PR #19
- install mongoose
- connect to db in `server.ts`
- add `routes`, `controller` for `users`
- (accidentally) commit `.js` files converted from `.ts`

### 2020.04.30, Version 0.1.0 (Stable)

- PR #18 - (first pull request)
- install expressjs 4.17.1
- create `.env` (not committed)
- create `router.ts`
- create routing file for each `/component`
- setup basic get routes
- create `server.ts`
- add `tsconfig.json`

## Vue.js

## Node.js v10.16.3

## npm v6.9.0

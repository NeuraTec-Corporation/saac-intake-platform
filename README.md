# SAAC Intake Platform

NeuraTec Corporation modular vehicle intake, inspection, customer approval, parts-request, repair-status, and closeout platform for SAAC.

## Status

Initial production scaffold. The application is intentionally modular so each workflow stage can evolve independently without breaking the rest of the platform.

## Core workflow

1. Vehicle reception + visual intake
2. Technical diagnosis / specialized inspection
3. Customer approval
4. Parts request and confirmation
5. Repair / parts standby
6. Closeout with final evidence and QC

## Technology baseline

- Next.js 16 (App Router)
- React 19
- TypeScript
- Vercel deployment
- Secrets only through environment variables; never commit credentials

## Governance

NeuraTec Corporation is the governing authority for this repository. Architecture and workflow changes should remain modular, auditable, and reversible.

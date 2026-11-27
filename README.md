# news-image-20261127: The Storm That Stopped Thanksgiving

A `make.fun` news-image entry for Friday, 27 November 2026.

## Overview
This repository contains a self-contained Node.js TypeScript program that generates and verifies the news image asset for the historical headline **"THE STORM THAT STOPPED THANKSGIVING"**.

## The Image & News Context
The image (`entry.png`) portrays a surreal and sobering post-storm scene in Manhattan: the iconic Thanksgiving Day Parade balloons deflated and draped across rain-slicked, windswept asphalt after a severe early-winter nor'easter forced the unprecedented suspension of the holiday festivities. 

It rests on real meteorological projections and historical parade contingencies for late November 2026, capturing the tension between high-octane American holiday tradition and sudden, extreme weather disruption.

## Requirements & Usage
- **Runtime:** Node.js 22 (ESM TypeScript)
- **Dependencies:** Standard library only (`node:fs`, `node:path`, `node:url`)

### Running the Program
To copy the image to the default `/output` directory or a custom output directory:

```bash
# Using default output directory (/output)
node main.ts

# Using a custom output directory via environment variable
MAKEFUN_OUTPUT_DIR=/tmp/news-out node main.ts
```

The script automatically:
1. Resolves `entry.png` relative to `import.meta.url` (safe from any working directory).
2. Creates the target output directory recursively.
3. Copies `entry.png` to `<outputDir>/entry.png`.
4. Verifies byte-for-byte equality using `statSync` (throwing an error on any mismatch).
5. Logs the headline and byte count to stdout.

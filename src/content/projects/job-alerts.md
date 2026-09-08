---
title: Job Alerts
description: Personalized internship-posting alert service on a serverless, event-driven scraping pipeline.
tags: [Python, AWS Lambda, SQS, Aurora DSQL, FastAPI, React]
live: https://jobs.kevinjin.dev
order: 2
---

## Overview

Watches a curated set of big-tech career pages and pushes an alert to phone and email the moment a matching internship listing goes live. Each user configures their own companies, job types, and fit criteria; an LLM classifier screens every listing before notifying.

## Work

- Architected a serverless pipeline that offloads enrichment and per-user classification to independently scaling SQS workers, keeping signup-driven load off the scan Lambda's fixed 5-minute budget
- Re-architected the read path from multiple NoSQL lookups to a single Aurora DSQL query behind a thread-safe connection pool with optimistic-concurrency retries, cutting request latency from 5 seconds to under 1
- Designed a URL-derived canonical key that resolves the same posting seen from multiple sources under different URLs, tuned to prefer occasional duplicate alerts over missed listings

## Stack

Python, AWS Lambda, SQS, Aurora DSQL, FastAPI, React

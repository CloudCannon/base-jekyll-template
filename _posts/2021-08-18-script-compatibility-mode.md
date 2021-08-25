---
date: 2021-08-25
title: Script Compatibility Mode
categories:
  - wanikani
description:
type: Document
---

Changes that are affected by the Script Compatibility Mode setting are tracked here.
Scripts can check WaniKani's version by checking `window.WaniKani.version` to match against this list.

**v0.1.0 (August 25, 2021)** Main bundles of lessons and reviews are now tied to the script compatibility setting. 
- **Compatibility Mode On**: script tags serve lesson-legacy and review-legacy (plus hash in the filename)
- **Compatibility Mode Off**: script tags serve lessson and review (plus hash in the filename)

This is intended to prevent accidental breaking changes that might affect scripts. Future updates will specify whether legacy versions are affected (for example, 
if a bug fix is applied to both legacy and non-legacy).

**v0.0.1 (August 18, 2021)** Lesson tabs (ex. Kanji Composition, Meaning, Reading, etc.) are now rendered with React. Previously tabs were written to the DOM and just hidden and displayed with CSS.
With React tabs that are not visible are removed from the DOM. Scripts that modify tabs have to wait for React to finish rendering the tab.



---
date: 2021-08-18
title: Script Compatibility Mode
categories:
  - wanikani
description:
type: Document
---

Turning on Script Compatibility Mode disables these changes.
Scripts can check WaniKani's version by checking `window.WaniKani.version`.

**v0.0.1 (August 18, 2021)** Lesson tabs (ex. Kanji Composition, Meaning, Reading, etc.) are now rendered with React. Previously tabs were written to the DOM and just hidden and displayed with CSS.
With React tabs that are not visible are removed from the DOM. Scripts that modify tabs have to wait for React to finish rendering the tab.



---
date: 2021-08-30
title: Script Compatibility Mode
categories:
  - wanikani
description:
type: Document
---

Changes that are affected by the Script Compatibility Mode setting are tracked here. Scripts can check WaniKani's version by checking `window.WaniKani.version` to match against this list.

Subscribe to the [mailing list](https://tofugu.us1.list-manage.com/subscribe?u=b7f2114d74e3cac96344f797c&id=8b79442fb1) get notified when this page is updated. Make sure to check **UserScript Affecting Changes**.

**v0.7.0 (October 29, 2021)**
- **Compatibility Mode Off**: Under lessons, the additional information panels have been redone in React. There are minor markup and visual differences.

**v0.6.0 (October 20, 2021)**
- **Compatibility Mode Off**: Under lessons, the kana IME input charts have been redone in React. Visual changes have been made to make it easier to distinguish tabs and buttons.

**v0.5.0 (October 19, 2021)**
- **Compatibility Mode Off**: Submissions to /json/progress are first attempted with fetch and then fall back to $.ajax when unsuccessful

**v0.4.0 (October 13, 2021)**
- **Compatibility Mode Off**: Unread lessons are tracked through jStorage under `l/unreadIndices` instead of the presence of `read` class on batch-list items

**v0.3.0 (October 7, 2021)**
  - Vocabulary, kanji and radical objects in jStorage now have an additional field `type` which we use to determine the type instead of `voc`, `rad` and `kan`
  - **Compatibility Mode Off**: 
    - Reverted network requests to use $.ajax instead of fetch (this change is temporary while issues with review progress being stuck are investigated)
    - Reverted stat tracking refactoring. This change modified the initial stats object for a review. Will be reintroduced later in a way that doesn't break scripts.
    - The review input form now tracks its state internally instead of relying on DOM attributes like the presence of a class or input text being disabled

**v0.2.0 (September 20, 2021)**
- **Compatibility Mode Off**: Notes in lessons are now rendered with React and submit with `fetch`.

**v0.1.1 (August 30, 2021)**
- **Both Modes**: Fixed issue where network requests did not work in some cases on IE11 because `fetch` needed a polyfill
- **Compatibility Mode Off**: Review queues are fetched with `fetch` and not `$.ajax` or `$.getJSON`

**v0.1.0 (August 25, 2021)** Main bundles of lessons and reviews are now tied to the script compatibility setting.
- **Compatibility Mode On**: script tags serve lesson-legacy and review-legacy (plus hash in the filename)
- **Compatibility Mode Off**: script tags serve lessson and review (plus hash in the filename)

This is intended to prevent accidental breaking changes that might affect scripts. Future updates will specify whether legacy versions are affected (for example, if a bug fix is applied to both legacy and non-legacy).

**v0.0.1 (August 18, 2021)** Lesson tabs (ex. Kanji Composition, Meaning, Reading, etc.) are now rendered with React. Previously tabs were written to the DOM and just hidden and displayed with CSS. With React tabs that are not visible are removed from the DOM. Scripts that modify tabs have to wait for React to finish rendering the tab.



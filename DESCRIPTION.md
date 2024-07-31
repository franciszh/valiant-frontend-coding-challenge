TODO: Quick scratch breakdown of your to-dos, how you broke up the different tasks and any QA / tests you did.

### Requirements Analysis

Given the fat marker, a very simple inline loan calculator was expected however I identified 1 pain point to improve as below. According to my past experience talking with the end customers, they always prefered the system to guide them to complete tasks. With the assumption that customers may need more spoonfeeding I decided to split the caculator to one-page steps to help them focus on the inputs one after one. As a must-to-have to steps flow, a progress bar will also help customes be aware of where they are. To sum up, the delivery will be a single page virtual step flow with progress bar.

### System Design

Given the decision made from the above section, each step will be a standalone component and dynamically render itself when the previous step is completed. This design reflects the concepts of micro-frontend, performance optimization and scalability for potentially more complicated loan calculator.

### Sprint or Kanban

Regardless of which Agile flows to use, I will break down the feature as in a small team with 2 or 3 engineers. Each task should be test driven and minimise the blockage to peers as much as possible. Please take each to-do item as an individual jira as in the real development cycles.

### TODOs

1. Build the functional features for each steps with TDD, each step is an component while each component should be self-contain and meet the functional requirements on the document.
2. Connect all steps to the app with a global state, implement the dynamic loading (TDD)
3. Invoke the PMT function and build the calculating result (TDD)
4. Build the progress bar (TDD)
5. A11y improvement (TDD)
6. Cosmetic enhencement

## Jeanette Yue's Submission for Programming Assessment

[Live demo](https://j-yue.github.io/fed-assessment/)

### Time to complete

I worked on this over the course of two days

### What took the most time? What was tricky?

- Styling took the longest time
- Retina support was tricky. Since the size of the svg for the background pattern was large, I opted to use a smaller size high resolution PNG

### Comments and final thoughts

- Mobile UX

  - To reduce typing, form inputs use the autocomplete attribute
  - Invalid inputs have custom error messages
    - Safari does not show the title attribute on invalid entries like Chrome and Firefox
    - Use ValidityState API
  - Since city and state are optional, no validation

- AJAX form

  - Since criteria was to ignore errors, the button update does not wait for the request to resolve
  - There is a slight delay in the button updating to simulate a server response

- Input border + box shadow
  - I copied the CSS attributes from Sketch, but the border and box shadow look darker on my devices

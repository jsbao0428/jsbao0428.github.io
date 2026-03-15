## MODIFIED Requirements

### Requirement: Download Resume button triggers file download
The About page SHALL render a "Download Resume" link that downloads the resume PDF file when clicked.

#### Scenario: User clicks Download Resume
- **WHEN** the user clicks the "Download Resume" button on the About page
- **THEN** the browser SHALL initiate a download of `Resume_DE.pdf`

#### Scenario: Button renders as anchor element
- **WHEN** the About page loads
- **THEN** the "Download Resume" button SHALL be rendered as an `<a>` element with `href="/Resume_DE.pdf"` and a `download` attribute

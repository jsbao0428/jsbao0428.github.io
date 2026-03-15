## MODIFIED Requirements

### Requirement: Contact popover displays contact channels
The system SHALL display a popover with Email, LinkedIn, and GitHub contact information. Email SHALL be displayed as plain text with a copy button. LinkedIn and GitHub SHALL remain as external links.

#### Scenario: Email displays address with copy button
- **WHEN** the popover is open
- **THEN** the Email item SHALL display the full email address as text with a copy icon button beside it

#### Scenario: Click copy button copies email
- **WHEN** the user clicks the copy button next to the email address
- **THEN** the email address SHALL be copied to the clipboard and the icon SHALL change to a checkmark for 1.5 seconds

#### Scenario: LinkedIn and GitHub remain as links
- **WHEN** the popover is open
- **THEN** LinkedIn and GitHub items SHALL render as clickable links opening in new tabs

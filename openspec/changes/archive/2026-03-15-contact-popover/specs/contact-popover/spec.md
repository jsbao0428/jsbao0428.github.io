## ADDED Requirements

### Requirement: Contact popover displays contact channels
The system SHALL display a popover with Email, LinkedIn, and GitHub contact links when the user clicks the "Contact Me" button.

#### Scenario: Popover opens on click
- **WHEN** the user clicks the "Contact Me" button
- **THEN** a popover SHALL appear below the button listing Email, LinkedIn, and GitHub with their respective icons and labels

#### Scenario: Email link opens mail client
- **WHEN** the user clicks the Email item in the popover
- **THEN** the browser SHALL open the default mail client with `mailto:toy042897@gmail.com`

#### Scenario: LinkedIn link opens in new tab
- **WHEN** the user clicks the LinkedIn item in the popover
- **THEN** the browser SHALL open `https://www.linkedin.com/in/jsbao` in a new tab

#### Scenario: GitHub link opens in new tab
- **WHEN** the user clicks the GitHub item in the popover
- **THEN** the browser SHALL open the GitHub profile in a new tab

### Requirement: Contact popover closes on outside click
The system SHALL close the popover when the user clicks outside of it or clicks the "Contact Me" button again.

#### Scenario: Close on outside click
- **WHEN** the popover is open and the user clicks anywhere outside the popover
- **THEN** the popover SHALL close

#### Scenario: Close on button re-click
- **WHEN** the popover is open and the user clicks the "Contact Me" button
- **THEN** the popover SHALL close

[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JS Finite State Machine Challenge

For this challenge, you will create a simple [Finite State Machine](https://en.wikipedia.org/wiki/Finite-state_machine).

## Prerequisites

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Install dependencies.
1. Create and checkout a new branch to work on.
1. Fulfill the listed requirements.

Starter code is available in [`lib/challenge.js`](lib/challenge.js). A pull request is not required, but it is necessary if you want a code review.

You may wish to refer to [FAQs](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki) related to [forking and cloning](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone).

## Requirements

Implement `SubwayGate`, a function that represents a [finite-state machine](https://en.wikipedia.org/wiki/Finite-state_machine). In this scenario our machine is the gate at the subway and can only exist in two states: `open` and `closed`. The gate only opens for the following reasons:
-  a Charlie Card is tapped on the gate
-  a ticket is inserted into the gate with enough money to get on the T ($2.25)
-  a person is exiting the station
If the gate is open, then tapping the card again will not transition the state to closed. The state transitions to closed upon a person walking through the gates.


## Tasks

Developers should run these often!

-   `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains.
-   `grunt make-standard`: reformats all your code in a standard style.
-   `grunt test`: runs any automated tests; may depend on `grunt build`.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.

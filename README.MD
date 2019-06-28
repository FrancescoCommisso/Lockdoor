Lockdoor
Francesco Commisso

    Front End: React.js
        Components: Home.js
                            -   Users must allow geolocation permissions AND site must be hosted
                                on HTTPS
                            -   currentLocation and homeLocation are stored in state
                            -   Whenever a user's currentLocation changes, both sets of coordinates
                                are sent to the server for distance calculation through the
                                api endpoint "/api/calculateDistance"
                            -   If response from server is false then the user is notified
                                to lock their doors.

    Back End: Express.js
        Components: Index.js
                            -   Simple express web server that listens for https messages and responds
                                accordingly.

                    Checker.js
                            -   A javascript class that should be used to encapsulate all coordinate
                                calculation logic.
                            -   Only has 1 method right now but would ideally have multiple methods
                                and fields.

Bonus Question:

In order to scale this application to support hundres of thousands of users, I would implement a Microservices
Oriented Architecture, in which the application is decomposed into various micro applications. Application features like: User management, Authentication, and user notifications would all have their own micro databases with their own scheme and share information over https messages.

Each of these microservices would be self contained application instances run inside Docker images. During times of high user volume, additional instances of each microservice could be activiated when needed.

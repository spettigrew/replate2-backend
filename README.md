# Back-end - Replate2
Back-end repo for replate2
deployed Link is:

- [Business](#business)
    - [Logs a Business User In](#logs-a-user-in)
    - [Registers a New Business User](#registers-a-new-business-user)
    - [Edit Business Profile](#edit-business-profile)
    - [Delete Business Profile](#delete-business-profile)
    - [Create Food Request for Business to include: Type, Amount/Servings, Preferred Pick-up Time](#create-food-request-for-business-to-include-type-amount/servings-preferred-pickup-time)
    - [Add New Food Request for Business](#add-new-food-request-for-business)
    - [Updates Food Request for Business based on provided Id](#updates-food-request-for-business-based-on-provided-id)
    - [Deletes Food Request for Business based on provided Id](#deletes-food-request-for-business-based-on-provided-id)

- [Volunteers](#volunteers)
    - [Logs a Volunteer User In](#logs-a-volunteer-user-in)
    - [Registers a New Volunteer User](#registers-a-new-volunteer-user)
    - [Updates the Volunteer profile](#updates-the-volunteer-profile)
    - [Deletes the Volunteer profile](#deletes-the-volunteer-profile)    
    - [View List of All Unassigned/Pending Food-Requests](#view-list-of-all-unassigned/pending-food-requests)
    - [Click on Food Request to view more info](#click-on-food-request-to-view-more-info)
    - [Accept and Complete Food Request](#accept-and-complete-food-request)
    - [Cancel the assigned food request the Volunteer is signed up for](#cancel-the-assigned-food-request-the-Volunteer-is-signed-up-for)
    - [Mark assigned pickup as complete](#mark-assigned-pickup-as-complete)


# Business

## Logs a Business User In

<p>Logs a Business User In</p>

    POST /api/businesses/login


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username            | String            |  <p>Username of the User</p>                            |
| password            | String            |  <p>Password of the User</p>                            |

### Success Response

Success-Response:

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6InNhcmExIiwicm9sZSI6ImRvbmF0b3IiLCJpYXQiOjE1ODA4NzU4NjksImV4cCI6MTU4MTQ4MDY2OX0.TznBvkmodNzAI_ZXAmFHCSwe3YwWyvEc4iCN4LXLRH0",
  "message": "Welcome sara1!"
}

### Error Response

Invalid--credentials-please-try-again


{ message: "Invalid credentials, please try again."}


## Registers a New Business User

<p>Registers a New Business User</p>

    POST /api/businesses/register


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username            | String            |  <p>The New Business Users username *Required</p>                            |
| password            | String            |  <p>The New Business Users password *Required</p>                            |
| name            | String            |  <p>The New Business Users name</p>                            |
| address            | String            |  <p>The New Business Users address</p>                            |
| phone            | String            |  <p>The Users Business phone </p>                            |
| email            | String            |  <p>The New Business Users email</p>                            |

### Success Response

Success-Response:

  
[
  {
  "id": 8,
  "username": "don",
  "password": "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
  "name": "Panera",
  "address": "1941 S. Reed Rd., Kokomo, IN",
  "phone": 7655551234,
  "email": "panera@indiana.com"
}
]

# Business

## Get Business Users

<p>Gets new Business User and Users</p>

    GET /api/businesses/8  -user

  ### Success Response

  Success-Response:

  {
  "id": 5,
  "username": "erin",
  "password": "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
  "name": "Chipotle",
  "address": "400 21st Ave. Nashville, TN",
  "phone": 615555123,
  "email": "chipotle@tennessee.com"
}

    GET /api/businesses -users

### Success Response

Success-Response:

[
  {
    "name": "Dunkin' Donuts",
    "address": "5101 Bingle Rd. Houston, TX",
    "phone": 4325551234,
    "email": "dd@texas.com"
  },
  {
    "name": "Panda Express",
    "address": "1818 W. Northern Lights, Anchorage, AK",
    "phone": 9075551234,
    "email": "pe@alaska.com"
  },
  {
    "name": "Olive Garden",
    "address": "6000 Sepulveda Blvd, Culver City, CA",
    "phone": 3105551234,
    "email": "og@california.com"
  },
  {
    "name": "Subway",
    "address": "8000 E. Quincy Ave., Englewood, CO",
    "phone": 7205551234,
    "email": "subway@colorado.com"
  },
  {
    "name": "Chipotle",
    "address": "400 21st Ave. Nashville, TN",
    "phone": 615555123,
    "email": "chipotle@tennessee.com"
  },
  {
    "name": "Pizza Hut",
    "address": "2516 W. North Ave., Chicago, IL",
    "phone": 7735551234,
    "email": "ph@illinois.com"
  },
  {
    "name": "Jimmy John's",
    "address": "2750 W. Truman, Blvd., Joplin, MO",
    "phone": 4175551234,
    "email": "jj@missouri"
  },
  {
    "name": "Panera",
    "address": "1941 S. Reed Rd., Kokomo, IN",
    "phone": 7655551234,
    "email": "panera@indiana.com"
  },
  {
    "name": "Einstein Bros. Bagel",
    "address": "5249 Hazel Ave. Fair Oaks, CA",
    "phone": 9165551234,
    "email": "ebb@california.com"
  },
  {
    "name": "MGM Grand Casino",
    "address": "3799 S. Las Vegas, NV",
    "phone": 7025551234,
    "email": "mgmc@nevada.com"
  },
  {
    "name": null,
    "address": null,
    "phone": null,
    "email": null
  }
]

# Business

## Update Business Users

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username            | String            |  <p>Username of the User</p>                            |
| password            | String            |  <p>Password of the User</p>                            |


### Success Response

Success-Response:

{
  "id": 1,
  "username": "sara2",
  "password": "abc123",
  "name": "Dunkin' Donuts",
  "address": "5101 Bingle Rd. Houston, TX",
  "phone": 4325551234,
  "email": "dd@texas.com"
}

## Delete

<p>Deletes a Business User</p>

    DEL /api/businesses/1

  # Volunteer

  ## Registers a New Volunteer User

<p>Registers a New Volunteer User</p>

      POST /api/volunteers/register


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username            | String            |  <p>The New Business Users username *Required</p>                            |
| password            | String            |  <p>The New Business Users password *Required</p>                         |
| name            | String            |  <p>The New Business Users name</p>                            |
| phone            | String            |  <p>The Users Business phone </p>                            |
### Success Response

Success-Response:

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMSwidXNlcm5hbWUiOiJuaWNrIiwicm9sZSI6InZvbHVudGVlciIsImlhdCI6MTU4MDk0NzAzOSwiZXhwIjoxNTgxNTUxODM5fQ.bgSpnkjVN2tudXNGILyRgosq5ycECqAeZO9aypg9D0o",
  "message": "Welcome nick!"
}

## Logs an Volunteer In

<p>Logs an Volunteer In</p>

    POST /api/volunteers/login


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username            | String            |  <p>Username of the User</p>                            |
| password            | String            |  <p>Password of the User</p>                            |

### Success Response

Success-Response:

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMSwidXNlcm5hbWUiOiJuaWNrIiwicm9sZSI6InZvbHVudGVlciIsImlhdCI6MTU4MDk0NzA2OSwiZXhwIjoxNTgxNTUxODY5fQ.xRGz7pUgLKtrtcgXh5LgSxh6S8BEYxNrAs_uajg3hPI",
  "message": "Welcome nick!"
}

### Error Response

Invalid--credentials-please-try-again


{ message: "Invalid credentials, please try again."}

# Volunteer

## Get Volunteer Users

<p>Gets new Volunteer User and Users</p>

    GET /api/volunteers/2  -user

  ### Success Response

  Success-Response:

  {
  "id": 2,
  "username": "chrisd",
  "password": "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
  "name": "Chris D.",
  "phone": 8775551234
}

    GET /api/volunteers  -users

  ### Success Response

  Success-Response:

[
  {
    "name": "Joseph",
    "phone": 8775551234
  },
  {
    "name": "Chris D.",
    "phone": 8775551234
  },
  {
    "name": "Chris B.",
    "phone": 8775551234
  },
  {
    "name": "Chris S.",
    "phone": 8775551234
  },
  {
    "name": "Sara",
    "phone": 8775551234
  },
  {
    "name": "Mercy",
    "phone": 8775551234
  },
  {
    "name": "Erin",
    "phone": 8775551234
  },
  {
    "name": "Austen",
    "phone": 8775551234
  },
  {
    "name": "Frodo",
    "phone": 8775551234
  },
  {
    "name": "Chewie",
    "phone": 8775551234
  }
]

## Update
<p>Updates a Volunteer User</p>
    PUT /api/volunteers/1

## Success Response

  Success-Response:

  {
  "id": 1,
  "username": "sarap",
  "password": "abc123",
  "name": "Joseph",
  "phone": 8775551234
}


## Delete

<p>Deletes a Volunteer User</p>

    DEL /api/volunteers/1


exports.seed = async function (knex) {
  await knex('business')
          .insert([
            {
              username: 'joseph',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Dunkin' Donuts",
              address: "5101 Bingle Rd. Houston, TX",
              phone: 4325551234,
              email: "dd@texas.com"
            },
            {
              username: 'sara',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Panda Express",
              address: "1818 W. Northern Lights, Anchorage, AK",
              phone: 9075555678,
              email: "pe@alaska.com"
            },
            {
              username: 'chrisd',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Olive Garden",
              address: "6000 Sepulveda Blvd, Culver City, CA",
              phone: 3105559101,
              email: "og@california.com"
            },
            {
              username: 'chrisb',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Subway",
              address: "8000 E. Quincy Ave., Englewood, CO",
              phone: 7205551121,
              email: "subway@colorado.com"
            },
            {
              username: 'erin',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Chipotle",
              address: "400 21st Ave. Nashville, TN",
              phone: 6155531415,
              email: "chipotle@tennessee.com"
            },
            {
              username: 'mercy',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Pizza Hut",
              address: "2516 W. North Ave., Chicago, IL",
              phone: 7735551517,
              email: "ph@illinois.com"
            },
            {
              username: 'chriss',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Jimmy John's",
              address: "2750 W. Truman, Blvd., Joplin, MO",
              phone: 4175551819,
              email: "jj@missouri"
            },
            {
              username: 'don',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Panera",
              address: "1941 S. Reed Rd., Kokomo, IN",
              phone: 7655552021,
              email: "panera@indiana.com"
            },
            {
              username: 'lambda',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Einstein Bros. Bagel",
              address: "5249 Hazel Ave. Fair Oaks, CA",
              phone: 9165552223,
              email: "ebb@california.com"
            },
            {
              username: 'rainbow',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "MGM Grand Casino",
              address: "3799 S. Las Vegas, NV",
              phone: 7025552425,
              email: "mgmc@nevada.com"
            },

          ])
}
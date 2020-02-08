exports.seed = async function (knex) {
  await knex('volunteer')
          .insert([
            {
              username: 'joseph',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Joseph",
              phone: 8775553031,
            },
            {
              username: 'chrisd',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Chris D.",
              phone: 8775554041,
            },
            {
              username: 'chrisb',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Chris B.",
              phone: 8775555051,
            },
            {
              username: 'chriss',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Chris S.",
              phone: 8775556061,
            },
            {
              username: 'sara',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Sara",
              phone: 8775557071,
            },
            {
              username: 'mercy',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Mercy",
              phone: 8775558081,
            },
            {
              username: 'erin',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Erin",
              phone: 8775559091,
            },
            {
              username: 'lambda',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Austen",
              phone: 8775551011,
            },
            {
              username: 'hobbits',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Frodo",
              phone: 8775552021,
            },
            {
              username: 'wookie',
              password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O",
              name: "Chewie",
              phone: 8775551110,
            },
          ])
      }
import { StoreMapper } from "../models/index.js"

const Store = new StoreMapper()

export const SeedStores = async () => {
  const stores = [
    {
      slug: "indiranagar",
      name: "Indiranagar Branch",
      address: {
        street: "100 Feet Road",
        city: "Bangalore",
        province: "Karnataka",
        country: "India",
      },
      phone: {
        countryCode: "+91",
        number: "9992526394",
      },
      email: "hello@indiranagar.co",
      image:
        "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed ac scelerisque sed feugiat pellentesque sed. Erat vitae cras eleifend consequat euismod eu lorem quis ut. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc.",
      timings: [
        {
          day: 0,
          startHour: null,
          startMinute: null,
          endHour: null,
          endMinute: null,
          isClosed: true,
        },
        {
          day: 1,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 2,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 3,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 4,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 5,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 6,
          startHour: null,
          startMinute: null,
          endHour: null,
          endMinute: null,
          isClosed: true,
        },
      ],
    },
    {
      slug: "basavanagudi",
      name: "Basavanagudi Branch",
      address: {
        street: "100 Feet Road",
        city: "Bangalore",
        province: "Karnataka",
        country: "India",
      },
      phone: {
        countryCode: "+91",
        number: "9992526394",
      },
      email: "hello@basavanagudi.co",
      image:
        "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=3327&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed ac scelerisque sed feugiat pellentesque sed. Erat vitae cras eleifend consequat euismod eu lorem quis ut. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc.",
      timings: [
        {
          day: 0,
          startHour: null,
          startMinute: null,
          endHour: null,
          endMinute: null,
          isClosed: true,
        },
        {
          day: 1,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 2,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 3,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 4,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 5,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 6,
          startHour: null,
          startMinute: null,
          endHour: null,
          endMinute: null,
          isClosed: true,
        },
      ],
    },
    {
      slug: "koramangala",
      name: "Koramangala Branch",
      address: {
        street: "100 Feet Road",
        city: "Bangalore",
        province: "Karnataka",
        country: "India",
      },
      phone: {
        countryCode: "+91",
        number: "9992526394",
      },
      email: "hello@kormangala.co",
      image:
        "https://images.unsplash.com/photo-1580060092295-dbe639fffda3?q=80&w=3398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed ac scelerisque sed feugiat pellentesque sed. Erat vitae cras eleifend consequat euismod eu lorem quis ut. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc.",
      timings: [
        {
          day: 0,
          startHour: null,
          startMinute: null,
          endHour: null,
          endMinute: null,
          isClosed: true,
        },
        {
          day: 1,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 2,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 3,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 4,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 5,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 6,
          startHour: null,
          startMinute: null,
          endHour: null,
          endMinute: null,
          isClosed: true,
        },
      ],
    },
    {
      slug: "jayanagar",
      name: "Jayanagar Branch",
      address: {
        street: "100 Feet Road",
        city: "Bangalore",
        province: "Karnataka",
        country: "India",
      },
      phone: {
        countryCode: "+91",
        number: "9992526394",
      },
      email: "hello@jayanagar.co",
      image:
        "https://images.unsplash.com/photo-1572500851416-1ae1d3763bf8?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed ac scelerisque sed feugiat pellentesque sed. Erat vitae cras eleifend consequat euismod eu lorem quis ut. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc.",
      timings: [
        {
          day: 0,
          startHour: null,
          startMinute: null,
          endHour: null,
          endMinute: null,
          isClosed: true,
        },
        {
          day: 1,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 2,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 3,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 4,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 5,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 6,
          startHour: null,
          startMinute: null,
          endHour: null,
          endMinute: null,
          isClosed: true,
        },
      ],
    },
    {
      slug: "bannerghatta",
      name: "Bannerghatta Branch",
      address: {
        street: "100 Feet Road",
        city: "Bangalore",
        province: "Karnataka",
        country: "India",
      },
      phone: {
        countryCode: "+91",
        number: "9992526394",
      },
      email: "hello@bannerghatta.co",
      image:
        "https://images.unsplash.com/photo-1564486593523-38d62206e706?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed ac scelerisque sed feugiat pellentesque sed. Erat vitae cras eleifend consequat euismod eu lorem quis ut. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc.",
      timings: [
        {
          day: 0,
          startHour: null,
          startMinute: null,
          endHour: null,
          endMinute: null,
          isClosed: true,
        },
        {
          day: 1,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 2,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 3,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 4,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 5,
          startHour: 9,
          startMinute: 30,
          endHour: 21,
          endMinute: 30,
          isClosed: false,
        },
        {
          day: 6,
          startHour: null,
          startMinute: null,
          endHour: null,
          endMinute: null,
          isClosed: true,
        },
      ],
    },
  ]

  for (const store of stores) {
    await Store.createOrUpdate(store)
  }
}

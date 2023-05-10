import { name, finance, address, image, lorem, random, date } from "faker";

export default (limit = 5, arrayData = false) => {
  const data = Array.from({ length: limit }, (_, i) => {
    const row = arrayData
      ? [
          i + 1,
          name.findName(),
          finance.amount(),
          address.country(),
          image.avatar(),
          address.city(),
          name.jobTitle(),
          lorem.sentence(),
          random.boolean(),
          date.past(),
        ]
      : {
          id: i + 1,
          name: name.findName(),
          salary: finance.amount(),
          country: address.country(),
          avatar: image.avatar(),
          city: address.city(),
          job: name.jobTitle(),
          description: lorem.sentence(),
          active: random.boolean(),
          birthday: date.past(),
        };
    return row;
  });
  return data;
};

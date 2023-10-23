function extractNameAndStreet(person) {
  const { name, address: { street } } = person;
  return { name, street };
}

// Example usage:
const person = {
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Cityville",
  // ... other properties
  }
};

const { name, street } = extractNameAndStreet(person);

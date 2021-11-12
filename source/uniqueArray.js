//This will remove duplicates from an array

const uniqueValuesInArray = (value, index, self) => {
    return self.indexOf(value) === index;
};
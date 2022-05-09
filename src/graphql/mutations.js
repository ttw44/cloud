/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser($name: String!) {
    createUser(name: $name) {
      id
      name
    }
  }
`;
export const createCollege1 = /* GraphQL */ `
  mutation CreateCollege1($input: CreateCollege1Input!) {
    createCollege1(input: $input) {
      ID
      CollegeName
      SAT
      ACT
      Tuition
      Meal
      Room
      Majors
      Minors
      Sports
    }
  }
`;
export const updateCollege1 = /* GraphQL */ `
  mutation UpdateCollege1($input: UpdateCollege1Input!) {
    updateCollege1(input: $input) {
      ID
      CollegeName
      SAT
      ACT
      Tuition
      Meal
      Room
      Majors
      Minors
      Sports
    }
  }
`;
export const deleteCollege1 = /* GraphQL */ `
  mutation DeleteCollege1($input: DeleteCollege1Input!) {
    deleteCollege1(input: $input) {
      ID
      CollegeName
      SAT
      ACT
      Tuition
      Meal
      Room
      Majors
      Minors
      Sports
    }
  }
`;

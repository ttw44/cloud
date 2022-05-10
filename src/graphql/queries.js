/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCollege1 = /* GraphQL */ `
  query GetCollege1($ID: Int!) {
    getCollege1(ID: $ID) {
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
export const listCollege1S = /* GraphQL */ `
  query ListCollege1S(
    $filter: TableCollege1FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollege1S(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
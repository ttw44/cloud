export const TopThree = `
query TopThree($act: Int!, $sat: Int!, $tuition: Int!, $meal: Int!, $room: Int!) {
    listCollege1S(limit: 19, nextToken: null, filter: {ACT: {le: $act}, Meal: {le: $meal}, Room: {le: $room}, SAT: {le: $sat}, Tuition: {le: $tuition}}) {
      items {
        ACT
        CollegeName
        ID
        Majors
        Meal
        Minors
        Room
        SAT
        Sports
        Tuition
      }
    }
  }
  `;
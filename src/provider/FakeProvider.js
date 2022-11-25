import fakeDataProvider from 'ra-data-fakerest';

export const dataProvider = fakeDataProvider({
    posts:[
    {
      "type": "TUITION",
      comment: "payed to 15-10-2022",
      id: "1",
      student_id: "STD21020",
      name : "john",
      email : "hei.jog@gmail.com",
      "remaining_amount": 0,
      status :"Unpaid",
      paid : "true"
    }
  ]
  });
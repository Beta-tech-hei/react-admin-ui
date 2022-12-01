import fakeDataProvider from 'ra-data-fakerest';

export const dataProvider = fakeDataProvider({
    posts:[
    {
      type: "TUITION",
    comment: "string",
    total_amount: 0,
    creation_datetime: "2022-12-01T11:20:53.885Z",
    due_datetime: "2022-12-01T11:20:53.885Z",
    id: "string",
    student_id: "string",
    remaining_amount: 0,
    status: "UNPAID"
    }
  ]
  });
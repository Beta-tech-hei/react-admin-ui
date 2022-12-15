import fakeDataProvider from 'ra-data-fakerest';

export const dataProvider = fakeDataProvider({
    fees:[
    {
      type: "TUITION",
    comment: "comes to office on 12/12/12",
    total_amount: 20000,
    creation_datetime: "2022-12-01T11:20:53.885Z",
    due_datetime: "2022-12-01T11:20:53.885Z",
    email: "hei.nahray@gmail.com",
    id: "1",
    first_name: "Rakoto",
      last_name: "Nahary",
      ref: "STD22020",
    student_id: "string",
    remaining_amount: 0,
    status: "UNPAID"
    }
  ],
  users : [{
      id: "1",
      ref: "STD22020",
      first_name: "Rakoto",
      last_name: "Nahary",
      sex: "M",
      birth_date: "2022-12-15",
      address: "IIA 202 TEZ,Ivandry",
      phone: "+261325285457",
      email: "hei.nahray@gmail.com",
      entrance_datetime: "2022-12-15T12:29:12.328Z",
      status: "ENABLED"
    
  }]
  });
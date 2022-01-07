const studentsJSON = [
    {
        "Student_ID": "st20001225",
        "First_Name": "Karma",
        "Last_Name": "Akabane",
        "DOB": "2000-12-25",
        "Department": "Business Management",
        "Gender": "Male",
        "Email_ID": "st20001225@htw-berlin.de",
        "Joining_Date": "2018-04-01"
    },
    {
        "Student_ID": "st20010720",
        "First_Name": "Nagisa",
        "Last_Name": "Shiota",
        "DOB": "2001-07-20",
        "Department": "Applied Engineering",
        "Gender": "Male",
        "Email_ID": "st20010720@htw-berlin.de",
        "Joining_Date": "2018-10-01"
    },
    {
        "Student_ID": "st20050101",
        "First_Name": "Ritsu",
        "Last_Name": "PC",
        "DOB": "2005-01-01",
        "Department": "Computer Engineering",
        "Gender": "Diverse",
        "Email_ID": "st20050101@htw-berlin.de",
        "Joining_Date": "2021-10-01"
    },
    {
        "Student_ID": "st20010109",
        "First_Name": "Kayano",
        "Last_Name": "Kaede",
        "DOB": "2001-01-09",
        "Department": "Applied Engineering",
        "Gender": "Female",
        "Email_ID": "st20010109@htw-berlin.de",
        "Joining_Date": "2019-10-01"
    },
    {
        "Student_ID": "st20000824",
        "First_Name": "Rio",
        "Last_Name": "Nakamura",
        "DOB": "2000-08-24",
        "Department": "Business Management",
        "Gender": "Female",
        "Email_ID": "st20000824@htw-berlin.de",
        "Joining_Date": "2020-10-01"
    },
    {
        "Student_ID": "st20010712",
        "First_Name": "Rinka",
        "Last_Name": "Hayami",
        "DOB": "2001-07-12",
        "Department": "Business Management",
        "Gender": "Female",
        "Email_ID": "st20010712@htw-berlin.de",
        "Joining_Date": "2019-10-01"
    },
    {
        "Student_ID": "st20011107",
        "First_Name": "Manami",
        "Last_Name": "Okuda",
        "DOB": "2001-11-07",
        "Department": "Applied Engineering",
        "Gender": "Female",
        "Email_ID": "st20011107@htw-berlin.de",
        "Joining_Date": "2018-04-01"
    },
    {
        "Student_ID": "st20000303",
        "First_Name": "Yukiko",
        "Last_Name": "Kanzaki",
        "DOB": "2000-03-03",
        "Department": "Computer Engineering",
        "Gender": "Female",
        "Email_ID": "st20000303@htw-berlin.de",
        "Joining_Date": "2019-04-01"
    },
    {
        "Student_ID": "st20010823",
        "First_Name": "Tomohito",
        "Last_Name": "Sugino",
        "DOB": "2001-08-23",
        "Department": "Computer Engineering",
        "Gender": "Male",
        "Email_ID": "st20010823@htw-berlin.de",
        "Joining_Date": "2019-04-01"
    },
    {
        "Student_ID": "st20000506",
        "First_Name": "Kirara",
        "Last_Name": "Hazama",
        "DOB": "2000-05-06",
        "Department": "Business Management",
        "Gender": "Female",
        "Email_ID": "st20000506@htw-berlin.de",
        "Joining_Date": "2019-10-01"
    },
    {
        "Student_ID": "st20020101",
        "First_Name": "Gakushuu",
        "Last_Name": "Asano",
        "DOB": "2002-01-01",
        "Department": "Business Management",
        "Gender": "Male",
        "Email_ID": "st20020101@htw-berlin.de",
        "Joining_Date": "2017-10-01"
    },
    {
        "Student_ID": "st20010612",
        "First_Name": "Masayoshi",
        "Last_Name": "Kimura",
        "DOB": "2001-06-12",
        "Department": "Computer Engineering",
        "Gender": "Male",
        "Email_ID": "st20010612@htw-berlin.de",
        "Joining_Date": "2021-04-01"
    },
    {
        "Student_ID": "st20000825",
        "First_Name": "Takuya",
        "Last_Name": "Muramatsu",
        "DOB": "2000-08-25",
        "Department": "Applied Engineering",
        "Gender": "Male",
        "Email_ID": "st20000825@htw-berlin.de",
        "Joining_Date": "2021-10-01"
    },
    {
        "Student_ID": "st20010801",
        "First_Name": "Touka",
        "Last_Name": "Yada",
        "DOB": "2001-08-01",
        "Department": "Applied Engineering",
        "Gender": "Female",
        "Email_ID": "st20010801@htw-berlin.de",
        "Joining_Date": "2018-10-01"
    },
    {
        "Student_ID": "st20011113",
        "First_Name": "Yuuma",
        "Last_Name": "Isogai",
        "DOB": "2001-08-01",
        "Department": "Computer Engineering",
        "Gender": "Male",
        "Email_ID": "st20011113@htw-berlin.de",
        "Joining_Date": "2020-04-01"
    }
]

const staffJSON = [
    {
        "Staff_ID": "sf19800716",
        "First_Name": "Koro",
        "Last_Name": "Sensei",
        "DOB": "1980-07-16",
        "Department": "Computer Engineering",
        "Gender": "Male",
        "Email_ID": "sf19800716@htw-berlin.de",
    },
    {
        "Staff_ID": "sf19920815",
        "First_Name": "Tadaomi",
        "Last_Name": "Karasuma",
        "DOB": "1992-08-15",
        "Department": "Applied Engineering",
        "Gender": "Male",
        "Email_ID": "sf19920815@htw-berlin.de",
    },
    {
        "Staff_ID": "sf19931010",
        "First_Name": "Irina",
        "Last_Name": "Jelavic",
        "DOB": "1993-10-10",
        "Department": "Applied Engineering",
        "Gender": "Female",
        "Email_ID": "sf19931010@htw-berlin.de",
    },
    {
        "Staff_ID": "sf19810412",
        "First_Name": "Gakuhou",
        "Last_Name": "Asano",
        "DOB": "1981-04-12",
        "Department": "Business Management",
        "Gender": "Male",
        "Email_ID": "sf19810412@htw-berlin.de",
    }
]

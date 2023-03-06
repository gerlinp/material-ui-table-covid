import React, { useEffect, useState, useMemo } from 'react';
import MaterialReactTable from 'material-react-table';



// const ExamsTable = () => {
//   const [exams, setExams] = useState([])

//   const fetchData = () => {
//     fetch("https://czi-covid-1-hjgxknco3a-uc.a.run.app/api/exams")
//     .then(response => {
//       return response.json()
//     })
//     .then(data => {
//       setExams(data)
//     })
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   while (length < 0) {
//     console.log(`empty`)
//   } 

//   console.log(exams)

//   return (
//     <div>
//       {length > 0 && (
//         <ul>
//           {map(exam => (
//             <li key={exam.patientId}>{exam.patientId}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

function ExamsTable() {
  const [data, setExamData] = useState([]);
  const url = 'https://czi-covid-1-hjgxknco3a-uc.a.run.app/api/exams';

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setExamData(data);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(`Stevens ${data.patientId}`)
  useEffect(() => {
    fetchData(url);
  }, []);

  // const exams = Array.from(data)
  // console.log(`Hello from ${exams.exams}`)

  const columns = useMemo(
    () => [
      {
        accessorKey: 'patientId',
        header: 'ID',
        width: 20
      },
      {
        accessorKey: 'age',
        header: 'Age',
        width: 20
      },
      {
        accessorKey: 'sex',
        header: 'Sex',
        width: 20
      },
      {
        accessorKey: 'zipCode',
        header: 'Zip Code',
        width: 20
      },
      {
        accessorKey: 'examId',
        header: 'Exam ID',
        width: 20
      },
      {
        accessorKey: 'keyFindings',
        header: 'Key Findings',
        width: 20
      },
      {
        accessorKey: 'brixiaScores',
        header: 'Brixia Scores',
        width: 20
      },
      {
        accessorKey: 'imageURL',
        header: 'Image',
        width: 20
      },
    ],
    [],
  );

  return (
    <div style={{ maxWidth: '75%', margin: 'auto'}}>
      <h1>Exam Data</h1>
      <MaterialReactTable columns={columns} data={JSON.stringify(data)} />
    </div>
  );
}

export default ExamsTable;

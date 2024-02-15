import { Person } from "@/shared/types/interfaces";

export interface PersonsListProps {
   persons: Person[];
}

const PeopleList = ({ persons }: PersonsListProps) => {
   return (
      <table className="table">
         <thead>
            <tr>
               <th scope="col">First name</th>
               <th scope="col">Surname</th>
               <th scope="col">Gender</th>
               <th scope="col">Date of birth</th>
            </tr>
         </thead>
         <tbody>
            {persons.map((item, idx) => (
               <tr key={idx}>
                  <td>{item.firstName}</td>
                  <td>{item.surname}</td>
                  <td>{item.gender}</td>
                  <td>{item.dateOfBirth.toDateString()}</td>
               </tr>
            ))}
         </tbody>
      </table>
   );
};

export default PeopleList;

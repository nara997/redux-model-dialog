import { useQuery, gql } from '@apollo/client';
import "./App.css"
import ModelDialog from "./ModelDialog/index"

const GET_SUBJECTS = gql`
  query GetSubjects{
    messages{
          items{
                 subject
                 id
                 body
                }       
              
              }
  }
`
;





export default function App() {
  const { loading, error, data } = useQuery(GET_SUBJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="appContainer">
      <h2 class="App-header"> => Dialog Box is used to display more Information about that particular subject</h2>
        {data && data.messages.items.map(eachMessage  => {
                      

          return(

            <ModelDialog eachMessage={eachMessage} key={eachMessage.id}/>
          )
         }) 
        }
    </div>
  )
}
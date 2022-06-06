import { useSelector } from "react-redux";
import { Container, Typography } from "../components/UI";
import { RootState } from "../store";

const SelfReflection: React.FC = () => {
  const reflection = useSelector((state: RootState) => state.reflection.data);

  return (
    <Container>
      <>
        <Typography type="h2" additionalClasses="mt-8 text-center text-sky-900">Self reflection</Typography>
        <Typography type="body1" additionalClasses="mt-8 text-center text-sky-900 w-full md:w-5/6 lg:w-4/6 mx-auto">Reflect on yourself, and fill the following table. Your goal should be to achieve randomness in ideas, so make sure the table is less monotonous, and more random!</Typography>
        <form>
          <table className="rounded mx-auto my-8">
            <thead>
              <tr>
                <th></th>
                <th className="bg-red-200 p-4 text-red-900">Love</th>
                <th className="bg-green-200 p-4 text-green-900">Good At</th>
                <th className="bg-sky-200 p-4 text-sky-900">World Needs</th>
              </tr>
            </thead>
            <tbody>
              {
                reflection.map((item, key) => (
                  <tr key={item.id}>
                    <td className="pr-4">{key + 1}.</td>
                    <td className="p-0">
                      <input
                        type="text" 
                        className="bg-red-50 p-2" 
                      />
                    </td>
                    <td className="p-0">
                      <input type="text" className="bg-green-50 p-2" />
                    </td>
                    <td className="p-0">
                      <input type="text" className="bg-sky-50 p-2" />
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </form>
      </>
    </Container>
  )
}

export default SelfReflection;
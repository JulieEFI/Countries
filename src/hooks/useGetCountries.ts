import { gql, useQuery } from "@apollo/client";
import { Country } from "../common/interfaces/country.interface";

const GET_COUNTRIES = gql`
    query GetCountries {
        countries {
            code
            name
            emoji
            capital
            continent {
                name
            }
          }
    }
`

export const useGetCountries = (): Country[] | undefined => {
    const { data } = useQuery(GET_COUNTRIES);
    return data?.countries;
}
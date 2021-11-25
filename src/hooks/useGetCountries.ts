import { ErrorInfo } from 'react';
import { gql, NetworkStatus, useQuery } from "@apollo/client";
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
    const { error, data} = useQuery(GET_COUNTRIES);
    
    if (error) console.log(error)

    return data?.countries;
}

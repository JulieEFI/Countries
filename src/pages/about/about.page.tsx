import React from "react";
import CountriesGrid from "../../components/countries/countries-items.component";
import {useGetCountries} from "../../hooks/useGetCountries"
import { Layout} from 'antd';

const {Content} = Layout;

const About:React.FC = () => {
    const countries = useGetCountries();
    return (
        <>
         <Content style={{ padding: '0 50px' }}> <CountriesGrid  countries={countries || []} /></Content>
           
        </>
    )
}

export default About;
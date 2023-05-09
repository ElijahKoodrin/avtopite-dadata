import axios from "axios";
import {ICompany} from "../App";

const token = "e12ac17c0a2530d6d7b871608b547f48c7e33e48";


export const fetchData = async (query: string) => {
    return await axios.get(
        "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party",

        {
            params: {
                query: query
            },
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            }
        }
    )
        .then((response) => {
            const returnedData: ICompany[] = response.data.suggestions.map((item: any) => {
                return {
                    name: item.unrestricted_value,
                    address: {
                        city: item.data.address.data.city_with_type ?? item.data.address.data.settlement_with_type,
                        value: item.data.address.unrestricted_value
                    },
                    head: {
                        name: item.data.management?.name,
                        post: item.data.management?.post.toLowerCase()
                    },
                    inn: item.data.inn,
                    ogrn: item.data.ogrn,
                    kpp: item.data.kpp,
                    id: item.data.hid
                };
            });
            return returnedData;
        });
};
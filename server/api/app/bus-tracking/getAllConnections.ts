import obtainToken from "~/server/components/loadTDXToken";
const urls = [ "https://tdx.transportdata.tw/api/basic/v2/Bus/EstimatedTimeOfArrival/City/Taipei/%E7%B4%859?%24top=1&%24skip=21&%24format=JSON",
    "https://tdx.transportdata.tw/api/basic/v2/Bus/EstimatedTimeOfArrival/City/Taipei/508?%24top=1&%24skip=228&%24format=JSON",
    "https://tdx.transportdata.tw/api/basic/v2/Bus/EstimatedTimeOfArrival/City/NewTaipei/815?%24top=1&%24skip=118&%24format=JSON",
    "https://tdx.transportdata.tw/api/basic/v2/Bus/EstimatedTimeOfArrival/City/NewTaipei/816?%24top=1&%24skip=85&%24format=JSON",
    "https://tdx.transportdata.tw/api/basic/v2/Bus/EstimatedTimeOfArrival/City/Taipei/508%E5%8D%80?%24top=1&%24skip=69&%24format=JSON"
]

const obtainData = async() => {
    const token = await obtainToken();
    const obtainData = await Promise.all(urls.map(async(url) => {
        const res = await fetch(url,
            {
                headers: {
                Authorization: `Bearer ${token}`
                }
            });
            return res.json();
    }));
    return obtainData;
}

export default defineEventHandler(async(event) => {
    const data = await obtainData();
    return {
        body: JSON.stringify(data)
    };
});
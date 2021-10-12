import { apiEndpoint } from "../apiConfig";
import { osName, browserName, deviceType} from 'react-device-detect';
import publicIp from 'public-ip';
import moment from "moment";

const URL = `${apiEndpoint}/log`;

export const saveLog = async() => {
    try {
        let routeName = window.location.href;

        // FETCH TIME FROM THE STORAGE
        const lastTime = localStorage.getItem("datetime");
        const locationInfo = localStorage.getItem("####");

        // FETCH IP
        const ip = await publicIp.v4();

        if(ip === "203.109.113.178" || ip === "203.109.113.179") {
            return;
        }
        
        const body = {
            routeName,
            referral: document.referrer,
            os: osName,
            browserName,
            deviceType,
            datetime: new Date(),
            country: '',
            city: '',
            countryCode: '',
            ip
        }

        if(lastTime) {
            let diff = moment().diff(moment(lastTime), 'minutes');
            if(diff < 5) {
                // USE SAME LOCATION
                if(locationInfo) {
                    let location = JSON.parse(locationInfo);
                    body.country = location.country_name;
                    body.city = location.city;
                    body.countryCode = location.country_code;
                    savingInfo(body);
                } else {
                    const location: any = await fetchLocationInfo(body.ip);
                    body.country = location.country_name;
                    body.city = location.city;
                    body.countryCode = location.country_code;
                    savingInfo(body);
                }
                
            } else {
                // NEW API CALL FOR THE LOCATION
                const time = moment().format();
                localStorage.setItem("datetime", time);
                const location: any = await fetchLocationInfo(body.ip);
                body.country = location.country_name;
                body.city = location.city;
                body.countryCode = location.country_code;
                savingInfo(body);
                
            }
        } else {
            // Start New Session
            const time = moment().format();
            localStorage.setItem("datetime", time);

            const location: any = await fetchLocationInfo(body.ip);
            body.country = location.country_name;
            body.city = location.city;
            body.countryCode = location.country_code;
            savingInfo(body);
        }
           
    } catch (e) {
        console.log(e);
    }
}

const fetchLocationInfo = (ip: any) => {
    return new Promise((resolve, reject) => {        
        fetch(`https://ipapi.co/${ip}/json`,)
        .then(function (res) {
            return res.json();
        })
        .then(function (result) {
            // console.log("LOCAION RESULT", result);
            localStorage.setItem("####", JSON.stringify(result));
            resolve(result);
        })
        .catch(error => {
            console.log('error', error)
            reject(error);
        });

        // fetch(`http://api.ipstack.com/${ip}?access_key=${ipStack}&format=1`,)
        // .then(function (res) {
        //     return res.json();
        // })
        // .then(function (result) {
        //     localStorage.setItem("####", JSON.stringify(result));
        //     resolve(result);
        // })
        // .catch(error => {
        //     console.log('error', error)
        //     reject(error);
        // });
    })
}

const savingInfo = (body: any) => {
    // console.log("BODY ", body);
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    fetch(URL, requestOptions)
        .then(function (res) {
            return res.json();
        })
        .then(function (result) {
            // console.log("RESULT", result);
        })
        .catch(error => console.log('error', error));
}
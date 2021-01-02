import Element from "../../models/element";
import * as SecureStore from "expo-secure-store";
export const SET_ELEMENTS = 'ADD_ACTIVITY';
export const EDIT_ELEMENTS = 'EDIT_ACTIVITY';

export const fetchElements = () => {
    return async dispach => {
        let userData = SecureStore.getItemAsync('userData').then(res => {
            return JSON.parse(res);
        });
        const response = await fetch(
            "https://myblackmirror.pl/api/v1/features?api_token=test&fbclid=IwAR39_0YfG6rwM3nPVyVq0PmrIARnSY2U9C4wBpQ7ZH1Zhq6nAghpjOuhibI",
            {
                headers: new Headers({
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + userData.api_token
                })
            }
        );
        const resData = await response.json()
        console.log(resData)
        const loadedElements = []
            for (const key in resData.data){

                loadedElements.push(new Element(
                    // key,'u1',
                    resData.data[key].active,
                    resData.data[key].base_config,
                    resData.data[key].config,
                    resData.data[key].icon,
                    resData.data[key].id,
                    resData.data[key].name,
                    resData.data[key].ordering,
                    resData.data[key].slug,
                    // console.log(resData.data[key].active,)
                    // console.log(resData.data[key].icon)
                    // console.log(resData.data[key].base_config,)
                ))
            }
// console.log(loadedElements)
        dispach({type: SET_ELEMENTS, elements: loadedElements})

    }
}

export const activity = ({id, active}) => ({
    type: SET_ELEMENTS,
    payload: {
        id: "1",
        active: true,
    }
});

export const editActivity = ({id, active}) => ({
    type: EDIT_ELEMENTS,
    payload: {
        id: '1',
        active: true,
    }

})

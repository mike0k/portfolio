import Store from '../store/Store';
import * as LayoutReducer from '../store/reducer/LayoutReducer';

export const clear = () => Store.dispatch(LayoutReducer.clear());
export const get = () => Store.getState().layout;
export const set = (data: LayoutReducer.StateType) => Store.dispatch(LayoutReducer.set(data));
//const update = (data: LayoutReducer.StateType) => Store.dispatch(LayoutReducer.merge(data));

type FormData = {
    name: string;
    email: string;
    message: string;
    website?: string;
};
export const contact = async (formData: FormData) => {
    formData.website = 'Portfolio';
    //formData.access_key = Config.api.web3forms;
    const json = JSON.stringify(formData);

    const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: json,
    }).then((res) => res.json());

    if (res.success) {
        set({ contactForm: 2 });
    }
};

export const scroll = (anchor: string) => {
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
};

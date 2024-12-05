//more versatile use of the JS map function, works with both objects and arrays
export const map = (obj, callback) => {
    if (typeof obj === 'object') {
        if (Array.isArray(obj)) {
            let i = -1;
            return obj.map((item, key) => {
                i++;
                return callback(item, key, i);
            });
        } else {
            return Object.keys(obj).map((key, i) => {
                const item = obj[key];
                return callback(item, key, i);
            });
        }
    }
    return '';
};

//more versatile use of the JS length function, works with both objects and arrays
export const length = (obj) => {
    let count = 0;
    if (typeof obj === 'object') {
        if (Array.isArray(obj)) {
            count = count.length;
        } else {
            count = Object.keys(obj).length;
        }
    }
    return count;
};

//convert hex colors to rgb colours with an optional alpha value
export const rgba = (hex, alpha = 1) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    }

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};

//QoL function for getting a random number
export const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//generate a random ID string
export const randomId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};

//QoL function for randomising the order of an array
export const shuffleArray = (arr) => {
    let i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};

//QoL function for using setTimeout
export const timeout = (delay) => {
    return new Promise((res) => setTimeout(res, delay * 1000));
};

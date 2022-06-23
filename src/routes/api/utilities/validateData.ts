async function validateData(_name: string, _width: string, _height: string): Promise<null | string> {
    let msg: null | string = null;

    if (!_width) {
        msg = "You must enter width";
    } else if (+_width < 1) {
        msg = "width must be positive number";
    }
    else if (Number.isNaN(+_width)) {
        msg = "width must be number";
    }


    if (!_height) {
        msg = "You must enter height";
    } else if (+_height < 1) {
        msg = "height must be positive number";
    }
    else if (Number.isNaN(+_height)) {
        msg = "height must be number";
    }
    return msg;
};


export default validateData
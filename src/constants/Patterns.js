export const loginValidData = {
    required: {
        value: true,
        message: "Login can't be empty"
    },
    pattern: {
        value: /^[a-zA-Z]+$/,
        message: 'Invalid login. Login must consists of only alphabetic characters'
    }
}
export const emailValidData = {
    required: {
        value: true,
        message: "Email can't be empty"
    },
    pattern: {
        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Invalid Email. Email must be type "name@gmail.com"'
    }
}


export const passwordValidData = {
    required: {
        value: true,
        message: "Password can't be empty"
    },
    maxLength: {
        value: 18,
        message: 'Max lenghth of password - 18'
    },
    minLength: {
        value: 8,
        message: 'Min lenghth of password - 8'
    }
}


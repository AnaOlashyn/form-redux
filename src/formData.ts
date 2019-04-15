
export const formData =
    [
        {
            title: 'First name',
            type: 'input',
            id: 'firstName'
        }, {
            title: 'Last name',
            type: 'input',
            id: 'lastName'
        }, {
            title: 'Age',
            type: 'input',
            id: 'age',
            inputType: 'number'
        }, {
            title: 'Country',
            type: 'dropdown',
            id: 'country',
        }, {
            title: 'City',
            type: 'dropdown',
            id: 'city',
            dependOn: 'country'
        }
    ]
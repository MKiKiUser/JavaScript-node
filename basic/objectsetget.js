const User = {
    _email :'sona@gamil',
    _password:"abc",

    get email()
    {
        return this._email.toUpperCase()

    } ,
    set email(value){
        this._password=value

    }
}
const tea = Object.create(User)
console.log(tea.email)

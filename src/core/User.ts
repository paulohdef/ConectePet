export default class User {
    #_id: string 
    #isActive: string
    #picture: string
    #gender: string
    #email: string
    #phone: string 
    #address: string
    #registered: string
   

    constructor(_id: string = '',
                isActive: string = '',
                picture: string = '',
                gender: string = '',
                email: string = '',
                phone: string = '',
                address: string = '',
                registered: string = '') {
        this.#_id = _id
        this.#isActive = isActive
        this.#picture = picture,
        this.#gender = gender,
        this.#email = email,
        this.#phone = phone,
        this.#address = address,
        this.#registered = registered
    } 

    get _id(){
        return this.#_id
    }

    get isActive(){
        return this.#isActive
    }    

    get picture(){
        return this.#picture
    }

    get gender() {
        return this.#gender
    }

    get email() {
        return this.#email
    }

    get phone() {
        return this.#phone
    }

    get address() {
        return this.#address
    }

    get registered() {
        return this.#registered
    }

    static vazio() {
        return new User('' ,'' ,'','','','','')
    }
}
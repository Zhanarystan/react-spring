export default class CardService {
    
       
    
    constructor(jwtToken){
        
        this._apiBase = 'http://localhost:8000/api'
        console.log("ctor");
        console.log(jwtToken);
        this.jwtToken = `Bearer ${jwtToken}`;
    }
    

    getResource = async (url) => {
        console.log(`${this._apiBase}${url}`);
        const res = await fetch(`${this._apiBase}${url}`, {
            method:'GET',
            headers: {
              "Content-Type": "application/json",
              "Authentication": this.jwtToken 
            }
        });

        if(!res.ok){
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }

        return await res.json();
    }

    registerUser = async(data) => {
        const response = await fetch("http://localhost:8000/signup",{
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data)
        });

        let user = null;

        if(response.status === 200){
            user = await response.json();
        }
        return user;
    }

    

    getAllCards = async (keyword = "all") => {
        const res = await this.getResource('/allcards/'+keyword);
        console.log(res);
        return res.map(this._transformCard);
    }

    getCard = async (cardId) => {
        const res = await this.getResource(`/card/${cardId}`);
        return this._transformCard(res);
    }

    getTasks = async(cardId) => {
        const res = await this.getResource(`/card_tasks/${cardId}`);
        return res.map(this._transformTask);
    }

    getCurrentUser = async(JwtToken)=>{
        const bearer = "Bearer "+ JwtToken;

        const response = await fetch("http://localhost:8000/api/profile", {
            method:'GET',
            headers: {
              "Content-Type": "application/json",
              "Authentication": bearer
            }
        });

        if(response.status===200){
            let res = await response.json();
            return res;
        }    
    }
    addData = async (data, url) => {
        console.log(data);
        const response = await fetch(`${this._apiBase}/${url}`,{
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "Authentication": this.jwtToken
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data)
        });

        let newData = null;

        if(response.status === 200){
            newData = await response.json();
        }
        return newData;
    }

    deleteCard = async(url) => {
        const response = await fetch(`${this._apiBase}/${url}`,{
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Authentication": this.jwtToken 
            }
        });

        return await response.json();
    }

    

    _transformCard = (card) => {
        return{
            id: card.id,
            name: card.name,
            addedDate: card.addedDate
        };
    }

    _transformRegisterDTO = (registerDTO) => {
        return{
            email: registerDTO.email,
            password: registerDTO.password,
            rePassword: registerDTO.rePassword,
            fullName: registerDTO.fullName,
            message: registerDTO.message,
            success: registerDTO.success
        }
    }
    _transformTask = (task) => {
        return{
            id: task.id,
            taskText: task.taskText,
            addedDate: task.addedDate,
            done: task.done
        };
    }

}
import { defineStore } from "pinia"

export const servicesStore = defineStore("allServicesStore", {
    state: ()=> ({
        allServices : [
            {   
                img:"",
                name:"service 1",
                description:"lorem ipsum 1 dummy"
                
            },
            {   
                img:"",
                name:"service 2",
                description:"lorem ipsum 2 dummy"
                
            },
            {   
                img:"",
                name:"service 3",
                description:"lorem ipsum 3 dummy"
                
            },
            {   
                img:"",
                name:"service 4",
                description:"lorem ipsum 4 dummy"
                
            },
            {   
                img:"",
                name:"service 5",
                description:"lorem ipsum 5 dummy"
                
            },
            {   
                img:"",
                name:"service 6",
                description:"lorem ipsum 6 dummy"
                
            },
            {   
                img:"",
                name:"service 7",
                description:"lorem ipsum 7 dummy"
                
            },
            {   
                img:"",
                name:"service 8",
                description:"lorem ipsum 8 dummy"
                
            },
            {   
                img:"",
                name:"service 9",
                description:"lorem ipsum 9  dummy"
                
            },
            

        ]
    })
})
import { defineStore } from "pinia"

export const servicesStore = defineStore("allServicesStore", {
    state: ()=> ({
        allServices : [
            {   
                img:"/img/whiteTag.svg",
                name:"service 1",
                description:"lorem ipsum 1 dummy"
                
            },
            {   
                img:"/img/whiteTag.svg",
                name:"service 2",
                description:"lorem ipsum 2 dummy"
                
            },
            {   
                img:"/img/whiteTag.svg",
                name:"service 3",
                description:"lorem ipsum 3 dummy"
                
            },
            {   
                img:"/img/whiteTag.svg",
                name:"service 4",
                description:"lorem ipsum 4 dummy"
                
            },
            {   
                img:"/img/whiteTag.svg",
                name:"service 5",
                description:"lorem ipsum 5 dummy"
                
            },
            {   
                img:"/img/whiteTag.svg",
                name:"service 6",
                description:"lorem ipsum 6 dummy"
                
            },
            {   
                img:"/img/whiteTag.svg",
                name:"service 7",
                description:"lorem ipsum 7 dummy"
                
            },
            {   
                img:"/img/whiteTag.svg",
                name:"service 8",
                description:"lorem ipsum 8 dummy"
                
            },
            {   
                img:"/img/whiteTag.svg",
                name:"service 9",
                description:"lorem ipsum 9  dummy"
                
            },
        ],
        projects : [
            {
                img:"/img/project1.svg",
            },
            {
                img:"/img/project2.svg",
            },
            {
                img:"/img/project3.svg",
            },
            {
                img:"/img/project4.svg",
            },
            {
                img:"/img/project1.svg",
            },
            {
                img:"/img/project2.svg",
            },
            {
                img:"/img/project3.svg",
            },
            {
                img:"/img/project4.svg",
            },
            {
                img:"/img/project1.svg",
            }
        ]
        
    })
})
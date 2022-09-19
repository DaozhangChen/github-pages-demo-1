import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/first";
import { Forth } from "../components/welcome/forth";
import { Second } from "../components/welcome/second";
import { Third } from "../components/welcome/third";
import { Bar } from "../views/Bar";
import { Foo } from "../views/Foo";
import { Welcome } from "../views/Welcome";


export const routes:RouteRecordRaw[] =[  //路由规则
    {path:'/',component:Foo},
    {path:'/about',component:Bar},
    {path:'/welcome',component:Welcome,
        children:[
            {path:'1',components:First},
            {path:'2',components:Second},
            {path:'3',components:Third},
            {path:'4',components:Forth},
        ]
    }
]
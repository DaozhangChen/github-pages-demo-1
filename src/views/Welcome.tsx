import { defineComponent} from "vue";
import { RouterView } from "vue-router";
import s from './Welcome.module.scss'
import logo from '../assets/icons/diamond.svg'

export const Welcome =defineComponent({
setup(props,context){
return()=><div class={s.wrapper}>
<header>
<img src={logo}/>
<h1>钻石记账</h1>
</header>
 <div><RouterView/></div>
 <footer>buttons</footer>
 </div>
}
})
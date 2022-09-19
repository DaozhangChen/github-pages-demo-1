import { defineComponent} from "vue";
import s from './first.module.scss';
import hhh from '../../assets/icons/diamond.svg'
import { RouterLink } from "vue-router";

export const First =defineComponent({
setup:(props,context)=>{
return()=>
 <div class={s.wrapper}>
    <div class={s.card}>
        <img class={s.hhh} src={hhh}/>
        <h2>嗨害嗨</h2>
    </div>
        <div class={s.actions}>
        <RouterLink class={s.fake} to="/start">跳过</RouterLink>
            <RouterLink to="/welcome/2">下一页</RouterLink>
            <RouterLink to="/start">跳过</RouterLink>
        </div>
 </div> 
}
})
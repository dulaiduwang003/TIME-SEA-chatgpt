<template>
<uni-shadow-root class="vant-overlay-index"><van-transition v-if="lockScroll" :show="show" custom-class="van-overlay" :custom-style="'z-index: '+(zIndex)+'; '+(customStyle)" :duration="duration" @click.native="onClick" @touchmove.native.stop.prevent="noop">
  <slot></slot>
</van-transition>
<van-transition v-else :show="show" custom-class="van-overlay" :custom-style="'z-index: '+(zIndex)+'; '+(customStyle)" :duration="duration" @click.native="onClick">
  <slot></slot>
</van-transition></uni-shadow-root>
</template>

<script>
import VanTransition from '../transition/index.vue'
global['__wxVueOptions'] = {components:{'van-transition': VanTransition}}

global['__wxRoute'] = 'vant/overlay/index'
import { VantComponent } from '../common/component';
VantComponent({
    props: {
        show: Boolean,
        customStyle: String,
        duration: {
            type: null,
            value: 300,
        },
        zIndex: {
            type: Number,
            value: 1,
        },
        lockScroll: {
            type: Boolean,
            value: true,
        },
    },
    methods: {
        onClick() {
            this.$emit('click');
        },
        // for prevent touchmove
        noop() { },
    },
});
export default global['__wxComponents']['vant/overlay/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-overlay{background-color:var(--overlay-background-color,rgba(0,0,0,.7));height:100%;left:0;position:fixed;top:0;width:100%}
</style>
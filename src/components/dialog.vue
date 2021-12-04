<template>
    <div class="dialog" :class="{camera_dialog:isCamera}" v-show="show"
        :style="{left:x+'px',top:y+'px',backgroundImage:'url('+require('@/assets/dialogBack.png')+')'}">
        <div class="dialog_title">
            详细信息
        </div>
        <ul v-if="type=='人脸'" class="dialog_info rl_info">
            <li v-for="(item,key,index) of obj">
                <div class="renlian">
                    <img :src="item" alt="">
                </div>
            </li>
        </ul>
        <ul v-if="type=='食堂摄像地址'" class="dialog_info camera_info">
            <li>街道名称:{{obj['街道名称']}}</li>
            <li v-for="(item,index) of obj.cameraAddress">
                <div class="">
                    <div>监控名称:{{item.name}}</div>
                    <div class="camera">
                        <div class="camera_name">监控地址:</div>
                        <div class="camera_address"><a style="word-wrap:break-word;" :href="item.address">点击跳转</a></div>
                    </div>
                </div>
            </li>
        </ul>
        <ul v-if="type==''" class="dialog_info">
            <li v-for="(item,key,index) of obj">
                {{key}}:{{item}}
            </li>
        </ul>
        <div class="dialog_delete" @click="hideModal">
            <img :src="require('../assets/delete.png')" alt="">
        </div>
    </div>
</template>
<script>
    export default {
        name: "dialog",
        props: {
            x: {
                type: String,
                default: '0'
            },
            y: {
                type: String,
                default: '0'
            },
            show: {
                type: Boolean,
                default: false
            },
            obj: {
                type: Object,
                default: {}
            },
            type: {
                type: String,
                default: ''
            },
        },
        data() {
            return {
                isCamera: false
            };
        },

        mounted() {
            if (this.type == '食堂摄像地址') {
                this.isCamera = true;
            }
        },
        methods: {
            hideModal() {
                this.$emit('hideModal')
            },
        },
    };
</script>

<style>
    .dialog {
        position: absolute;
        min-width: 200px;

        background-repeat: no-repeat;
        background-size: 100% 100%;
        z-index: 1008;
        min-height: 200px;

        overflow: hidden;
        background-color: rgba(45, 148, 216, 0.8);
    }

    .camera_dialog {
        max-width: 500px;
        max-height: 300px;
    }

    .dialog_title {
        padding: 8px;
        color: #fff;
        height: 32px;
        line-height: 32px;
    }

    .dialog_info {
        padding: 16px;
        color: #fff;
        list-style: none;

    }

    .camera_info {
        max-height: 170px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .rl_info {}

    .dialog_delete {
        position: absolute;
        right: 10px;
        top: 15px;
        z-index: 1009;
        width: 16px;
        height: 16px;
        cursor: pointer;
    }

    .dialog_delete img {
        height: 100%;
        width: 100%;
    }

    .renlian {
        display: flex;
    }

    .rl_img {
        flex: 1;
        margin-left: 4px;
    }

    .camera {
        display: flex;
    }

    .camera_address {
        flex: 1;
        max-width: 375px;
    }

    .camera_name {
        min-width: 75px;
    }
</style>
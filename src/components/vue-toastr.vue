<template>
    <div v-bind:class="'toast toast-' + data.type" style="display: block;" @click="clicked()" v-on:mouseover="onMouseOver" v-on:mouseout="onMouseOut" >
        <div class="toast-title" v-html="data.title">
        </div>
        <div class="toast-message" v-html="data.msg">
        </div>
    </div>
</template>
<script>
    export default {
        name: 'vue-toastr',
        props: ['data'],
        created () {
            if (this.data.timeout !== undefined && this.data.timeout !== 0) {
                this.setTimeout()
            }
        },
        methods: {
            // Enter Hover
            onMouseOver () {
                if (this.data.onMouseOver !== undefined) {
                    this.data.onMouseOver()
                }
                if (!this.data.closeOnHover) {
                    clearInterval(this.data.intervalId)
                }
            },
            // Leave Hover
            onMouseOut () {
                if (this.data.onMouseOut !== undefined) {
                    this.data.onMouseOut()
                }
                if (!this.data.closeOnHover) {
                    this.setTimeout()
                }
            },
            // Set timeout to close
            setTimeout () {
                this.data.intervalId = setTimeout(function () {
                    this.close()
                }.bind(this), this.data.timeout)
            },
            // Clicked Toast
            clicked () {
                if (this.data.onClicked !== undefined) {
                    this.data.onClicked()
                }
                this.clickClose()
            },
            // Click Close?
            clickClose () {
                if (this.data.clickClose !== undefined && this.data.clickClose === false) {
                    return
                }
                this.close()
            },
            // Close Toast
            close () {
                // if toast not manuel closed.
                if (this.$parent !== null) {
                    this.$parent.Close(this.data)
                }
            }
        }
    }
</script>

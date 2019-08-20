<template>
    <div v-bind:class="'toast toast-' + data.type" @click="clicked()" v-on:mouseover="onMouseOver" v-on:mouseout="onMouseOut" >
        <div class="left">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" v-if="data.type === 'success'">
                <path fill="#ffffff" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" v-else-if="data.type === 'warning'">
                <path fill="#ffffff" d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" v-else-if="data.type === 'error'">
                <path fill="#ffffff" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" v-else-if="data-type === 'info'">
                <path fill="#ffffff" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" v-else>
                <path fill="#ffffff" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"/>
            </svg>
        </div>
        <div class="right">
            <div class="toast-title" v-html="data.title" />
            <div class="toast-message" v-html="data.msg" />
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

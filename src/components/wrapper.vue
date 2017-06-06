<template>
    <div>
        <div v-bind:class="'toast-container ' + position" v-for="position in positions">
            <template v-for="(optionsArray, index) in list">
                <vue-toastr :data="optionsArray" :key="index" v-if="optionsArray.position === position">
                </vue-toastr>
            </template>
        </div>
    </div>
</template>
<style>
    .toast-title {
        font-weight: bold;
    }
    .toast-message {
        -ms-word-wrap: break-word;
        word-wrap: break-word;
    }
    .toast-message a,
    .toast-message label {
        color: #FFFFFF;
    }
    .toast-message a:hover {
        color: #CCCCCC;
        text-decoration: none;
    }
    .toast-close-button {
        position: relative;
        right: -0.3em;
        top: -0.3em;
        float: right;
        font-size: 20px;
        font-weight: bold;
        color: #FFFFFF;
        -webkit-text-shadow: 0 1px 0 #ffffff;
        text-shadow: 0 1px 0 #ffffff;
        opacity: 0.8;
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
        filter: alpha(opacity=80);
    }
    .toast-close-button:hover,
    .toast-close-button:focus {
        color: #000000;
        text-decoration: none;
        cursor: pointer;
        opacity: 0.4;
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);
        filter: alpha(opacity=40);
    }
    /*Additional properties for button version
     iOS requires the button element instead of an anchor tag.
     If you want the anchor version, it requires `href="#"`.*/
    button.toast-close-button {
        padding: 0;
        cursor: pointer;
        background: transparent;
        border: 0;
        -webkit-appearance: none;
    }
    .toast-top-center {
        top: 6px;
        right: 0;
        width: 100%;
    }
    .toast-bottom-center {
        bottom: 0;
        right: 0;
        width: 100%;
    }
    .toast-top-full-width {
        top: 0;
        right: 0;
        width: 100%;
    }
    .toast-bottom-full-width {
        bottom: -6px;
        right: 0;
        width: 100%;
    }
    .toast-top-left {
        top: 12px;
        left: 12px;
    }
    .toast-top-right {
        top: 12px;
        right: 12px;
    }
    .toast-bottom-right {
        right: 12px;
        bottom: 6px;
    }
    .toast-bottom-left {
        bottom: 6px;
        left: 12px;
    }
    .toast-container {
        position: fixed;
        z-index: 999999;
        pointer-events: none;
        /*overrides*/
    }
    .toast-container * {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }
    .toast-container > div {
        position: relative;
        pointer-events: auto;
        overflow: hidden;
        margin: 0 0 6px;
        padding: 15px 15px 15px 50px;
        width: 300px;
        border-radius: 3px 3px 3px 3px;
        -moz-border-radius: 3px 3px 3px 3px;
        -webkit-border-radius: 3px 3px 3px 3px;
        background-position: 15px center;
        background-repeat: no-repeat;
        box-shadow: 0 0 12px #999999;
        -moz-box-shadow: 0 0 12px #999999;
        -webkit-box-shadow: 0 0 12px #999999;
        color: #FFFFFF;
        opacity: 0.8;
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
        filter: alpha(opacity=80);
    }
    .toast-container > :hover {
        box-shadow: 0 0 12px #000000;
        -moz-box-shadow: 0 0 12px #000000;
        -webkit-box-shadow: 0 0 12px #000000;
        opacity: 1;
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
        filter: alpha(opacity=100);
        cursor: pointer;
    }
    .toast-container > .toast-info {
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=") !important;
    }
    .toast-container > .toast-error {
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=") !important;
    }
    .toast-container > .toast-success {
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==") !important;
    }
    .toast-container > .toast-warning {
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=") !important;
    }
    .toast-container.toast-top-center > div,
    .toast-container.toast-bottom-center > div {
        width: 300px;
        float: none;
        margin-left: auto !important;
        margin-right: auto !important;
    }
    .toast-container.toast-top-full-width > div,
    .toast-container.toast-bottom-full-width > div {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }
    .toast {
        background-color: #030303;
        top: initial;
    }
    .toast-success {
        background-color: #51A351;
    }
    .toast-error {
        background-color: #BD362F;
    }
    .toast-info {
        background-color: #2F96B4;
    }
    .toast-warning {
        background-color: #F89406;
    }
    .toast-progress {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 4px;
        background-color: #000000;
        opacity: 0.4;
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);
        filter: alpha(opacity=40);
    }
    /*Responsive Design*/
    @media all and (max-width: 240px) {
        .toast-container > div {
            padding: 8px 8px 8px 50px;
            width: 11em;
        }
        .toast-container .toast-close-button {
            right: -0.2em;
            top: -0.2em;
        }
    }
    @media all and (min-width: 241px) and (max-width: 480px) {
        .toast-container > div {
            padding: 8px 8px 8px 50px;
            width: 18em;
        }
        .toast-container .toast-close-button {
            right: -0.2em;
            top: -0.2em;
        }
    }
    @media all and (min-width: 481px) and (max-width: 768px) {
        .toast-container > div {
            padding: 15px 15px 15px 50px;
            width: 25em;
        }
    }
</style>
<script>
    import VueToastr from './vue-toastr.vue'
    export default {
        name: 'ToastrWrapper',
        components: {
            'vue-toastr': VueToastr
        },
        data () {
            return {
                positions: ['toast-top-right', 'toast-bottom-right', 'toast-bottom-left', 'toast-top-left', 'toast-top-full-width', 'toast-bottom-full-width', 'toast-top-center', 'toast-bottom-center'],
                list: []
            }
        },
        methods: {
            addToast (data) {
                this.list.push(data)
                // if have onCreated
                if (typeof data.onCreated !== 'undefined') {
                    // wait doom update after call cb
                    this.$nextTick(() => {
                        data.onCreated()
                    })
                }
            },
            removeToast (data) {
                // if have onClosed
                if (data.onClosed !== undefined) {
                    data.onClosed()
                }
               this.list.splice(this.list.indexOf(data), 1)
            },
            Add (data) {
                return this.AddData(this.processObjectData(data))
            },
            AddData (data) {
                if (typeof data !== 'object') {
                    return
                }
                this.addToast(data)
            },
            processObjectData (data) {
                // if Object
                if (typeof data === 'object' && data.msg !== undefined) {
                    if (data.position === undefined) {
                        data.position = this.defaultPosition
                    }
                    if (data.type === undefined) {
                        data.type = this.defaultType
                    }
                    if (data.timeout === undefined) {
                        data.timeout = this.defaultTimeout
                    }
                    if (data.closeOnHover === undefined) {
                        data.closeOnHover = this.defaultCloseOnHover
                    }
                    return data
                }
                // if String
                return {
                    msg: data.toString(),
                    position: this.defaultPosition,
                    type: this.defaultType,
                    timeout: this.defaultTimeout,
                    closeOnHover: this.defaultCloseOnHover
                }
            },
            error (msg, title) {
                let data = this.processObjectData(msg)
                data['type'] = 'error'
                if (title !== undefined) {
                    data['title'] = title
                }
                return this.AddData(data)
            },
            success (msg, title) {
                let data = this.processObjectData(msg)
                data['type'] = 'success'
                if (title !== undefined) {
                    data['title'] = title
                }
                return this.AddData(data)
            },
            warning (msg, title) {
                let data = this.processObjectData(msg)
                data['type'] = 'warning'
                if (title !== undefined) {
                    data['title'] = title
                }
                return this.AddData(data)
            },
            info (msg, title) {
                let data = this.processObjectData(msg)
                data['type'] = 'info'
                if (title !== undefined) {
                    data['title'] = title
                }
                return this.AddData(data)
            },
            Close (data) {
                this.removeToast(data)
            }
        }
    }
</script>

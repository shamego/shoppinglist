config =
    debug:      true
    prefix:     'v-'
    delimiters: ['[[', ']]']
    silent: false
    interpolate: true
    async: true
    proto: true

vm = new Vue
    el: '#myApp'
    data:
        username: 'hogehoge'

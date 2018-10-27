// async demo
      /*  function timeout (ms) {
        return new Promise((resolve) => {
          setTimeout(resolve, ms)
        })
      }
      async function asyncPrint (value, ms) {
        await timeout(ms)
        console.log(value)
      }
      asyncPrint('hello world', 50) */

      // axios({
      //   url: '/api/index.json'
      // }).then(function (res) {
      //   console.log(res.data)
      // }).then(function (res) {
      //   console.log(res.data)
      // })

      // fetch('/api/index.json').then(response => response.json())
      //   .then(data => console.log(data))
      //   .catch(e => console.log('Oops, error', e))
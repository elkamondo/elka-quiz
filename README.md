# Elka Quiz
A Quiz application built with React & Redux.

[View Demo](https://elka-quiz.surge.sh)

## Getting Started
---

```shell
$ git clone https://github.com/elkamondo/elka-quiz.git quiz-app
$ cd quiz-app
$ npm install
$ npm start
```

Open http://localhost:8080 to view it in the browser.

### Deployment (using surge)

```shell
$ npm install -g surge
$ npm run build
$ surge dist <your-url>.surge.sh
```

You may have to create an account on [surge](https://surge.sh).

You can add `auto.appcache` to html manifest attribute
in the `index.html` file to support offline mode.
```html
<!DOCTYPE html>
<html manifest="/auto.appcache">
...
</html>
```

## License

MIT © 2018 Mohcine EL KASSIB.

## Acknowledgments

* Based on that [boilerplate](https://github.com/djizco/boilerplate-react).


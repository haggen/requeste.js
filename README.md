# Requeste
> XMLHttpRequest + FormData wrapper for easy AJAX.

## API

### new

Creates a new Requeste instance.

```js
new Requeste(string method, string uri);
```

Example:

```js
var req = new Requeste('GET', 'http://www.google.com');
```

### on

Translates to `XMLHttpRequest.addEventListener` or `XMLHttpRequest.upload.addEventListener` if the event starts with `upload:`.

```js
req.on(string event, function callback);
```

Example 1:

```js
req.on('load', function(e) { ... });
```

Example 2:

```js
req.on('upload:progress', function(e) { ... });
```

### set

Translates to `XMLHttpRequest.setRequestHeader`.

```js
req.set(string name, string value);
```

Example:

```js
req.set('Accepts', 'application/json');
```

### append

Translates to `FormData.append`.

```js
req.append(string name, mixed value);
```

Example 1:

```js
req.append('q', 'javascript ajax');
```

Example 2:

```js
req.append('file', new File);
```

### dispatch

Finishes the request.

Example:

```js
req.dispatch();
```

## Support, feedback and collaboration

Feel free to contact me, open a new issue, or send a pull request, but please note that (a) I'm not interested in creating a full-fledged AJAX suite here, and (b) the library is suppose to be small, fast and transparent so it can embedded easily.

## License

See [Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/)

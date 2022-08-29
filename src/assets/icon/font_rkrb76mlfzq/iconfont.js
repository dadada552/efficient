!(function (e) {
	var t,
		n,
		o,
		a,
		i,
		c =
			'<svg><symbol id="icon-24gl-fullScreenEnter2" viewBox="0 0 1024 1024"><path d="M256 874.666667a21.333333 21.333333 0 0 1-21.333333 21.333333H96a53.393333 53.393333 0 0 1-53.333333-53.333333v-138.666667a21.333333 21.333333 0 0 1 42.666666 0v138.666667a10.666667 10.666667 0 0 0 10.666667 10.666666h138.666667a21.333333 21.333333 0 0 1 21.333333 21.333334zM42.666667 320V181.333333a53.393333 53.393333 0 0 1 53.333333-53.333333h138.666667a21.333333 21.333333 0 0 1 0 42.666667H96a10.666667 10.666667 0 0 0-10.666667 10.666666v138.666667a21.333333 21.333333 0 0 1-42.666666 0z m938.666666-138.666667v138.666667a21.333333 21.333333 0 0 1-42.666666 0V181.333333a10.666667 10.666667 0 0 0-10.666667-10.666666h-138.666667a21.333333 21.333333 0 0 1 0-42.666667h138.666667a53.393333 53.393333 0 0 1 53.333333 53.333333z m0 522.666667v138.666667a53.393333 53.393333 0 0 1-53.333333 53.333333h-138.666667a21.333333 21.333333 0 0 1 0-42.666667h138.666667a10.666667 10.666667 0 0 0 10.666667-10.666666v-138.666667a21.333333 21.333333 0 0 1 42.666666 0z" fill="#5C5C66" ></path></symbol></svg>',
		d = (d = document.getElementsByTagName("script"))[
			d.length - 1
		].getAttribute("data-injectcss"),
		l = function (e, t) {
			t.parentNode.insertBefore(e, t)
		}
	if (d && !e.__iconfont__svg__cssinject__) {
		e.__iconfont__svg__cssinject__ = !0
		try {
			document.write(
				"<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
			)
		} catch (e) {
			console && console.log(e)
		}
	}
	function s() {
		i || ((i = !0), o())
	}
	function r() {
		try {
			a.documentElement.doScroll("left")
		} catch (e) {
			return void setTimeout(r, 50)
		}
		s()
	}
	;(t = function () {
		var e,
			t = document.createElement("div")
		;(t.innerHTML = c),
			(c = null),
			(t = t.getElementsByTagName("svg")[0]) &&
				(t.setAttribute("aria-hidden", "true"),
				(t.style.position = "absolute"),
				(t.style.width = 0),
				(t.style.height = 0),
				(t.style.overflow = "hidden"),
				(t = t),
				(e = document.body).firstChild ? l(t, e.firstChild) : e.appendChild(t))
	}),
		document.addEventListener
			? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
				? setTimeout(t, 0)
				: ((n = function () {
						document.removeEventListener("DOMContentLoaded", n, !1), t()
				  }),
				  document.addEventListener("DOMContentLoaded", n, !1))
			: document.attachEvent &&
			  ((o = t),
			  (a = e.document),
			  (i = !1),
			  r(),
			  (a.onreadystatechange = function () {
					"complete" == a.readyState && ((a.onreadystatechange = null), s())
			  }))
})(window)

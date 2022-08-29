!(function (e) {
	var t,
		n,
		c,
		o,
		i,
		s =
			'<svg><symbol id="icon-suoxiao-xiaoping-04" viewBox="0 0 1024 1024"><path d="M310.613333 334.506667c-6.826667 0-13.653333-1.706667-18.773333-6.826667L40.96 78.506667c-10.24-10.24-10.24-27.306667 0-37.546667s25.6-10.24 35.84 0L327.68 290.133333c10.24 10.24 10.24 25.6 0 35.84-3.413333 6.826667-10.24 8.533333-17.066667 8.533334zM58.026667 989.866667c-6.826667 0-13.653333-1.706667-18.773334-6.826667-10.24-10.24-10.24-25.6 0-35.84l252.586667-249.173333c10.24-10.24 25.6-10.24 35.84 0 10.24 10.24 10.24 25.6 0 35.84L76.8 983.04c-5.12 5.12-11.946667 6.826667-18.773333 6.826667zM965.973333 989.866667c-6.826667 0-13.653333-1.706667-18.773333-6.826667L698.026667 732.16c-10.24-10.24-10.24-25.6 0-35.84s25.6-10.24 35.84 0l249.173333 249.173333c10.24 10.24 10.24 25.6 0 35.84-5.12 6.826667-10.24 8.533333-17.066667 8.533334zM713.386667 334.506667c-6.826667 0-13.653333-1.706667-18.773334-6.826667-10.24-10.24-10.24-25.6 0-35.84L945.493333 40.96c10.24-10.24 25.6-10.24 35.84 0s10.24 25.6 0 35.84L732.16 327.68c-5.12 5.12-11.946667 6.826667-18.773333 6.826667z" fill="#333333" ></path><path d="M940.373333 337.92H713.386667c-13.653333 0-25.6-11.946667-25.6-25.6V85.333333c0-13.653333 11.946667-25.6 25.6-25.6s25.6 11.946667 25.6 25.6v201.386667h201.386666c13.653333 0 25.6 11.946667 25.6 25.6s-11.946667 25.6-25.6 25.6zM310.613333 337.92H83.626667c-13.653333 0-25.6-11.946667-25.6-25.6s11.946667-25.6 25.6-25.6h201.386666V85.333333c0-13.653333 11.946667-25.6 25.6-25.6s25.6 11.946667 25.6 25.6v226.986667c0 13.653333-11.946667 25.6-25.6 25.6zM310.613333 967.68c-13.653333 0-25.6-11.946667-25.6-25.6V740.693333H83.626667c-13.653333 0-25.6-11.946667-25.6-25.6s11.946667-25.6 25.6-25.6h226.986666c13.653333 0 25.6 11.946667 25.6 25.6v226.986667c0 13.653333-11.946667 25.6-25.6 25.6zM713.386667 967.68c-13.653333 0-25.6-11.946667-25.6-25.6V715.093333c0-13.653333 11.946667-25.6 25.6-25.6h223.573333c13.653333 0 25.6 11.946667 25.6 25.6s-11.946667 25.6-25.6 25.6H738.986667v201.386667c0 13.653333-11.946667 25.6-25.6 25.6z" fill="#333333" ></path></symbol></svg>',
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
	function a() {
		i || ((i = !0), c())
	}
	function r() {
		try {
			o.documentElement.doScroll("left")
		} catch (e) {
			return void setTimeout(r, 50)
		}
		a()
	}
	;(t = function () {
		var e,
			t = document.createElement("div")
		;(t.innerHTML = s),
			(s = null),
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
			  ((c = t),
			  (o = e.document),
			  (i = !1),
			  r(),
			  (o.onreadystatechange = function () {
					"complete" == o.readyState && ((o.onreadystatechange = null), a())
			  }))
})(window)

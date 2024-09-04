(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [642], {
        84058: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return l
                }
            });
            let s = i(87675);
            i(7653);
            let r = s._(i(96130));

            function a(e) {
                return {
                    default: (null == e ? void 0 : e.default) || e
                }
            }

            function l(e, t) {
                let i = r.default,
                    s = {
                        loading: e => {
                            let {
                                error: t,
                                isLoading: i,
                                pastDelay: s
                            } = e;
                            return null
                        }
                    };
                "function" == typeof e && (s.loader = e), Object.assign(s, t);
                let l = s.loader;
                return i({ ...s,
                    loader: () => null != l ? l().then(a) : Promise.resolve(a(() => null))
                })
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        78386: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var i in t) Object.defineProperty(e, i, {
                        enumerable: !0,
                        get: t[i]
                    })
                }(t, {
                    default: function() {
                        return d
                    },
                    unstable_getImgProps: function() {
                        return o
                    }
                });
            let s = i(87675),
                r = i(19167),
                a = i(59378),
                l = i(16116),
                n = s._(i(90752)),
                o = e => {
                    (0, a.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
                    let {
                        props: t
                    } = (0, r.getImgProps)(e, {
                        defaultLoader: n.default,
                        imgConf: {
                            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                            path: "/_next/image",
                            loader: "default",
                            dangerouslyAllowSVG: !1,
                            unoptimized: !1
                        }
                    });
                    for (let [e, i] of Object.entries(t)) void 0 === i && delete t[e];
                    return {
                        props: t
                    }
                },
                d = l.Image
        },
        96130: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return l
                }
            });
            let s = i(87675),
                r = s._(i(7653)),
                a = i(89970),
                l = function(e) {
                    let t = Object.assign({
                        loader: null,
                        loading: null,
                        ssr: !0
                    }, e);

                    function i(e) {
                        let i = t.loading,
                            s = r.default.createElement(i, {
                                isLoading: !0,
                                pastDelay: !0,
                                error: null
                            }),
                            l = t.ssr ? r.default.Fragment : a.NoSSR,
                            n = t.lazy;
                        return r.default.createElement(r.default.Suspense, {
                            fallback: s
                        }, r.default.createElement(l, null, r.default.createElement(n, e)))
                    }
                    return t.lazy = r.default.lazy(t.loader), i.displayName = "LoadableComponent", i
                }
        },
        26363: function() {},
        73542: function() {},
        96072: function(e, t, i) {
            e.exports = i(78386)
        },
        39533: function(e, t, i) {
            "use strict";
            i.d(t, {
                pt: function() {
                    return n
                },
                tl: function() {
                    return l
                }
            });
            var s = i(75983),
                r = i(88149);

            function a(e) {
                return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
            }

            function l(e) {
                let t, {
                        swiper: i,
                        extendParams: s,
                        on: l,
                        emit: n
                    } = e,
                    o = "swiper-pagination";
                s({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: `${o}-bullet`,
                        bulletActiveClass: `${o}-bullet-active`,
                        modifierClass: `${o}-`,
                        currentClass: `${o}-current`,
                        totalClass: `${o}-total`,
                        hiddenClass: `${o}-hidden`,
                        progressbarFillClass: `${o}-progressbar-fill`,
                        progressbarOppositeClass: `${o}-progressbar-opposite`,
                        clickableClass: `${o}-clickable`,
                        lockClass: `${o}-lock`,
                        horizontalClass: `${o}-horizontal`,
                        verticalClass: `${o}-vertical`,
                        paginationDisabledClass: `${o}-disabled`
                    }
                }), i.pagination = {
                    el: null,
                    bullets: []
                };
                let d = 0;

                function u() {
                    return !i.params.pagination.el || !i.pagination.el || Array.isArray(i.pagination.el) && 0 === i.pagination.el.length
                }

                function p(e, t) {
                    let {
                        bulletActiveClass: s
                    } = i.params.pagination;
                    e && (e = e[`${"prev"===t?"previous":"next"}ElementSibling`]) && (e.classList.add(`${s}-${t}`), (e = e[`${"prev"===t?"previous":"next"}ElementSibling`]) && e.classList.add(`${s}-${t}-${t}`))
                }

                function c(e) {
                    let t = e.target.closest(a(i.params.pagination.bulletClass));
                    if (!t) return;
                    e.preventDefault();
                    let s = (0, r.h)(t) * i.params.slidesPerGroup;
                    if (i.params.loop) {
                        if (i.realIndex === s) return;
                        i.slideToLoop(s)
                    } else i.slideTo(s)
                }

                function h() {
                    let e, s;
                    let l = i.rtl,
                        o = i.params.pagination;
                    if (u()) return;
                    let c = i.pagination.el;
                    c = (0, r.m)(c);
                    let h = i.virtual && i.params.virtual.enabled ? i.virtual.slides.length : i.slides.length,
                        f = i.params.loop ? Math.ceil(h / i.params.slidesPerGroup) : i.snapGrid.length;
                    if (i.params.loop ? (s = i.previousRealIndex || 0, e = i.params.slidesPerGroup > 1 ? Math.floor(i.realIndex / i.params.slidesPerGroup) : i.realIndex) : void 0 !== i.snapIndex ? (e = i.snapIndex, s = i.previousSnapIndex) : (s = i.previousIndex || 0, e = i.activeIndex || 0), "bullets" === o.type && i.pagination.bullets && i.pagination.bullets.length > 0) {
                        let a, n, u;
                        let h = i.pagination.bullets;
                        if (o.dynamicBullets && (t = (0, r.f)(h[0], i.isHorizontal() ? "width" : "height", !0), c.forEach(e => {
                                e.style[i.isHorizontal() ? "width" : "height"] = `${t*(o.dynamicMainBullets+4)}px`
                            }), o.dynamicMainBullets > 1 && void 0 !== s && ((d += e - (s || 0)) > o.dynamicMainBullets - 1 ? d = o.dynamicMainBullets - 1 : d < 0 && (d = 0)), u = ((n = (a = Math.max(e - d, 0)) + (Math.min(h.length, o.dynamicMainBullets) - 1)) + a) / 2), h.forEach(e => {
                                let t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${o.bulletActiveClass}${e}`)].map(e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                                e.classList.remove(...t)
                            }), c.length > 1) h.forEach(t => {
                            let s = (0, r.h)(t);
                            s === e ? t.classList.add(...o.bulletActiveClass.split(" ")) : i.isElement && t.setAttribute("part", "bullet"), o.dynamicBullets && (s >= a && s <= n && t.classList.add(...`${o.bulletActiveClass}-main`.split(" ")), s === a && p(t, "prev"), s === n && p(t, "next"))
                        });
                        else {
                            let t = h[e];
                            if (t && t.classList.add(...o.bulletActiveClass.split(" ")), i.isElement && h.forEach((t, i) => {
                                    t.setAttribute("part", i === e ? "bullet-active" : "bullet")
                                }), o.dynamicBullets) {
                                let e = h[a],
                                    t = h[n];
                                for (let e = a; e <= n; e += 1) h[e] && h[e].classList.add(...`${o.bulletActiveClass}-main`.split(" "));
                                p(e, "prev"), p(t, "next")
                            }
                        }
                        if (o.dynamicBullets) {
                            let e = Math.min(h.length, o.dynamicMainBullets + 4),
                                s = (t * e - t) / 2 - u * t,
                                r = l ? "right" : "left";
                            h.forEach(e => {
                                e.style[i.isHorizontal() ? r : "top"] = `${s}px`
                            })
                        }
                    }
                    c.forEach((t, s) => {
                        if ("fraction" === o.type && (t.querySelectorAll(a(o.currentClass)).forEach(t => {
                                t.textContent = o.formatFractionCurrent(e + 1)
                            }), t.querySelectorAll(a(o.totalClass)).forEach(e => {
                                e.textContent = o.formatFractionTotal(f)
                            })), "progressbar" === o.type) {
                            let s;
                            s = o.progressbarOpposite ? i.isHorizontal() ? "vertical" : "horizontal" : i.isHorizontal() ? "horizontal" : "vertical";
                            let r = (e + 1) / f,
                                l = 1,
                                n = 1;
                            "horizontal" === s ? l = r : n = r, t.querySelectorAll(a(o.progressbarFillClass)).forEach(e => {
                                e.style.transform = `translate3d(0,0,0) scaleX(${l}) scaleY(${n})`, e.style.transitionDuration = `${i.params.speed}ms`
                            })
                        }
                        "custom" === o.type && o.renderCustom ? (t.innerHTML = o.renderCustom(i, e + 1, f), 0 === s && n("paginationRender", t)) : (0 === s && n("paginationRender", t), n("paginationUpdate", t)), i.params.watchOverflow && i.enabled && t.classList[i.isLocked ? "add" : "remove"](o.lockClass)
                    })
                }

                function f() {
                    let e = i.params.pagination;
                    if (u()) return;
                    let t = i.virtual && i.params.virtual.enabled ? i.virtual.slides.length : i.grid && i.params.grid.rows > 1 ? i.slides.length / Math.ceil(i.params.grid.rows) : i.slides.length,
                        s = i.pagination.el;
                    s = (0, r.m)(s);
                    let l = "";
                    if ("bullets" === e.type) {
                        let s = i.params.loop ? Math.ceil(t / i.params.slidesPerGroup) : i.snapGrid.length;
                        i.params.freeMode && i.params.freeMode.enabled && s > t && (s = t);
                        for (let t = 0; t < s; t += 1) e.renderBullet ? l += e.renderBullet.call(i, t, e.bulletClass) : l += `<${e.bulletElement} ${i.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
                    }
                    "fraction" === e.type && (l = e.renderFraction ? e.renderFraction.call(i, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (l = e.renderProgressbar ? e.renderProgressbar.call(i, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), i.pagination.bullets = [], s.forEach(t => {
                        "custom" !== e.type && (t.innerHTML = l || ""), "bullets" === e.type && i.pagination.bullets.push(...t.querySelectorAll(a(e.bulletClass)))
                    }), "custom" !== e.type && n("paginationRender", s[0])
                }

                function m() {
                    var e, t, s;
                    let a;
                    i.params.pagination = (e = i.originalParams.pagination, t = i.params.pagination, s = {
                        el: "swiper-pagination"
                    }, i.params.createElements && Object.keys(s).forEach(a => {
                        if (!t[a] && !0 === t.auto) {
                            let l = (0, r.e)(i.el, `.${s[a]}`)[0];
                            l || ((l = (0, r.c)("div", s[a])).className = s[a], i.el.append(l)), t[a] = l, e[a] = l
                        }
                    }), t);
                    let l = i.params.pagination;
                    l.el && ("string" == typeof l.el && i.isElement && (a = i.el.querySelector(l.el)), a || "string" != typeof l.el || (a = [...document.querySelectorAll(l.el)]), a || (a = l.el), a && 0 !== a.length && (i.params.uniqueNavElements && "string" == typeof l.el && Array.isArray(a) && a.length > 1 && (a = [...i.el.querySelectorAll(l.el)]).length > 1 && (a = a.filter(e => (0, r.a)(e, ".swiper")[0] === i.el)[0]), Array.isArray(a) && 1 === a.length && (a = a[0]), Object.assign(i.pagination, {
                        el: a
                    }), (a = (0, r.m)(a)).forEach(e => {
                        "bullets" === l.type && l.clickable && e.classList.add(...(l.clickableClass || "").split(" ")), e.classList.add(l.modifierClass + l.type), e.classList.add(i.isHorizontal() ? l.horizontalClass : l.verticalClass), "bullets" === l.type && l.dynamicBullets && (e.classList.add(`${l.modifierClass}${l.type}-dynamic`), d = 0, l.dynamicMainBullets < 1 && (l.dynamicMainBullets = 1)), "progressbar" === l.type && l.progressbarOpposite && e.classList.add(l.progressbarOppositeClass), l.clickable && e.addEventListener("click", c), i.enabled || e.classList.add(l.lockClass)
                    })))
                }

                function g() {
                    let e = i.params.pagination;
                    if (u()) return;
                    let t = i.pagination.el;
                    t && (t = (0, r.m)(t)).forEach(t => {
                        t.classList.remove(e.hiddenClass), t.classList.remove(e.modifierClass + e.type), t.classList.remove(i.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (t.classList.remove(...(e.clickableClass || "").split(" ")), t.removeEventListener("click", c))
                    }), i.pagination.bullets && i.pagination.bullets.forEach(t => t.classList.remove(...e.bulletActiveClass.split(" ")))
                }
                l("changeDirection", () => {
                    if (!i.pagination || !i.pagination.el) return;
                    let e = i.params.pagination,
                        {
                            el: t
                        } = i.pagination;
                    (t = (0, r.m)(t)).forEach(t => {
                        t.classList.remove(e.horizontalClass, e.verticalClass), t.classList.add(i.isHorizontal() ? e.horizontalClass : e.verticalClass)
                    })
                }), l("init", () => {
                    !1 === i.params.pagination.enabled ? v() : (m(), f(), h())
                }), l("activeIndexChange", () => {
                    void 0 === i.snapIndex && h()
                }), l("snapIndexChange", () => {
                    h()
                }), l("snapGridLengthChange", () => {
                    f(), h()
                }), l("destroy", () => {
                    g()
                }), l("enable disable", () => {
                    let {
                        el: e
                    } = i.pagination;
                    e && (e = (0, r.m)(e)).forEach(e => e.classList[i.enabled ? "remove" : "add"](i.params.pagination.lockClass))
                }), l("lock unlock", () => {
                    h()
                }), l("click", (e, t) => {
                    let s = t.target,
                        a = (0, r.m)(i.pagination.el);
                    if (i.params.pagination.el && i.params.pagination.hideOnClick && a && a.length > 0 && !s.classList.contains(i.params.pagination.bulletClass)) {
                        if (i.navigation && (i.navigation.nextEl && s === i.navigation.nextEl || i.navigation.prevEl && s === i.navigation.prevEl)) return;
                        let e = a[0].classList.contains(i.params.pagination.hiddenClass);
                        !0 === e ? n("paginationShow") : n("paginationHide"), a.forEach(e => e.classList.toggle(i.params.pagination.hiddenClass))
                    }
                });
                let v = () => {
                    i.el.classList.add(i.params.pagination.paginationDisabledClass);
                    let {
                        el: e
                    } = i.pagination;
                    e && (e = (0, r.m)(e)).forEach(e => e.classList.add(i.params.pagination.paginationDisabledClass)), g()
                };
                Object.assign(i.pagination, {
                    enable: () => {
                        i.el.classList.remove(i.params.pagination.paginationDisabledClass);
                        let {
                            el: e
                        } = i.pagination;
                        e && (e = (0, r.m)(e)).forEach(e => e.classList.remove(i.params.pagination.paginationDisabledClass)), m(), f(), h()
                    },
                    disable: v,
                    render: f,
                    update: h,
                    init: m,
                    destroy: g
                })
            }

            function n(e) {
                let t, i, r, a, l, n, o, d, u, p, {
                    swiper: c,
                    extendParams: h,
                    on: f,
                    emit: m,
                    params: g
                } = e;
                c.autoplay = {
                    running: !1,
                    paused: !1,
                    timeLeft: 0
                }, h({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !1,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                });
                let v = g && g.autoplay ? g.autoplay.delay : 3e3,
                    w = g && g.autoplay ? g.autoplay.delay : 3e3,
                    b = new Date().getTime();

                function y(e) {
                    c && !c.destroyed && c.wrapperEl && e.target === c.wrapperEl && (c.wrapperEl.removeEventListener("transitionend", y), !p && (!e.detail || !e.detail.bySwiperTouchMove) && P())
                }
                let S = () => {
                        if (c.destroyed || !c.autoplay.running) return;
                        c.autoplay.paused ? a = !0 : a && (w = r, a = !1);
                        let e = c.autoplay.paused ? r : b + w - new Date().getTime();
                        c.autoplay.timeLeft = e, m("autoplayTimeLeft", e, e / v), i = requestAnimationFrame(() => {
                            S()
                        })
                    },
                    T = () => {
                        let e;
                        if (!(e = c.virtual && c.params.virtual.enabled ? c.slides.filter(e => e.classList.contains("swiper-slide-active"))[0] : c.slides[c.activeIndex])) return;
                        let t = parseInt(e.getAttribute("data-swiper-autoplay"), 10);
                        return t
                    },
                    E = e => {
                        if (c.destroyed || !c.autoplay.running) return;
                        cancelAnimationFrame(i), S();
                        let s = void 0 === e ? c.params.autoplay.delay : e;
                        v = c.params.autoplay.delay, w = c.params.autoplay.delay;
                        let a = T();
                        !Number.isNaN(a) && a > 0 && void 0 === e && (s = a, v = a, w = a), r = s;
                        let l = c.params.speed,
                            n = () => {
                                c && !c.destroyed && (c.params.autoplay.reverseDirection ? !c.isBeginning || c.params.loop || c.params.rewind ? (c.slidePrev(l, !0, !0), m("autoplay")) : c.params.autoplay.stopOnLastSlide || (c.slideTo(c.slides.length - 1, l, !0, !0), m("autoplay")) : !c.isEnd || c.params.loop || c.params.rewind ? (c.slideNext(l, !0, !0), m("autoplay")) : c.params.autoplay.stopOnLastSlide || (c.slideTo(0, l, !0, !0), m("autoplay")), c.params.cssMode && (b = new Date().getTime(), requestAnimationFrame(() => {
                                    E()
                                })))
                            };
                        return s > 0 ? (clearTimeout(t), t = setTimeout(() => {
                            n()
                        }, s)) : requestAnimationFrame(() => {
                            n()
                        }), s
                    },
                    x = () => {
                        b = new Date().getTime(), c.autoplay.running = !0, E(), m("autoplayStart")
                    },
                    C = () => {
                        c.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(i), m("autoplayStop")
                    },
                    M = (e, i) => {
                        if (c.destroyed || !c.autoplay.running) return;
                        clearTimeout(t), e || (u = !0);
                        let s = () => {
                            m("autoplayPause"), c.params.autoplay.waitForTransition ? c.wrapperEl.addEventListener("transitionend", y) : P()
                        };
                        if (c.autoplay.paused = !0, i) {
                            d && (r = c.params.autoplay.delay), d = !1, s();
                            return
                        }
                        let a = r || c.params.autoplay.delay;
                        r = a - (new Date().getTime() - b), c.isEnd && r < 0 && !c.params.loop || (r < 0 && (r = 0), s())
                    },
                    P = () => {
                        c.isEnd && r < 0 && !c.params.loop || c.destroyed || !c.autoplay.running || (b = new Date().getTime(), u ? (u = !1, E(r)) : E(), c.autoplay.paused = !1, m("autoplayResume"))
                    },
                    L = () => {
                        if (c.destroyed || !c.autoplay.running) return;
                        let e = (0, s.g)();
                        "hidden" === e.visibilityState && (u = !0, M(!0)), "visible" === e.visibilityState && P()
                    },
                    O = e => {
                        "mouse" === e.pointerType && (u = !0, p = !0, c.animating || c.autoplay.paused || M(!0))
                    },
                    k = e => {
                        "mouse" === e.pointerType && (p = !1, c.autoplay.paused && P())
                    },
                    _ = () => {
                        c.params.autoplay.pauseOnMouseEnter && (c.el.addEventListener("pointerenter", O), c.el.addEventListener("pointerleave", k))
                    },
                    I = () => {
                        c.el && "string" != typeof c.el && (c.el.removeEventListener("pointerenter", O), c.el.removeEventListener("pointerleave", k))
                    },
                    A = () => {
                        let e = (0, s.g)();
                        e.addEventListener("visibilitychange", L)
                    },
                    z = () => {
                        let e = (0, s.g)();
                        e.removeEventListener("visibilitychange", L)
                    };
                f("init", () => {
                    c.params.autoplay.enabled && (_(), A(), x())
                }), f("destroy", () => {
                    I(), z(), c.autoplay.running && C()
                }), f("_freeModeStaticRelease", () => {
                    (n || u) && P()
                }), f("_freeModeNoMomentumRelease", () => {
                    c.params.autoplay.disableOnInteraction ? C() : M(!0, !0)
                }), f("beforeTransitionStart", (e, t, i) => {
                    !c.destroyed && c.autoplay.running && (i || !c.params.autoplay.disableOnInteraction ? M(!0, !0) : C())
                }), f("sliderFirstMove", () => {
                    if (!c.destroyed && c.autoplay.running) {
                        if (c.params.autoplay.disableOnInteraction) {
                            C();
                            return
                        }
                        l = !0, n = !1, u = !1, o = setTimeout(() => {
                            u = !0, n = !0, M(!0)
                        }, 200)
                    }
                }), f("touchEnd", () => {
                    if (!c.destroyed && c.autoplay.running && l) {
                        if (clearTimeout(o), clearTimeout(t), c.params.autoplay.disableOnInteraction) {
                            n = !1, l = !1;
                            return
                        }
                        n && c.params.cssMode && P(), n = !1, l = !1
                    }
                }), f("slideChange", () => {
                    !c.destroyed && c.autoplay.running && (d = !0)
                }), Object.assign(c.autoplay, {
                    start: x,
                    stop: C,
                    pause: M,
                    resume: P
                })
            }
        },
        75983: function(e, t, i) {
            "use strict";

            function s(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function r(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : s(t[i]) && s(e[i]) && Object.keys(t[i]).length > 0 && r(e[i], t[i])
                })
            }
            i.d(t, {
                a: function() {
                    return o
                },
                g: function() {
                    return l
                }
            });
            let a = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function l() {
                let e = "undefined" != typeof document ? document : {};
                return r(e, a), e
            }
            let n = {
                document: a,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e)
                }
            };

            function o() {
                let e = "undefined" != typeof window ? window : {};
                return r(e, n), e
            }
        },
        88149: function(e, t, i) {
            "use strict";
            i.d(t, {
                a: function() {
                    return b
                },
                c: function() {
                    return f
                },
                d: function() {
                    return l
                },
                e: function() {
                    return p
                },
                f: function() {
                    return y
                },
                h: function() {
                    return w
                },
                j: function() {
                    return n
                },
                m: function() {
                    return S
                },
                n: function() {
                    return a
                },
                p: function() {
                    return v
                },
                q: function() {
                    return g
                },
                r: function() {
                    return m
                },
                s: function() {
                    return d
                },
                t: function() {
                    return u
                },
                u: function() {
                    return h
                },
                v: function() {
                    return c
                },
                w: function() {
                    return function e() {
                        let t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                            i = ["__proto__", "constructor", "prototype"];
                        for (let s = 1; s < arguments.length; s += 1) {
                            let r = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                            if (null != r && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(r instanceof HTMLElement) : !r || 1 !== r.nodeType && 11 !== r.nodeType)) {
                                let s = Object.keys(Object(r)).filter(e => 0 > i.indexOf(e));
                                for (let i = 0, a = s.length; i < a; i += 1) {
                                    let a = s[i],
                                        l = Object.getOwnPropertyDescriptor(r, a);
                                    void 0 !== l && l.enumerable && (o(t[a]) && o(r[a]) ? r[a].__swiper__ ? t[a] = r[a] : e(t[a], r[a]) : !o(t[a]) && o(r[a]) ? (t[a] = {}, r[a].__swiper__ ? t[a] = r[a] : e(t[a], r[a])) : t[a] = r[a])
                                }
                            }
                        }
                        return t
                    }
                },
                x: function() {
                    return r
                }
            });
            var s = i(75983);

            function r(e) {
                Object.keys(e).forEach(t => {
                    try {
                        e[t] = null
                    } catch (e) {}
                    try {
                        delete e[t]
                    } catch (e) {}
                })
            }

            function a(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            }

            function l() {
                return Date.now()
            }

            function n(e, t) {
                let i, r, a;
                void 0 === t && (t = "x");
                let l = (0, s.a)(),
                    n = function(e) {
                        let t;
                        let i = (0, s.a)();
                        return i.getComputedStyle && (t = i.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
                    }(e);
                return l.WebKitCSSMatrix ? ((r = n.transform || n.webkitTransform).split(",").length > 6 && (r = r.split(", ").map(e => e.replace(",", ".")).join(", ")), a = new l.WebKitCSSMatrix("none" === r ? "" : r)) : i = (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (r = l.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (r = l.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), r || 0
            }

            function o(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function d(e, t, i) {
                e.style.setProperty(t, i)
            }

            function u(e) {
                let t, {
                        swiper: i,
                        targetPosition: r,
                        side: a
                    } = e,
                    l = (0, s.a)(),
                    n = -i.translate,
                    o = null,
                    d = i.params.speed;
                i.wrapperEl.style.scrollSnapType = "none", l.cancelAnimationFrame(i.cssModeFrameID);
                let u = r > n ? "next" : "prev",
                    p = (e, t) => "next" === u && e >= t || "prev" === u && e <= t,
                    c = () => {
                        t = new Date().getTime(), null === o && (o = t);
                        let e = Math.max(Math.min((t - o) / d, 1), 0),
                            s = n + (.5 - Math.cos(e * Math.PI) / 2) * (r - n);
                        if (p(s, r) && (s = r), i.wrapperEl.scrollTo({
                                [a]: s
                            }), p(s, r)) {
                            i.wrapperEl.style.overflow = "hidden", i.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                                i.wrapperEl.style.overflow = "", i.wrapperEl.scrollTo({
                                    [a]: s
                                })
                            }), l.cancelAnimationFrame(i.cssModeFrameID);
                            return
                        }
                        i.cssModeFrameID = l.requestAnimationFrame(c)
                    };
                c()
            }

            function p(e, t) {
                void 0 === t && (t = "");
                let i = [...e.children];
                return (e instanceof HTMLSlotElement && i.push(...e.assignedElements()), t) ? i.filter(e => e.matches(t)) : i
            }

            function c(e, t) {
                let i = t.contains(e);
                if (!i && t instanceof HTMLSlotElement) {
                    let t = [...element.assignedElements()];
                    return t.includes(e)
                }
                return i
            }

            function h(e) {
                try {
                    console.warn(e);
                    return
                } catch (e) {}
            }

            function f(e, t) {
                var i;
                void 0 === t && (t = []);
                let s = document.createElement(e);
                return s.classList.add(...Array.isArray(t) ? t : (void 0 === (i = t) && (i = ""), i.trim().split(" ").filter(e => !!e.trim()))), s
            }

            function m(e, t) {
                let i = [];
                for (; e.previousElementSibling;) {
                    let s = e.previousElementSibling;
                    t ? s.matches(t) && i.push(s) : i.push(s), e = s
                }
                return i
            }

            function g(e, t) {
                let i = [];
                for (; e.nextElementSibling;) {
                    let s = e.nextElementSibling;
                    t ? s.matches(t) && i.push(s) : i.push(s), e = s
                }
                return i
            }

            function v(e, t) {
                let i = (0, s.a)();
                return i.getComputedStyle(e, null).getPropertyValue(t)
            }

            function w(e) {
                let t, i = e;
                if (i) {
                    for (t = 0; null !== (i = i.previousSibling);) 1 === i.nodeType && (t += 1);
                    return t
                }
            }

            function b(e, t) {
                let i = [],
                    s = e.parentElement;
                for (; s;) t ? s.matches(t) && i.push(s) : i.push(s), s = s.parentElement;
                return i
            }

            function y(e, t, i) {
                let r = (0, s.a)();
                return i ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
            }

            function S(e) {
                return (Array.isArray(e) ? e : [e]).filter(e => !!e)
            }
        },
        98482: function(e, t, i) {
            "use strict";
            let s, r, a;
            i.d(t, {
                tq: function() {
                    return q
                },
                o5: function() {
                    return W
                }
            });
            var l = i(7653),
                n = i(75983),
                o = i(88149);

            function d() {
                return s || (s = function() {
                    let e = (0, n.a)(),
                        t = (0, n.g)();
                    return {
                        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                    }
                }()), s
            }

            function u(e) {
                return void 0 === e && (e = {}), r || (r = function(e) {
                    let {
                        userAgent: t
                    } = void 0 === e ? {} : e, i = d(), s = (0, n.a)(), r = s.navigator.platform, a = t || s.navigator.userAgent, l = {
                        ios: !1,
                        android: !1
                    }, o = s.screen.width, u = s.screen.height, p = a.match(/(Android);?[\s\/]+([\d.]+)?/), c = a.match(/(iPad).*OS\s([\d_]+)/), h = a.match(/(iPod)(.*OS\s([\d_]+))?/), f = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/), m = "MacIntel" === r;
                    return !c && m && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${u}`) >= 0 && ((c = a.match(/(Version)\/([\d.]+)/)) || (c = [0, 1, "13_0_0"]), m = !1), p && "Win32" !== r && (l.os = "android", l.android = !0), (c || f || h) && (l.os = "ios", l.ios = !0), l
                }(e)), r
            }
            let p = (e, t, i) => {
                    t && !e.classList.contains(i) ? e.classList.add(i) : !t && e.classList.contains(i) && e.classList.remove(i)
                },
                c = (e, t, i) => {
                    t && !e.classList.contains(i) ? e.classList.add(i) : !t && e.classList.contains(i) && e.classList.remove(i)
                },
                h = (e, t) => {
                    if (!e || e.destroyed || !e.params) return;
                    let i = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
                    if (i) {
                        let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
                        !t && e.isElement && (i.shadowRoot ? t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
                            i.shadowRoot && (t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)) && t.remove()
                        })), t && t.remove()
                    }
                },
                f = (e, t) => {
                    if (!e.slides[t]) return;
                    let i = e.slides[t].querySelector('[loading="lazy"]');
                    i && i.removeAttribute("loading")
                },
                m = e => {
                    if (!e || e.destroyed || !e.params) return;
                    let t = e.params.lazyPreloadPrevNext,
                        i = e.slides.length;
                    if (!i || !t || t < 0) return;
                    t = Math.min(t, i);
                    let s = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                        r = e.activeIndex;
                    if (e.params.grid && e.params.grid.rows > 1) {
                        let i = [r - t];
                        i.push(...Array.from({
                            length: t
                        }).map((e, t) => r + s + t)), e.slides.forEach((t, s) => {
                            i.includes(t.column) && f(e, s)
                        });
                        return
                    }
                    let a = r + s - 1;
                    if (e.params.rewind || e.params.loop)
                        for (let s = r - t; s <= a + t; s += 1) {
                            let t = (s % i + i) % i;
                            (t < r || t > a) && f(e, t)
                        } else
                            for (let s = Math.max(r - t, 0); s <= Math.min(a + t, i - 1); s += 1) s !== r && (s > a || s < r) && f(e, s)
                };

            function g(e) {
                let {
                    swiper: t,
                    runCallbacks: i,
                    direction: s,
                    step: r
                } = e, {
                    activeIndex: a,
                    previousIndex: l
                } = t, n = s;
                if (n || (n = a > l ? "next" : a < l ? "prev" : "reset"), t.emit(`transition${r}`), i && a !== l) {
                    if ("reset" === n) {
                        t.emit(`slideResetTransition${r}`);
                        return
                    }
                    t.emit(`slideChangeTransition${r}`), "next" === n ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`)
                }
            }

            function v(e, t, i) {
                let s = (0, n.a)(),
                    {
                        params: r
                    } = e,
                    a = r.edgeSwipeDetection,
                    l = r.edgeSwipeThreshold;
                return !a || !(i <= l) && !(i >= s.innerWidth - l) || "prevent" === a && (t.preventDefault(), !0)
            }

            function w(e) {
                let t = (0, n.g)(),
                    i = e;
                i.originalEvent && (i = i.originalEvent);
                let s = this.touchEventsData;
                if ("pointerdown" === i.type) {
                    if (null !== s.pointerId && s.pointerId !== i.pointerId) return;
                    s.pointerId = i.pointerId
                } else "touchstart" === i.type && 1 === i.targetTouches.length && (s.touchId = i.targetTouches[0].identifier);
                if ("touchstart" === i.type) {
                    v(this, i, i.targetTouches[0].pageX);
                    return
                }
                let {
                    params: r,
                    touches: a,
                    enabled: l
                } = this;
                if (!l || !r.simulateTouch && "mouse" === i.pointerType || this.animating && r.preventInteractionOnTransition) return;
                !this.animating && r.cssMode && r.loop && this.loopFix();
                let d = i.target;
                if ("wrapper" === r.touchEventsTarget && !(0, o.v)(d, this.wrapperEl) || "which" in i && 3 === i.which || "button" in i && i.button > 0 || s.isTouched && s.isMoved) return;
                let u = !!r.noSwipingClass && "" !== r.noSwipingClass,
                    p = i.composedPath ? i.composedPath() : i.path;
                u && i.target && i.target.shadowRoot && p && (d = p[0]);
                let c = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
                    h = !!(i.target && i.target.shadowRoot);
                if (r.noSwiping && (h ? function(e, t) {
                        return void 0 === t && (t = this),
                            function t(i) {
                                if (!i || i === (0, n.g)() || i === (0, n.a)()) return null;
                                i.assignedSlot && (i = i.assignedSlot);
                                let s = i.closest(e);
                                return s || i.getRootNode ? s || t(i.getRootNode().host) : null
                            }(t)
                    }(c, d) : d.closest(c))) {
                    this.allowClick = !0;
                    return
                }
                if (r.swipeHandler && !d.closest(r.swipeHandler)) return;
                a.currentX = i.pageX, a.currentY = i.pageY;
                let f = a.currentX,
                    m = a.currentY;
                if (!v(this, i, f)) return;
                Object.assign(s, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), a.startX = f, a.startY = m, s.touchStartTime = (0, o.d)(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (s.allowThresholdMove = !1);
                let g = !0;
                d.matches(s.focusableElements) && (g = !1, "SELECT" === d.nodeName && (s.isTouched = !1)), t.activeElement && t.activeElement.matches(s.focusableElements) && t.activeElement !== d && t.activeElement.blur();
                let w = g && this.allowTouchMove && r.touchStartPreventDefault;
                (r.touchStartForcePreventDefault || w) && !d.isContentEditable && i.preventDefault(), r.freeMode && r.freeMode.enabled && this.freeMode && this.animating && !r.cssMode && this.freeMode.onTouchStart(), this.emit("touchStart", i)
            }

            function b(e) {
                let t, i;
                let s = (0, n.g)(),
                    r = this.touchEventsData,
                    {
                        params: a,
                        touches: l,
                        rtlTranslate: d,
                        enabled: u
                    } = this;
                if (!u || !a.simulateTouch && "mouse" === e.pointerType) return;
                let p = e;
                if (p.originalEvent && (p = p.originalEvent), "pointermove" === p.type) {
                    if (null !== r.touchId) return;
                    let e = p.pointerId;
                    if (e !== r.pointerId) return
                }
                if ("touchmove" === p.type) {
                    if (!(t = [...p.changedTouches].filter(e => e.identifier === r.touchId)[0]) || t.identifier !== r.touchId) return
                } else t = p;
                if (!r.isTouched) {
                    r.startMoving && r.isScrolling && this.emit("touchMoveOpposite", p);
                    return
                }
                let c = t.pageX,
                    h = t.pageY;
                if (p.preventedByNestedSwiper) {
                    l.startX = c, l.startY = h;
                    return
                }
                if (!this.allowTouchMove) {
                    p.target.matches(r.focusableElements) || (this.allowClick = !1), r.isTouched && (Object.assign(l, {
                        startX: c,
                        startY: h,
                        currentX: c,
                        currentY: h
                    }), r.touchStartTime = (0, o.d)());
                    return
                }
                if (a.touchReleaseOnEdges && !a.loop) {
                    if (this.isVertical()) {
                        if (h < l.startY && this.translate <= this.maxTranslate() || h > l.startY && this.translate >= this.minTranslate()) {
                            r.isTouched = !1, r.isMoved = !1;
                            return
                        }
                    } else if (c < l.startX && this.translate <= this.maxTranslate() || c > l.startX && this.translate >= this.minTranslate()) return
                }
                if (s.activeElement && p.target === s.activeElement && p.target.matches(r.focusableElements)) {
                    r.isMoved = !0, this.allowClick = !1;
                    return
                }
                r.allowTouchCallbacks && this.emit("touchMove", p), l.previousX = l.currentX, l.previousY = l.currentY, l.currentX = c, l.currentY = h;
                let f = l.currentX - l.startX,
                    m = l.currentY - l.startY;
                if (this.params.threshold && Math.sqrt(f ** 2 + m ** 2) < this.params.threshold) return;
                if (void 0 === r.isScrolling) {
                    let e;
                    this.isHorizontal() && l.currentY === l.startY || this.isVertical() && l.currentX === l.startX ? r.isScrolling = !1 : f * f + m * m >= 25 && (e = 180 * Math.atan2(Math.abs(m), Math.abs(f)) / Math.PI, r.isScrolling = this.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
                }
                if (r.isScrolling && this.emit("touchMoveOpposite", p), void 0 === r.startMoving && (l.currentX !== l.startX || l.currentY !== l.startY) && (r.startMoving = !0), r.isScrolling || "touchmove" === p.type && r.preventTouchMoveFromPointerMove) {
                    r.isTouched = !1;
                    return
                }
                if (!r.startMoving) return;
                this.allowClick = !1, !a.cssMode && p.cancelable && p.preventDefault(), a.touchMoveStopPropagation && !a.nested && p.stopPropagation();
                let g = this.isHorizontal() ? f : m,
                    v = this.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
                a.oneWayMovement && (g = Math.abs(g) * (d ? 1 : -1), v = Math.abs(v) * (d ? 1 : -1)), l.diff = g, g *= a.touchRatio, d && (g = -g, v = -v);
                let w = this.touchesDirection;
                this.swipeDirection = g > 0 ? "prev" : "next", this.touchesDirection = v > 0 ? "prev" : "next";
                let b = this.params.loop && !a.cssMode,
                    y = "next" === this.touchesDirection && this.allowSlideNext || "prev" === this.touchesDirection && this.allowSlidePrev;
                if (!r.isMoved) {
                    if (b && y && this.loopFix({
                            direction: this.swipeDirection
                        }), r.startTranslate = this.getTranslate(), this.setTransition(0), this.animating) {
                        let e = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0,
                            detail: {
                                bySwiperTouchMove: !0
                            }
                        });
                        this.wrapperEl.dispatchEvent(e)
                    }
                    r.allowMomentumBounce = !1, a.grabCursor && (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) && this.setGrabCursor(!0), this.emit("sliderFirstMove", p)
                }
                if (new Date().getTime(), r.isMoved && r.allowThresholdMove && w !== this.touchesDirection && b && y && Math.abs(g) >= 1) {
                    Object.assign(l, {
                        startX: c,
                        startY: h,
                        currentX: c,
                        currentY: h,
                        startTranslate: r.currentTranslate
                    }), r.loopSwapReset = !0, r.startTranslate = r.currentTranslate;
                    return
                }
                this.emit("sliderMove", p), r.isMoved = !0, r.currentTranslate = g + r.startTranslate;
                let S = !0,
                    T = a.resistanceRatio;
                if (a.touchReleaseOnEdges && (T = 0), g > 0 ? (b && y && !i && r.allowThresholdMove && r.currentTranslate > (a.centeredSlides ? this.minTranslate() - this.slidesSizesGrid[this.activeIndex + 1] : this.minTranslate()) && this.loopFix({
                        direction: "prev",
                        setTranslate: !0,
                        activeSlideIndex: 0
                    }), r.currentTranslate > this.minTranslate() && (S = !1, a.resistance && (r.currentTranslate = this.minTranslate() - 1 + (-this.minTranslate() + r.startTranslate + g) ** T))) : g < 0 && (b && y && !i && r.allowThresholdMove && r.currentTranslate < (a.centeredSlides ? this.maxTranslate() + this.slidesSizesGrid[this.slidesSizesGrid.length - 1] : this.maxTranslate()) && this.loopFix({
                        direction: "next",
                        setTranslate: !0,
                        activeSlideIndex: this.slides.length - ("auto" === a.slidesPerView ? this.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
                    }), r.currentTranslate < this.maxTranslate() && (S = !1, a.resistance && (r.currentTranslate = this.maxTranslate() + 1 - (this.maxTranslate() - r.startTranslate - g) ** T))), S && (p.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), this.allowSlidePrev || this.allowSlideNext || (r.currentTranslate = r.startTranslate), a.threshold > 0) {
                    if (Math.abs(g) > a.threshold || r.allowThresholdMove) {
                        if (!r.allowThresholdMove) {
                            r.allowThresholdMove = !0, l.startX = l.currentX, l.startY = l.currentY, r.currentTranslate = r.startTranslate, l.diff = this.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY;
                            return
                        }
                    } else {
                        r.currentTranslate = r.startTranslate;
                        return
                    }
                }
                a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && this.freeMode || a.watchSlidesProgress) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && this.freeMode && this.freeMode.onTouchMove(), this.updateProgress(r.currentTranslate), this.setTranslate(r.currentTranslate))
            }

            function y(e) {
                let t, i;
                let s = this,
                    r = s.touchEventsData,
                    a = e;
                a.originalEvent && (a = a.originalEvent);
                let l = "touchend" === a.type || "touchcancel" === a.type;
                if (l) {
                    if (!(t = [...a.changedTouches].filter(e => e.identifier === r.touchId)[0]) || t.identifier !== r.touchId) return
                } else {
                    if (null !== r.touchId || a.pointerId !== r.pointerId) return;
                    t = a
                }
                if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(a.type)) {
                    let e = ["pointercancel", "contextmenu"].includes(a.type) && (s.browser.isSafari || s.browser.isWebView);
                    if (!e) return
                }
                r.pointerId = null, r.touchId = null;
                let {
                    params: n,
                    touches: d,
                    rtlTranslate: u,
                    slidesGrid: p,
                    enabled: c
                } = s;
                if (!c || !n.simulateTouch && "mouse" === a.pointerType) return;
                if (r.allowTouchCallbacks && s.emit("touchEnd", a), r.allowTouchCallbacks = !1, !r.isTouched) {
                    r.isMoved && n.grabCursor && s.setGrabCursor(!1), r.isMoved = !1, r.startMoving = !1;
                    return
                }
                n.grabCursor && r.isMoved && r.isTouched && (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) && s.setGrabCursor(!1);
                let h = (0, o.d)(),
                    f = h - r.touchStartTime;
                if (s.allowClick) {
                    let e = a.path || a.composedPath && a.composedPath();
                    s.updateClickedSlide(e && e[0] || a.target, e), s.emit("tap click", a), f < 300 && h - r.lastClickTime < 300 && s.emit("doubleTap doubleClick", a)
                }
                if (r.lastClickTime = (0, o.d)(), (0, o.n)(() => {
                        s.destroyed || (s.allowClick = !0)
                    }), !r.isTouched || !r.isMoved || !s.swipeDirection || 0 === d.diff && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) {
                    r.isTouched = !1, r.isMoved = !1, r.startMoving = !1;
                    return
                }
                if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, i = n.followFinger ? u ? s.translate : -s.translate : -r.currentTranslate, n.cssMode) return;
                if (n.freeMode && n.freeMode.enabled) {
                    s.freeMode.onTouchEnd({
                        currentPos: i
                    });
                    return
                }
                let m = i >= -s.maxTranslate() && !s.params.loop,
                    g = 0,
                    v = s.slidesSizesGrid[0];
                for (let e = 0; e < p.length; e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                    let t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                    void 0 !== p[e + t] ? (m || i >= p[e] && i < p[e + t]) && (g = e, v = p[e + t] - p[e]) : (m || i >= p[e]) && (g = e, v = p[p.length - 1] - p[p.length - 2])
                }
                let w = null,
                    b = null;
                n.rewind && (s.isBeginning ? b = n.virtual && n.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1 : s.isEnd && (w = 0));
                let y = (i - p[g]) / v,
                    S = g < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                if (f > n.longSwipesMs) {
                    if (!n.longSwipes) {
                        s.slideTo(s.activeIndex);
                        return
                    }
                    "next" === s.swipeDirection && (y >= n.longSwipesRatio ? s.slideTo(n.rewind && s.isEnd ? w : g + S) : s.slideTo(g)), "prev" === s.swipeDirection && (y > 1 - n.longSwipesRatio ? s.slideTo(g + S) : null !== b && y < 0 && Math.abs(y) > n.longSwipesRatio ? s.slideTo(b) : s.slideTo(g))
                } else {
                    if (!n.shortSwipes) {
                        s.slideTo(s.activeIndex);
                        return
                    }
                    let e = s.navigation && (a.target === s.navigation.nextEl || a.target === s.navigation.prevEl);
                    e ? a.target === s.navigation.nextEl ? s.slideTo(g + S) : s.slideTo(g) : ("next" === s.swipeDirection && s.slideTo(null !== w ? w : g + S), "prev" === s.swipeDirection && s.slideTo(null !== b ? b : g))
                }
            }

            function S() {
                let e = this,
                    {
                        params: t,
                        el: i
                    } = e;
                if (i && 0 === i.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                let {
                    allowSlideNext: s,
                    allowSlidePrev: r,
                    snapGrid: a
                } = e, l = e.virtual && e.params.virtual.enabled;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
                let n = l && t.loop;
                "auto" !== t.slidesPerView && !(t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || n ? e.params.loop && !l ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
                }, 500)), e.allowSlidePrev = r, e.allowSlideNext = s, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
            }

            function T(e) {
                this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function E() {
                let {
                    wrapperEl: e,
                    rtlTranslate: t,
                    enabled: i
                } = this;
                if (!i) return;
                this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = -e.scrollLeft : this.translate = -e.scrollTop, 0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
                let s = this.maxTranslate() - this.minTranslate();
                (0 === s ? 0 : (this.translate - this.minTranslate()) / s) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
            }

            function x(e) {
                h(this, e.target), !this.params.cssMode && ("auto" === this.params.slidesPerView || this.params.autoHeight) && this.update()
            }

            function C() {
                !this.documentTouchHandlerProceeded && (this.documentTouchHandlerProceeded = !0, this.params.touchReleaseOnEdges && (this.el.style.touchAction = "auto"))
            }
            let M = (e, t) => {
                    let i = (0, n.g)(),
                        {
                            params: s,
                            el: r,
                            wrapperEl: a,
                            device: l
                        } = e,
                        o = !!s.nested,
                        d = "on" === t ? "addEventListener" : "removeEventListener";
                    r && "string" != typeof r && (i[d]("touchstart", e.onDocumentTouchStart, {
                        passive: !1,
                        capture: o
                    }), r[d]("touchstart", e.onTouchStart, {
                        passive: !1
                    }), r[d]("pointerdown", e.onTouchStart, {
                        passive: !1
                    }), i[d]("touchmove", e.onTouchMove, {
                        passive: !1,
                        capture: o
                    }), i[d]("pointermove", e.onTouchMove, {
                        passive: !1,
                        capture: o
                    }), i[d]("touchend", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("pointerup", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("pointercancel", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("touchcancel", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("pointerout", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("pointerleave", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("contextmenu", e.onTouchEnd, {
                        passive: !0
                    }), (s.preventClicks || s.preventClicksPropagation) && r[d]("click", e.onClick, !0), s.cssMode && a[d]("scroll", e.onScroll), s.updateOnWindowResize ? e[t](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", S, !0) : e[t]("observerUpdate", S, !0), r[d]("load", e.onLoad, {
                        capture: !0
                    }))
                },
                P = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var L = {
                init: !0,
                direction: "horizontal",
                oneWayMovement: !1,
                swiperElementNodeName: "SWIPER-CONTAINER",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                eventsPrefix: "swiper",
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 5,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                loop: !1,
                loopAddBlankSlides: !0,
                loopAdditionalSlides: 0,
                loopPreventsSliding: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-blank",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideFullyVisibleClass: "swiper-slide-fully-visible",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                lazyPreloaderClass: "swiper-lazy-preloader",
                lazyPreloadPrevNext: 0,
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };
            let O = {
                    eventsEmitter: {
                        on(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;
                            let r = i ? "unshift" : "push";
                            return e.split(" ").forEach(e => {
                                s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][r](t)
                            }), s
                        },
                        once(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;

                            function r() {
                                s.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
                                for (var i = arguments.length, a = Array(i), l = 0; l < i; l++) a[l] = arguments[l];
                                t.apply(s, a)
                            }
                            return r.__emitterProxy = t, s.on(e, r, i)
                        },
                        onAny(e, t) {
                            return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e), this
                        },
                        offAny(e) {
                            if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                            let t = this.eventsAnyListeners.indexOf(e);
                            return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                        },
                        off(e, t) {
                            let i = this;
                            return i.eventsListeners && !i.destroyed && i.eventsListeners && e.split(" ").forEach(e => {
                                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((s, r) => {
                                    (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(r, 1)
                                })
                            }), i
                        },
                        emit() {
                            let e, t, i;
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || !s.eventsListeners) return s;
                            for (var r = arguments.length, a = Array(r), l = 0; l < r; l++) a[l] = arguments[l];
                            "string" == typeof a[0] || Array.isArray(a[0]) ? (e = a[0], t = a.slice(1, a.length), i = s) : (e = a[0].events, t = a[0].data, i = a[0].context || s), t.unshift(i);
                            let n = Array.isArray(e) ? e : e.split(" ");
                            return n.forEach(e => {
                                s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach(s => {
                                    s.apply(i, [e, ...t])
                                }), s.eventsListeners && s.eventsListeners[e] && s.eventsListeners[e].forEach(e => {
                                    e.apply(i, t)
                                })
                            }), s
                        }
                    },
                    update: {
                        updateSize: function() {
                            let e, t;
                            let i = this.el;
                            e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i.clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i.clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt((0, o.p)(i, "padding-left") || 0, 10) - parseInt((0, o.p)(i, "padding-right") || 0, 10), t = t - parseInt((0, o.p)(i, "padding-top") || 0, 10) - parseInt((0, o.p)(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(this, {
                                width: e,
                                height: t,
                                size: this.isHorizontal() ? e : t
                            }))
                        },
                        updateSlides: function() {
                            let e;
                            let t = this;

                            function i(e, i) {
                                return parseFloat(e.getPropertyValue(t.getDirectionLabel(i)) || 0)
                            }
                            let s = t.params,
                                {
                                    wrapperEl: r,
                                    slidesEl: a,
                                    size: l,
                                    rtlTranslate: n,
                                    wrongRTL: d
                                } = t,
                                u = t.virtual && s.virtual.enabled,
                                p = u ? t.virtual.slides.length : t.slides.length,
                                c = (0, o.e)(a, `.${t.params.slideClass}, swiper-slide`),
                                h = u ? t.virtual.slides.length : c.length,
                                f = [],
                                m = [],
                                g = [],
                                v = s.slidesOffsetBefore;
                            "function" == typeof v && (v = s.slidesOffsetBefore.call(t));
                            let w = s.slidesOffsetAfter;
                            "function" == typeof w && (w = s.slidesOffsetAfter.call(t));
                            let b = t.snapGrid.length,
                                y = t.slidesGrid.length,
                                S = s.spaceBetween,
                                T = -v,
                                E = 0,
                                x = 0;
                            if (void 0 === l) return;
                            "string" == typeof S && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * l : "string" == typeof S && (S = parseFloat(S)), t.virtualSize = -S, c.forEach(e => {
                                n ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                            }), s.centeredSlides && s.cssMode && ((0, o.s)(r, "--swiper-centered-offset-before", ""), (0, o.s)(r, "--swiper-centered-offset-after", ""));
                            let C = s.grid && s.grid.rows > 1 && t.grid;
                            C ? t.grid.initSlides(c) : t.grid && t.grid.unsetSlides();
                            let M = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter(e => void 0 !== s.breakpoints[e].slidesPerView).length > 0;
                            for (let r = 0; r < h; r += 1) {
                                let a;
                                if (e = 0, c[r] && (a = c[r]), C && t.grid.updateSlide(r, a, c), !c[r] || "none" !== (0, o.p)(a, "display")) {
                                    if ("auto" === s.slidesPerView) {
                                        M && (c[r].style[t.getDirectionLabel("width")] = "");
                                        let l = getComputedStyle(a),
                                            n = a.style.transform,
                                            d = a.style.webkitTransform;
                                        if (n && (a.style.transform = "none"), d && (a.style.webkitTransform = "none"), s.roundLengths) e = t.isHorizontal() ? (0, o.f)(a, "width", !0) : (0, o.f)(a, "height", !0);
                                        else {
                                            let t = i(l, "width"),
                                                s = i(l, "padding-left"),
                                                r = i(l, "padding-right"),
                                                n = i(l, "margin-left"),
                                                o = i(l, "margin-right"),
                                                d = l.getPropertyValue("box-sizing");
                                            if (d && "border-box" === d) e = t + n + o;
                                            else {
                                                let {
                                                    clientWidth: i,
                                                    offsetWidth: l
                                                } = a;
                                                e = t + s + r + n + o + (l - i)
                                            }
                                        }
                                        n && (a.style.transform = n), d && (a.style.webkitTransform = d), s.roundLengths && (e = Math.floor(e))
                                    } else e = (l - (s.slidesPerView - 1) * S) / s.slidesPerView, s.roundLengths && (e = Math.floor(e)), c[r] && (c[r].style[t.getDirectionLabel("width")] = `${e}px`);
                                    c[r] && (c[r].swiperSlideSize = e), g.push(e), s.centeredSlides ? (T = T + e / 2 + E / 2 + S, 0 === E && 0 !== r && (T = T - l / 2 - S), 0 === r && (T = T - l / 2 - S), .001 > Math.abs(T) && (T = 0), s.roundLengths && (T = Math.floor(T)), x % s.slidesPerGroup == 0 && f.push(T), m.push(T)) : (s.roundLengths && (T = Math.floor(T)), (x - Math.min(t.params.slidesPerGroupSkip, x)) % t.params.slidesPerGroup == 0 && f.push(T), m.push(T), T = T + e + S), t.virtualSize += e + S, E = e, x += 1
                                }
                            }
                            if (t.virtualSize = Math.max(t.virtualSize, l) + w, n && d && ("slide" === s.effect || "coverflow" === s.effect) && (r.style.width = `${t.virtualSize+S}px`), s.setWrapperSize && (r.style[t.getDirectionLabel("width")] = `${t.virtualSize+S}px`), C && t.grid.updateWrapperSize(e, f), !s.centeredSlides) {
                                let e = [];
                                for (let i = 0; i < f.length; i += 1) {
                                    let r = f[i];
                                    s.roundLengths && (r = Math.floor(r)), f[i] <= t.virtualSize - l && e.push(r)
                                }
                                f = e, Math.floor(t.virtualSize - l) - Math.floor(f[f.length - 1]) > 1 && f.push(t.virtualSize - l)
                            }
                            if (u && s.loop) {
                                let e = g[0] + S;
                                if (s.slidesPerGroup > 1) {
                                    let i = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / s.slidesPerGroup),
                                        r = e * s.slidesPerGroup;
                                    for (let e = 0; e < i; e += 1) f.push(f[f.length - 1] + r)
                                }
                                for (let i = 0; i < t.virtual.slidesBefore + t.virtual.slidesAfter; i += 1) 1 === s.slidesPerGroup && f.push(f[f.length - 1] + e), m.push(m[m.length - 1] + e), t.virtualSize += e
                            }
                            if (0 === f.length && (f = [0]), 0 !== S) {
                                let e = t.isHorizontal() && n ? "marginLeft" : t.getDirectionLabel("marginRight");
                                c.filter((e, t) => !s.cssMode || !!s.loop || t !== c.length - 1).forEach(t => {
                                    t.style[e] = `${S}px`
                                })
                            }
                            if (s.centeredSlides && s.centeredSlidesBounds) {
                                let e = 0;
                                g.forEach(t => {
                                    e += t + (S || 0)
                                }), e -= S;
                                let t = e - l;
                                f = f.map(e => e <= 0 ? -v : e > t ? t + w : e)
                            }
                            if (s.centerInsufficientSlides) {
                                let e = 0;
                                g.forEach(t => {
                                    e += t + (S || 0)
                                }), e -= S;
                                let t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
                                if (e + t < l) {
                                    let i = (l - e - t) / 2;
                                    f.forEach((e, t) => {
                                        f[t] = e - i
                                    }), m.forEach((e, t) => {
                                        m[t] = e + i
                                    })
                                }
                            }
                            if (Object.assign(t, {
                                    slides: c,
                                    snapGrid: f,
                                    slidesGrid: m,
                                    slidesSizesGrid: g
                                }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                                (0, o.s)(r, "--swiper-centered-offset-before", `${-f[0]}px`), (0, o.s)(r, "--swiper-centered-offset-after", `${t.size/2-g[g.length-1]/2}px`);
                                let e = -t.snapGrid[0],
                                    i = -t.slidesGrid[0];
                                t.snapGrid = t.snapGrid.map(t => t + e), t.slidesGrid = t.slidesGrid.map(e => e + i)
                            }
                            if (h !== p && t.emit("slidesLengthChange"), f.length !== b && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), m.length !== y && t.emit("slidesGridLengthChange"), s.watchSlidesProgress && t.updateSlidesOffset(), t.emit("slidesUpdated"), !u && !s.cssMode && ("slide" === s.effect || "fade" === s.effect)) {
                                let e = `${s.containerModifierClass}backface-hidden`,
                                    i = t.el.classList.contains(e);
                                h <= s.maxBackfaceHiddenSlides ? i || t.el.classList.add(e) : i && t.el.classList.remove(e)
                            }
                        },
                        updateAutoHeight: function(e) {
                            let t;
                            let i = this,
                                s = [],
                                r = i.virtual && i.params.virtual.enabled,
                                a = 0;
                            "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                            let l = e => r ? i.slides[i.getSlideIndexByData(e)] : i.slides[e];
                            if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1) {
                                if (i.params.centeredSlides)(i.visibleSlides || []).forEach(e => {
                                    s.push(e)
                                });
                                else
                                    for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                        let e = i.activeIndex + t;
                                        if (e > i.slides.length && !r) break;
                                        s.push(l(e))
                                    }
                            } else s.push(l(i.activeIndex));
                            for (t = 0; t < s.length; t += 1)
                                if (void 0 !== s[t]) {
                                    let e = s[t].offsetHeight;
                                    a = e > a ? e : a
                                }(a || 0 === a) && (i.wrapperEl.style.height = `${a}px`)
                        },
                        updateSlidesOffset: function() {
                            let e = this.slides,
                                t = this.isElement ? this.isHorizontal() ? this.wrapperEl.offsetLeft : this.wrapperEl.offsetTop : 0;
                            for (let i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - this.cssOverflowAdjustment()
                        },
                        updateSlidesProgress: function(e) {
                            void 0 === e && (e = this && this.translate || 0);
                            let t = this.params,
                                {
                                    slides: i,
                                    rtlTranslate: s,
                                    snapGrid: r
                                } = this;
                            if (0 === i.length) return;
                            void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                            let a = -e;
                            s && (a = e), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                            let l = t.spaceBetween;
                            "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * this.size : "string" == typeof l && (l = parseFloat(l));
                            for (let e = 0; e < i.length; e += 1) {
                                let n = i[e],
                                    o = n.swiperSlideOffset;
                                t.cssMode && t.centeredSlides && (o -= i[0].swiperSlideOffset);
                                let d = (a + (t.centeredSlides ? this.minTranslate() : 0) - o) / (n.swiperSlideSize + l),
                                    u = (a - r[0] + (t.centeredSlides ? this.minTranslate() : 0) - o) / (n.swiperSlideSize + l),
                                    c = -(a - o),
                                    h = c + this.slidesSizesGrid[e],
                                    f = c >= 0 && c <= this.size - this.slidesSizesGrid[e],
                                    m = c >= 0 && c < this.size - 1 || h > 1 && h <= this.size || c <= 0 && h >= this.size;
                                m && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(e)), p(n, m, t.slideVisibleClass), p(n, f, t.slideFullyVisibleClass), n.progress = s ? -d : d, n.originalProgress = s ? -u : u
                            }
                        },
                        updateProgress: function(e) {
                            if (void 0 === e) {
                                let t = this.rtlTranslate ? -1 : 1;
                                e = this && this.translate && this.translate * t || 0
                            }
                            let t = this.params,
                                i = this.maxTranslate() - this.minTranslate(),
                                {
                                    progress: s,
                                    isBeginning: r,
                                    isEnd: a,
                                    progressLoop: l
                                } = this,
                                n = r,
                                o = a;
                            if (0 === i) s = 0, r = !0, a = !0;
                            else {
                                s = (e - this.minTranslate()) / i;
                                let t = 1 > Math.abs(e - this.minTranslate()),
                                    l = 1 > Math.abs(e - this.maxTranslate());
                                r = t || s <= 0, a = l || s >= 1, t && (s = 0), l && (s = 1)
                            }
                            if (t.loop) {
                                let t = this.getSlideIndexByData(0),
                                    i = this.getSlideIndexByData(this.slides.length - 1),
                                    s = this.slidesGrid[t],
                                    r = this.slidesGrid[i],
                                    a = this.slidesGrid[this.slidesGrid.length - 1],
                                    n = Math.abs(e);
                                (l = n >= s ? (n - s) / a : (n + a - r) / a) > 1 && (l -= 1)
                            }
                            Object.assign(this, {
                                progress: s,
                                progressLoop: l,
                                isBeginning: r,
                                isEnd: a
                            }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && this.updateSlidesProgress(e), r && !n && this.emit("reachBeginning toEdge"), a && !o && this.emit("reachEnd toEdge"), (n && !r || o && !a) && this.emit("fromEdge"), this.emit("progress", s)
                        },
                        updateSlidesClasses: function() {
                            let e, t, i;
                            let {
                                slides: s,
                                params: r,
                                slidesEl: a,
                                activeIndex: l
                            } = this, n = this.virtual && r.virtual.enabled, d = this.grid && r.grid && r.grid.rows > 1, u = e => (0, o.e)(a, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
                            if (n) {
                                if (r.loop) {
                                    let t = l - this.virtual.slidesBefore;
                                    t < 0 && (t = this.virtual.slides.length + t), t >= this.virtual.slides.length && (t -= this.virtual.slides.length), e = u(`[data-swiper-slide-index="${t}"]`)
                                } else e = u(`[data-swiper-slide-index="${l}"]`)
                            } else d ? (e = s.filter(e => e.column === l)[0], i = s.filter(e => e.column === l + 1)[0], t = s.filter(e => e.column === l - 1)[0]) : e = s[l];
                            e && !d && (i = (0, o.q)(e, `.${r.slideClass}, swiper-slide`)[0], r.loop && !i && (i = s[0]), t = (0, o.r)(e, `.${r.slideClass}, swiper-slide`)[0], r.loop), s.forEach(s => {
                                c(s, s === e, r.slideActiveClass), c(s, s === i, r.slideNextClass), c(s, s === t, r.slidePrevClass)
                            }), this.emitSlidesClasses()
                        },
                        updateActiveIndex: function(e) {
                            let t, i;
                            let s = this,
                                r = s.rtlTranslate ? s.translate : -s.translate,
                                {
                                    snapGrid: a,
                                    params: l,
                                    activeIndex: n,
                                    realIndex: o,
                                    snapIndex: d
                                } = s,
                                u = e,
                                p = e => {
                                    let t = e - s.virtual.slidesBefore;
                                    return t < 0 && (t = s.virtual.slides.length + t), t >= s.virtual.slides.length && (t -= s.virtual.slides.length), t
                                };
                            if (void 0 === u && (u = function(e) {
                                    let t;
                                    let {
                                        slidesGrid: i,
                                        params: s
                                    } = e, r = e.rtlTranslate ? e.translate : -e.translate;
                                    for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? r >= i[e] && r < i[e + 1] - (i[e + 1] - i[e]) / 2 ? t = e : r >= i[e] && r < i[e + 1] && (t = e + 1) : r >= i[e] && (t = e);
                                    return s.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0), t
                                }(s)), a.indexOf(r) >= 0) t = a.indexOf(r);
                            else {
                                let e = Math.min(l.slidesPerGroupSkip, u);
                                t = e + Math.floor((u - e) / l.slidesPerGroup)
                            }
                            if (t >= a.length && (t = a.length - 1), u === n && !s.params.loop) {
                                t !== d && (s.snapIndex = t, s.emit("snapIndexChange"));
                                return
                            }
                            if (u === n && s.params.loop && s.virtual && s.params.virtual.enabled) {
                                s.realIndex = p(u);
                                return
                            }
                            let c = s.grid && l.grid && l.grid.rows > 1;
                            if (s.virtual && l.virtual.enabled && l.loop) i = p(u);
                            else if (c) {
                                let e = s.slides.filter(e => e.column === u)[0],
                                    t = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                                Number.isNaN(t) && (t = Math.max(s.slides.indexOf(e), 0)), i = Math.floor(t / l.grid.rows)
                            } else if (s.slides[u]) {
                                let e = s.slides[u].getAttribute("data-swiper-slide-index");
                                i = e ? parseInt(e, 10) : u
                            } else i = u;
                            Object.assign(s, {
                                previousSnapIndex: d,
                                snapIndex: t,
                                previousRealIndex: o,
                                realIndex: i,
                                previousIndex: n,
                                activeIndex: u
                            }), s.initialized && m(s), s.emit("activeIndexChange"), s.emit("snapIndexChange"), (s.initialized || s.params.runCallbacksOnInit) && (o !== i && s.emit("realIndexChange"), s.emit("slideChange"))
                        },
                        updateClickedSlide: function(e, t) {
                            let i;
                            let s = this.params,
                                r = e.closest(`.${s.slideClass}, swiper-slide`);
                            !r && this.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(e => {
                                !r && e.matches && e.matches(`.${s.slideClass}, swiper-slide`) && (r = e)
                            });
                            let a = !1;
                            if (r) {
                                for (let e = 0; e < this.slides.length; e += 1)
                                    if (this.slides[e] === r) {
                                        a = !0, i = e;
                                        break
                                    }
                            }
                            if (r && a) this.clickedSlide = r, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : this.clickedIndex = i;
                            else {
                                this.clickedSlide = void 0, this.clickedIndex = void 0;
                                return
                            }
                            s.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(e) {
                            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                            let {
                                params: t,
                                rtlTranslate: i,
                                translate: s,
                                wrapperEl: r
                            } = this;
                            if (t.virtualTranslate) return i ? -s : s;
                            if (t.cssMode) return s;
                            let a = (0, o.j)(r, e);
                            return a += this.cssOverflowAdjustment(), i && (a = -a), a || 0
                        },
                        setTranslate: function(e, t) {
                            let {
                                rtlTranslate: i,
                                params: s,
                                wrapperEl: r,
                                progress: a
                            } = this, l = 0, n = 0;
                            this.isHorizontal() ? l = i ? -e : e : n = e, s.roundLengths && (l = Math.floor(l), n = Math.floor(n)), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? l : n, s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -l : -n : s.virtualTranslate || (this.isHorizontal() ? l -= this.cssOverflowAdjustment() : n -= this.cssOverflowAdjustment(), r.style.transform = `translate3d(${l}px, ${n}px, 0px)`);
                            let o = this.maxTranslate() - this.minTranslate();
                            (0 === o ? 0 : (e - this.minTranslate()) / o) !== a && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(e, t, i, s, r) {
                            let a;
                            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
                            let l = this,
                                {
                                    params: n,
                                    wrapperEl: d
                                } = l;
                            if (l.animating && n.preventInteractionOnTransition) return !1;
                            let u = l.minTranslate(),
                                p = l.maxTranslate();
                            if (a = s && e > u ? u : s && e < p ? p : e, l.updateProgress(a), n.cssMode) {
                                let e = l.isHorizontal();
                                if (0 === t) d[e ? "scrollLeft" : "scrollTop"] = -a;
                                else {
                                    if (!l.support.smoothScroll) return (0, o.t)({
                                        swiper: l,
                                        targetPosition: -a,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    d.scrollTo({
                                        [e ? "left" : "top"]: -a,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === t ? (l.setTransition(0), l.setTranslate(a), i && (l.emit("beforeTransitionStart", t, r), l.emit("transitionEnd"))) : (l.setTransition(t), l.setTranslate(a), i && (l.emit("beforeTransitionStart", t, r), l.emit("transitionStart")), l.animating || (l.animating = !0, l.onTranslateToWrapperTransitionEnd || (l.onTranslateToWrapperTransitionEnd = function(e) {
                                l && !l.destroyed && e.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onTranslateToWrapperTransitionEnd), l.onTranslateToWrapperTransitionEnd = null, delete l.onTranslateToWrapperTransitionEnd, l.animating = !1, i && l.emit("transitionEnd"))
                            }), l.wrapperEl.addEventListener("transitionend", l.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            this.params.cssMode || (this.wrapperEl.style.transitionDuration = `${e}ms`, this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), this.emit("setTransition", e, t)
                        },
                        transitionStart: function(e, t) {
                            void 0 === e && (e = !0);
                            let {
                                params: i
                            } = this;
                            i.cssMode || (i.autoHeight && this.updateAutoHeight(), g({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e, t) {
                            void 0 === e && (e = !0);
                            let {
                                params: i
                            } = this;
                            this.animating = !1, i.cssMode || (this.setTransition(0), g({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(e, t, i, s, r) {
                            let a;
                            void 0 === e && (e = 0), void 0 === i && (i = !0), "string" == typeof e && (e = parseInt(e, 10));
                            let l = this,
                                n = e;
                            n < 0 && (n = 0);
                            let {
                                params: d,
                                snapGrid: u,
                                slidesGrid: p,
                                previousIndex: c,
                                activeIndex: h,
                                rtlTranslate: f,
                                wrapperEl: m,
                                enabled: g
                            } = l;
                            if (!g && !s && !r || l.destroyed || l.animating && d.preventInteractionOnTransition) return !1;
                            void 0 === t && (t = l.params.speed);
                            let v = Math.min(l.params.slidesPerGroupSkip, n),
                                w = v + Math.floor((n - v) / l.params.slidesPerGroup);
                            w >= u.length && (w = u.length - 1);
                            let b = -u[w];
                            if (d.normalizeSlideIndex)
                                for (let e = 0; e < p.length; e += 1) {
                                    let t = -Math.floor(100 * b),
                                        i = Math.floor(100 * p[e]),
                                        s = Math.floor(100 * p[e + 1]);
                                    void 0 !== p[e + 1] ? t >= i && t < s - (s - i) / 2 ? n = e : t >= i && t < s && (n = e + 1) : t >= i && (n = e)
                                }
                            if (l.initialized && n !== h && (!l.allowSlideNext && (f ? b > l.translate && b > l.minTranslate() : b < l.translate && b < l.minTranslate()) || !l.allowSlidePrev && b > l.translate && b > l.maxTranslate() && (h || 0) !== n)) return !1;
                            if (n !== (c || 0) && i && l.emit("beforeSlideChangeStart"), l.updateProgress(b), a = n > h ? "next" : n < h ? "prev" : "reset", f && -b === l.translate || !f && b === l.translate) return l.updateActiveIndex(n), d.autoHeight && l.updateAutoHeight(), l.updateSlidesClasses(), "slide" !== d.effect && l.setTranslate(b), "reset" !== a && (l.transitionStart(i, a), l.transitionEnd(i, a)), !1;
                            if (d.cssMode) {
                                let e = l.isHorizontal(),
                                    i = f ? b : -b;
                                if (0 === t) {
                                    let t = l.virtual && l.params.virtual.enabled;
                                    t && (l.wrapperEl.style.scrollSnapType = "none", l._immediateVirtual = !0), t && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0 ? (l._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                                        m[e ? "scrollLeft" : "scrollTop"] = i
                                    })) : m[e ? "scrollLeft" : "scrollTop"] = i, t && requestAnimationFrame(() => {
                                        l.wrapperEl.style.scrollSnapType = "", l._immediateVirtual = !1
                                    })
                                } else {
                                    if (!l.support.smoothScroll) return (0, o.t)({
                                        swiper: l,
                                        targetPosition: i,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    m.scrollTo({
                                        [e ? "left" : "top"]: i,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return l.setTransition(t), l.setTranslate(b), l.updateActiveIndex(n), l.updateSlidesClasses(), l.emit("beforeTransitionStart", t, s), l.transitionStart(i, a), 0 === t ? l.transitionEnd(i, a) : l.animating || (l.animating = !0, l.onSlideToWrapperTransitionEnd || (l.onSlideToWrapperTransitionEnd = function(e) {
                                l && !l.destroyed && e.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.onSlideToWrapperTransitionEnd = null, delete l.onSlideToWrapperTransitionEnd, l.transitionEnd(i, a))
                            }), l.wrapperEl.addEventListener("transitionend", l.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function(e, t, i, s) {
                            if (void 0 === e && (e = 0), void 0 === i && (i = !0), "string" == typeof e) {
                                let t = parseInt(e, 10);
                                e = t
                            }
                            let r = this;
                            if (r.destroyed) return;
                            void 0 === t && (t = r.params.speed);
                            let a = r.grid && r.params.grid && r.params.grid.rows > 1,
                                l = e;
                            if (r.params.loop) {
                                if (r.virtual && r.params.virtual.enabled) l += r.virtual.slidesBefore;
                                else {
                                    let e;
                                    if (a) {
                                        let t = l * r.params.grid.rows;
                                        e = r.slides.filter(e => 1 * e.getAttribute("data-swiper-slide-index") === t)[0].column
                                    } else e = r.getSlideIndexByData(l);
                                    let t = a ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length,
                                        {
                                            centeredSlides: i
                                        } = r.params,
                                        n = r.params.slidesPerView;
                                    "auto" === n ? n = r.slidesPerViewDynamic() : (n = Math.ceil(parseFloat(r.params.slidesPerView, 10)), i && n % 2 == 0 && (n += 1));
                                    let o = t - e < n;
                                    if (i && (o = o || e < Math.ceil(n / 2)), s && i && "auto" !== r.params.slidesPerView && !a && (o = !1), o) {
                                        let s = i ? e < r.activeIndex ? "prev" : "next" : e - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                                        r.loopFix({
                                            direction: s,
                                            slideTo: !0,
                                            activeSlideIndex: "next" === s ? e + 1 : e - t + 1,
                                            slideRealIndex: "next" === s ? r.realIndex : void 0
                                        })
                                    }
                                    if (a) {
                                        let e = l * r.params.grid.rows;
                                        l = r.slides.filter(t => 1 * t.getAttribute("data-swiper-slide-index") === e)[0].column
                                    } else l = r.getSlideIndexByData(l)
                                }
                            }
                            return requestAnimationFrame(() => {
                                r.slideTo(l, t, i, s)
                            }), r
                        },
                        slideNext: function(e, t, i) {
                            void 0 === t && (t = !0);
                            let s = this,
                                {
                                    enabled: r,
                                    params: a,
                                    animating: l
                                } = s;
                            if (!r || s.destroyed) return s;
                            void 0 === e && (e = s.params.speed);
                            let n = a.slidesPerGroup;
                            "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (n = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                            let o = s.activeIndex < a.slidesPerGroupSkip ? 1 : n,
                                d = s.virtual && a.virtual.enabled;
                            if (a.loop) {
                                if (l && !d && a.loopPreventsSliding) return !1;
                                if (s.loopFix({
                                        direction: "next"
                                    }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && a.cssMode) return requestAnimationFrame(() => {
                                    s.slideTo(s.activeIndex + o, e, t, i)
                                }), !0
                            }
                            return a.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + o, e, t, i)
                        },
                        slidePrev: function(e, t, i) {
                            void 0 === t && (t = !0);
                            let s = this,
                                {
                                    params: r,
                                    snapGrid: a,
                                    slidesGrid: l,
                                    rtlTranslate: n,
                                    enabled: o,
                                    animating: d
                                } = s;
                            if (!o || s.destroyed) return s;
                            void 0 === e && (e = s.params.speed);
                            let u = s.virtual && r.virtual.enabled;
                            if (r.loop) {
                                if (d && !u && r.loopPreventsSliding) return !1;
                                s.loopFix({
                                    direction: "prev"
                                }), s._clientLeft = s.wrapperEl.clientLeft
                            }
                            let p = n ? s.translate : -s.translate;

                            function c(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            let h = c(p),
                                f = a.map(e => c(e)),
                                m = a[f.indexOf(h) - 1];
                            if (void 0 === m && r.cssMode) {
                                let e;
                                a.forEach((t, i) => {
                                    h >= t && (e = i)
                                }), void 0 !== e && (m = a[e > 0 ? e - 1 : e])
                            }
                            let g = 0;
                            if (void 0 !== m && ((g = l.indexOf(m)) < 0 && (g = s.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (g = Math.max(g = g - s.slidesPerViewDynamic("previous", !0) + 1, 0))), r.rewind && s.isBeginning) {
                                let r = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                                return s.slideTo(r, e, t, i)
                            }
                            return r.loop && 0 === s.activeIndex && r.cssMode ? (requestAnimationFrame(() => {
                                s.slideTo(g, e, t, i)
                            }), !0) : s.slideTo(g, e, t, i)
                        },
                        slideReset: function(e, t, i) {
                            if (void 0 === t && (t = !0), !this.destroyed) return void 0 === e && (e = this.params.speed), this.slideTo(this.activeIndex, e, t, i)
                        },
                        slideToClosest: function(e, t, i, s) {
                            if (void 0 === t && (t = !0), void 0 === s && (s = .5), this.destroyed) return;
                            void 0 === e && (e = this.params.speed);
                            let r = this.activeIndex,
                                a = Math.min(this.params.slidesPerGroupSkip, r),
                                l = a + Math.floor((r - a) / this.params.slidesPerGroup),
                                n = this.rtlTranslate ? this.translate : -this.translate;
                            if (n >= this.snapGrid[l]) {
                                let e = this.snapGrid[l],
                                    t = this.snapGrid[l + 1];
                                n - e > (t - e) * s && (r += this.params.slidesPerGroup)
                            } else {
                                let e = this.snapGrid[l - 1],
                                    t = this.snapGrid[l];
                                n - e <= (t - e) * s && (r -= this.params.slidesPerGroup)
                            }
                            return r = Math.min(r = Math.max(r, 0), this.slidesGrid.length - 1), this.slideTo(r, e, t, i)
                        },
                        slideToClickedSlide: function() {
                            let e;
                            let t = this;
                            if (t.destroyed) return;
                            let {
                                params: i,
                                slidesEl: s
                            } = t, r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, a = t.clickedIndex, l = t.isElement ? "swiper-slide" : `.${i.slideClass}`;
                            if (i.loop) {
                                if (t.animating) return;
                                e = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), i.centeredSlides ? a < t.loopedSlides - r / 2 || a > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), a = t.getSlideIndex((0, o.e)(s, `${l}[data-swiper-slide-index="${e}"]`)[0]), (0, o.n)(() => {
                                    t.slideTo(a)
                                })) : t.slideTo(a) : a > t.slides.length - r ? (t.loopFix(), a = t.getSlideIndex((0, o.e)(s, `${l}[data-swiper-slide-index="${e}"]`)[0]), (0, o.n)(() => {
                                    t.slideTo(a)
                                })) : t.slideTo(a)
                            } else t.slideTo(a)
                        }
                    },
                    loop: {
                        loopCreate: function(e) {
                            let t = this,
                                {
                                    params: i,
                                    slidesEl: s
                                } = t;
                            if (!i.loop || t.virtual && t.params.virtual.enabled) return;
                            let r = () => {
                                    let e = (0, o.e)(s, `.${i.slideClass}, swiper-slide`);
                                    e.forEach((e, t) => {
                                        e.setAttribute("data-swiper-slide-index", t)
                                    })
                                },
                                a = t.grid && i.grid && i.grid.rows > 1,
                                l = i.slidesPerGroup * (a ? i.grid.rows : 1),
                                n = t.slides.length % l != 0,
                                d = a && t.slides.length % i.grid.rows != 0,
                                u = e => {
                                    for (let s = 0; s < e; s += 1) {
                                        let e = t.isElement ? (0, o.c)("swiper-slide", [i.slideBlankClass]) : (0, o.c)("div", [i.slideClass, i.slideBlankClass]);
                                        t.slidesEl.append(e)
                                    }
                                };
                            if (n) {
                                if (i.loopAddBlankSlides) {
                                    let e = l - t.slides.length % l;
                                    u(e), t.recalcSlides(), t.updateSlides()
                                } else(0, o.u)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                                r()
                            } else if (d) {
                                if (i.loopAddBlankSlides) {
                                    let e = i.grid.rows - t.slides.length % i.grid.rows;
                                    u(e), t.recalcSlides(), t.updateSlides()
                                } else(0, o.u)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                                r()
                            } else r();
                            t.loopFix({
                                slideRealIndex: e,
                                direction: i.centeredSlides ? void 0 : "next"
                            })
                        },
                        loopFix: function(e) {
                            let {
                                slideRealIndex: t,
                                slideTo: i = !0,
                                direction: s,
                                setTranslate: r,
                                activeSlideIndex: a,
                                byController: l,
                                byMousewheel: n
                            } = void 0 === e ? {} : e, d = this;
                            if (!d.params.loop) return;
                            d.emit("beforeLoopFix");
                            let {
                                slides: u,
                                allowSlidePrev: p,
                                allowSlideNext: c,
                                slidesEl: h,
                                params: f
                            } = d, {
                                centeredSlides: m
                            } = f;
                            if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && f.virtual.enabled) {
                                i && (f.centeredSlides || 0 !== d.snapIndex ? f.centeredSlides && d.snapIndex < f.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0) : d.slideTo(d.virtual.slides.length, 0, !1, !0)), d.allowSlidePrev = p, d.allowSlideNext = c, d.emit("loopFix");
                                return
                            }
                            let g = f.slidesPerView;
                            "auto" === g ? g = d.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(f.slidesPerView, 10)), m && g % 2 == 0 && (g += 1));
                            let v = f.slidesPerGroupAuto ? g : f.slidesPerGroup,
                                w = v;
                            w % v != 0 && (w += v - w % v), w += f.loopAdditionalSlides, d.loopedSlides = w;
                            let b = d.grid && f.grid && f.grid.rows > 1;
                            u.length < g + w ? (0, o.u)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === f.grid.fill && (0, o.u)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                            let y = [],
                                S = [],
                                T = d.activeIndex;
                            void 0 === a ? a = d.getSlideIndex(u.filter(e => e.classList.contains(f.slideActiveClass))[0]) : T = a;
                            let E = "next" === s || !s,
                                x = "prev" === s || !s,
                                C = 0,
                                M = 0,
                                P = b ? Math.ceil(u.length / f.grid.rows) : u.length,
                                L = b ? u[a].column : a,
                                O = L + (m && void 0 === r ? -g / 2 + .5 : 0);
                            if (O < w) {
                                C = Math.max(w - O, v);
                                for (let e = 0; e < w - O; e += 1) {
                                    let t = e - Math.floor(e / P) * P;
                                    if (b) {
                                        let e = P - t - 1;
                                        for (let t = u.length - 1; t >= 0; t -= 1) u[t].column === e && y.push(t)
                                    } else y.push(P - t - 1)
                                }
                            } else if (O + g > P - w) {
                                M = Math.max(O - (P - 2 * w), v);
                                for (let e = 0; e < M; e += 1) {
                                    let t = e - Math.floor(e / P) * P;
                                    b ? u.forEach((e, i) => {
                                        e.column === t && S.push(i)
                                    }) : S.push(t)
                                }
                            }
                            if (d.__preventObserver__ = !0, requestAnimationFrame(() => {
                                    d.__preventObserver__ = !1
                                }), x && y.forEach(e => {
                                    u[e].swiperLoopMoveDOM = !0, h.prepend(u[e]), u[e].swiperLoopMoveDOM = !1
                                }), E && S.forEach(e => {
                                    u[e].swiperLoopMoveDOM = !0, h.append(u[e]), u[e].swiperLoopMoveDOM = !1
                                }), d.recalcSlides(), "auto" === f.slidesPerView ? d.updateSlides() : b && (y.length > 0 && x || S.length > 0 && E) && d.slides.forEach((e, t) => {
                                    d.grid.updateSlide(t, e, d.slides)
                                }), f.watchSlidesProgress && d.updateSlidesOffset(), i) {
                                if (y.length > 0 && x) {
                                    if (void 0 === t) {
                                        let e = d.slidesGrid[T],
                                            t = d.slidesGrid[T + C],
                                            i = t - e;
                                        n ? d.setTranslate(d.translate - i) : (d.slideTo(T + Math.ceil(C), 0, !1, !0), r && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - i, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - i))
                                    } else if (r) {
                                        let e = b ? y.length / f.grid.rows : y.length;
                                        d.slideTo(d.activeIndex + e, 0, !1, !0), d.touchEventsData.currentTranslate = d.translate
                                    }
                                } else if (S.length > 0 && E) {
                                    if (void 0 === t) {
                                        let e = d.slidesGrid[T],
                                            t = d.slidesGrid[T - M],
                                            i = t - e;
                                        n ? d.setTranslate(d.translate - i) : (d.slideTo(T - M, 0, !1, !0), r && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - i, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - i))
                                    } else {
                                        let e = b ? S.length / f.grid.rows : S.length;
                                        d.slideTo(d.activeIndex - e, 0, !1, !0)
                                    }
                                }
                            }
                            if (d.allowSlidePrev = p, d.allowSlideNext = c, d.controller && d.controller.control && !l) {
                                let e = {
                                    slideRealIndex: t,
                                    direction: s,
                                    setTranslate: r,
                                    activeSlideIndex: a,
                                    byController: !0
                                };
                                Array.isArray(d.controller.control) ? d.controller.control.forEach(t => {
                                    !t.destroyed && t.params.loop && t.loopFix({ ...e,
                                        slideTo: t.params.slidesPerView === f.slidesPerView && i
                                    })
                                }) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix({ ...e,
                                    slideTo: d.controller.control.params.slidesPerView === f.slidesPerView && i
                                })
                            }
                            d.emit("loopFix")
                        },
                        loopDestroy: function() {
                            let {
                                params: e,
                                slidesEl: t
                            } = this;
                            if (!e.loop || this.virtual && this.params.virtual.enabled) return;
                            this.recalcSlides();
                            let i = [];
                            this.slides.forEach(e => {
                                let t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                                i[t] = e
                            }), this.slides.forEach(e => {
                                e.removeAttribute("data-swiper-slide-index")
                            }), i.forEach(e => {
                                t.append(e)
                            }), this.recalcSlides(), this.slideTo(this.realIndex, 0)
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            let t = this;
                            if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            let i = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            t.isElement && (t.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
                                t.__preventObserver__ = !1
                            })
                        },
                        unsetGrabCursor: function() {
                            let e = this;
                            e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
                                e.__preventObserver__ = !1
                            }))
                        }
                    },
                    events: {
                        attachEvents: function() {
                            let {
                                params: e
                            } = this;
                            this.onTouchStart = w.bind(this), this.onTouchMove = b.bind(this), this.onTouchEnd = y.bind(this), this.onDocumentTouchStart = C.bind(this), e.cssMode && (this.onScroll = E.bind(this)), this.onClick = T.bind(this), this.onLoad = x.bind(this), M(this, "on")
                        },
                        detachEvents: function() {
                            M(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            let e = this,
                                {
                                    realIndex: t,
                                    initialized: i,
                                    params: s,
                                    el: r
                                } = e,
                                a = s.breakpoints;
                            if (!a || a && 0 === Object.keys(a).length) return;
                            let l = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                            if (!l || e.currentBreakpoint === l) return;
                            let n = l in a ? a[l] : void 0,
                                d = n || e.originalParams,
                                u = P(e, s),
                                p = P(e, d),
                                c = e.params.grabCursor,
                                h = d.grabCursor,
                                f = s.enabled;
                            u && !p ? (r.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !u && p && (r.classList.add(`${s.containerModifierClass}grid`), (d.grid.fill && "column" === d.grid.fill || !d.grid.fill && "column" === s.grid.fill) && r.classList.add(`${s.containerModifierClass}grid-column`), e.emitContainerClasses()), c && !h ? e.unsetGrabCursor() : !c && h && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach(t => {
                                if (void 0 === d[t]) return;
                                let i = s[t] && s[t].enabled,
                                    r = d[t] && d[t].enabled;
                                i && !r && e[t].disable(), !i && r && e[t].enable()
                            });
                            let m = d.direction && d.direction !== s.direction,
                                g = s.loop && (d.slidesPerView !== s.slidesPerView || m),
                                v = s.loop;
                            m && i && e.changeDirection(), (0, o.w)(e.params, d);
                            let w = e.params.enabled,
                                b = e.params.loop;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), f && !w ? e.disable() : !f && w && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", d), i && (g ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !v && b ? (e.loopCreate(t), e.updateSlides()) : v && !b && e.loopDestroy()), e.emit("breakpoint", d)
                        },
                        getBreakpoint: function(e, t, i) {
                            if (void 0 === t && (t = "window"), !e || "container" === t && !i) return;
                            let s = !1,
                                r = (0, n.a)(),
                                a = "window" === t ? r.innerHeight : i.clientHeight,
                                l = Object.keys(e).map(e => {
                                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                                        let t = parseFloat(e.substr(1));
                                        return {
                                            value: a * t,
                                            point: e
                                        }
                                    }
                                    return {
                                        value: e,
                                        point: e
                                    }
                                });
                            l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                            for (let e = 0; e < l.length; e += 1) {
                                let {
                                    point: a,
                                    value: n
                                } = l[e];
                                "window" === t ? r.matchMedia(`(min-width: ${n}px)`).matches && (s = a) : n <= i.clientWidth && (s = a)
                            }
                            return s || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            let {
                                isLocked: e,
                                params: t
                            } = this, {
                                slidesOffsetBefore: i
                            } = t;
                            if (i) {
                                let e = this.slides.length - 1,
                                    t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * i;
                                this.isLocked = this.size > t
                            } else this.isLocked = 1 === this.snapGrid.length;
                            !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked), !0 === t.allowSlidePrev && (this.allowSlidePrev = !this.isLocked), e && e !== this.isLocked && (this.isEnd = !1), e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            let {
                                classNames: e,
                                params: t,
                                rtl: i,
                                el: s,
                                device: r
                            } = this, a = function(e, t) {
                                let i = [];
                                return e.forEach(e => {
                                    "object" == typeof e ? Object.keys(e).forEach(s => {
                                        e[s] && i.push(t + s)
                                    }) : "string" == typeof e && i.push(t + e)
                                }), i
                            }(["initialized", t.direction, {
                                "free-mode": this.params.freeMode && t.freeMode.enabled
                            }, {
                                autoheight: t.autoHeight
                            }, {
                                rtl: i
                            }, {
                                grid: t.grid && t.grid.rows > 1
                            }, {
                                "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                            }, {
                                android: r.android
                            }, {
                                ios: r.ios
                            }, {
                                "css-mode": t.cssMode
                            }, {
                                centered: t.cssMode && t.centeredSlides
                            }, {
                                "watch-progress": t.watchSlidesProgress
                            }], t.containerModifierClass);
                            e.push(...a), s.classList.add(...e), this.emitContainerClasses()
                        },
                        removeClasses: function() {
                            let {
                                el: e,
                                classNames: t
                            } = this;
                            e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses())
                        }
                    }
                },
                k = {};
            class _ {
                constructor() {
                    let e, t;
                    for (var i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                    1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? t = s[0] : [e, t] = s, t || (t = {}), t = (0, o.w)({}, t), e && !t.el && (t.el = e);
                    let l = (0, n.g)();
                    if (t.el && "string" == typeof t.el && l.querySelectorAll(t.el).length > 1) {
                        let e = [];
                        return l.querySelectorAll(t.el).forEach(i => {
                            let s = (0, o.w)({}, t, {
                                el: i
                            });
                            e.push(new _(s))
                        }), e
                    }
                    let p = this;
                    p.__swiper__ = !0, p.support = d(), p.device = u({
                        userAgent: t.userAgent
                    }), p.browser = (a || (a = function() {
                        let e = (0, n.a)(),
                            t = u(),
                            i = !1;

                        function s() {
                            let t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                        }
                        if (s()) {
                            let t = String(e.navigator.userAgent);
                            if (t.includes("Version/")) {
                                let [e, s] = t.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
                                i = e < 16 || 16 === e && s < 2
                            }
                        }
                        let r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                            a = s(),
                            l = a || r && t.ios;
                        return {
                            isSafari: i || a,
                            needPerspectiveFix: i,
                            need3dFix: l,
                            isWebView: r
                        }
                    }()), a), p.eventsListeners = {}, p.eventsAnyListeners = [], p.modules = [...p.__modules__], t.modules && Array.isArray(t.modules) && p.modules.push(...t.modules);
                    let c = {};
                    p.modules.forEach(e => {
                        var i;
                        e({
                            params: t,
                            swiper: p,
                            extendParams: (i = t, function(e) {
                                void 0 === e && (e = {});
                                let t = Object.keys(e)[0],
                                    s = e[t];
                                if ("object" != typeof s || null === s || (!0 === i[t] && (i[t] = {
                                        enabled: !0
                                    }), "navigation" === t && i[t] && i[t].enabled && !i[t].prevEl && !i[t].nextEl && (i[t].auto = !0), ["pagination", "scrollbar"].indexOf(t) >= 0 && i[t] && i[t].enabled && !i[t].el && (i[t].auto = !0), !(t in i && "enabled" in s))) {
                                    (0, o.w)(c, e);
                                    return
                                }
                                "object" != typeof i[t] || "enabled" in i[t] || (i[t].enabled = !0), i[t] || (i[t] = {
                                    enabled: !1
                                }), (0, o.w)(c, e)
                            }),
                            on: p.on.bind(p),
                            once: p.once.bind(p),
                            off: p.off.bind(p),
                            emit: p.emit.bind(p)
                        })
                    });
                    let h = (0, o.w)({}, L, c);
                    return p.params = (0, o.w)({}, h, k, t), p.originalParams = (0, o.w)({}, p.params), p.passedParams = (0, o.w)({}, t), p.params && p.params.on && Object.keys(p.params.on).forEach(e => {
                        p.on(e, p.params.on[e])
                    }), p.params && p.params.onAny && p.onAny(p.params.onAny), Object.assign(p, {
                        enabled: p.params.enabled,
                        el: e,
                        classNames: [],
                        slides: [],
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === p.params.direction,
                        isVertical: () => "vertical" === p.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        cssOverflowAdjustment() {
                            return 8388608 * Math.trunc(this.translate / 8388608)
                        },
                        allowSlideNext: p.params.allowSlideNext,
                        allowSlidePrev: p.params.allowSlidePrev,
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: p.params.focusableElements,
                            lastClickTime: 0,
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            startMoving: void 0,
                            pointerId: null,
                            touchId: null
                        },
                        allowClick: !0,
                        allowTouchMove: p.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), p.emit("_swiper"), p.params.init && p.init(), p
                }
                getDirectionLabel(e) {
                    return this.isHorizontal() ? e : ({
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    })[e]
                }
                getSlideIndex(e) {
                    let {
                        slidesEl: t,
                        params: i
                    } = this, s = (0, o.e)(t, `.${i.slideClass}, swiper-slide`), r = (0, o.h)(s[0]);
                    return (0, o.h)(e) - r
                }
                getSlideIndexByData(e) {
                    return this.getSlideIndex(this.slides.filter(t => 1 * t.getAttribute("data-swiper-slide-index") === e)[0])
                }
                recalcSlides() {
                    let {
                        slidesEl: e,
                        params: t
                    } = this;
                    this.slides = (0, o.e)(e, `.${t.slideClass}, swiper-slide`)
                }
                enable() {
                    this.enabled || (this.enabled = !0, this.params.grabCursor && this.setGrabCursor(), this.emit("enable"))
                }
                disable() {
                    this.enabled && (this.enabled = !1, this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"))
                }
                setProgress(e, t) {
                    e = Math.min(Math.max(e, 0), 1);
                    let i = this.minTranslate(),
                        s = this.maxTranslate(),
                        r = (s - i) * e + i;
                    this.translateTo(r, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
                }
                emitContainerClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    let t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
                }
                emitSlidesClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = [];
                    e.slides.forEach(i => {
                        let s = e.getSlideClasses(i);
                        t.push({
                            slideEl: i,
                            classNames: s
                        }), e.emit("_slideClass", i, s)
                    }), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    let {
                        params: i,
                        slides: s,
                        slidesGrid: r,
                        slidesSizesGrid: a,
                        size: l,
                        activeIndex: n
                    } = this, o = 1;
                    if ("number" == typeof i.slidesPerView) return i.slidesPerView;
                    if (i.centeredSlides) {
                        let e, t = s[n] ? Math.ceil(s[n].swiperSlideSize) : 0;
                        for (let i = n + 1; i < s.length; i += 1) s[i] && !e && (t += Math.ceil(s[i].swiperSlideSize), o += 1, t > l && (e = !0));
                        for (let i = n - 1; i >= 0; i -= 1) s[i] && !e && (t += s[i].swiperSlideSize, o += 1, t > l && (e = !0))
                    } else if ("current" === e)
                        for (let e = n + 1; e < s.length; e += 1) {
                            let i = t ? r[e] + a[e] - r[n] < l : r[e] - r[n] < l;
                            i && (o += 1)
                        } else
                            for (let e = n - 1; e >= 0; e -= 1) {
                                let t = r[n] - r[e] < l;
                                t && (o += 1)
                            }
                    return o
                }
                update() {
                    let e;
                    let t = this;
                    if (!t || t.destroyed) return;
                    let {
                        snapGrid: i,
                        params: s
                    } = t;

                    function r() {
                        let e = t.rtlTranslate ? -1 * t.translate : t.translate,
                            i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                        t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                    if (s.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                            e.complete && h(t, e)
                        }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) r(), s.autoHeight && t.updateAutoHeight();
                    else {
                        if (("auto" === s.slidesPerView || s.slidesPerView > 1) && t.isEnd && !s.centeredSlides) {
                            let i = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides;
                            e = t.slideTo(i.length - 1, 0, !1, !0)
                        } else e = t.slideTo(t.activeIndex, 0, !1, !0);
                        e || r()
                    }
                    s.watchOverflow && i !== t.snapGrid && t.checkOverflow(), t.emit("update")
                }
                changeDirection(e, t) {
                    void 0 === t && (t = !0);
                    let i = this.params.direction;
                    return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.el.classList.remove(`${this.params.containerModifierClass}${i}`), this.el.classList.add(`${this.params.containerModifierClass}${e}`), this.emitContainerClasses(), this.params.direction = e, this.slides.forEach(t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    }), this.emit("changeDirection"), t && this.update()), this
                }
                changeLanguageDirection(e) {
                    (!this.rtl || "rtl" !== e) && (this.rtl || "ltr" !== e) && (this.rtl = "rtl" === e, this.rtlTranslate = "horizontal" === this.params.direction && this.rtl, this.rtl ? (this.el.classList.add(`${this.params.containerModifierClass}rtl`), this.el.dir = "rtl") : (this.el.classList.remove(`${this.params.containerModifierClass}rtl`), this.el.dir = "ltr"), this.update())
                }
                mount(e) {
                    let t = this;
                    if (t.mounted) return !0;
                    let i = e || t.params.el;
                    if ("string" == typeof i && (i = document.querySelector(i)), !i) return !1;
                    i.swiper = t, i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
                    let s = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,
                        r = (() => {
                            if (i && i.shadowRoot && i.shadowRoot.querySelector) {
                                let e = i.shadowRoot.querySelector(s());
                                return e
                            }
                            return (0, o.e)(i, s())[0]
                        })();
                    return !r && t.params.createElements && (r = (0, o.c)("div", t.params.wrapperClass), i.append(r), (0, o.e)(i, `.${t.params.slideClass}`).forEach(e => {
                        r.append(e)
                    })), Object.assign(t, {
                        el: i,
                        wrapperEl: r,
                        slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : r,
                        hostEl: t.isElement ? i.parentNode.host : i,
                        mounted: !0,
                        rtl: "rtl" === i.dir.toLowerCase() || "rtl" === (0, o.p)(i, "direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === (0, o.p)(i, "direction")),
                        wrongRTL: "-webkit-box" === (0, o.p)(r, "display")
                    }), !0
                }
                init(e) {
                    let t = this;
                    if (t.initialized) return t;
                    let i = t.mount(e);
                    if (!1 === i) return t;
                    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
                    let s = [...t.el.querySelectorAll('[loading="lazy"]')];
                    return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach(e => {
                        e.complete ? h(t, e) : e.addEventListener("load", e => {
                            h(t, e.target)
                        })
                    }), m(t), t.initialized = !0, m(t), t.emit("init"), t.emit("afterInit"), t
                }
                destroy(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    let i = this,
                        {
                            params: s,
                            el: r,
                            wrapperEl: a,
                            slides: l
                        } = i;
                    return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r && "string" != typeof r && r.removeAttribute("style"), a && a.removeAttribute("style"), l && l.length && l.forEach(e => {
                        e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                    })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
                        i.off(e)
                    }), !1 !== e && (i.el && "string" != typeof i.el && (i.el.swiper = null), (0, o.x)(i)), i.destroyed = !0), null
                }
                static extendDefaults(e) {
                    (0, o.w)(k, e)
                }
                static get extendedDefaults() {
                    return k
                }
                static get defaults() {
                    return L
                }
                static installModule(e) {
                    _.prototype.__modules__ || (_.prototype.__modules__ = []);
                    let t = _.prototype.__modules__;
                    "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? e.forEach(e => _.installModule(e)) : _.installModule(e), _
                }
            }
            Object.keys(O).forEach(e => {
                Object.keys(O[e]).forEach(t => {
                    _.prototype[t] = O[e][t]
                })
            }), _.use([function(e) {
                let {
                    swiper: t,
                    on: i,
                    emit: s
                } = e, r = (0, n.a)(), a = null, l = null, o = () => {
                    t && !t.destroyed && t.initialized && (s("beforeResize"), s("resize"))
                }, d = () => {
                    t && !t.destroyed && t.initialized && (a = new ResizeObserver(e => {
                        l = r.requestAnimationFrame(() => {
                            let {
                                width: i,
                                height: s
                            } = t, r = i, a = s;
                            e.forEach(e => {
                                let {
                                    contentBoxSize: i,
                                    contentRect: s,
                                    target: l
                                } = e;
                                l && l !== t.el || (r = s ? s.width : (i[0] || i).inlineSize, a = s ? s.height : (i[0] || i).blockSize)
                            }), (r !== i || a !== s) && o()
                        })
                    })).observe(t.el)
                }, u = () => {
                    l && r.cancelAnimationFrame(l), a && a.unobserve && t.el && (a.unobserve(t.el), a = null)
                }, p = () => {
                    t && !t.destroyed && t.initialized && s("orientationchange")
                };
                i("init", () => {
                    if (t.params.resizeObserver && void 0 !== r.ResizeObserver) {
                        d();
                        return
                    }
                    r.addEventListener("resize", o), r.addEventListener("orientationchange", p)
                }), i("destroy", () => {
                    u(), r.removeEventListener("resize", o), r.removeEventListener("orientationchange", p)
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: i,
                    on: s,
                    emit: r
                } = e, a = [], l = (0, n.a)(), d = function(e, i) {
                    void 0 === i && (i = {});
                    let s = l.MutationObserver || l.WebkitMutationObserver,
                        n = new s(e => {
                            if (t.__preventObserver__) return;
                            if (1 === e.length) {
                                r("observerUpdate", e[0]);
                                return
                            }
                            let i = function() {
                                r("observerUpdate", e[0])
                            };
                            l.requestAnimationFrame ? l.requestAnimationFrame(i) : l.setTimeout(i, 0)
                        });
                    n.observe(e, {
                        attributes: void 0 === i.attributes || i.attributes,
                        childList: t.isElement || (void 0 === i.childList || i).childList,
                        characterData: void 0 === i.characterData || i.characterData
                    }), a.push(n)
                };
                i({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), s("init", () => {
                    if (t.params.observer) {
                        if (t.params.observeParents) {
                            let e = (0, o.a)(t.hostEl);
                            for (let t = 0; t < e.length; t += 1) d(e[t])
                        }
                        d(t.hostEl, {
                            childList: t.params.observeSlideChildren
                        }), d(t.wrapperEl, {
                            attributes: !1
                        })
                    }
                }), s("destroy", () => {
                    a.forEach(e => {
                        e.disconnect()
                    }), a.splice(0, a.length)
                })
            }]);
            let I = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

            function A(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
            }

            function z(e, t) {
                let i = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter(e => 0 > i.indexOf(e)).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : A(t[i]) && A(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : z(e[i], t[i]) : e[i] = t[i]
                })
            }

            function D(e) {
                return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
            }

            function $(e) {
                return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
            }

            function G(e) {
                return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
            }

            function N(e) {
                void 0 === e && (e = "");
                let t = e.split(" ").map(e => e.trim()).filter(e => !!e),
                    i = [];
                return t.forEach(e => {
                    0 > i.indexOf(e) && i.push(e)
                }), i.join(" ")
            }
            let B = e => {
                e && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
            };

            function F() {
                return (F = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function j(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }

            function V(e, t) {
                return "undefined" == typeof window ? (0, l.useEffect)(e, t) : (0, l.useLayoutEffect)(e, t)
            }
            let H = (0, l.createContext)(null),
                R = (0, l.createContext)(null),
                q = (0, l.forwardRef)(function(e, t) {
                    var i;
                    let {
                        className: s,
                        tag: r = "div",
                        wrapperTag: a = "div",
                        children: n,
                        onSwiper: o,
                        ...d
                    } = void 0 === e ? {} : e, u = !1, [p, c] = (0, l.useState)("swiper"), [h, f] = (0, l.useState)(null), [m, g] = (0, l.useState)(!1), v = (0, l.useRef)(!1), w = (0, l.useRef)(null), b = (0, l.useRef)(null), y = (0, l.useRef)(null), S = (0, l.useRef)(null), T = (0, l.useRef)(null), E = (0, l.useRef)(null), x = (0, l.useRef)(null), C = (0, l.useRef)(null), {
                        params: M,
                        passedParams: P,
                        rest: O,
                        events: k
                    } = function(e, t) {
                        void 0 === e && (e = {}), void 0 === t && (t = !0);
                        let i = {
                                on: {}
                            },
                            s = {},
                            r = {};
                        z(i, L), i._emitClasses = !0, i.init = !1;
                        let a = {},
                            l = I.map(e => e.replace(/_/, "")),
                            n = Object.assign({}, e);
                        return Object.keys(n).forEach(n => {
                            void 0 !== e[n] && (l.indexOf(n) >= 0 ? A(e[n]) ? (i[n] = {}, r[n] = {}, z(i[n], e[n]), z(r[n], e[n])) : (i[n] = e[n], r[n] = e[n]) : 0 === n.search(/on[A-Z]/) && "function" == typeof e[n] ? t ? s[`${n[2].toLowerCase()}${n.substr(3)}`] = e[n] : i.on[`${n[2].toLowerCase()}${n.substr(3)}`] = e[n] : a[n] = e[n])
                        }), ["navigation", "pagination", "scrollbar"].forEach(e => {
                            !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e]
                        }), {
                            params: i,
                            passedParams: r,
                            rest: a,
                            events: s
                        }
                    }(d), {
                        slides: H,
                        slots: q
                    } = function(e) {
                        let t = [],
                            i = {
                                "container-start": [],
                                "container-end": [],
                                "wrapper-start": [],
                                "wrapper-end": []
                            };
                        return l.Children.toArray(e).forEach(e => {
                            if (j(e)) t.push(e);
                            else if (e.props && e.props.slot && i[e.props.slot]) i[e.props.slot].push(e);
                            else if (e.props && e.props.children) {
                                let s = function e(t) {
                                    let i = [];
                                    return l.Children.toArray(t).forEach(t => {
                                        j(t) ? i.push(t) : t.props && t.props.children && e(t.props.children).forEach(e => i.push(e))
                                    }), i
                                }(e.props.children);
                                s.length > 0 ? s.forEach(e => t.push(e)) : i["container-end"].push(e)
                            } else i["container-end"].push(e)
                        }), {
                            slides: t,
                            slots: i
                        }
                    }(n), W = () => {
                        g(!m)
                    };
                    Object.assign(M.on, {
                        _containerClasses(e, t) {
                            c(t)
                        }
                    });
                    let Y = () => {
                        Object.assign(M.on, k), u = !0;
                        let e = { ...M
                        };
                        if (delete e.wrapperClass, b.current = new _(e), b.current.virtual && b.current.params.virtual.enabled) {
                            b.current.virtual.slides = H;
                            let e = {
                                cache: !1,
                                slides: H,
                                renderExternal: f,
                                renderExternalUpdate: !1
                            };
                            z(b.current.params.virtual, e), z(b.current.originalParams.virtual, e)
                        }
                    };
                    w.current || Y(), b.current && b.current.on("_beforeBreakpoint", W);
                    let X = () => {
                            !u && k && b.current && Object.keys(k).forEach(e => {
                                b.current.on(e, k[e])
                            })
                        },
                        U = () => {
                            k && b.current && Object.keys(k).forEach(e => {
                                b.current.off(e, k[e])
                            })
                        };
                    return (0, l.useEffect)(() => () => {
                        b.current && b.current.off("_beforeBreakpoint", W)
                    }), (0, l.useEffect)(() => {
                        !v.current && b.current && (b.current.emitSlidesClasses(), v.current = !0)
                    }), V(() => {
                        if (t && (t.current = w.current), w.current) return b.current.destroyed && Y(),
                            function(e, t) {
                                let {
                                    el: i,
                                    nextEl: s,
                                    prevEl: r,
                                    paginationEl: a,
                                    scrollbarEl: l,
                                    swiper: n
                                } = e;
                                D(t) && s && r && (n.params.navigation.nextEl = s, n.originalParams.navigation.nextEl = s, n.params.navigation.prevEl = r, n.originalParams.navigation.prevEl = r), $(t) && a && (n.params.pagination.el = a, n.originalParams.pagination.el = a), G(t) && l && (n.params.scrollbar.el = l, n.originalParams.scrollbar.el = l), n.init(i)
                            }({
                                el: w.current,
                                nextEl: T.current,
                                prevEl: E.current,
                                paginationEl: x.current,
                                scrollbarEl: C.current,
                                swiper: b.current
                            }, M), o && !b.current.destroyed && o(b.current), () => {
                                b.current && !b.current.destroyed && b.current.destroy(!0, !1)
                            }
                    }, []), V(() => {
                        X();
                        let e = function(e, t, i, s, r) {
                            let a = [];
                            if (!t) return a;
                            let l = e => {
                                0 > a.indexOf(e) && a.push(e)
                            };
                            if (i && s) {
                                let e = s.map(r),
                                    t = i.map(r);
                                e.join("") !== t.join("") && l("children"), s.length !== i.length && l("children")
                            }
                            let n = I.filter(e => "_" === e[0]).map(e => e.replace(/_/, ""));
                            return n.forEach(i => {
                                if (i in e && i in t) {
                                    if (A(e[i]) && A(t[i])) {
                                        let s = Object.keys(e[i]),
                                            r = Object.keys(t[i]);
                                        s.length !== r.length ? l(i) : (s.forEach(s => {
                                            e[i][s] !== t[i][s] && l(i)
                                        }), r.forEach(s => {
                                            e[i][s] !== t[i][s] && l(i)
                                        }))
                                    } else e[i] !== t[i] && l(i)
                                }
                            }), a
                        }(P, y.current, H, S.current, e => e.key);
                        return y.current = P, S.current = H, e.length && b.current && !b.current.destroyed && function(e) {
                            let t, i, s, r, a, l, n, o, {
                                    swiper: d,
                                    slides: u,
                                    passedParams: p,
                                    changedParams: c,
                                    nextEl: h,
                                    prevEl: f,
                                    scrollbarEl: m,
                                    paginationEl: g
                                } = e,
                                v = c.filter(e => "children" !== e && "direction" !== e && "wrapperClass" !== e),
                                {
                                    params: w,
                                    pagination: b,
                                    navigation: y,
                                    scrollbar: S,
                                    virtual: T,
                                    thumbs: E
                                } = d;
                            c.includes("thumbs") && p.thumbs && p.thumbs.swiper && w.thumbs && !w.thumbs.swiper && (t = !0), c.includes("controller") && p.controller && p.controller.control && w.controller && !w.controller.control && (i = !0), c.includes("pagination") && p.pagination && (p.pagination.el || g) && (w.pagination || !1 === w.pagination) && b && !b.el && (s = !0), c.includes("scrollbar") && p.scrollbar && (p.scrollbar.el || m) && (w.scrollbar || !1 === w.scrollbar) && S && !S.el && (r = !0), c.includes("navigation") && p.navigation && (p.navigation.prevEl || f) && (p.navigation.nextEl || h) && (w.navigation || !1 === w.navigation) && y && !y.prevEl && !y.nextEl && (a = !0);
                            let x = e => {
                                d[e] && (d[e].destroy(), "navigation" === e ? (d.isElement && (d[e].prevEl.remove(), d[e].nextEl.remove()), w[e].prevEl = void 0, w[e].nextEl = void 0, d[e].prevEl = void 0, d[e].nextEl = void 0) : (d.isElement && d[e].el.remove(), w[e].el = void 0, d[e].el = void 0))
                            };
                            if (c.includes("loop") && d.isElement && (w.loop && !p.loop ? l = !0 : !w.loop && p.loop ? n = !0 : o = !0), v.forEach(e => {
                                    if (A(w[e]) && A(p[e])) Object.assign(w[e], p[e]), ("navigation" === e || "pagination" === e || "scrollbar" === e) && "enabled" in p[e] && !p[e].enabled && x(e);
                                    else {
                                        let t = p[e];
                                        (!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && x(e): w[e] = p[e]
                                    }
                                }), v.includes("controller") && !i && d.controller && d.controller.control && w.controller && w.controller.control && (d.controller.control = w.controller.control), c.includes("children") && u && T && w.virtual.enabled ? (T.slides = u, T.update(!0)) : c.includes("virtual") && T && w.virtual.enabled && (u && (T.slides = u), T.update(!0)), c.includes("children") && u && w.loop && (o = !0), t) {
                                let e = E.init();
                                e && E.update(!0)
                            }
                            i && (d.controller.control = w.controller.control), s && (d.isElement && (!g || "string" == typeof g) && ((g = document.createElement("div")).classList.add("swiper-pagination"), g.part.add("pagination"), d.el.appendChild(g)), g && (w.pagination.el = g), b.init(), b.render(), b.update()), r && (d.isElement && (!m || "string" == typeof m) && ((m = document.createElement("div")).classList.add("swiper-scrollbar"), m.part.add("scrollbar"), d.el.appendChild(m)), m && (w.scrollbar.el = m), S.init(), S.updateSize(), S.setTranslate()), a && (d.isElement && (h && "string" != typeof h || ((h = document.createElement("div")).classList.add("swiper-button-next"), h.innerHTML = d.hostEl.constructor.nextButtonSvg, h.part.add("button-next"), d.el.appendChild(h)), f && "string" != typeof f || ((f = document.createElement("div")).classList.add("swiper-button-prev"), f.innerHTML = d.hostEl.constructor.prevButtonSvg, f.part.add("button-prev"), d.el.appendChild(f))), h && (w.navigation.nextEl = h), f && (w.navigation.prevEl = f), y.init(), y.update()), c.includes("allowSlideNext") && (d.allowSlideNext = p.allowSlideNext), c.includes("allowSlidePrev") && (d.allowSlidePrev = p.allowSlidePrev), c.includes("direction") && d.changeDirection(p.direction, !1), (l || o) && d.loopDestroy(), (n || o) && d.loopCreate(), d.update()
                        }({
                            swiper: b.current,
                            slides: H,
                            passedParams: P,
                            changedParams: e,
                            nextEl: T.current,
                            prevEl: E.current,
                            scrollbarEl: C.current,
                            paginationEl: x.current
                        }), () => {
                            U()
                        }
                    }), V(() => {
                        B(b.current)
                    }, [h]), l.createElement(r, F({
                        ref: w,
                        className: N(`${p}${s?` ${s}`:""}`)
                    }, O), l.createElement(R.Provider, {
                        value: b.current
                    }, q["container-start"], l.createElement(a, {
                        className: (void 0 === (i = M.wrapperClass) && (i = ""), i) ? i.includes("swiper-wrapper") ? i : `swiper-wrapper ${i}` : "swiper-wrapper"
                    }, q["wrapper-start"], M.virtual ? function(e, t, i) {
                        if (!i) return null;
                        let s = e => {
                                let i = e;
                                return e < 0 ? i = t.length + e : i >= t.length && (i -= t.length), i
                            },
                            r = e.isHorizontal() ? {
                                [e.rtlTranslate ? "right" : "left"]: `${i.offset}px`
                            } : {
                                top: `${i.offset}px`
                            },
                            {
                                from: a,
                                to: n
                            } = i,
                            o = e.params.loop ? -t.length : 0,
                            d = e.params.loop ? 2 * t.length : t.length,
                            u = [];
                        for (let e = o; e < d; e += 1) e >= a && e <= n && u.push(t[s(e)]);
                        return u.map((t, i) => l.cloneElement(t, {
                            swiper: e,
                            style: r,
                            key: t.props.virtualIndex || t.key || `slide-${i}`
                        }))
                    }(b.current, H, h) : H.map((e, t) => l.cloneElement(e, {
                        swiper: b.current,
                        swiperSlideIndex: t
                    })), q["wrapper-end"]), D(M) && l.createElement(l.Fragment, null, l.createElement("div", {
                        ref: E,
                        className: "swiper-button-prev"
                    }), l.createElement("div", {
                        ref: T,
                        className: "swiper-button-next"
                    })), G(M) && l.createElement("div", {
                        ref: C,
                        className: "swiper-scrollbar"
                    }), $(M) && l.createElement("div", {
                        ref: x,
                        className: "swiper-pagination"
                    }), q["container-end"]))
                });
            q.displayName = "Swiper";
            let W = (0, l.forwardRef)(function(e, t) {
                let {
                    tag: i = "div",
                    children: s,
                    className: r = "",
                    swiper: a,
                    zoom: n,
                    lazy: o,
                    virtualIndex: d,
                    swiperSlideIndex: u,
                    ...p
                } = void 0 === e ? {} : e, c = (0, l.useRef)(null), [h, f] = (0, l.useState)("swiper-slide"), [m, g] = (0, l.useState)(!1);

                function v(e, t, i) {
                    t === c.current && f(i)
                }
                V(() => {
                    if (void 0 !== u && (c.current.swiperSlideIndex = u), t && (t.current = c.current), c.current && a) {
                        if (a.destroyed) {
                            "swiper-slide" !== h && f("swiper-slide");
                            return
                        }
                        return a.on("_slideClass", v), () => {
                            a && a.off("_slideClass", v)
                        }
                    }
                }), V(() => {
                    a && c.current && !a.destroyed && f(a.getSlideClasses(c.current))
                }, [a]);
                let w = {
                        isActive: h.indexOf("swiper-slide-active") >= 0,
                        isVisible: h.indexOf("swiper-slide-visible") >= 0,
                        isPrev: h.indexOf("swiper-slide-prev") >= 0,
                        isNext: h.indexOf("swiper-slide-next") >= 0
                    },
                    b = () => "function" == typeof s ? s(w) : s;
                return l.createElement(i, F({
                    ref: c,
                    className: N(`${h}${r?` ${r}`:""}`),
                    "data-swiper-slide-index": d,
                    onLoad: () => {
                        g(!0)
                    }
                }, p), n && l.createElement(H.Provider, {
                    value: w
                }, l.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof n ? n : void 0
                }, b(), o && !m && l.createElement("div", {
                    className: "swiper-lazy-preloader"
                }))), !n && l.createElement(H.Provider, {
                    value: w
                }, b(), o && !m && l.createElement("div", {
                    className: "swiper-lazy-preloader"
                })))
            });
            W.displayName = "SwiperSlide"
        }
    }
]);
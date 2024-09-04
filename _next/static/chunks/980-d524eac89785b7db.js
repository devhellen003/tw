(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [980], {
        31996: function(e, t, n) {
            "use strict";
            var r = n(8418),
                o = n(44346),
                u = n(47718),
                i = n(76646);
            r.useLocalizedRouter, r.useUnlocalizedPathname, t.jD = o.default, u.default, i.default
        },
        47718: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(7653),
                o = n(14712),
                u = r && r.__esModule ? r : {
                    default: r
                };
            t.default = function(e) {
                return u.default.createElement(o.default, e)
            }
        },
        8418: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(44346),
                o = n(76646);
            let u = r.default,
                i = o.default;
            t.usePathname = r.default, t.useRouter = o.default, t.useLocalizedRouter = i, t.useUnlocalizedPathname = u
        },
        44346: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(32859),
                o = n(7653),
                u = n(69117),
                i = n(69769);
            t.default = function() {
                let e = r.usePathname(),
                    t = u.default();
                return o.useMemo(() => e && i.hasPathnamePrefixed(t, e) ? i.unlocalizePathname(e, t) : e, [t, e])
            }
        },
        54010: function(e, t, n) {
            "use strict";
            var r = n(12180);
            t.Z = r.default
        },
        78386: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    default: function() {
                        return c
                    },
                    unstable_getImgProps: function() {
                        return a
                    }
                });
            let r = n(87675),
                o = n(19167),
                u = n(59378),
                i = n(16116),
                l = r._(n(90752)),
                a = e => {
                    (0, u.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
                    let {
                        props: t
                    } = (0, o.getImgProps)(e, {
                        defaultLoader: l.default,
                        imgConf: {
                            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                            path: "/_next/image",
                            loader: "default",
                            dangerouslyAllowSVG: !1,
                            unoptimized: !1
                        }
                    });
                    for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
                    return {
                        props: t
                    }
                },
                c = i.Image
        },
        53617: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__inter_9c5a94', '__inter_Fallback_9c5a94'"
                },
                className: "__className_9c5a94",
                variable: "__variable_9c5a94"
            }
        },
        40675: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__wixMadeforDisplay_49b18b', '__wixMadeforDisplay_Fallback_49b18b'"
                },
                className: "__className_49b18b",
                variable: "__variable_49b18b"
            }
        },
        96072: function(e, t, n) {
            e.exports = n(78386)
        },
        76794: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return d
                },
                f: function() {
                    return s
                }
            });
            var r = n(7653),
                o = n(45636),
                u = n(52690),
                i = n(34003),
                l = n(88572),
                a = n(94791);
            let c = (0, r.createContext)(null);

            function s() {
                let [e, t] = (0, r.useState)([]);
                return [e.length > 0 ? e.join(" ") : void 0, (0, r.useMemo)(() => function(e) {
                    let n = (0, a.z)(e => (t(t => [...t, e]), () => t(t => {
                            let n = t.slice(),
                                r = n.indexOf(e);
                            return -1 !== r && n.splice(r, 1), n
                        }))),
                        o = (0, r.useMemo)(() => ({
                            register: n,
                            slot: e.slot,
                            name: e.name,
                            props: e.props
                        }), [n, e.slot, e.name, e.props]);
                    return r.createElement(c.Provider, {
                        value: o
                    }, e.children)
                }, [t])]
            }
            let d = Object.assign((0, u.yV)(function(e, t) {
                let n = (0, o.M)(),
                    {
                        id: a = `headlessui-description-${n}`,
                        ...s
                    } = e,
                    d = function e() {
                        let t = (0, r.useContext)(c);
                        if (null === t) {
                            let t = Error("You used a <Description /> component, but it is not inside a relevant parent.");
                            throw Error.captureStackTrace && Error.captureStackTrace(t, e), t
                        }
                        return t
                    }(),
                    f = (0, l.T)(t);
                (0, i.e)(() => d.register(a), [a, d.register]);
                let p = {
                    ref: f,
                    ...d.props,
                    id: a
                };
                return (0, u.sY)({
                    ourProps: p,
                    theirProps: s,
                    slot: d.slot || {},
                    defaultTag: "p",
                    name: d.name || "Description"
                })
            }), {})
        },
        1211: function(e, t, n) {
            "use strict";
            let r, o;
            n.d(t, {
                V: function() {
                    return ec
                }
            });
            var u, i, l, a, c, s = n(7653),
                d = n.t(s, 2),
                f = n(26788),
                p = n(52690),
                m = n(88572),
                v = n(86011),
                g = n(73366),
                h = n(45636),
                b = n(4638),
                y = n(12754),
                E = n(28705),
                w = n(94791),
                T = n(99116),
                P = n(26747),
                R = n(99559),
                S = n(92588),
                M = n(49569),
                x = n(99982),
                I = n(37703),
                C = n(73969);

            function D(e) {
                if (!e) return new Set;
                if ("function" == typeof e) return new Set(e());
                let t = new Set;
                for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
                return t
            }
            var F = ((u = F || {})[u.None = 1] = "None", u[u.InitialFocus = 2] = "InitialFocus", u[u.TabLock = 4] = "TabLock", u[u.FocusLock = 8] = "FocusLock", u[u.RestoreFocus = 16] = "RestoreFocus", u[u.All = 30] = "All", u);
            let O = Object.assign((0, p.yV)(function(e, t) {
                    let n = (0, s.useRef)(null),
                        r = (0, m.T)(n, t),
                        {
                            initialFocus: o,
                            containers: u,
                            features: i = 30,
                            ...l
                        } = e;
                    (0, b.H)() || (i = 1);
                    let a = (0, R.i)(n);
                    ! function({
                        ownerDocument: e
                    }, t) {
                        let n = function(e = !0) {
                            let t = (0, s.useRef)(k.slice());
                            return (0, x.q)(([e], [n]) => {
                                !0 === n && !1 === e && (0, M.Y)(() => {
                                    t.current.splice(0)
                                }), !1 === n && !0 === e && (t.current = k.slice())
                            }, [e, k, t]), (0, w.z)(() => {
                                var e;
                                return null != (e = t.current.find(e => null != e && e.isConnected)) ? e : null
                            })
                        }(t);
                        (0, x.q)(() => {
                            t || (null == e ? void 0 : e.activeElement) === (null == e ? void 0 : e.body) && (0, E.C5)(n())
                        }, [t]), (0, C.L)(() => {
                            t && (0, E.C5)(n())
                        })
                    }({
                        ownerDocument: a
                    }, !!(16 & i));
                    let c = function({
                        ownerDocument: e,
                        container: t,
                        initialFocus: n
                    }, r) {
                        let o = (0, s.useRef)(null),
                            u = (0, P.t)();
                        return (0, x.q)(() => {
                            if (!r) return;
                            let i = t.current;
                            i && (0, M.Y)(() => {
                                if (!u.current) return;
                                let t = null == e ? void 0 : e.activeElement;
                                if (null != n && n.current) {
                                    if ((null == n ? void 0 : n.current) === t) {
                                        o.current = t;
                                        return
                                    }
                                } else if (i.contains(t)) {
                                    o.current = t;
                                    return
                                }
                                null != n && n.current ? (0, E.C5)(n.current) : (0, E.jA)(i, E.TO.First) === E.fE.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o.current = null == e ? void 0 : e.activeElement
                            })
                        }, [r]), o
                    }({
                        ownerDocument: a,
                        container: n,
                        initialFocus: o
                    }, !!(2 & i));
                    ! function({
                        ownerDocument: e,
                        container: t,
                        containers: n,
                        previousActiveElement: r
                    }, o) {
                        let u = (0, P.t)();
                        (0, S.O)(null == e ? void 0 : e.defaultView, "focus", e => {
                            if (!o || !u.current) return;
                            let i = D(n);
                            t.current instanceof HTMLElement && i.add(t.current);
                            let l = r.current;
                            if (!l) return;
                            let a = e.target;
                            a && a instanceof HTMLElement ? L(i, a) ? (r.current = a, (0, E.C5)(a)) : (e.preventDefault(), e.stopPropagation(), (0, E.C5)(l)) : (0, E.C5)(r.current)
                        }, !0)
                    }({
                        ownerDocument: a,
                        container: n,
                        containers: u,
                        previousActiveElement: c
                    }, !!(8 & i));
                    let d = (0, T.l)(),
                        v = (0, w.z)(e => {
                            let t = n.current;
                            t && (0, f.E)(d.current, {
                                [T.N.Forwards]: () => {
                                    (0, E.jA)(t, E.TO.First, {
                                        skipElements: [e.relatedTarget]
                                    })
                                },
                                [T.N.Backwards]: () => {
                                    (0, E.jA)(t, E.TO.Last, {
                                        skipElements: [e.relatedTarget]
                                    })
                                }
                            })
                        }),
                        g = (0, I.G)(),
                        h = (0, s.useRef)(!1);
                    return s.createElement(s.Fragment, null, !!(4 & i) && s.createElement(y._, {
                        as: "button",
                        type: "button",
                        "data-headlessui-focus-guard": !0,
                        onFocus: v,
                        features: y.A.Focusable
                    }), (0, p.sY)({
                        ourProps: {
                            ref: r,
                            onKeyDown(e) {
                                "Tab" == e.key && (h.current = !0, g.requestAnimationFrame(() => {
                                    h.current = !1
                                }))
                            },
                            onBlur(e) {
                                let t = D(u);
                                n.current instanceof HTMLElement && t.add(n.current);
                                let r = e.relatedTarget;
                                r instanceof HTMLElement && "true" !== r.dataset.headlessuiFocusGuard && (L(t, r) || (h.current ? (0, E.jA)(n.current, (0, f.E)(d.current, {
                                    [T.N.Forwards]: () => E.TO.Next,
                                    [T.N.Backwards]: () => E.TO.Previous
                                }) | E.TO.WrapAround, {
                                    relativeTo: e.target
                                }) : e.target instanceof HTMLElement && (0, E.C5)(e.target)))
                            }
                        },
                        theirProps: l,
                        defaultTag: "div",
                        name: "FocusTrap"
                    }), !!(4 & i) && s.createElement(y._, {
                        as: "button",
                        type: "button",
                        "data-headlessui-focus-guard": !0,
                        onFocus: v,
                        features: y.A.Focusable
                    }))
                }), {
                    features: F
                }),
                k = [];

            function L(e, t) {
                for (let n of e)
                    if (n.contains(t)) return !0;
                return !1
            }! function(e) {
                function t() {
                    "loading" !== document.readyState && (e(), document.removeEventListener("DOMContentLoaded", t))
                }
                "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("DOMContentLoaded", t), t())
            }(() => {
                function e(e) {
                    e.target instanceof HTMLElement && e.target !== document.body && k[0] !== e.target && (k.unshift(e.target), (k = k.filter(e => null != e && e.isConnected)).splice(10))
                }
                window.addEventListener("click", e, {
                    capture: !0
                }), window.addEventListener("mousedown", e, {
                    capture: !0
                }), window.addEventListener("focus", e, {
                    capture: !0
                }), document.body.addEventListener("click", e, {
                    capture: !0
                }), document.body.addEventListener("mousedown", e, {
                    capture: !0
                }), document.body.addEventListener("focus", e, {
                    capture: !0
                })
            });
            var N = n(66947),
                A = n(65564),
                _ = n(76794),
                z = n(82507),
                H = n(34003);
            let V = (0, s.createContext)(() => {});
            V.displayName = "StackContext";
            var Y = ((i = Y || {})[i.Add = 0] = "Add", i[i.Remove = 1] = "Remove", i);

            function j({
                children: e,
                onUpdate: t,
                type: n,
                element: r,
                enabled: o
            }) {
                let u = (0, s.useContext)(V),
                    i = (0, w.z)((...e) => {
                        null == t || t(...e), u(...e)
                    });
                return (0, H.e)(() => {
                    let e = void 0 === o || !0 === o;
                    return e && i(0, n, r), () => {
                        e && i(1, n, r)
                    }
                }, [i, n, r, o]), s.createElement(V.Provider, {
                    value: i
                }, e)
            }
            var U = n(62818);
            let {
                useState: B,
                useEffect: G,
                useLayoutEffect: $,
                useDebugValue: q
            } = d;
            "undefined" != typeof window && void 0 !== window.document && window.document.createElement;
            let W = d.useSyncExternalStore;
            var K = n(93561),
                Q = n(96692);
            let Z = (l = {
                PUSH(e, t) {
                    var n;
                    let r = null != (n = this.get(e)) ? n : {
                        doc: e,
                        count: 0,
                        d: (0, K.k)(),
                        meta: new Set
                    };
                    return r.count++, r.meta.add(t), this.set(e, r), this
                },
                POP(e, t) {
                    let n = this.get(e);
                    return n && (n.count--, n.meta.delete(t)), this
                },
                SCROLL_PREVENT({
                    doc: e,
                    d: t,
                    meta: n
                }) {
                    let r, o;
                    let u = {
                            doc: e,
                            d: t,
                            meta: function(e) {
                                let t = {};
                                for (let n of e) Object.assign(t, n(t));
                                return t
                            }(n)
                        },
                        i = [(0, Q.gn)() ? {
                            before() {
                                r = window.pageYOffset
                            },
                            after({
                                doc: e,
                                d: t,
                                meta: n
                            }) {
                                function o(e) {
                                    return n.containers.flatMap(e => e()).some(t => t.contains(e))
                                }
                                t.microTask(() => {
                                    if ("auto" !== window.getComputedStyle(e.documentElement).scrollBehavior) {
                                        let n = (0, K.k)();
                                        n.style(e.documentElement, "scroll-behavior", "auto"), t.add(() => t.microTask(() => n.dispose()))
                                    }
                                    t.style(e.body, "marginTop", `-${r}px`), window.scrollTo(0, 0);
                                    let n = null;
                                    t.addEventListener(e, "click", t => {
                                        if (t.target instanceof HTMLElement) try {
                                            let r = t.target.closest("a");
                                            if (!r) return;
                                            let {
                                                hash: u
                                            } = new URL(r.href), i = e.querySelector(u);
                                            i && !o(i) && (n = i)
                                        } catch {}
                                    }, !0), t.addEventListener(e, "touchmove", e => {
                                        e.target instanceof HTMLElement && !o(e.target) && e.preventDefault()
                                    }, {
                                        passive: !1
                                    }), t.add(() => {
                                        window.scrollTo(0, window.pageYOffset + r), n && n.isConnected && (n.scrollIntoView({
                                            block: "nearest"
                                        }), n = null)
                                    })
                                })
                            }
                        } : {}, {
                            before({
                                doc: e
                            }) {
                                var t;
                                let n = e.documentElement;
                                o = (null != (t = e.defaultView) ? t : window).innerWidth - n.clientWidth
                            },
                            after({
                                doc: e,
                                d: t
                            }) {
                                let n = e.documentElement,
                                    r = n.clientWidth - n.offsetWidth,
                                    u = o - r;
                                t.style(n, "paddingRight", `${u}px`)
                            }
                        }, {
                            before({
                                doc: e,
                                d: t
                            }) {
                                t.style(e.documentElement, "overflow", "hidden")
                            }
                        }];
                    i.forEach(({
                        before: e
                    }) => null == e ? void 0 : e(u)), i.forEach(({
                        after: e
                    }) => null == e ? void 0 : e(u))
                },
                SCROLL_ALLOW({
                    d: e
                }) {
                    e.dispose()
                },
                TEARDOWN({
                    doc: e
                }) {
                    this.delete(e)
                }
            }, r = new Map, o = new Set, {
                getSnapshot: () => r,
                subscribe: e => (o.add(e), () => o.delete(e)),
                dispatch(e, ...t) {
                    let n = l[e].call(r, ...t);
                    n && (r = n, o.forEach(e => e()))
                }
            });
            Z.subscribe(() => {
                let e = Z.getSnapshot(),
                    t = new Map;
                for (let [n] of e) t.set(n, n.documentElement.style.overflow);
                for (let n of e.values()) {
                    let e = "hidden" === t.get(n.doc),
                        r = 0 !== n.count;
                    (r && !e || !r && e) && Z.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), 0 === n.count && Z.dispatch("TEARDOWN", n)
                }
            });
            let J = new Map,
                X = new Map;

            function ee(e, t = !0) {
                (0, H.e)(() => {
                    var n;
                    if (!t) return;
                    let r = "function" == typeof e ? e() : e.current;
                    if (!r) return;
                    let o = null != (n = X.get(r)) ? n : 0;
                    return X.set(r, o + 1), 0 !== o || (J.set(r, {
                            "aria-hidden": r.getAttribute("aria-hidden"),
                            inert: r.inert
                        }), r.setAttribute("aria-hidden", "true"), r.inert = !0),
                        function() {
                            var e;
                            if (!r) return;
                            let t = null != (e = X.get(r)) ? e : 1;
                            if (1 === t ? X.delete(r) : X.set(r, t - 1), 1 !== t) return;
                            let n = J.get(r);
                            n && (null === n["aria-hidden"] ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", n["aria-hidden"]), r.inert = n.inert, J.delete(r))
                        }
                }, [e, t])
            }
            var et = n(9189),
                en = ((a = en || {})[a.Open = 0] = "Open", a[a.Closed = 1] = "Closed", a),
                er = ((c = er || {})[c.SetTitleId = 0] = "SetTitleId", c);
            let eo = {
                    0: (e, t) => e.titleId === t.id ? e : { ...e,
                        titleId: t.id
                    }
                },
                eu = (0, s.createContext)(null);

            function ei(e) {
                let t = (0, s.useContext)(eu);
                if (null === t) {
                    let t = Error(`<${e} /> is missing a parent <Dialog /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, ei), t
                }
                return t
            }

            function el(e, t) {
                return (0, f.E)(t.type, eo, e, t)
            }
            eu.displayName = "DialogContext";
            let ea = p.AN.RenderStrategy | p.AN.Static,
                ec = Object.assign((0, p.yV)(function(e, t) {
                    var n;
                    let r = (0, h.M)(),
                        {
                            id: o = `headlessui-dialog-${r}`,
                            open: u,
                            onClose: i,
                            initialFocus: l,
                            __demoMode: a = !1,
                            ...c
                        } = e,
                        [d, g] = (0, s.useState)(0),
                        y = (0, z.oJ)();
                    void 0 === u && null !== y && (u = (y & z.ZM.Open) === z.ZM.Open);
                    let E = (0, s.useRef)(null),
                        T = (0, m.T)(E, t),
                        P = (0, R.i)(E),
                        M = e.hasOwnProperty("open") || null !== y,
                        x = e.hasOwnProperty("onClose");
                    if (!M && !x) throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
                    if (!M) throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
                    if (!x) throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
                    if ("boolean" != typeof u) throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u}`);
                    if ("function" != typeof i) throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${i}`);
                    let I = u ? 0 : 1,
                        [C, D] = (0, s.useReducer)(el, {
                            titleId: null,
                            descriptionId: null,
                            panelRef: (0, s.createRef)()
                        }),
                        F = (0, w.z)(() => i(!1)),
                        k = (0, w.z)(e => D({
                            type: 0,
                            id: e
                        })),
                        L = !!(0, b.H)() && !a && 0 === I,
                        V = d > 1,
                        B = null !== (0, s.useContext)(eu),
                        [G, $] = (0, N.k)(),
                        {
                            resolveContainers: q,
                            mainTreeNodeRef: K,
                            MainTreeNode: Q
                        } = (0, et.v)({
                            portals: G,
                            defaultContainers: [null != (n = C.panelRef.current) ? n : E.current]
                        }),
                        J = V ? "parent" : "leaf",
                        X = null !== y && (y & z.ZM.Closing) === z.ZM.Closing,
                        en = !B && !X && L;
                    ee((0, s.useCallback)(() => {
                        var e, t;
                        return null != (t = Array.from(null != (e = null == P ? void 0 : P.querySelectorAll("body > *")) ? e : []).find(e => "headlessui-portal-root" !== e.id && e.contains(K.current) && e instanceof HTMLElement)) ? t : null
                    }, [K]), en);
                    let er = !!V || L;
                    ee((0, s.useCallback)(() => {
                        var e, t;
                        return null != (t = Array.from(null != (e = null == P ? void 0 : P.querySelectorAll("[data-headlessui-portal]")) ? e : []).find(e => e.contains(K.current) && e instanceof HTMLElement)) ? t : null
                    }, [K]), er);
                    let eo = !(!L || V);
                    (0, U.O)(q, F, eo);
                    let ei = !(V || 0 !== I);
                    (0, S.O)(null == P ? void 0 : P.defaultView, "keydown", e => {
                        ei && (e.defaultPrevented || e.key === v.R.Escape && (e.preventDefault(), e.stopPropagation(), F()))
                    }),
                    function(e, t, n = () => [document.body]) {
                        var r;
                        let o, u;
                        r = e => {
                            var t;
                            return {
                                containers: [...null != (t = e.containers) ? t : [], n]
                            }
                        }, o = W(Z.subscribe, Z.getSnapshot, Z.getSnapshot), (u = e ? o.get(e) : void 0) && u.count, (0, H.e)(() => {
                            if (!(!e || !t)) return Z.dispatch("PUSH", e, r), () => Z.dispatch("POP", e, r)
                        }, [t, e])
                    }(P, !(X || 0 !== I || B), q), (0, s.useEffect)(() => {
                        if (0 !== I || !E.current) return;
                        let e = new ResizeObserver(e => {
                            for (let t of e) {
                                let e = t.target.getBoundingClientRect();
                                0 === e.x && 0 === e.y && 0 === e.width && 0 === e.height && F()
                            }
                        });
                        return e.observe(E.current), () => e.disconnect()
                    }, [I, E, F]);
                    let [ec, es] = (0, _.f)(), ed = (0, s.useMemo)(() => [{
                        dialogState: I,
                        close: F,
                        setTitleId: k
                    }, C], [I, C, F, k]), ef = (0, s.useMemo)(() => ({
                        open: 0 === I
                    }), [I]), ep = {
                        ref: T,
                        id: o,
                        role: "dialog",
                        "aria-modal": 0 === I || void 0,
                        "aria-labelledby": C.titleId,
                        "aria-describedby": ec
                    };
                    return s.createElement(j, {
                        type: "Dialog",
                        enabled: 0 === I,
                        element: E,
                        onUpdate: (0, w.z)((e, t) => {
                            "Dialog" === t && (0, f.E)(e, {
                                [Y.Add]: () => g(e => e + 1),
                                [Y.Remove]: () => g(e => e - 1)
                            })
                        })
                    }, s.createElement(A.O, {
                        force: !0
                    }, s.createElement(N.h, null, s.createElement(eu.Provider, {
                        value: ed
                    }, s.createElement(N.h.Group, {
                        target: E
                    }, s.createElement(A.O, {
                        force: !1
                    }, s.createElement(es, {
                        slot: ef,
                        name: "Dialog.Description"
                    }, s.createElement(O, {
                        initialFocus: l,
                        containers: q,
                        features: L ? (0, f.E)(J, {
                            parent: O.features.RestoreFocus,
                            leaf: O.features.All & ~O.features.FocusLock
                        }) : O.features.None
                    }, s.createElement($, null, (0, p.sY)({
                        ourProps: ep,
                        theirProps: c,
                        slot: ef,
                        defaultTag: "div",
                        features: ea,
                        visible: 0 === I,
                        name: "Dialog"
                    }))))))))), s.createElement(Q, null))
                }), {
                    Backdrop: (0, p.yV)(function(e, t) {
                        let n = (0, h.M)(),
                            {
                                id: r = `headlessui-dialog-backdrop-${n}`,
                                ...o
                            } = e,
                            [{
                                dialogState: u
                            }, i] = ei("Dialog.Backdrop"),
                            l = (0, m.T)(t);
                        (0, s.useEffect)(() => {
                            if (null === i.panelRef.current) throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
                        }, [i.panelRef]);
                        let a = (0, s.useMemo)(() => ({
                            open: 0 === u
                        }), [u]);
                        return s.createElement(A.O, {
                            force: !0
                        }, s.createElement(N.h, null, (0, p.sY)({
                            ourProps: {
                                ref: l,
                                id: r,
                                "aria-hidden": !0
                            },
                            theirProps: o,
                            slot: a,
                            defaultTag: "div",
                            name: "Dialog.Backdrop"
                        })))
                    }),
                    Panel: (0, p.yV)(function(e, t) {
                        let n = (0, h.M)(),
                            {
                                id: r = `headlessui-dialog-panel-${n}`,
                                ...o
                            } = e,
                            [{
                                dialogState: u
                            }, i] = ei("Dialog.Panel"),
                            l = (0, m.T)(t, i.panelRef),
                            a = (0, s.useMemo)(() => ({
                                open: 0 === u
                            }), [u]),
                            c = (0, w.z)(e => {
                                e.stopPropagation()
                            });
                        return (0, p.sY)({
                            ourProps: {
                                ref: l,
                                id: r,
                                onClick: c
                            },
                            theirProps: o,
                            slot: a,
                            defaultTag: "div",
                            name: "Dialog.Panel"
                        })
                    }),
                    Overlay: (0, p.yV)(function(e, t) {
                        let n = (0, h.M)(),
                            {
                                id: r = `headlessui-dialog-overlay-${n}`,
                                ...o
                            } = e,
                            [{
                                dialogState: u,
                                close: i
                            }] = ei("Dialog.Overlay"),
                            l = (0, m.T)(t),
                            a = (0, w.z)(e => {
                                if (e.target === e.currentTarget) {
                                    if ((0, g.P)(e.currentTarget)) return e.preventDefault();
                                    e.preventDefault(), e.stopPropagation(), i()
                                }
                            }),
                            c = (0, s.useMemo)(() => ({
                                open: 0 === u
                            }), [u]);
                        return (0, p.sY)({
                            ourProps: {
                                ref: l,
                                id: r,
                                "aria-hidden": !0,
                                onClick: a
                            },
                            theirProps: o,
                            slot: c,
                            defaultTag: "div",
                            name: "Dialog.Overlay"
                        })
                    }),
                    Title: (0, p.yV)(function(e, t) {
                        let n = (0, h.M)(),
                            {
                                id: r = `headlessui-dialog-title-${n}`,
                                ...o
                            } = e,
                            [{
                                dialogState: u,
                                setTitleId: i
                            }] = ei("Dialog.Title"),
                            l = (0, m.T)(t);
                        (0, s.useEffect)(() => (i(r), () => i(null)), [r, i]);
                        let a = (0, s.useMemo)(() => ({
                            open: 0 === u
                        }), [u]);
                        return (0, p.sY)({
                            ourProps: {
                                ref: l,
                                id: r
                            },
                            theirProps: o,
                            slot: a,
                            defaultTag: "h2",
                            name: "Dialog.Title"
                        })
                    }),
                    Description: _.d
                })
        },
        4012: function(e, t, n) {
            "use strict";
            n.d(t, {
                v: function() {
                    return z
                }
            });
            var r, o, u, i = n(7653),
                l = n(26788),
                a = n(52690),
                c = n(93561),
                s = n(37703),
                d = n(34003),
                f = n(88572),
                p = n(45636),
                m = n(86011),
                v = n(99087),
                g = n(73366),
                h = n(28705),
                b = n(62818),
                y = n(5476),
                E = n(82507),
                w = n(86761),
                T = n(99559),
                P = n(94791),
                R = n(19844);
            let S = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

            function M(e) {
                var t, n;
                let r = null != (t = e.innerText) ? t : "",
                    o = e.cloneNode(!0);
                if (!(o instanceof HTMLElement)) return r;
                let u = !1;
                for (let e of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) e.remove(), u = !0;
                let i = u ? null != (n = o.innerText) ? n : "" : r;
                return S.test(i) && (i = i.replace(S, "")), i
            }
            var x = ((r = x || {})[r.Open = 0] = "Open", r[r.Closed = 1] = "Closed", r),
                I = ((o = I || {})[o.Pointer = 0] = "Pointer", o[o.Other = 1] = "Other", o),
                C = ((u = C || {})[u.OpenMenu = 0] = "OpenMenu", u[u.CloseMenu = 1] = "CloseMenu", u[u.GoToItem = 2] = "GoToItem", u[u.Search = 3] = "Search", u[u.ClearSearch = 4] = "ClearSearch", u[u.RegisterItem = 5] = "RegisterItem", u[u.UnregisterItem = 6] = "UnregisterItem", u);

            function D(e, t = e => e) {
                let n = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
                    r = (0, h.z2)(t(e.items.slice()), e => e.dataRef.current.domRef.current),
                    o = n ? r.indexOf(n) : null;
                return -1 === o && (o = null), {
                    items: r,
                    activeItemIndex: o
                }
            }
            let F = {
                    1: e => 1 === e.menuState ? e : { ...e,
                        activeItemIndex: null,
                        menuState: 1
                    },
                    0: e => 0 === e.menuState ? e : { ...e,
                        __demoMode: !1,
                        menuState: 0
                    },
                    2: (e, t) => {
                        var n;
                        let r = D(e),
                            o = (0, v.d)(t, {
                                resolveItems: () => r.items,
                                resolveActiveIndex: () => r.activeItemIndex,
                                resolveId: e => e.id,
                                resolveDisabled: e => e.dataRef.current.disabled
                            });
                        return { ...e,
                            ...r,
                            searchQuery: "",
                            activeItemIndex: o,
                            activationTrigger: null != (n = t.trigger) ? n : 1
                        }
                    },
                    3: (e, t) => {
                        let n = "" !== e.searchQuery ? 0 : 1,
                            r = e.searchQuery + t.value.toLowerCase(),
                            o = (null !== e.activeItemIndex ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find(e => {
                                var t;
                                return (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(r)) && !e.dataRef.current.disabled
                            }),
                            u = o ? e.items.indexOf(o) : -1;
                        return -1 === u || u === e.activeItemIndex ? { ...e,
                            searchQuery: r
                        } : { ...e,
                            searchQuery: r,
                            activeItemIndex: u,
                            activationTrigger: 1
                        }
                    },
                    4: e => "" === e.searchQuery ? e : { ...e,
                        searchQuery: "",
                        searchActiveItemIndex: null
                    },
                    5: (e, t) => {
                        let n = D(e, e => [...e, {
                            id: t.id,
                            dataRef: t.dataRef
                        }]);
                        return { ...e,
                            ...n
                        }
                    },
                    6: (e, t) => {
                        let n = D(e, e => {
                            let n = e.findIndex(e => e.id === t.id);
                            return -1 !== n && e.splice(n, 1), e
                        });
                        return { ...e,
                            ...n,
                            activationTrigger: 1
                        }
                    }
                },
                O = (0, i.createContext)(null);

            function k(e) {
                let t = (0, i.useContext)(O);
                if (null === t) {
                    let t = Error(`<${e} /> is missing a parent <Menu /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, k), t
                }
                return t
            }

            function L(e, t) {
                return (0, l.E)(t.type, F, e, t)
            }
            O.displayName = "MenuContext";
            let N = i.Fragment,
                A = a.AN.RenderStrategy | a.AN.Static,
                _ = i.Fragment,
                z = Object.assign((0, a.yV)(function(e, t) {
                    let {
                        __demoMode: n = !1,
                        ...r
                    } = e, o = (0, i.useReducer)(L, {
                        __demoMode: n,
                        menuState: n ? 0 : 1,
                        buttonRef: (0, i.createRef)(),
                        itemsRef: (0, i.createRef)(),
                        items: [],
                        searchQuery: "",
                        activeItemIndex: null,
                        activationTrigger: 1
                    }), [{
                        menuState: u,
                        itemsRef: c,
                        buttonRef: s
                    }, d] = o, p = (0, f.T)(t);
                    (0, b.O)([s, c], (e, t) => {
                        var n;
                        d({
                            type: 1
                        }), (0, h.sP)(t, h.tJ.Loose) || (e.preventDefault(), null == (n = s.current) || n.focus())
                    }, 0 === u);
                    let m = (0, P.z)(() => {
                            d({
                                type: 1
                            })
                        }),
                        v = (0, i.useMemo)(() => ({
                            open: 0 === u,
                            close: m
                        }), [u, m]);
                    return i.createElement(O.Provider, {
                        value: o
                    }, i.createElement(E.up, {
                        value: (0, l.E)(u, {
                            0: E.ZM.Open,
                            1: E.ZM.Closed
                        })
                    }, (0, a.sY)({
                        ourProps: {
                            ref: p
                        },
                        theirProps: r,
                        slot: v,
                        defaultTag: N,
                        name: "Menu"
                    })))
                }), {
                    Button: (0, a.yV)(function(e, t) {
                        var n;
                        let r = (0, p.M)(),
                            {
                                id: o = `headlessui-menu-button-${r}`,
                                ...u
                            } = e,
                            [l, c] = k("Menu.Button"),
                            d = (0, f.T)(l.buttonRef, t),
                            h = (0, s.G)(),
                            b = (0, P.z)(e => {
                                switch (e.key) {
                                    case m.R.Space:
                                    case m.R.Enter:
                                    case m.R.ArrowDown:
                                        e.preventDefault(), e.stopPropagation(), c({
                                            type: 0
                                        }), h.nextFrame(() => c({
                                            type: 2,
                                            focus: v.T.First
                                        }));
                                        break;
                                    case m.R.ArrowUp:
                                        e.preventDefault(), e.stopPropagation(), c({
                                            type: 0
                                        }), h.nextFrame(() => c({
                                            type: 2,
                                            focus: v.T.Last
                                        }))
                                }
                            }),
                            y = (0, P.z)(e => {
                                e.key === m.R.Space && e.preventDefault()
                            }),
                            E = (0, P.z)(t => {
                                if ((0, g.P)(t.currentTarget)) return t.preventDefault();
                                e.disabled || (0 === l.menuState ? (c({
                                    type: 1
                                }), h.nextFrame(() => {
                                    var e;
                                    return null == (e = l.buttonRef.current) ? void 0 : e.focus({
                                        preventScroll: !0
                                    })
                                })) : (t.preventDefault(), c({
                                    type: 0
                                })))
                            }),
                            T = (0, i.useMemo)(() => ({
                                open: 0 === l.menuState
                            }), [l]),
                            R = {
                                ref: d,
                                id: o,
                                type: (0, w.f)(e, l.buttonRef),
                                "aria-haspopup": "menu",
                                "aria-controls": null == (n = l.itemsRef.current) ? void 0 : n.id,
                                "aria-expanded": 0 === l.menuState,
                                onKeyDown: b,
                                onKeyUp: y,
                                onClick: E
                            };
                        return (0, a.sY)({
                            ourProps: R,
                            theirProps: u,
                            slot: T,
                            defaultTag: "button",
                            name: "Menu.Button"
                        })
                    }),
                    Items: (0, a.yV)(function(e, t) {
                        var n, r;
                        let o = (0, p.M)(),
                            {
                                id: u = `headlessui-menu-items-${o}`,
                                ...l
                            } = e,
                            [d, g] = k("Menu.Items"),
                            b = (0, f.T)(d.itemsRef, t),
                            w = (0, T.i)(d.itemsRef),
                            R = (0, s.G)(),
                            S = (0, E.oJ)(),
                            M = null !== S ? (S & E.ZM.Open) === E.ZM.Open : 0 === d.menuState;
                        (0, i.useEffect)(() => {
                            let e = d.itemsRef.current;
                            e && 0 === d.menuState && e !== (null == w ? void 0 : w.activeElement) && e.focus({
                                preventScroll: !0
                            })
                        }, [d.menuState, d.itemsRef, w]), (0, y.B)({
                            container: d.itemsRef.current,
                            enabled: 0 === d.menuState,
                            accept: e => "menuitem" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                            walk(e) {
                                e.setAttribute("role", "none")
                            }
                        });
                        let x = (0, P.z)(e => {
                                var t, n;
                                switch (R.dispose(), e.key) {
                                    case m.R.Space:
                                        if ("" !== d.searchQuery) return e.preventDefault(), e.stopPropagation(), g({
                                            type: 3,
                                            value: e.key
                                        });
                                    case m.R.Enter:
                                        if (e.preventDefault(), e.stopPropagation(), g({
                                                type: 1
                                            }), null !== d.activeItemIndex) {
                                            let {
                                                dataRef: e
                                            } = d.items[d.activeItemIndex];
                                            null == (n = null == (t = e.current) ? void 0 : t.domRef.current) || n.click()
                                        }(0, h.wI)(d.buttonRef.current);
                                        break;
                                    case m.R.ArrowDown:
                                        return e.preventDefault(), e.stopPropagation(), g({
                                            type: 2,
                                            focus: v.T.Next
                                        });
                                    case m.R.ArrowUp:
                                        return e.preventDefault(), e.stopPropagation(), g({
                                            type: 2,
                                            focus: v.T.Previous
                                        });
                                    case m.R.Home:
                                    case m.R.PageUp:
                                        return e.preventDefault(), e.stopPropagation(), g({
                                            type: 2,
                                            focus: v.T.First
                                        });
                                    case m.R.End:
                                    case m.R.PageDown:
                                        return e.preventDefault(), e.stopPropagation(), g({
                                            type: 2,
                                            focus: v.T.Last
                                        });
                                    case m.R.Escape:
                                        e.preventDefault(), e.stopPropagation(), g({
                                            type: 1
                                        }), (0, c.k)().nextFrame(() => {
                                            var e;
                                            return null == (e = d.buttonRef.current) ? void 0 : e.focus({
                                                preventScroll: !0
                                            })
                                        });
                                        break;
                                    case m.R.Tab:
                                        e.preventDefault(), e.stopPropagation(), g({
                                            type: 1
                                        }), (0, c.k)().nextFrame(() => {
                                            (0, h.EO)(d.buttonRef.current, e.shiftKey ? h.TO.Previous : h.TO.Next)
                                        });
                                        break;
                                    default:
                                        1 === e.key.length && (g({
                                            type: 3,
                                            value: e.key
                                        }), R.setTimeout(() => g({
                                            type: 4
                                        }), 350))
                                }
                            }),
                            I = (0, P.z)(e => {
                                e.key === m.R.Space && e.preventDefault()
                            }),
                            C = (0, i.useMemo)(() => ({
                                open: 0 === d.menuState
                            }), [d]),
                            D = {
                                "aria-activedescendant": null === d.activeItemIndex || null == (n = d.items[d.activeItemIndex]) ? void 0 : n.id,
                                "aria-labelledby": null == (r = d.buttonRef.current) ? void 0 : r.id,
                                id: u,
                                onKeyDown: x,
                                onKeyUp: I,
                                role: "menu",
                                tabIndex: 0,
                                ref: b
                            };
                        return (0, a.sY)({
                            ourProps: D,
                            theirProps: l,
                            slot: C,
                            defaultTag: "div",
                            features: A,
                            visible: M,
                            name: "Menu.Items"
                        })
                    }),
                    Item: (0, a.yV)(function(e, t) {
                        let n, r, o = (0, p.M)(),
                            {
                                id: u = `headlessui-menu-item-${o}`,
                                disabled: l = !1,
                                ...s
                            } = e,
                            [m, g] = k("Menu.Item"),
                            b = null !== m.activeItemIndex && m.items[m.activeItemIndex].id === u,
                            y = (0, i.useRef)(null),
                            E = (0, f.T)(t, y);
                        (0, d.e)(() => {
                            if (m.__demoMode || 0 !== m.menuState || !b || 0 === m.activationTrigger) return;
                            let e = (0, c.k)();
                            return e.requestAnimationFrame(() => {
                                var e, t;
                                null == (t = null == (e = y.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                                    block: "nearest"
                                })
                            }), e.dispose
                        }, [m.__demoMode, y, b, m.menuState, m.activationTrigger, m.activeItemIndex]);
                        let w = (n = (0, i.useRef)(""), r = (0, i.useRef)(""), (0, P.z)(() => {
                                let e = y.current;
                                if (!e) return "";
                                let t = e.innerText;
                                if (n.current === t) return r.current;
                                let o = (function(e) {
                                    let t = e.getAttribute("aria-label");
                                    if ("string" == typeof t) return t.trim();
                                    let n = e.getAttribute("aria-labelledby");
                                    if (n) {
                                        let e = n.split(" ").map(e => {
                                            let t = document.getElementById(e);
                                            if (t) {
                                                let e = t.getAttribute("aria-label");
                                                return "string" == typeof e ? e.trim() : M(t).trim()
                                            }
                                            return null
                                        }).filter(Boolean);
                                        if (e.length > 0) return e.join(", ")
                                    }
                                    return M(e).trim()
                                })(e).trim().toLowerCase();
                                return n.current = t, r.current = o, o
                            })),
                            T = (0, i.useRef)({
                                disabled: l,
                                domRef: y,
                                get textValue() {
                                    return w()
                                }
                            });
                        (0, d.e)(() => {
                            T.current.disabled = l
                        }, [T, l]), (0, d.e)(() => (g({
                            type: 5,
                            id: u,
                            dataRef: T
                        }), () => g({
                            type: 6,
                            id: u
                        })), [T, u]);
                        let S = (0, P.z)(() => {
                                g({
                                    type: 1
                                })
                            }),
                            x = (0, P.z)(e => {
                                if (l) return e.preventDefault();
                                g({
                                    type: 1
                                }), (0, h.wI)(m.buttonRef.current)
                            }),
                            I = (0, P.z)(() => {
                                if (l) return g({
                                    type: 2,
                                    focus: v.T.Nothing
                                });
                                g({
                                    type: 2,
                                    focus: v.T.Specific,
                                    id: u
                                })
                            }),
                            C = (0, R.g)(),
                            D = (0, P.z)(e => C.update(e)),
                            F = (0, P.z)(e => {
                                C.wasMoved(e) && (l || b || g({
                                    type: 2,
                                    focus: v.T.Specific,
                                    id: u,
                                    trigger: 0
                                }))
                            }),
                            O = (0, P.z)(e => {
                                C.wasMoved(e) && (l || b && g({
                                    type: 2,
                                    focus: v.T.Nothing
                                }))
                            }),
                            L = (0, i.useMemo)(() => ({
                                active: b,
                                disabled: l,
                                close: S
                            }), [b, l, S]);
                        return (0, a.sY)({
                            ourProps: {
                                id: u,
                                ref: E,
                                role: "menuitem",
                                tabIndex: !0 === l ? void 0 : -1,
                                "aria-disabled": !0 === l || void 0,
                                disabled: void 0,
                                onClick: x,
                                onFocus: I,
                                onPointerEnter: D,
                                onMouseEnter: D,
                                onPointerMove: F,
                                onMouseMove: F,
                                onPointerLeave: O,
                                onMouseLeave: O
                            },
                            theirProps: s,
                            slot: L,
                            defaultTag: _,
                            name: "Menu.Item"
                        })
                    })
                })
        },
        66947: function(e, t, n) {
            "use strict";
            n.d(t, {
                h: function() {
                    return y
                },
                k: function() {
                    return b
                }
            });
            var r = n(7653),
                o = n(3458),
                u = n(52690),
                i = n(34003),
                l = n(65564),
                a = n(4638),
                c = n(88572),
                s = n(73969),
                d = n(99559),
                f = n(84948),
                p = n(94791);
            let m = r.Fragment,
                v = r.Fragment,
                g = (0, r.createContext)(null),
                h = (0, r.createContext)(null);

            function b() {
                let e = (0, r.useContext)(h),
                    t = (0, r.useRef)([]),
                    n = (0, p.z)(n => (t.current.push(n), e && e.register(n), () => o(n))),
                    o = (0, p.z)(n => {
                        let r = t.current.indexOf(n); - 1 !== r && t.current.splice(r, 1), e && e.unregister(n)
                    }),
                    u = (0, r.useMemo)(() => ({
                        register: n,
                        unregister: o,
                        portals: t
                    }), [n, o, t]);
                return [t, (0, r.useMemo)(() => function({
                    children: e
                }) {
                    return r.createElement(h.Provider, {
                        value: u
                    }, e)
                }, [u])]
            }
            let y = Object.assign((0, u.yV)(function(e, t) {
                let n = (0, r.useRef)(null),
                    p = (0, c.T)((0, c.h)(e => {
                        n.current = e
                    }), t),
                    v = (0, d.i)(n),
                    b = function(e) {
                        let t = (0, l.n)(),
                            n = (0, r.useContext)(g),
                            o = (0, d.i)(e),
                            [u, i] = (0, r.useState)(() => {
                                if (!t && null !== n || f.O.isServer) return null;
                                let e = null == o ? void 0 : o.getElementById("headlessui-portal-root");
                                if (e) return e;
                                if (null === o) return null;
                                let r = o.createElement("div");
                                return r.setAttribute("id", "headlessui-portal-root"), o.body.appendChild(r)
                            });
                        return (0, r.useEffect)(() => {
                            null !== u && (null != o && o.body.contains(u) || null == o || o.body.appendChild(u))
                        }, [u, o]), (0, r.useEffect)(() => {
                            t || null !== n && i(n.current)
                        }, [n, i, t]), u
                    }(n),
                    [y] = (0, r.useState)(() => {
                        var e;
                        return f.O.isServer ? null : null != (e = null == v ? void 0 : v.createElement("div")) ? e : null
                    }),
                    E = (0, r.useContext)(h),
                    w = (0, a.H)();
                return (0, i.e)(() => {
                    !b || !y || b.contains(y) || (y.setAttribute("data-headlessui-portal", ""), b.appendChild(y))
                }, [b, y]), (0, i.e)(() => {
                    if (y && E) return E.register(y)
                }, [E, y]), (0, s.L)(() => {
                    var e;
                    b && y && (y instanceof Node && b.contains(y) && b.removeChild(y), b.childNodes.length <= 0 && (null == (e = b.parentElement) || e.removeChild(b)))
                }), w && b && y ? (0, o.createPortal)((0, u.sY)({
                    ourProps: {
                        ref: p
                    },
                    theirProps: e,
                    defaultTag: m,
                    name: "Portal"
                }), y) : null
            }), {
                Group: (0, u.yV)(function(e, t) {
                    let {
                        target: n,
                        ...o
                    } = e, i = {
                        ref: (0, c.T)(t)
                    };
                    return r.createElement(g.Provider, {
                        value: n
                    }, (0, u.sY)({
                        ourProps: i,
                        theirProps: o,
                        defaultTag: v,
                        name: "Popover.Group"
                    }))
                })
            })
        },
        65416: function(e, t, n) {
            "use strict";
            n.d(t, {
                r: function() {
                    return w
                }
            });
            var r = n(7653),
                o = n(52690),
                u = n(45636),
                i = n(86011),
                l = n(73366),
                a = n(34003),
                c = n(88572),
                s = n(94791);
            let d = (0, r.createContext)(null),
                f = Object.assign((0, o.yV)(function(e, t) {
                    let n = (0, u.M)(),
                        {
                            id: i = `headlessui-label-${n}`,
                            passive: l = !1,
                            ...s
                        } = e,
                        f = function e() {
                            let t = (0, r.useContext)(d);
                            if (null === t) {
                                let t = Error("You used a <Label /> component, but it is not inside a relevant parent.");
                                throw Error.captureStackTrace && Error.captureStackTrace(t, e), t
                            }
                            return t
                        }(),
                        p = (0, c.T)(t);
                    (0, a.e)(() => f.register(i), [i, f.register]);
                    let m = {
                        ref: p,
                        ...f.props,
                        id: i
                    };
                    return l && ("onClick" in m && (delete m.htmlFor, delete m.onClick), "onClick" in s && delete s.onClick), (0, o.sY)({
                        ourProps: m,
                        theirProps: s,
                        slot: f.slot || {},
                        defaultTag: "label",
                        name: f.name || "Label"
                    })
                }), {});
            var p = n(76794),
                m = n(86761),
                v = n(12754),
                g = n(47332),
                h = n(27115),
                b = n(37703);
            let y = (0, r.createContext)(null);
            y.displayName = "GroupContext";
            let E = r.Fragment,
                w = Object.assign((0, o.yV)(function(e, t) {
                    let n = (0, u.M)(),
                        {
                            id: a = `headlessui-switch-${n}`,
                            checked: d,
                            defaultChecked: f = !1,
                            onChange: p,
                            name: E,
                            value: w,
                            form: T,
                            ...P
                        } = e,
                        R = (0, r.useContext)(y),
                        S = (0, r.useRef)(null),
                        M = (0, c.T)(S, t, null === R ? null : R.setSwitch),
                        [x, I] = (0, h.q)(d, p, f),
                        C = (0, s.z)(() => null == I ? void 0 : I(!x)),
                        D = (0, s.z)(e => {
                            if ((0, l.P)(e.currentTarget)) return e.preventDefault();
                            e.preventDefault(), C()
                        }),
                        F = (0, s.z)(e => {
                            e.key === i.R.Space ? (e.preventDefault(), C()) : e.key === i.R.Enter && (0, g.g)(e.currentTarget)
                        }),
                        O = (0, s.z)(e => e.preventDefault()),
                        k = (0, r.useMemo)(() => ({
                            checked: x
                        }), [x]),
                        L = {
                            id: a,
                            ref: M,
                            role: "switch",
                            type: (0, m.f)(e, S),
                            tabIndex: 0,
                            "aria-checked": x,
                            "aria-labelledby": null == R ? void 0 : R.labelledby,
                            "aria-describedby": null == R ? void 0 : R.describedby,
                            onClick: D,
                            onKeyUp: F,
                            onKeyPress: O
                        },
                        N = (0, b.G)();
                    return (0, r.useEffect)(() => {
                        var e;
                        let t = null == (e = S.current) ? void 0 : e.closest("form");
                        t && void 0 !== f && N.addEventListener(t, "reset", () => {
                            I(f)
                        })
                    }, [S, I]), r.createElement(r.Fragment, null, null != E && x && r.createElement(v._, {
                        features: v.A.Hidden,
                        ...(0, o.oA)({
                            as: "input",
                            type: "checkbox",
                            hidden: !0,
                            readOnly: !0,
                            form: T,
                            checked: x,
                            name: E,
                            value: w
                        })
                    }), (0, o.sY)({
                        ourProps: L,
                        theirProps: P,
                        slot: k,
                        defaultTag: "button",
                        name: "Switch"
                    }))
                }), {
                    Group: function(e) {
                        var t;
                        let [n, u] = (0, r.useState)(null), [i, l] = function() {
                            let [e, t] = (0, r.useState)([]);
                            return [e.length > 0 ? e.join(" ") : void 0, (0, r.useMemo)(() => function(e) {
                                let n = (0, s.z)(e => (t(t => [...t, e]), () => t(t => {
                                        let n = t.slice(),
                                            r = n.indexOf(e);
                                        return -1 !== r && n.splice(r, 1), n
                                    }))),
                                    o = (0, r.useMemo)(() => ({
                                        register: n,
                                        slot: e.slot,
                                        name: e.name,
                                        props: e.props
                                    }), [n, e.slot, e.name, e.props]);
                                return r.createElement(d.Provider, {
                                    value: o
                                }, e.children)
                            }, [t])]
                        }(), [a, c] = (0, p.f)(), f = (0, r.useMemo)(() => ({
                            switch: n,
                            setSwitch: u,
                            labelledby: i,
                            describedby: a
                        }), [n, u, i, a]);
                        return r.createElement(c, {
                            name: "Switch.Description"
                        }, r.createElement(l, {
                            name: "Switch.Label",
                            props: {
                                htmlFor: null == (t = f.switch) ? void 0 : t.id,
                                onClick(e) {
                                    n && ("LABEL" === e.currentTarget.tagName && e.preventDefault(), n.click(), n.focus({
                                        preventScroll: !0
                                    }))
                                }
                            }
                        }, r.createElement(y.Provider, {
                            value: f
                        }, (0, o.sY)({
                            ourProps: {},
                            theirProps: e,
                            defaultTag: E,
                            name: "Switch.Group"
                        }))))
                    },
                    Label: f,
                    Description: p.d
                })
        },
        27115: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return u
                }
            });
            var r = n(7653),
                o = n(94791);

            function u(e, t, n) {
                let [u, i] = (0, r.useState)(n), l = void 0 !== e, a = (0, r.useRef)(l), c = (0, r.useRef)(!1), s = (0, r.useRef)(!1);
                return !l || a.current || c.current ? l || !a.current || s.current || (s.current = !0, a.current = l, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")) : (c.current = !0, a.current = l, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")), [l ? e : u, (0, o.z)(e => (l || i(e), null == t ? void 0 : t(e)))]
            }
        },
        92588: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return u
                }
            });
            var r = n(7653),
                o = n(57168);

            function u(e, t, n, u) {
                let i = (0, o.E)(n);
                (0, r.useEffect)(() => {
                    function n(e) {
                        i.current(e)
                    }
                    return (e = null != e ? e : window).addEventListener(t, n, u), () => e.removeEventListener(t, n, u)
                }, [e, t, u])
            }
        },
        73969: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return i
                }
            });
            var r = n(7653),
                o = n(49569),
                u = n(94791);

            function i(e) {
                let t = (0, u.z)(e),
                    n = (0, r.useRef)(!1);
                (0, r.useEffect)(() => (n.current = !1, () => {
                    n.current = !0, (0, o.Y)(() => {
                        n.current && t()
                    })
                }), [t])
            }
        },
        62818: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return a
                }
            });
            var r = n(7653),
                o = n(28705),
                u = n(57168);

            function i(e, t, n) {
                let o = (0, u.E)(t);
                (0, r.useEffect)(() => {
                    function t(e) {
                        o.current(e)
                    }
                    return document.addEventListener(e, t, n), () => document.removeEventListener(e, t, n)
                }, [e, n])
            }
            var l = n(50024);

            function a(e, t, n = !0) {
                let u = (0, r.useRef)(!1);

                function a(n, r) {
                    if (!u.current || n.defaultPrevented) return;
                    let i = r(n);
                    if (null !== i && i.getRootNode().contains(i) && i.isConnected) {
                        for (let t of function e(t) {
                                return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                            }(e)) {
                            if (null === t) continue;
                            let e = t instanceof HTMLElement ? t : t.current;
                            if (null != e && e.contains(i) || n.composed && n.composedPath().includes(e)) return
                        }
                        return (0, o.sP)(i, o.tJ.Loose) || -1 === i.tabIndex || n.preventDefault(), t(n, i)
                    }
                }(0, r.useEffect)(() => {
                    requestAnimationFrame(() => {
                        u.current = n
                    })
                }, [n]);
                let c = (0, r.useRef)(null);
                i("pointerdown", e => {
                    var t, n;
                    u.current && (c.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
                }, !0), i("mousedown", e => {
                    var t, n;
                    u.current && (c.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
                }, !0), i("click", e => {
                    c.current && (a(e, () => c.current), c.current = null)
                }, !0), i("touchend", e => a(e, () => e.target instanceof HTMLElement ? e.target : null), !0), (0, l.s)("blur", e => a(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
            }
        },
        99559: function(e, t, n) {
            "use strict";
            n.d(t, {
                i: function() {
                    return u
                }
            });
            var r = n(7653),
                o = n(90158);

            function u(...e) {
                return (0, r.useMemo)(() => (0, o.r)(...e), [...e])
            }
        },
        9189: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return a
                },
                v: function() {
                    return l
                }
            });
            var r = n(7653),
                o = n(12754),
                u = n(94791),
                i = n(99559);

            function l({
                defaultContainers: e = [],
                portals: t,
                mainTreeNodeRef: n
            } = {}) {
                var l;
                let a = (0, r.useRef)(null != (l = null == n ? void 0 : n.current) ? l : null),
                    c = (0, i.i)(a),
                    s = (0, u.z)(() => {
                        var n;
                        let r = [];
                        for (let t of e) null !== t && (t instanceof HTMLElement ? r.push(t) : "current" in t && t.current instanceof HTMLElement && r.push(t.current));
                        if (null != t && t.current)
                            for (let e of t.current) r.push(e);
                        for (let e of null != (n = null == c ? void 0 : c.querySelectorAll("html > *, body > *")) ? n : []) e !== document.body && e !== document.head && e instanceof HTMLElement && "headlessui-portal-root" !== e.id && (e.contains(a.current) || r.some(t => e.contains(t)) || r.push(e));
                        return r
                    });
                return {
                    resolveContainers: s,
                    contains: (0, u.z)(e => s().some(t => t.contains(e))),
                    mainTreeNodeRef: a,
                    MainTreeNode: (0, r.useMemo)(() => function() {
                        return null != n ? null : r.createElement(o._, {
                            features: o.A.Hidden,
                            ref: a
                        })
                    }, [a, n])
                }
            }

            function a() {
                let e = (0, r.useRef)(null);
                return {
                    mainTreeNodeRef: e,
                    MainTreeNode: (0, r.useMemo)(() => function() {
                        return r.createElement(o._, {
                            features: o.A.Hidden,
                            ref: e
                        })
                    }, [e])
                }
            }
        },
        99116: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return i
                },
                l: function() {
                    return l
                }
            });
            var r, o = n(7653),
                u = n(50024),
                i = ((r = i || {})[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r);

            function l() {
                let e = (0, o.useRef)(0);
                return (0, u.s)("keydown", t => {
                    "Tab" === t.key && (e.current = t.shiftKey ? 1 : 0)
                }, !0), e
            }
        },
        19844: function(e, t, n) {
            "use strict";
            n.d(t, {
                g: function() {
                    return u
                }
            });
            var r = n(7653);

            function o(e) {
                return [e.screenX, e.screenY]
            }

            function u() {
                let e = (0, r.useRef)([-1, -1]);
                return {
                    wasMoved(t) {
                        let n = o(t);
                        return (e.current[0] !== n[0] || e.current[1] !== n[1]) && (e.current = n, !0)
                    },
                    update(t) {
                        e.current = o(t)
                    }
                }
            }
        },
        5476: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return i
                }
            });
            var r = n(7653),
                o = n(34003),
                u = n(90158);

            function i({
                container: e,
                accept: t,
                walk: n,
                enabled: i = !0
            }) {
                let l = (0, r.useRef)(t),
                    a = (0, r.useRef)(n);
                (0, r.useEffect)(() => {
                    l.current = t, a.current = n
                }, [t, n]), (0, o.e)(() => {
                    if (!e || !i) return;
                    let t = (0, u.r)(e);
                    if (!t) return;
                    let n = l.current,
                        r = a.current,
                        o = Object.assign(e => n(e), {
                            acceptNode: n
                        }),
                        c = t.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, o, !1);
                    for (; c.nextNode();) r(c.currentNode)
                }, [e, i, l, a])
            }
        },
        99982: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return u
                }
            });
            var r = n(7653),
                o = n(94791);

            function u(e, t) {
                let n = (0, r.useRef)([]),
                    u = (0, o.z)(e);
                (0, r.useEffect)(() => {
                    let e = [...n.current];
                    for (let [r, o] of t.entries())
                        if (n.current[r] !== o) {
                            let r = u(t, e);
                            return n.current = t, r
                        }
                }, [u, ...t])
            }
        },
        50024: function(e, t, n) {
            "use strict";
            n.d(t, {
                s: function() {
                    return u
                }
            });
            var r = n(7653),
                o = n(57168);

            function u(e, t, n) {
                let u = (0, o.E)(t);
                (0, r.useEffect)(() => {
                    function t(e) {
                        u.current(e)
                    }
                    return window.addEventListener(e, t, n), () => window.removeEventListener(e, t, n)
                }, [e, n])
            }
        },
        12754: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return u
                },
                _: function() {
                    return i
                }
            });
            var r, o = n(52690),
                u = ((r = u || {})[r.None = 1] = "None", r[r.Focusable = 2] = "Focusable", r[r.Hidden = 4] = "Hidden", r);
            let i = (0, o.yV)(function(e, t) {
                let {
                    features: n = 1,
                    ...r
                } = e, u = {
                    ref: t,
                    "aria-hidden": (2 & n) == 2 || void 0,
                    style: {
                        position: "fixed",
                        top: 1,
                        left: 1,
                        width: 1,
                        height: 0,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        borderWidth: "0",
                        ...(4 & n) == 4 && (2 & n) != 2 && {
                            display: "none"
                        }
                    }
                };
                return (0, o.sY)({
                    ourProps: u,
                    theirProps: r,
                    slot: {},
                    defaultTag: "div",
                    name: "Hidden"
                })
            })
        },
        65564: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return i
                },
                n: function() {
                    return u
                }
            });
            var r = n(7653);
            let o = (0, r.createContext)(!1);

            function u() {
                return (0, r.useContext)(o)
            }

            function i(e) {
                return r.createElement(o.Provider, {
                    value: e.force
                }, e.children)
            }
        },
        99087: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return o
                },
                d: function() {
                    return u
                }
            });
            var r, o = ((r = o || {})[r.First = 0] = "First", r[r.Previous = 1] = "Previous", r[r.Next = 2] = "Next", r[r.Last = 3] = "Last", r[r.Specific = 4] = "Specific", r[r.Nothing = 5] = "Nothing", r);

            function u(e, t) {
                let n = t.resolveItems();
                if (n.length <= 0) return null;
                let r = t.resolveActiveIndex(),
                    o = null != r ? r : -1,
                    u = (() => {
                        switch (e.focus) {
                            case 0:
                                return n.findIndex(e => !t.resolveDisabled(e));
                            case 1:
                                {
                                    let e = n.slice().reverse().findIndex((e, n, r) => (-1 === o || !(r.length - n - 1 >= o)) && !t.resolveDisabled(e));
                                    return -1 === e ? e : n.length - 1 - e
                                }
                            case 2:
                                return n.findIndex((e, n) => !(n <= o) && !t.resolveDisabled(e));
                            case 3:
                                {
                                    let e = n.slice().reverse().findIndex(e => !t.resolveDisabled(e));
                                    return -1 === e ? e : n.length - 1 - e
                                }
                            case 4:
                                return n.findIndex(n => t.resolveId(n) === e.id);
                            case 5:
                                return null;
                            default:
                                ! function(e) {
                                    throw Error("Unexpected object: " + e)
                                }(e)
                        }
                    })();
                return -1 === u ? r : u
            }
        },
        28705: function(e, t, n) {
            "use strict";
            n.d(t, {
                C5: function() {
                    return E
                },
                EO: function() {
                    return T
                },
                GO: function() {
                    return v
                },
                TO: function() {
                    return f
                },
                fE: function() {
                    return p
                },
                jA: function() {
                    return P
                },
                sP: function() {
                    return h
                },
                tJ: function() {
                    return g
                },
                wI: function() {
                    return b
                },
                z2: function() {
                    return w
                }
            });
            var r, o, u, i, l, a = n(93561),
                c = n(26788),
                s = n(90158);
            let d = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
            var f = ((r = f || {})[r.First = 1] = "First", r[r.Previous = 2] = "Previous", r[r.Next = 4] = "Next", r[r.Last = 8] = "Last", r[r.WrapAround = 16] = "WrapAround", r[r.NoScroll = 32] = "NoScroll", r),
                p = ((o = p || {})[o.Error = 0] = "Error", o[o.Overflow = 1] = "Overflow", o[o.Success = 2] = "Success", o[o.Underflow = 3] = "Underflow", o),
                m = ((u = m || {})[u.Previous = -1] = "Previous", u[u.Next = 1] = "Next", u);

            function v(e = document.body) {
                return null == e ? [] : Array.from(e.querySelectorAll(d)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
            }
            var g = ((i = g || {})[i.Strict = 0] = "Strict", i[i.Loose = 1] = "Loose", i);

            function h(e, t = 0) {
                var n;
                return e !== (null == (n = (0, s.r)(e)) ? void 0 : n.body) && (0, c.E)(t, {
                    0: () => e.matches(d),
                    1() {
                        let t = e;
                        for (; null !== t;) {
                            if (t.matches(d)) return !0;
                            t = t.parentElement
                        }
                        return !1
                    }
                })
            }

            function b(e) {
                let t = (0, s.r)(e);
                (0, a.k)().nextFrame(() => {
                    t && !h(t.activeElement, 0) && E(e)
                })
            }
            var y = ((l = y || {})[l.Keyboard = 0] = "Keyboard", l[l.Mouse = 1] = "Mouse", l);

            function E(e) {
                null == e || e.focus({
                    preventScroll: !0
                })
            }

            function w(e, t = e => e) {
                return e.slice().sort((e, n) => {
                    let r = t(e),
                        o = t(n);
                    if (null === r || null === o) return 0;
                    let u = r.compareDocumentPosition(o);
                    return u & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : u & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                })
            }

            function T(e, t) {
                return P(v(), t, {
                    relativeTo: e
                })
            }

            function P(e, t, {
                sorted: n = !0,
                relativeTo: r = null,
                skipElements: o = []
            } = {}) {
                var u, i, l;
                let a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
                    c = Array.isArray(e) ? n ? w(e) : e : v(e);
                o.length > 0 && c.length > 1 && (c = c.filter(e => !o.includes(e))), r = null != r ? r : a.activeElement;
                let s = (() => {
                        if (5 & t) return 1;
                        if (10 & t) return -1;
                        throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    d = (() => {
                        if (1 & t) return 0;
                        if (2 & t) return Math.max(0, c.indexOf(r)) - 1;
                        if (4 & t) return Math.max(0, c.indexOf(r)) + 1;
                        if (8 & t) return c.length - 1;
                        throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    f = 32 & t ? {
                        preventScroll: !0
                    } : {},
                    p = 0,
                    m = c.length,
                    g;
                do {
                    if (p >= m || p + m <= 0) return 0;
                    let e = d + p;
                    if (16 & t) e = (e + m) % m;
                    else {
                        if (e < 0) return 3;
                        if (e >= m) return 1
                    }
                    null == (g = c[e]) || g.focus(f), p += s
                } while (g !== a.activeElement);
                return 6 & t && null != (l = null == (i = null == (u = g) ? void 0 : u.matches) ? void 0 : i.call(u, "textarea,input")) && l && g.select(), 2
            }
            "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("keydown", e => {
                e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
            }, !0), document.addEventListener("click", e => {
                1 === e.detail ? delete document.documentElement.dataset.headlessuiFocusVisible : 0 === e.detail && (document.documentElement.dataset.headlessuiFocusVisible = "")
            }, !0))
        },
        47332: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return e ? e + "[" + t + "]" : t
            }

            function o(e) {
                var t, n;
                let r = null != (t = null == e ? void 0 : e.form) ? t : e.closest("form");
                if (r) {
                    for (let t of r.elements)
                        if (t !== e && ("INPUT" === t.tagName && "submit" === t.type || "BUTTON" === t.tagName && "submit" === t.type || "INPUT" === t.nodeName && "image" === t.type)) {
                            t.click();
                            return
                        }
                    null == (n = r.requestSubmit) || n.call(r)
                }
            }
            n.d(t, {
                g: function() {
                    return o
                },
                t: function() {
                    return function e(t = {}, n = null, o = []) {
                        for (let [u, i] of Object.entries(t)) ! function t(n, o, u) {
                            if (Array.isArray(u))
                                for (let [e, i] of u.entries()) t(n, r(o, e.toString()), i);
                            else u instanceof Date ? n.push([o, u.toISOString()]) : "boolean" == typeof u ? n.push([o, u ? "1" : "0"]) : "string" == typeof u ? n.push([o, u]) : "number" == typeof u ? n.push([o, `${u}`]) : null == u ? n.push([o, ""]) : e(u, o, n)
                        }(o, r(n, u), i);
                        return o
                    }
                }
            })
        },
        96692: function(e, t, n) {
            "use strict";

            function r() {
                return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
            }

            function o() {
                return r() || /Android/gi.test(window.navigator.userAgent)
            }
            n.d(t, {
                gn: function() {
                    return r
                },
                tq: function() {
                    return o
                }
            })
        }
    }
]);
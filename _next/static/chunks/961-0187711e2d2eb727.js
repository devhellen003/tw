"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [961], {
        84961: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return Y
                }
            });
            var o, r, i, u, l = n(7653),
                a = n(34003),
                c = n(57168);

            function s(e, t) {
                let [n, o] = (0, l.useState)(e), r = (0, c.E)(e);
                return (0, a.e)(() => o(r.current), [r, o, ...t]), n
            }
            var d = n(37703),
                f = n(94791),
                p = n(45636),
                b = n(62818),
                v = n(86761),
                m = n(88572),
                x = n(5476),
                g = n(99087),
                R = n(93561),
                h = n(52690),
                O = n(73366),
                E = n(26788),
                I = n(47332),
                T = n(28705),
                S = n(12754),
                C = n(82507),
                y = n(86011),
                P = n(27115),
                w = n(99982),
                N = n(19844),
                M = n(96692),
                F = n(99559),
                A = ((o = A || {})[o.Open = 0] = "Open", o[o.Closed = 1] = "Closed", o),
                L = ((r = L || {})[r.Single = 0] = "Single", r[r.Multi = 1] = "Multi", r),
                D = ((i = D || {})[i.Pointer = 0] = "Pointer", i[i.Other = 1] = "Other", i),
                k = ((u = k || {})[u.OpenCombobox = 0] = "OpenCombobox", u[u.CloseCombobox = 1] = "CloseCombobox", u[u.GoToOption = 2] = "GoToOption", u[u.RegisterOption = 3] = "RegisterOption", u[u.UnregisterOption = 4] = "UnregisterOption", u[u.RegisterLabel = 5] = "RegisterLabel", u);

            function z(e, t = e => e) {
                let n = null !== e.activeOptionIndex ? e.options[e.activeOptionIndex] : null,
                    o = (0, T.z2)(t(e.options.slice()), e => e.dataRef.current.domRef.current),
                    r = n ? o.indexOf(n) : null;
                return -1 === r && (r = null), {
                    options: o,
                    activeOptionIndex: r
                }
            }
            let _ = {
                    1(e) {
                        var t;
                        return null != (t = e.dataRef.current) && t.disabled || 1 === e.comboboxState ? e : { ...e,
                            activeOptionIndex: null,
                            comboboxState: 1
                        }
                    },
                    0(e) {
                        var t;
                        if (null != (t = e.dataRef.current) && t.disabled || 0 === e.comboboxState) return e;
                        let n = e.activeOptionIndex;
                        if (e.dataRef.current) {
                            let {
                                isSelected: t
                            } = e.dataRef.current, o = e.options.findIndex(e => t(e.dataRef.current.value)); - 1 !== o && (n = o)
                        }
                        return { ...e,
                            comboboxState: 0,
                            activeOptionIndex: n
                        }
                    },
                    2(e, t) {
                        var n, o, r, i;
                        if (null != (n = e.dataRef.current) && n.disabled || null != (o = e.dataRef.current) && o.optionsRef.current && !(null != (r = e.dataRef.current) && r.optionsPropsRef.current.static) && 1 === e.comboboxState) return e;
                        let u = z(e);
                        if (null === u.activeOptionIndex) {
                            let e = u.options.findIndex(e => !e.dataRef.current.disabled); - 1 !== e && (u.activeOptionIndex = e)
                        }
                        let l = (0, g.d)(t, {
                            resolveItems: () => u.options,
                            resolveActiveIndex: () => u.activeOptionIndex,
                            resolveId: e => e.id,
                            resolveDisabled: e => e.dataRef.current.disabled
                        });
                        return { ...e,
                            ...u,
                            activeOptionIndex: l,
                            activationTrigger: null != (i = t.trigger) ? i : 1
                        }
                    },
                    3: (e, t) => {
                        var n, o;
                        let r = {
                                id: t.id,
                                dataRef: t.dataRef
                            },
                            i = z(e, e => [...e, r]);
                        null === e.activeOptionIndex && null != (n = e.dataRef.current) && n.isSelected(t.dataRef.current.value) && (i.activeOptionIndex = i.options.indexOf(r));
                        let u = { ...e,
                            ...i,
                            activationTrigger: 1
                        };
                        return null != (o = e.dataRef.current) && o.__demoMode && void 0 === e.dataRef.current.value && (u.activeOptionIndex = 0), u
                    },
                    4: (e, t) => {
                        let n = z(e, e => {
                            let n = e.findIndex(e => e.id === t.id);
                            return -1 !== n && e.splice(n, 1), e
                        });
                        return { ...e,
                            ...n,
                            activationTrigger: 1
                        }
                    },
                    5: (e, t) => ({ ...e,
                        labelId: t.id
                    })
                },
                V = (0, l.createContext)(null);

            function q(e) {
                let t = (0, l.useContext)(V);
                if (null === t) {
                    let t = Error(`<${e} /> is missing a parent <Combobox /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, q), t
                }
                return t
            }
            V.displayName = "ComboboxActionsContext";
            let U = (0, l.createContext)(null);

            function G(e) {
                let t = (0, l.useContext)(U);
                if (null === t) {
                    let t = Error(`<${e} /> is missing a parent <Combobox /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, G), t
                }
                return t
            }

            function K(e, t) {
                return (0, E.E)(t.type, _, e, t)
            }
            U.displayName = "ComboboxDataContext";
            let H = l.Fragment,
                $ = h.AN.RenderStrategy | h.AN.Static,
                j = (0, h.yV)(function(e, t) {
                    let {
                        value: n,
                        defaultValue: o,
                        onChange: r,
                        form: i,
                        name: u,
                        by: c = (e, t) => e === t,
                        disabled: s = !1,
                        __demoMode: p = !1,
                        nullable: v = !1,
                        multiple: m = !1,
                        ...x
                    } = e, [R = m ? [] : void 0, O] = (0, P.q)(n, r, o), [T, y] = (0, l.useReducer)(K, {
                        dataRef: (0, l.createRef)(),
                        comboboxState: p ? 0 : 1,
                        options: [],
                        activeOptionIndex: null,
                        activationTrigger: 1,
                        labelId: null
                    }), w = (0, l.useRef)(!1), N = (0, l.useRef)({
                        static: !1,
                        hold: !1
                    }), M = (0, l.useRef)(null), F = (0, l.useRef)(null), A = (0, l.useRef)(null), L = (0, l.useRef)(null), D = (0, f.z)("string" == typeof c ? (e, t) => (null == e ? void 0 : e[c]) === (null == t ? void 0 : t[c]) : c), k = (0, l.useCallback)(e => (0, E.E)(z.mode, {
                        1: () => R.some(t => D(t, e)),
                        0: () => D(R, e)
                    }), [R]), z = (0, l.useMemo)(() => ({ ...T,
                        optionsPropsRef: N,
                        labelRef: M,
                        inputRef: F,
                        buttonRef: A,
                        optionsRef: L,
                        value: R,
                        defaultValue: o,
                        disabled: s,
                        mode: m ? 1 : 0,
                        get activeOptionIndex() {
                            if (w.current && null === T.activeOptionIndex && T.options.length > 0) {
                                let e = T.options.findIndex(e => !e.dataRef.current.disabled);
                                if (-1 !== e) return e
                            }
                            return T.activeOptionIndex
                        },
                        compare: D,
                        isSelected: k,
                        nullable: v,
                        __demoMode: p
                    }), [R, o, s, m, v, p, T]), _ = (0, l.useRef)(null !== z.activeOptionIndex ? z.options[z.activeOptionIndex] : null);
                    (0, l.useEffect)(() => {
                        let e = null !== z.activeOptionIndex ? z.options[z.activeOptionIndex] : null;
                        _.current !== e && (_.current = e)
                    }), (0, a.e)(() => {
                        T.dataRef.current = z
                    }, [z]), (0, b.O)([z.buttonRef, z.inputRef, z.optionsRef], () => X.closeCombobox(), 0 === z.comboboxState);
                    let q = (0, l.useMemo)(() => ({
                            open: 0 === z.comboboxState,
                            disabled: s,
                            activeIndex: z.activeOptionIndex,
                            activeOption: null === z.activeOptionIndex ? null : z.options[z.activeOptionIndex].dataRef.current.value,
                            value: R
                        }), [z, s, R]),
                        G = (0, f.z)(e => {
                            let t = z.options.find(t => t.id === e);
                            t && Z(t.dataRef.current.value)
                        }),
                        $ = (0, f.z)(() => {
                            if (null !== z.activeOptionIndex) {
                                let {
                                    dataRef: e,
                                    id: t
                                } = z.options[z.activeOptionIndex];
                                Z(e.current.value), X.goToOption(g.T.Specific, t)
                            }
                        }),
                        j = (0, f.z)(() => {
                            y({
                                type: 0
                            }), w.current = !0
                        }),
                        B = (0, f.z)(() => {
                            y({
                                type: 1
                            }), w.current = !1
                        }),
                        Y = (0, f.z)((e, t, n) => (w.current = !1, e === g.T.Specific ? y({
                            type: 2,
                            focus: g.T.Specific,
                            id: t,
                            trigger: n
                        }) : y({
                            type: 2,
                            focus: e,
                            trigger: n
                        }))),
                        W = (0, f.z)((e, t) => (y({
                            type: 3,
                            id: e,
                            dataRef: t
                        }), () => {
                            var t;
                            (null == (t = _.current) ? void 0 : t.id) === e && (w.current = !0), y({
                                type: 4,
                                id: e
                            })
                        })),
                        J = (0, f.z)(e => (y({
                            type: 5,
                            id: e
                        }), () => y({
                            type: 5,
                            id: null
                        }))),
                        Z = (0, f.z)(e => (0, E.E)(z.mode, {
                            0: () => null == O ? void 0 : O(e),
                            1() {
                                let t = z.value.slice(),
                                    n = t.findIndex(t => D(t, e));
                                return -1 === n ? t.push(e) : t.splice(n, 1), null == O ? void 0 : O(t)
                            }
                        })),
                        X = (0, l.useMemo)(() => ({
                            onChange: Z,
                            registerOption: W,
                            registerLabel: J,
                            goToOption: Y,
                            closeCombobox: B,
                            openCombobox: j,
                            selectActiveOption: $,
                            selectOption: G
                        }), []),
                        Q = (0, l.useRef)(null),
                        ee = (0, d.G)();
                    return (0, l.useEffect)(() => {
                        Q.current && void 0 !== o && ee.addEventListener(Q.current, "reset", () => {
                            null == O || O(o)
                        })
                    }, [Q, O]), l.createElement(V.Provider, {
                        value: X
                    }, l.createElement(U.Provider, {
                        value: z
                    }, l.createElement(C.up, {
                        value: (0, E.E)(z.comboboxState, {
                            0: C.ZM.Open,
                            1: C.ZM.Closed
                        })
                    }, null != u && null != R && (0, I.t)({
                        [u]: R
                    }).map(([e, t], n) => l.createElement(S._, {
                        features: S.A.Hidden,
                        ref: 0 === n ? e => {
                            var t;
                            Q.current = null != (t = null == e ? void 0 : e.closest("form")) ? t : null
                        } : void 0,
                        ...(0, h.oA)({
                            key: e,
                            as: "input",
                            type: "hidden",
                            hidden: !0,
                            readOnly: !0,
                            form: i,
                            name: e,
                            value: t
                        })
                    })), (0, h.sY)({
                        ourProps: null === t ? {} : {
                            ref: t
                        },
                        theirProps: x,
                        slot: q,
                        defaultTag: H,
                        name: "Combobox"
                    }))))
                }),
                B = (0, h.yV)(function(e, t) {
                    var n;
                    let o = G("Combobox.Button"),
                        r = q("Combobox.Button"),
                        i = (0, m.T)(o.buttonRef, t),
                        u = (0, p.M)(),
                        {
                            id: a = `headlessui-combobox-button-${u}`,
                            ...c
                        } = e,
                        b = (0, d.G)(),
                        x = (0, f.z)(e => {
                            switch (e.key) {
                                case y.R.ArrowDown:
                                    return e.preventDefault(), e.stopPropagation(), 1 === o.comboboxState && r.openCombobox(), b.nextFrame(() => {
                                        var e;
                                        return null == (e = o.inputRef.current) ? void 0 : e.focus({
                                            preventScroll: !0
                                        })
                                    });
                                case y.R.ArrowUp:
                                    return e.preventDefault(), e.stopPropagation(), 1 === o.comboboxState && (r.openCombobox(), b.nextFrame(() => {
                                        o.value || r.goToOption(g.T.Last)
                                    })), b.nextFrame(() => {
                                        var e;
                                        return null == (e = o.inputRef.current) ? void 0 : e.focus({
                                            preventScroll: !0
                                        })
                                    });
                                case y.R.Escape:
                                    return 0 !== o.comboboxState ? void 0 : (e.preventDefault(), o.optionsRef.current && !o.optionsPropsRef.current.static && e.stopPropagation(), r.closeCombobox(), b.nextFrame(() => {
                                        var e;
                                        return null == (e = o.inputRef.current) ? void 0 : e.focus({
                                            preventScroll: !0
                                        })
                                    }));
                                default:
                                    return
                            }
                        }),
                        R = (0, f.z)(e => {
                            if ((0, O.P)(e.currentTarget)) return e.preventDefault();
                            0 === o.comboboxState ? r.closeCombobox() : (e.preventDefault(), r.openCombobox()), b.nextFrame(() => {
                                var e;
                                return null == (e = o.inputRef.current) ? void 0 : e.focus({
                                    preventScroll: !0
                                })
                            })
                        }),
                        E = s(() => {
                            if (o.labelId) return [o.labelId, a].join(" ")
                        }, [o.labelId, a]),
                        I = (0, l.useMemo)(() => ({
                            open: 0 === o.comboboxState,
                            disabled: o.disabled,
                            value: o.value
                        }), [o]),
                        T = {
                            ref: i,
                            id: a,
                            type: (0, v.f)(e, o.buttonRef),
                            tabIndex: -1,
                            "aria-haspopup": "listbox",
                            "aria-controls": null == (n = o.optionsRef.current) ? void 0 : n.id,
                            "aria-expanded": 0 === o.comboboxState,
                            "aria-labelledby": E,
                            disabled: o.disabled,
                            onClick: R,
                            onKeyDown: x
                        };
                    return (0, h.sY)({
                        ourProps: T,
                        theirProps: c,
                        slot: I,
                        defaultTag: "button",
                        name: "Combobox.Button"
                    })
                }),
                Y = Object.assign(j, {
                    Input: (0, h.yV)(function(e, t) {
                        var n, o, r, i, u;
                        let a = (0, p.M)(),
                            {
                                id: c = `headlessui-combobox-input-${a}`,
                                onChange: b,
                                displayValue: v,
                                type: x = "text",
                                ...R
                            } = e,
                            O = G("Combobox.Input"),
                            I = q("Combobox.Input"),
                            T = (0, m.T)(O.inputRef, t),
                            S = (0, F.i)(O.inputRef),
                            C = (0, l.useRef)(!1),
                            P = (0, d.G)(),
                            N = (0, f.z)(() => {
                                I.onChange(null), O.optionsRef.current && (O.optionsRef.current.scrollTop = 0), I.goToOption(g.T.Nothing)
                            }),
                            M = "function" == typeof v && void 0 !== O.value ? null != (u = v(O.value)) ? u : "" : "string" == typeof O.value ? O.value : "";
                        (0, w.q)(([e, t], [n, o]) => {
                            if (C.current) return;
                            let r = O.inputRef.current;
                            r && ((0 === o && 1 === t || e !== n) && (r.value = e), requestAnimationFrame(() => {
                                if (C.current || !r || (null == S ? void 0 : S.activeElement) !== r) return;
                                let {
                                    selectionStart: e,
                                    selectionEnd: t
                                } = r;
                                0 === Math.abs((null != t ? t : 0) - (null != e ? e : 0)) && 0 === e && r.setSelectionRange(r.value.length, r.value.length)
                            }))
                        }, [M, O.comboboxState, S]), (0, w.q)(([e], [t]) => {
                            if (0 === e && 1 === t) {
                                if (C.current) return;
                                let e = O.inputRef.current;
                                if (!e) return;
                                let t = e.value,
                                    {
                                        selectionStart: n,
                                        selectionEnd: o,
                                        selectionDirection: r
                                    } = e;
                                e.value = "", e.value = t, null !== r ? e.setSelectionRange(n, o, r) : e.setSelectionRange(n, o)
                            }
                        }, [O.comboboxState]);
                        let A = (0, l.useRef)(!1),
                            L = (0, f.z)(() => {
                                A.current = !0
                            }),
                            D = (0, f.z)(() => {
                                P.nextFrame(() => {
                                    A.current = !1
                                })
                            }),
                            k = (0, f.z)(e => {
                                switch (C.current = !0, e.key) {
                                    case y.R.Enter:
                                        if (C.current = !1, 0 !== O.comboboxState || A.current) return;
                                        if (e.preventDefault(), e.stopPropagation(), null === O.activeOptionIndex) {
                                            I.closeCombobox();
                                            return
                                        }
                                        I.selectActiveOption(), 0 === O.mode && I.closeCombobox();
                                        break;
                                    case y.R.ArrowDown:
                                        return C.current = !1, e.preventDefault(), e.stopPropagation(), (0, E.E)(O.comboboxState, {
                                            0: () => {
                                                I.goToOption(g.T.Next)
                                            },
                                            1: () => {
                                                I.openCombobox()
                                            }
                                        });
                                    case y.R.ArrowUp:
                                        return C.current = !1, e.preventDefault(), e.stopPropagation(), (0, E.E)(O.comboboxState, {
                                            0: () => {
                                                I.goToOption(g.T.Previous)
                                            },
                                            1: () => {
                                                I.openCombobox(), P.nextFrame(() => {
                                                    O.value || I.goToOption(g.T.Last)
                                                })
                                            }
                                        });
                                    case y.R.Home:
                                        if (e.shiftKey) break;
                                        return C.current = !1, e.preventDefault(), e.stopPropagation(), I.goToOption(g.T.First);
                                    case y.R.PageUp:
                                        return C.current = !1, e.preventDefault(), e.stopPropagation(), I.goToOption(g.T.First);
                                    case y.R.End:
                                        if (e.shiftKey) break;
                                        return C.current = !1, e.preventDefault(), e.stopPropagation(), I.goToOption(g.T.Last);
                                    case y.R.PageDown:
                                        return C.current = !1, e.preventDefault(), e.stopPropagation(), I.goToOption(g.T.Last);
                                    case y.R.Escape:
                                        return C.current = !1, 0 !== O.comboboxState ? void 0 : (e.preventDefault(), O.optionsRef.current && !O.optionsPropsRef.current.static && e.stopPropagation(), O.nullable && 0 === O.mode && null === O.value && N(), I.closeCombobox());
                                    case y.R.Tab:
                                        if (C.current = !1, 0 !== O.comboboxState) return;
                                        0 === O.mode && I.selectActiveOption(), I.closeCombobox()
                                }
                            }),
                            z = (0, f.z)(e => {
                                null == b || b(e), O.nullable && 0 === O.mode && "" === e.target.value && N(), I.openCombobox()
                            }),
                            _ = (0, f.z)(() => {
                                C.current = !1
                            }),
                            V = s(() => {
                                if (O.labelId) return [O.labelId].join(" ")
                            }, [O.labelId]),
                            U = (0, l.useMemo)(() => ({
                                open: 0 === O.comboboxState,
                                disabled: O.disabled
                            }), [O]),
                            K = {
                                ref: T,
                                id: c,
                                role: "combobox",
                                type: x,
                                "aria-controls": null == (n = O.optionsRef.current) ? void 0 : n.id,
                                "aria-expanded": 0 === O.comboboxState,
                                "aria-activedescendant": null === O.activeOptionIndex || null == (o = O.options[O.activeOptionIndex]) ? void 0 : o.id,
                                "aria-labelledby": V,
                                "aria-autocomplete": "list",
                                defaultValue: null != (i = null != (r = e.defaultValue) ? r : void 0 !== O.defaultValue ? null == v ? void 0 : v(O.defaultValue) : null) ? i : O.defaultValue,
                                disabled: O.disabled,
                                onCompositionStart: L,
                                onCompositionEnd: D,
                                onKeyDown: k,
                                onChange: z,
                                onBlur: _
                            };
                        return (0, h.sY)({
                            ourProps: K,
                            theirProps: R,
                            slot: U,
                            defaultTag: "input",
                            name: "Combobox.Input"
                        })
                    }),
                    Button: B,
                    Label: (0, h.yV)(function(e, t) {
                        let n = (0, p.M)(),
                            {
                                id: o = `headlessui-combobox-label-${n}`,
                                ...r
                            } = e,
                            i = G("Combobox.Label"),
                            u = q("Combobox.Label"),
                            c = (0, m.T)(i.labelRef, t);
                        (0, a.e)(() => u.registerLabel(o), [o]);
                        let s = (0, f.z)(() => {
                                var e;
                                return null == (e = i.inputRef.current) ? void 0 : e.focus({
                                    preventScroll: !0
                                })
                            }),
                            d = (0, l.useMemo)(() => ({
                                open: 0 === i.comboboxState,
                                disabled: i.disabled
                            }), [i]);
                        return (0, h.sY)({
                            ourProps: {
                                ref: c,
                                id: o,
                                onClick: s
                            },
                            theirProps: r,
                            slot: d,
                            defaultTag: "label",
                            name: "Combobox.Label"
                        })
                    }),
                    Options: (0, h.yV)(function(e, t) {
                        let n = (0, p.M)(),
                            {
                                id: o = `headlessui-combobox-options-${n}`,
                                hold: r = !1,
                                ...i
                            } = e,
                            u = G("Combobox.Options"),
                            c = (0, m.T)(u.optionsRef, t),
                            d = (0, C.oJ)(),
                            f = null !== d ? (d & C.ZM.Open) === C.ZM.Open : 0 === u.comboboxState;
                        (0, a.e)(() => {
                            var t;
                            u.optionsPropsRef.current.static = null != (t = e.static) && t
                        }, [u.optionsPropsRef, e.static]), (0, a.e)(() => {
                            u.optionsPropsRef.current.hold = r
                        }, [u.optionsPropsRef, r]), (0, x.B)({
                            container: u.optionsRef.current,
                            enabled: 0 === u.comboboxState,
                            accept: e => "option" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                            walk(e) {
                                e.setAttribute("role", "none")
                            }
                        });
                        let b = s(() => {
                                var e, t;
                                return null != (t = u.labelId) ? t : null == (e = u.buttonRef.current) ? void 0 : e.id
                            }, [u.labelId, u.buttonRef.current]),
                            v = (0, l.useMemo)(() => ({
                                open: 0 === u.comboboxState
                            }), [u]),
                            g = {
                                "aria-labelledby": b,
                                role: "listbox",
                                "aria-multiselectable": 1 === u.mode || void 0,
                                id: o,
                                ref: c
                            };
                        return (0, h.sY)({
                            ourProps: g,
                            theirProps: i,
                            slot: v,
                            defaultTag: "ul",
                            features: $,
                            visible: f,
                            name: "Combobox.Options"
                        })
                    }),
                    Option: (0, h.yV)(function(e, t) {
                        var n, o;
                        let r = (0, p.M)(),
                            {
                                id: i = `headlessui-combobox-option-${r}`,
                                disabled: u = !1,
                                value: s,
                                ...d
                            } = e,
                            b = G("Combobox.Option"),
                            v = q("Combobox.Option"),
                            x = null !== b.activeOptionIndex && b.options[b.activeOptionIndex].id === i,
                            O = b.isSelected(s),
                            E = (0, l.useRef)(null),
                            I = (0, c.E)({
                                disabled: u,
                                value: s,
                                domRef: E,
                                textValue: null == (o = null == (n = E.current) ? void 0 : n.textContent) ? void 0 : o.toLowerCase()
                            }),
                            T = (0, m.T)(t, E),
                            S = (0, f.z)(() => v.selectOption(i));
                        (0, a.e)(() => v.registerOption(i, I), [I, i]);
                        let C = (0, l.useRef)(!b.__demoMode);
                        (0, a.e)(() => {
                            if (!b.__demoMode) return;
                            let e = (0, R.k)();
                            return e.requestAnimationFrame(() => {
                                C.current = !0
                            }), e.dispose
                        }, []), (0, a.e)(() => {
                            if (0 !== b.comboboxState || !x || !C.current || 0 === b.activationTrigger) return;
                            let e = (0, R.k)();
                            return e.requestAnimationFrame(() => {
                                var e, t;
                                null == (t = null == (e = E.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                                    block: "nearest"
                                })
                            }), e.dispose
                        }, [E, x, b.comboboxState, b.activationTrigger, b.activeOptionIndex]);
                        let y = (0, f.z)(e => {
                                if (u) return e.preventDefault();
                                S(), 0 === b.mode && v.closeCombobox(), (0, M.tq)() || requestAnimationFrame(() => {
                                    var e;
                                    return null == (e = b.inputRef.current) ? void 0 : e.focus()
                                })
                            }),
                            P = (0, f.z)(() => {
                                if (u) return v.goToOption(g.T.Nothing);
                                v.goToOption(g.T.Specific, i)
                            }),
                            w = (0, N.g)(),
                            F = (0, f.z)(e => w.update(e)),
                            A = (0, f.z)(e => {
                                w.wasMoved(e) && (u || x || v.goToOption(g.T.Specific, i, 0))
                            }),
                            L = (0, f.z)(e => {
                                w.wasMoved(e) && (u || x && (b.optionsPropsRef.current.hold || v.goToOption(g.T.Nothing)))
                            }),
                            D = (0, l.useMemo)(() => ({
                                active: x,
                                selected: O,
                                disabled: u
                            }), [x, O, u]);
                        return (0, h.sY)({
                            ourProps: {
                                id: i,
                                ref: T,
                                role: "option",
                                tabIndex: !0 === u ? void 0 : -1,
                                "aria-disabled": !0 === u || void 0,
                                "aria-selected": O,
                                disabled: void 0,
                                onClick: y,
                                onFocus: P,
                                onPointerEnter: F,
                                onMouseEnter: F,
                                onPointerMove: A,
                                onMouseMove: A,
                                onPointerLeave: L,
                                onMouseLeave: L
                            },
                            theirProps: d,
                            slot: D,
                            defaultTag: "li",
                            name: "Combobox.Option"
                        })
                    })
                })
        },
        27115: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return i
                }
            });
            var o = n(7653),
                r = n(94791);

            function i(e, t, n) {
                let [i, u] = (0, o.useState)(n), l = void 0 !== e, a = (0, o.useRef)(l), c = (0, o.useRef)(!1), s = (0, o.useRef)(!1);
                return !l || a.current || c.current ? l || !a.current || s.current || (s.current = !0, a.current = l, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")) : (c.current = !0, a.current = l, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")), [l ? e : i, (0, r.z)(e => (l || u(e), null == t ? void 0 : t(e)))]
            }
        },
        62818: function(e, t, n) {
            n.d(t, {
                O: function() {
                    return a
                }
            });
            var o = n(7653),
                r = n(28705),
                i = n(57168);

            function u(e, t, n) {
                let r = (0, i.E)(t);
                (0, o.useEffect)(() => {
                    function t(e) {
                        r.current(e)
                    }
                    return document.addEventListener(e, t, n), () => document.removeEventListener(e, t, n)
                }, [e, n])
            }
            var l = n(50024);

            function a(e, t, n = !0) {
                let i = (0, o.useRef)(!1);

                function a(n, o) {
                    if (!i.current || n.defaultPrevented) return;
                    let u = o(n);
                    if (null !== u && u.getRootNode().contains(u) && u.isConnected) {
                        for (let t of function e(t) {
                                return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                            }(e)) {
                            if (null === t) continue;
                            let e = t instanceof HTMLElement ? t : t.current;
                            if (null != e && e.contains(u) || n.composed && n.composedPath().includes(e)) return
                        }
                        return (0, r.sP)(u, r.tJ.Loose) || -1 === u.tabIndex || n.preventDefault(), t(n, u)
                    }
                }(0, o.useEffect)(() => {
                    requestAnimationFrame(() => {
                        i.current = n
                    })
                }, [n]);
                let c = (0, o.useRef)(null);
                u("pointerdown", e => {
                    var t, n;
                    i.current && (c.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
                }, !0), u("mousedown", e => {
                    var t, n;
                    i.current && (c.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
                }, !0), u("click", e => {
                    c.current && (a(e, () => c.current), c.current = null)
                }, !0), u("touchend", e => a(e, () => e.target instanceof HTMLElement ? e.target : null), !0), (0, l.s)("blur", e => a(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
            }
        },
        99559: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return i
                }
            });
            var o = n(7653),
                r = n(90158);

            function i(...e) {
                return (0, o.useMemo)(() => (0, r.r)(...e), [...e])
            }
        },
        19844: function(e, t, n) {
            n.d(t, {
                g: function() {
                    return i
                }
            });
            var o = n(7653);

            function r(e) {
                return [e.screenX, e.screenY]
            }

            function i() {
                let e = (0, o.useRef)([-1, -1]);
                return {
                    wasMoved(t) {
                        let n = r(t);
                        return (e.current[0] !== n[0] || e.current[1] !== n[1]) && (e.current = n, !0)
                    },
                    update(t) {
                        e.current = r(t)
                    }
                }
            }
        },
        5476: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return u
                }
            });
            var o = n(7653),
                r = n(34003),
                i = n(90158);

            function u({
                container: e,
                accept: t,
                walk: n,
                enabled: u = !0
            }) {
                let l = (0, o.useRef)(t),
                    a = (0, o.useRef)(n);
                (0, o.useEffect)(() => {
                    l.current = t, a.current = n
                }, [t, n]), (0, r.e)(() => {
                    if (!e || !u) return;
                    let t = (0, i.r)(e);
                    if (!t) return;
                    let n = l.current,
                        o = a.current,
                        r = Object.assign(e => n(e), {
                            acceptNode: n
                        }),
                        c = t.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, r, !1);
                    for (; c.nextNode();) o(c.currentNode)
                }, [e, u, l, a])
            }
        },
        99982: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return i
                }
            });
            var o = n(7653),
                r = n(94791);

            function i(e, t) {
                let n = (0, o.useRef)([]),
                    i = (0, r.z)(e);
                (0, o.useEffect)(() => {
                    let e = [...n.current];
                    for (let [o, r] of t.entries())
                        if (n.current[o] !== r) {
                            let o = i(t, e);
                            return n.current = t, o
                        }
                }, [i, ...t])
            }
        },
        50024: function(e, t, n) {
            n.d(t, {
                s: function() {
                    return i
                }
            });
            var o = n(7653),
                r = n(57168);

            function i(e, t, n) {
                let i = (0, r.E)(t);
                (0, o.useEffect)(() => {
                    function t(e) {
                        i.current(e)
                    }
                    return window.addEventListener(e, t, n), () => window.removeEventListener(e, t, n)
                }, [e, n])
            }
        },
        12754: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return i
                },
                _: function() {
                    return u
                }
            });
            var o, r = n(52690),
                i = ((o = i || {})[o.None = 1] = "None", o[o.Focusable = 2] = "Focusable", o[o.Hidden = 4] = "Hidden", o);
            let u = (0, r.yV)(function(e, t) {
                let {
                    features: n = 1,
                    ...o
                } = e, i = {
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
                return (0, r.sY)({
                    ourProps: i,
                    theirProps: o,
                    slot: {},
                    defaultTag: "div",
                    name: "Hidden"
                })
            })
        },
        99087: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return r
                },
                d: function() {
                    return i
                }
            });
            var o, r = ((o = r || {})[o.First = 0] = "First", o[o.Previous = 1] = "Previous", o[o.Next = 2] = "Next", o[o.Last = 3] = "Last", o[o.Specific = 4] = "Specific", o[o.Nothing = 5] = "Nothing", o);

            function i(e, t) {
                let n = t.resolveItems();
                if (n.length <= 0) return null;
                let o = t.resolveActiveIndex(),
                    r = null != o ? o : -1,
                    i = (() => {
                        switch (e.focus) {
                            case 0:
                                return n.findIndex(e => !t.resolveDisabled(e));
                            case 1:
                                {
                                    let e = n.slice().reverse().findIndex((e, n, o) => (-1 === r || !(o.length - n - 1 >= r)) && !t.resolveDisabled(e));
                                    return -1 === e ? e : n.length - 1 - e
                                }
                            case 2:
                                return n.findIndex((e, n) => !(n <= r) && !t.resolveDisabled(e));
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
                return -1 === i ? o : i
            }
        },
        28705: function(e, t, n) {
            n.d(t, {
                C5: function() {
                    return h
                },
                EO: function() {
                    return E
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
                    return I
                },
                sP: function() {
                    return x
                },
                tJ: function() {
                    return m
                },
                wI: function() {
                    return g
                },
                z2: function() {
                    return O
                }
            });
            var o, r, i, u, l, a = n(93561),
                c = n(26788),
                s = n(90158);
            let d = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
            var f = ((o = f || {})[o.First = 1] = "First", o[o.Previous = 2] = "Previous", o[o.Next = 4] = "Next", o[o.Last = 8] = "Last", o[o.WrapAround = 16] = "WrapAround", o[o.NoScroll = 32] = "NoScroll", o),
                p = ((r = p || {})[r.Error = 0] = "Error", r[r.Overflow = 1] = "Overflow", r[r.Success = 2] = "Success", r[r.Underflow = 3] = "Underflow", r),
                b = ((i = b || {})[i.Previous = -1] = "Previous", i[i.Next = 1] = "Next", i);

            function v(e = document.body) {
                return null == e ? [] : Array.from(e.querySelectorAll(d)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
            }
            var m = ((u = m || {})[u.Strict = 0] = "Strict", u[u.Loose = 1] = "Loose", u);

            function x(e, t = 0) {
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

            function g(e) {
                let t = (0, s.r)(e);
                (0, a.k)().nextFrame(() => {
                    t && !x(t.activeElement, 0) && h(e)
                })
            }
            var R = ((l = R || {})[l.Keyboard = 0] = "Keyboard", l[l.Mouse = 1] = "Mouse", l);

            function h(e) {
                null == e || e.focus({
                    preventScroll: !0
                })
            }

            function O(e, t = e => e) {
                return e.slice().sort((e, n) => {
                    let o = t(e),
                        r = t(n);
                    if (null === o || null === r) return 0;
                    let i = o.compareDocumentPosition(r);
                    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                })
            }

            function E(e, t) {
                return I(v(), t, {
                    relativeTo: e
                })
            }

            function I(e, t, {
                sorted: n = !0,
                relativeTo: o = null,
                skipElements: r = []
            } = {}) {
                var i, u, l;
                let a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
                    c = Array.isArray(e) ? n ? O(e) : e : v(e);
                r.length > 0 && c.length > 1 && (c = c.filter(e => !r.includes(e))), o = null != o ? o : a.activeElement;
                let s = (() => {
                        if (5 & t) return 1;
                        if (10 & t) return -1;
                        throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    d = (() => {
                        if (1 & t) return 0;
                        if (2 & t) return Math.max(0, c.indexOf(o)) - 1;
                        if (4 & t) return Math.max(0, c.indexOf(o)) + 1;
                        if (8 & t) return c.length - 1;
                        throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    f = 32 & t ? {
                        preventScroll: !0
                    } : {},
                    p = 0,
                    b = c.length,
                    m;
                do {
                    if (p >= b || p + b <= 0) return 0;
                    let e = d + p;
                    if (16 & t) e = (e + b) % b;
                    else {
                        if (e < 0) return 3;
                        if (e >= b) return 1
                    }
                    null == (m = c[e]) || m.focus(f), p += s
                } while (m !== a.activeElement);
                return 6 & t && null != (l = null == (u = null == (i = m) ? void 0 : i.matches) ? void 0 : u.call(i, "textarea,input")) && l && m.select(), 2
            }
            "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("keydown", e => {
                e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
            }, !0), document.addEventListener("click", e => {
                1 === e.detail ? delete document.documentElement.dataset.headlessuiFocusVisible : 0 === e.detail && (document.documentElement.dataset.headlessuiFocusVisible = "")
            }, !0))
        },
        47332: function(e, t, n) {
            function o(e, t) {
                return e ? e + "[" + t + "]" : t
            }

            function r(e) {
                var t, n;
                let o = null != (t = null == e ? void 0 : e.form) ? t : e.closest("form");
                if (o) {
                    for (let t of o.elements)
                        if (t !== e && ("INPUT" === t.tagName && "submit" === t.type || "BUTTON" === t.tagName && "submit" === t.type || "INPUT" === t.nodeName && "image" === t.type)) {
                            t.click();
                            return
                        }
                    null == (n = o.requestSubmit) || n.call(o)
                }
            }
            n.d(t, {
                g: function() {
                    return r
                },
                t: function() {
                    return function e(t = {}, n = null, r = []) {
                        for (let [i, u] of Object.entries(t)) ! function t(n, r, i) {
                            if (Array.isArray(i))
                                for (let [e, u] of i.entries()) t(n, o(r, e.toString()), u);
                            else i instanceof Date ? n.push([r, i.toISOString()]) : "boolean" == typeof i ? n.push([r, i ? "1" : "0"]) : "string" == typeof i ? n.push([r, i]) : "number" == typeof i ? n.push([r, `${i}`]) : null == i ? n.push([r, ""]) : e(i, r, n)
                        }(r, o(n, i), u);
                        return r
                    }
                }
            })
        },
        96692: function(e, t, n) {
            function o() {
                return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
            }

            function r() {
                return o() || /Android/gi.test(window.navigator.userAgent)
            }
            n.d(t, {
                gn: function() {
                    return o
                },
                tq: function() {
                    return r
                }
            })
        }
    }
]);
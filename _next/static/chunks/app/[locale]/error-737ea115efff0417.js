(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [816], {
        62992: function(t, e, r) {
            Promise.resolve().then(r.bind(r, 68872))
        },
        68872: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return h
                }
            });
            var a = r(27573),
                s = r(9649),
                l = r(78816),
                n = r(28578),
                i = r(3846),
                o = r(51502),
                d = r(11388),
                c = r(78851);
            let u = t => {
                    let {
                        as: e,
                        title: r,
                        styleTitleAs: s,
                        description: n,
                        descriptionVariant: i = "large",
                        textHasMargin: o,
                        textPosition: u,
                        illustration: x,
                        className: h,
                        children: b,
                        ...k
                    } = t;
                    return (0, a.jsxs)(e, {
                        className: (0, l.HT)("default-transition m-auto grid min-h-[395px] w-full max-w-screen-max+padding rounded-[20px] border border-tintBlue bg-baseWhite px-5 py-10 dark:border-tintBlack dark:bg-lightBlack desktop:grid-cols-2 desktop:rounded-[30px]", h),
                        ...k,
                        children: [(0, a.jsx)("span", {
                            className: "flex items-center justify-center desktop:mb-0",
                            children: x
                        }), (0, a.jsxs)("div", {
                            "data-textleft": "left" === u,
                            "data-hasmargin": o,
                            className: "mt-10 flex flex-col justify-center gap-6 desktop:mt-0 data-[textleft=true]:desktop:col-start-1 data-[textleft=true]:desktop:row-end-2 data-[hasmargin=true]:desktop:ml-20",
                            children: [(0, a.jsx)(d.X, {
                                as: "h2",
                                styleAs: s,
                                children: r
                            }), Array.isArray(n) ? n.map((t, e) => (0, a.jsx)(c.x, {
                                as: "p",
                                variant: i,
                                className: "max-w-[42ch]",
                                children: t
                            }, e)) : n ? (0, a.jsx)(c.x, {
                                as: "p",
                                variant: i,
                                className: "max-w-[42ch]",
                                children: n
                            }) : null, b]
                        })]
                    })
                },
                x = t => {
                    let {
                        as: e,
                        title: r,
                        titleAs: s,
                        description: n,
                        illustration: i,
                        className: o,
                        children: u,
                        ...x
                    } = t;
                    return (0, a.jsxs)(e, {
                        className: (0, l.HT)("m-auto flex w-full max-w-screen-max+padding flex-col-reverse justify-between gap-7 rounded-[20px] bg-trustBlue px-5 py-10 tablet:flex-row tablet:items-center desktop:rounded-[30px] desktop:p-16 desktop:px-[100px]", o),
                        ...x,
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)(d.X, {
                                as: null != s ? s : "h1",
                                className: "!text-trustWhite",
                                children: r
                            }), n && (0, a.jsx)(c.x, {
                                as: "p",
                                variant: "large",
                                className: "mt-6 max-w-[35ch] !text-trustWhite",
                                children: n
                            }), u && (0, a.jsx)("span", {
                                className: "mt-6 inline-block",
                                children: u
                            })]
                        }), i && (0, a.jsx)("span", {
                            className: "mx-auto tablet:mx-[unset]",
                            children: i
                        })]
                    })
                };
            var h = t => {
                let {
                    reset: e
                } = t, r = (0, s.useTranslations)(l.vy.ERROR_PAGE);
                return (0, a.jsxs)(o.J, {
                    children: [(0, a.jsx)(x, {
                        as: "section",
                        title: "500",
                        description: r("hero.description"),
                        className: "max-w-screen-max"
                    }), (0, a.jsx)(u, {
                        as: "section",
                        title: r.rich("section-banner.title", {
                            br: () => (0, a.jsx)("br", {})
                        }),
                        description: [r("section-banner.description1"), r("section-banner.description2")],
                        textPosition: "right",
                        illustration: (0, a.jsx)(n.V, {
                            className: "h-auto w-full max-w-[300px] desktop:max-w-[430px]"
                        }),
                        className: "max-w-screen-max",
                        children: (0, a.jsxs)("div", {
                            className: "flex flex-col items-center gap-6 desktop:flex-row",
                            children: [(0, a.jsx)(i.z, {
                                as: "a",
                                variant: "light:filledBlueWhite-dark:filledGreenBlack",
                                size: "large",
                                href: l.pB.HOME,
                                children: r("section-banner.cta1")
                            }), (0, a.jsx)(i.z, {
                                as: "button",
                                type: "button",
                                variant: "light:filledBlueWhite-dark:filledGreenBlack",
                                size: "large",
                                onClick: e,
                                children: r("section-banner.cta2")
                            })]
                        })
                    })]
                })
            }
        },
        3846: function(t, e, r) {
            "use strict";
            r.d(e, {
                z: function() {
                    return x
                }
            });
            var a = r(27573),
                s = r(84058),
                l = r.n(s),
                n = r(78816);
            let i = "default-transition relative z-10 overflow-hidden flex items-center justify-center gap-3 rounded-full text-center text-mobileButton font-medium leading-mobileButton",
                o = {
                    small: "px-5 py-2.5 h-9",
                    medium: "px-6 py-3",
                    large: "px-8 py-[1.125rem] tablet:py-3 tablet:px-10 tablet:text-desktopButton tablet:leading-desktopButton"
                },
                d = "block before:left-0 before:absolute before:-z-[1] before:rounded-full before:w-[0%] before:top-0 before:bottom-0 before:transition before:[transition-property:width] before:[transition-duration:500ms] hover:before:w-full",
                c = {
                    "light:filledBlueWhite-dark:filledGreenBlack": "".concat(i, " ").concat(d, " bg-trustBlue text-trustWhite dark:bg-trustGreen dark:text-trustBlack | before:bg-trustGreen hover:text-trustBlack dark:hover:text-trustWhite before:dark:bg-trustBlue"),
                    "light:filledWhiteBlack-dark:filledBlueWhite": "".concat(i, " ").concat(d, " bg-trustWhite text-trustBlack dark:bg-trustBlue dark:text-trustWhite | before:bg-trustGreen hover:!text-trustBlack before:dark:bg-trustWhite"),
                    "light:outlineBlue-dark:outlineGreen": "".concat(i, " bg-transparent border text-trustBlue border-trustBlue dark:text-trustGreen dark:border-trustGreen | hover:bg-trustBlue hover:text-trustWhite dark:hover:text-trustBlack dark:hover:bg-trustGreen"),
                    "light:outlineBlack-dark:outlineWhite": "".concat(i, " bg-transparent border text-trustBlack border-trustBlack dark:text-trustWhite dark:border-trustWhite | hover:bg-trustBlack hover:text-trustWhite dark:hover:text-trustBlack dark:hover:bg-trustWhite"),
                    "light:outlineBlack-dark:filledBlackGreen": "".concat(i, " ").concat(d, " bg-transparent border text-trustBlack border-trustBlack dark:text-trustGreen dark:bg-trustBlack | hover:bg-trustBlack hover:text-trustWhite dark:before:bg-trustWhite dark:hover:text-trustBlack"),
                    filledWhiteBlue: "".concat(i, " ").concat(d, " bg-trustWhite text-trustBlue | before:bg-trustGreen"),
                    outlineBlue: "".concat(i, " bg-transparent border text-trustBlue border-trustBlue | hover:bg-trustBlue hover:text-trustWhite"),
                    default: ""
                },
                u = l()(async () => Promise.resolve().then(r.t.bind(r, 2056, 23)), {
                    loadableGenerated: {
                        webpack: () => [2056]
                    }
                }),
                x = t => {
                    var e;
                    let {
                        variant: r,
                        size: s,
                        className: l,
                        children: i,
                        as: d,
                        ...x
                    } = t, h = "default" === r ? "" : "".concat(o[s], " ").concat(c[r]);
                    return "button" === d && (0, a.jsx)("button", {
                        className: (0, n.HT)(h, l),
                        ...x,
                        children: i
                    }) || "div" === d && (0, a.jsx)("div", {
                        className: (0, n.HT)(h, l),
                        ...x,
                        children: i
                    }) || "a" === d && (null === (e = x.href) || void 0 === e ? void 0 : e.startsWith("https://")) && (0, a.jsx)("a", {
                        target: "_blank",
                        className: (0, n.HT)(h, l),
                        ...x,
                        children: i
                    }) || "a" === d && x && (0, a.jsx)(u, {
                        className: (0, n.HT)(h, l),
                        ...x,
                        children: i
                    }) || (0, a.jsx)("div", {
                        children: "Invalid Parameters"
                    })
                }
        }
    },
    function(t) {
        t.O(0, [497, 67, 923, 648, 293, 858, 744], function() {
            return t(t.s = 62992)
        }), _N_E = t.O()
    }
]);
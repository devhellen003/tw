(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [923], {
        53260: function() {},
        78816: function(t, e, E) {
            "use strict";
            E.d(e, {
                yE: function() {
                    return b
                },
                vy: function() {
                    return P
                },
                lE: function() {
                    return l
                },
                m5: function() {
                    return o
                },
                zu: function() {
                    return u
                },
                pB: function() {
                    return R
                },
                gT: function() {
                    return n
                },
                HT: function() {
                    return s
                },
                Ad: function() {
                    return r
                },
                Fs: function() {
                    return S.useResponsive
                },
                Fg: function() {
                    return i
                }
            });
            let a = "https://api.trustwallet.com/v1",
                o = "https://trustwallet.com";
            (d = P || (P = {})).GENERIC = "GENERIC", d["DOWNLOAD-BANNER_COMPONENT"] = "DOWNLOAD-BANNER_COMPONENT", d["LEARN-ABOUT-TRUST-BANNER_COMPONENT"] = "LEARN-ABOUT-TRUST-BANNER_COMPONENT", d["HEADER-AND_FOOTER_COMPONENT"] = "HEADER-AND_FOOTER_COMPONENT", d.NFT_PAGE = "NFT_PAGE", d.HOME_PAGE = "HOME_PAGE", d.BE_PAGE = "BE_PAGE", d.SWAP_PAGE = "SWAP_PAGE", d.SECURITY_PAGE = "SECURITY_PAGE", d.PRESS_PAGE = "PRESS_PAGE", d.CAREERS_PAGE = "CAREERS_PAGE", d.ERROR_PAGE = "ERROR_PAGE", d.BLOG_PAGE = "BLOG_PAGE", d.DOWNLOAD_PAGE = "DOWNLOAD_PAGE", d.STAKING_PAGE = "STAKING_PAGE", d.DEEPLINK_PAGE = "DEEPLINK_PAGE", d.SWIFT_PAGE = "SWIFT_PAGE", d["PRIVACY-POLICY_PAGE"] = "PRIVACY-POLICY_PAGE", d["TERMS-OF-SERVICE_PAGE"] = "TERMS-OF-SERVICE_PAGE", d["TRUST-REDEFINED_PAGE"] = "TRUST-REDEFINED_PAGE", d["BUY-CRYPTO_PAGE"] = "BUY-CRYPTO_PAGE", d["BUY-COIN_PAGE"] = "BUY-COIN_PAGE", d["COIN-WALLET_PAGE"] = "COIN-WALLET_PAGE", d["STAKING-COIN_PAGE"] = "STAKING-COIN_PAGE", d["ABOUT-US_PAGE"] = "ABOUT-US_PAGE", d["NOT-FOUND_PAGE"] = "NOT-FOUND_PAGE";
            let l = ["en", "zh-TW", "fr", "de", "id", "ja", "ko", "pt-PT", "ru", "es", "tr", "uk", "vi"];
            E(94850);
            let s = (t, e) => t + (e ? " ".concat(e) : ""),
                n = t => {
                    let e = t.startsWith("/");
                    return e ? "".concat("https://dashboard.twinternal.net").concat(t) : t
                },
                r = t => t ? {
                    placeholder: "blur",
                    blurDataURL: t
                } : {
                    placeholder: "empty"
                };
            (O = T || (T = {})).LIGHT = "light", O.DARK = "dark";
            let i = () => {
                let t = (() => {
                    try {
                        var t;
                        return null === (t = localStorage) || void 0 === t ? void 0 : t.getItem("@trust:theme")
                    } catch (t) {
                        return T.LIGHT
                    }
                })();
                return {
                    currentTheme: t,
                    changeTheme: () => {
                        let e = document.documentElement;
                        e.classList.toggle(T.DARK), localStorage.setItem("@trust:theme", t === T.LIGHT ? T.DARK : T.LIGHT)
                    }
                }
            };
            var _, A, c, p, d, O, P, T, u, R, N, G, S = E(62939);
            E(27573), (_ = u || (u = {}))[_.PRESS_EMAIL = "mailto:press@trustwallet.com"] = "PRESS_EMAIL", _[_.HELP_CENTRE = "https://community.trustwallet.com/c/helpcenter/8"] = "HELP_CENTRE", _[_.SUPPORT = "https://support.trustwallet.com/en/support/home"] = "SUPPORT", _[_.COMMUNITY_FORUM = "https://community.trustwallet.com/"] = "COMMUNITY_FORUM", _[_.WALLET_CORE = "https://developer.trustwallet.com/developer/wallet-core"] = "WALLET_CORE", _[_.DEVELOPER_DOCS = "https://developer.trustwallet.com/developer/"] = "DEVELOPER_DOCS", _[_.GET_ASSET_LISTED = "https://developer.trustwallet.com/developer/listing-new-assets"] = "GET_ASSET_LISTED", _[_.SUBMIT_DAPP = "https://developer.trustwallet.com/developer/listing-new-dapps"] = "SUBMIT_DAPP", _[_.APP_STORE = "https://apps.apple.com/app/apple-store/id1288339409?mt=8"] = "APP_STORE", _[_.GOOGLE_PLAY = "https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp"] = "GOOGLE_PLAY", _[_.WEBSTORE = "https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph"] = "WEBSTORE", _[_.FACEBOOK = "https://facebook.com/trustwalletapp"] = "FACEBOOK", _[_.GITHUB = "https://github.com/trustwallet"] = "GITHUB", _[_.INSTAGRAM = "https://instagram.com/trustwallet"] = "INSTAGRAM", _[_.TWITTER = "https://twitter.com/trustwallet"] = "TWITTER", _[_.REDDIT = "https://reddit.com/r/trustapp"] = "REDDIT", _[_.TELEGRAM = "https://t.me/trustwallet"] = "TELEGRAM", _[_.DISCORD = "https://discord.gg/trustwallet"] = "DISCORD", _[_.TIKTOK = "https://www.tiktok.com/@trustwalletweb3"] = "TIKTOK", _[_.OPEN_ROLES = "https://careers.smartrecruiters.com/B6/trustwallet"] = "OPEN_ROLES";
            let b = {
                HOME: "/blog",
                HOME_WITH_CATEGORY: t => "".concat(b.HOME, "?category=").concat(t),
                BLOG_PAGE: t => "".concat(b.HOME, "/").concat(t)
            };
            (A = R || (R = {})).HOME = "/", A.ASSETS = "/assets", A.SECURITY = "/security", A.STAKING = "/staking", A.NFTS = "/nft", A.TEAM = "/team", A.CAREERS = "/careers", A.SWAP = "/swap", A.DOWNLOAD = "/download", A.BLOG = "/blog", A.CAMPAIGN = "/campaign", A.PRESS = "/press", A.SWIFT = "/swift", A.BUY_CRYPTO = "/buy-crypto", A.DAPP_BROWSER = "/dapp-browser", A.BROWSER_EXTENSION = "/browser-extension", A.DAPP_JOURNEY = "/dapp-journey", A.ABOUT_US = "/about-us", A.TERMS_OF_SERVICE = "/terms-of-service", A.PRIVACY_POLICY = "/privacy-policy", A.TRUST_REDEFINED = "/trust-redefined", A.MARKETING_EVENTS_PRIVACY_NOTICE = "/marketing-events-privacy-notice", A[A.DOWNLOAD_APK = "".concat(A.DOWNLOAD, "/apk")] = "DOWNLOAD_APK", A.CANDIDATE_PRIVACY_NOTICE = "/candidate-privacy-notice";
            var m = E(80187),
                I = E.n(m);
            (() => {
                let t = I().stringify({
                    fields: ["assetId"],
                    pagination: {
                        page: 1,
                        pageSize: 50
                    }
                }, {
                    encodeValuesOnly: !0
                });
                return "".concat("https://dashboard.twinternal.net", "/api/assets?").concat(t)
            })(), (c = N || (N = {})).GENERIC = "/generic", c["DOWNLOAD-BANNER_COMPONENT"] = "/website_component_download-banner", c["LEARN-ABOUT-TRUST-BANNER_COMPONENT"] = "/website_component_learn-about-trust-banner", c["HEADER-AND_FOOTER_COMPONENT"] = "/website_component_footer-and-header", c.NFT_PAGE = "/website_page_nft", c.HOME_PAGE = "/website_page_home", c.BE_PAGE = "/website_page_browser-extension", c.SWAP_PAGE = "/website_page_swap", c.SECURITY_PAGE = "/website_page_security", c.CAREERS_PAGE = "/website_page_careers", c.ERROR_PAGE = "/website_page_error", c.BLOG_PAGE = "/website_page_blog", c.SWIFT_PAGE = "/website_swift_page", c.STAKING_PAGE = "/website_page_staking", c.DOWNLOAD_PAGE = "/website_page_download", c.DEEPLINK_PAGE = "/website_page_deeplink", c["PRIVACY-POLICY_PAGE"] = "/website_page_privacy-policy", c["TERMS-OF-SERVICE_PAGE"] = "/website_page_terms-of-service", c["TRUST-REDEFINED_PAGE"] = "/website_page_trust-redefined", c["BUY-CRYPTO_PAGE"] = "/website_page_buy-crypto", c["BUY-COIN_PAGE"] = "/website_page_buy-coin", c["COIN-WALLET_PAGE"] = "/website_page_coin-wallet", c["STAKING-COIN_PAGE"] = "/website_page_staking-coin", c.PRESS_PAGE = "/website_page_press", c["ABOUT-US_PAGE"] = "/website_page_about-us", c["NOT-FOUND_PAGE"] = "/website_page_not-found", (p = G || (G = {}))[p.COINS = "".concat(a, "/coins/list")] = "COINS", p[p.STAKING_RATES = "".concat(a, "/coins/staking")] = "STAKING_RATES"
        },
        62939: function(t, e, E) {
            "use strict";
            E.r(e), E.d(e, {
                useResponsive: function() {
                    return o
                }
            });
            var a = E(7653);
            let o = () => {
                let [t, e] = (0, a.useState)({
                    isMobile: !1,
                    isTablet: !1,
                    isDesktop: !1
                }), E = () => {
                    let t = window.innerWidth;
                    e({
                        isMobile: t <= 768,
                        isTablet: t > 768 && t <= 1024,
                        isDesktop: t > 1024
                    })
                };
                return (0, a.useEffect)(() => (E(), window.addEventListener("resize", E), () => window.removeEventListener("resize", E)), []), t
            }
        },
        11388: function(t, e, E) {
            "use strict";
            E.d(e, {
                X: function() {
                    return n
                }
            });
            var a = E(27573),
                o = E(78816);
            let l = "default-transition text-trustBlack font-wixMadefor font-bold dark:text-trustWhite",
                s = {
                    h1: "".concat(l, " text-mobileH1 leading-mobileH1 tablet:text-desktopH1 tablet:leading-desktopH1"),
                    h2: "".concat(l, " text-mobileH2 leading-mobileH2 tablet:text-desktopH2 tablet:leading-desktopH2"),
                    h3: "".concat(l, " text-mobileH3 leading-mobileH3 tablet:text-desktopH3 tablet:leading-desktopH3"),
                    h4: "".concat(l, " text-mobileH4 leading-mobileH4 tablet:text-desktopH4 tablet:leading-desktopH4"),
                    h5: "".concat(l, " text-mobileH5 leading-mobileH5 tablet:text-desktopH5 tablet:leading-desktopH5"),
                    h6: "".concat(l, " text-mobileH5 leading-mobileH5 tablet:text-desktopH5 tablet:leading-desktopH5")
                },
                n = t => {
                    let {
                        children: e,
                        as: E,
                        styleAs: l,
                        className: n,
                        ...r
                    } = t;
                    return (0, a.jsx)(E, {
                        className: (0, o.HT)(s[null != l ? l : E], n),
                        ...r,
                        children: e
                    })
                }
        },
        78851: function(t, e, E) {
            "use strict";
            E.d(e, {
                x: function() {
                    return r
                }
            });
            var a = E(27573),
                o = E(7653),
                l = E(78816);
            let s = "default-transition text-lightBlack font-inter dark:text-trustWhite",
                n = {
                    large: "".concat(s, " text-mobileBodyLarge leading-mobileBodyLarge tablet:text-desktopBodyLarge tablet:leading-desktopBodyLarge"),
                    medium: "".concat(s, " text-mobileBodyMedium leading-mobileBodyMedium tablet:text-desktopBodyMedium tablet:leading-desktopBodyMedium"),
                    small: "".concat(s, " text-mobileBodySmall leading-mobileBodySmall tablet:text-desktopBodySmall tablet:leading-desktopBodySmall"),
                    extraSmall: "".concat(s, " opacity-50 text-mobileBodyExtraSmall leading-mobileBodyExtraSmall tablet:text-desktopBodyExtraSmall tablet:leading-desktopBodyExtraSmall")
                },
                r = (0, o.forwardRef)((t, e) => {
                    let {
                        children: E,
                        variant: o,
                        as: s,
                        className: r,
                        ...i
                    } = t;
                    return (0, a.jsx)(s, {
                        ref: e,
                        className: (0, l.HT)(n[o], r),
                        ...i,
                        children: E
                    })
                })
        }
    }
]);
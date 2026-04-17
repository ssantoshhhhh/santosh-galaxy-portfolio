import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

interface NavItem {
  label: string;
  href: string;
  ariaLabel?: string;
  hideOnDesktop?: boolean;
}

interface PillNavProps {
  logo: string;
  logoAlt?: string;
  items: NavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
  rightContent?: React.ReactNode;
}

const PillNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#fff',
  pillColor = '#060010',
  hoveredPillTextColor = '#060010',
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true,
  rightContent
}: PillNavProps) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const tlRefs = useRef<(gsap.core.Timeline | null)[]>([]);
  const activeTweenRefs = useRef<(gsap.core.Tween | null)[]>([]);
  const logoImgRef = useRef<HTMLImageElement>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement | HTMLSpanElement | null>(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach(circle => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

        const label = pill.querySelector('.pill-label');
        const white = pill.querySelector('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener('resize', onResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 1, y: 0 });
    }

    if (initialLoadAnimation) {
      const logo = logoRef.current;
      const navItems = navItemsRef.current;

      if (logo) {
        gsap.set(logo, { scale: 0 });
        gsap.to(logo, {
          scale: 1,
          duration: 0.6,
          ease
        });
      }

      if (navItems) {
        gsap.set(navItems, { width: 0, overflow: 'hidden' });
        gsap.to(navItems, {
          width: 'auto',
          duration: 0.6,
          ease
        });
      }
    }

    return () => window.removeEventListener('resize', onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    gsap.set(img, { rotate: 0 });
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll('.hamburger-line');
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 6, duration: 0.4, ease: "back.out(1.5)" });
        gsap.to(lines[1], { opacity: 0, x: -10, duration: 0.3, ease: "power2.out" });
        gsap.to(lines[2], { rotation: -45, y: -6, duration: 0.4, ease: "back.out(1.5)" });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.4, ease: "back.out(1.5)" });
        gsap.to(lines[1], { opacity: 1, x: 0, duration: 0.4, ease: "power2.out", delay: 0.1 });
        gsap.to(lines[2], { rotation: 0, y: 0, duration: 0.4, ease: "back.out(1.5)" });
      }
    }

    if (menu) {
      const listItems = menu.querySelectorAll('li');
      if (newState) {
        gsap.set(menu, { visibility: 'visible' });
        gsap.fromTo(
          menu,
          { opacity: 0, scaleY: 0.9, y: -15 },
          {
            opacity: 1,
            scaleY: 1,
            y: 0,
            duration: 0.5,
            ease: "expo.out",
            transformOrigin: 'top center'
          }
        );
        gsap.fromTo(
          listItems,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.05, duration: 0.4, ease: "power3.out", delay: 0.1 }
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          scaleY: 0.95,
          y: -10,
          duration: 0.3,
          ease: "power2.in",
          transformOrigin: 'top center',
          onComplete: () => {
            gsap.set(menu, { visibility: 'hidden' });
          }
        });
      }
    }

    onMobileMenuClick?.();
  };

  const isExternalLink = (href: string) =>
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('//') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('#') ||
    href.endsWith('.pdf');

  const isRouterLink = (href: string) => href && !isExternalLink(href);

  const cssVars = {
    ['--base']: baseColor,
    ['--pill-bg']: pillColor,
    ['--hover-text']: hoveredPillTextColor,
    ['--pill-text']: resolvedPillTextColor,
    ['--nav-h']: '42px',
    ['--logo']: '36px',
    ['--pill-pad-x']: '18px',
    ['--pill-gap']: '3px'
  } as React.CSSProperties;

  return (
    <div className="fixed top-[1em] z-[1000] w-full left-0 px-4 md:px-8 pointer-events-none">
      <nav
        className={`relative w-full flex items-center justify-between box-border pointer-events-auto ${className}`}
        aria-label="Primary"
        style={cssVars}
      >
        <div className="flex-shrink-0">
          {isRouterLink(items?.[0]?.href) ? (
            <Link
              to={items[0].href}
              aria-label="Home"
              onMouseEnter={handleLogoEnter}
              role="menuitem"
              ref={el => {
                if (el) logoRef.current = el;
              }}
              className="rounded-full p-2 inline-flex items-center justify-center overflow-hidden"
              style={{
                width: 'var(--nav-h)',
                height: 'var(--nav-h)',
                background: 'var(--base, #000)'
              }}
            >
              <img src={logo} alt={logoAlt} ref={logoImgRef} className="w-full h-full object-cover block" />
            </Link>
          ) : (
            <a
              href={items?.[0]?.href || '#'}
              aria-label="Home"
              onMouseEnter={handleLogoEnter}
              ref={el => {
                if (el) logoRef.current = el;
              }}
              className="rounded-full p-2 inline-flex items-center justify-center overflow-hidden"
              style={{
                width: 'var(--nav-h)',
                height: 'var(--nav-h)',
                background: 'var(--base, #000)'
              }}
            >
              <img src={logo} alt={logoAlt} ref={logoImgRef} className="w-full h-full object-cover block" />
            </a>
          )}
        </div>

        <div
          ref={navItemsRef}
          className="absolute left-1/2 -translate-x-1/2 items-center rounded-full hidden md:flex"
          style={{
            height: 'var(--nav-h)',
            background: 'var(--base, #000)'
          }}
        >
          <ul
            role="menubar"
            className="list-none flex items-stretch m-0 p-[3px] h-full"
            style={{ gap: 'var(--pill-gap)' }}
          >
            {items.filter(item => !item.hideOnDesktop).map((item, i) => {
              const isActive = activeHref === item.href;

              const pillStyle = {
                background: 'var(--pill-bg, #fff)',
                color: 'var(--pill-text, var(--base, #000))',
                paddingLeft: 'var(--pill-pad-x)',
                paddingRight: 'var(--pill-pad-x)'
              };

              const PillContent = (
                <>
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                    style={{
                      background: 'var(--base, #000)',
                      willChange: 'transform'
                    }}
                    aria-hidden="true"
                    ref={el => {
                      circleRefs.current[i] = el;
                    }}
                  />
                  <span className="label-stack relative inline-block leading-[1] z-[2]">
                    <span
                      className="pill-label relative z-[2] inline-block leading-[1]"
                      style={{ willChange: 'transform' }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="pill-label-hover absolute left-0 top-0 z-[3] inline-block"
                      style={{
                        color: 'var(--hover-text, #fff)',
                        willChange: 'transform, opacity'
                      }}
                      aria-hidden="true"
                    >
                      {item.label}
                    </span>
                  </span>
                  {isActive && (
                    <span
                      className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-3 h-3 rounded-full z-[4]"
                      style={{ background: 'var(--base, #000)' }}
                      aria-hidden="true"
                    />
                  )}
                </>
              );

              const basePillClasses =
                'relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-[16px] leading-[0] uppercase tracking-[0.2px] whitespace-nowrap cursor-pointer px-0';

              return (
                <li key={item.href} role="none" className="flex h-full">
                  {isRouterLink(item.href) ? (
                    <Link
                      role="menuitem"
                      to={item.href}
                      className={basePillClasses}
                      style={pillStyle}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                    >
                      {PillContent}
                    </Link>
                  ) : (
                    <a
                      role="menuitem"
                      href={item.href}
                      className={basePillClasses}
                      style={pillStyle}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                    >
                      {PillContent}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-2">
            {rightContent && (
               <div className="hidden md:block">
                  {rightContent}
               </div>
            )}
            <button
            ref={hamburgerRef}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            className="md:hidden rounded-full border-0 flex flex-col items-center justify-center gap-[4px] cursor-pointer p-0 relative"
            style={{
                width: 'var(--nav-h)',
                height: 'var(--nav-h)',
                background: 'var(--base, #000)'
            }}
            >
            <span className="hamburger-line w-5 h-[2px] rounded block" style={{ background: 'var(--pill-bg, #fff)' }} />
            <span className="hamburger-line w-5 h-[2px] rounded block" style={{ background: 'var(--pill-bg, #fff)' }} />
            <span className="hamburger-line w-5 h-[2px] rounded block" style={{ background: 'var(--pill-bg, #fff)' }} />
            </button>
        </div>
      </nav>

      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-[calc(100%+1rem)] left-4 right-4 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-[998] origin-top border border-white/10 overflow-hidden pointer-events-auto"
        style={{ background: '#0a0a0a' }}
      >
        {/* Sleek top highlight */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

        <ul className="list-none m-0 p-4 flex flex-col gap-2 relative z-10 w-full box-border">
          {items.map((item) => {
            const linkClasses =
              'flex items-center justify-between w-full py-[14px] px-6 text-[14px] font-bold tracking-[0.1em] uppercase rounded-[20px] transition-all duration-300 text-gray-400 bg-white/5 border border-white/5 hover:text-white hover:bg-white/10 hover:border-white/10 active:scale-[0.98] group';

            const handleMobileClick = (e: React.MouseEvent) => {
              if (item.href.startsWith('#')) {
                e.preventDefault();
                const section = document.getElementById(item.href.substring(1));
                if (section) {
                  window.scrollTo({ top: section.offsetTop - 100, behavior: 'smooth' });
                }
              }
              toggleMobileMenu();
            };

            const innerContent = (
              <>
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full rounded-full opacity-0 group-hover:opacity-100" />
                </span>
                <span className="text-white/0 group-hover:text-white/50 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </span>
              </>
            );

            return (
              <li key={item.href} className="w-full">
                {isRouterLink(item.href) ? (
                  <Link
                    to={item.href}
                    className={linkClasses}
                    onClick={handleMobileClick}
                  >
                    {innerContent}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={linkClasses}
                    onClick={handleMobileClick}
                  >
                    {innerContent}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;

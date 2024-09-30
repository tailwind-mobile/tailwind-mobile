import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { NavbarClasses } from '../../shared/classes/NavbarClasses.js';
import { NavbarColors } from '../../shared/colors/NavbarColors.js';

const Navbar = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,

    bgClassName = '',
    innerClassName = '',
    leftClassName = '',
    titleClassName = '',
    subtitleClassName = '',
    rightClassName = '',
    subnavbarClassName = '',

    centerTitle,

    colors: colorsProp,
    translucent = true,
    outline,
    medium,
    large,
    transparent,

    fontSizeIos = 'text-[17px]',
    fontSizeMaterial = 'text-[16px]',

    titleFontSizeIos = 'text-[17px]',
    titleFontSizeMaterial = 'text-[22px]',

    titleMediumFontSizeIos = 'text-[24px]',
    titleMediumFontSizeMaterial = 'text-[24px]',

    titleLargeFontSizeIos = 'text-[34px]',
    titleLargeFontSizeMaterial = 'text-[28px]',

    scrollEl,

    left,
    title,
    subtitle,
    right,
    subnavbar,
    ios,
    material,
    children,
    ...rest
  } = props;

  const elRef = useRef(null);
  const titleContainerHeight = useRef(0);
  const bgElRef = useRef(null);
  const innerElRef = useRef(null);
  const titleContainerElRef = useRef(null);
  const titleElRef = useRef(null);
  const subnavbarElRef = useRef(null);

  const wasScrollable = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const Component = component;

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const attrs = {
    ...rest,
  };

  const colors = NavbarColors(colorsProp, dark);

  const onScroll = (e) => {
    const { scrollTop } = e.target;
    if (!transparent && !large && !medium) {
      if (wasScrollable.current) {
        if (titleElRef.current) {
          titleElRef.current.style.opacity = '';
        }
        if (bgElRef.current) {
          bgElRef.current.style.opacity = '';
        }
      }
      return;
    }

    const maxTranslate = titleContainerHeight.current;
    const scrollProgress = Math.max(Math.min(scrollTop / maxTranslate, 1), 0);

    bgElRef.current.style.opacity = transparent
      ? -0.5 + scrollProgress * 1.5
      : '';
    if (medium || large) {
      bgElRef.current.style.transform = `translateY(-${
        scrollProgress * maxTranslate
      }px)`;
    }

    if (titleContainerElRef.current) {
      titleContainerElRef.current.style.transform = `translateY(-${
        scrollProgress * maxTranslate
      }px)`;
      titleContainerElRef.current.style.opacity = 1 - scrollProgress * 2;
    }
    if (titleElRef.current) {
      titleElRef.current.style.opacity = -0.5 + scrollProgress * 1.5;
    }
    if ((medium || large) && subnavbarElRef.current) {
      subnavbarElRef.current.style.transform = `translateY(-${
        scrollProgress * maxTranslate
      }px)`;
    }
  };

  const getScrollEl = () => {
    if (typeof scrollEl === 'undefined') {
      return elRef.current && elRef.current.parentNode;
    }
    return scrollEl.current || scrollEl;
  };

  const initScroll = () => {
    if (!large && !medium && !transparent) {
      if (wasScrollable.current) {
        onScroll({ target: { scrollTop: 0 } });
        wasScrollable.current = false;
      }
      return;
    }
    wasScrollable.current = true;
    if (titleContainerElRef.current) {
      titleContainerHeight.current = titleContainerElRef.current.offsetHeight;
    } else {
      titleContainerHeight.current = innerElRef.current.offsetHeight;
    }
    const scrollElLocal = getScrollEl();
    if (scrollElLocal) {
      scrollElLocal.addEventListener('scroll', onScroll);
      onScroll({ target: scrollElLocal });
    } else {
      onScroll({ target: { scrollTop: 0 } });
    }
  };

  const destroyScroll = () => {
    const scrollElLocal = getScrollEl();
    if (scrollElLocal) {
      scrollElLocal.removeEventListener('scroll', onScroll);
    }
  };

  useEffect(() => {
    initScroll();
    return destroyScroll;
  }, []);

  const isOutline = typeof outline === 'undefined' ? theme === 'ios' : outline;

  const c = themeClasses(
    NavbarClasses(
      {
        ...props,
        centerTitle:
          typeof centerTitle === 'undefined' ? theme === 'ios' : centerTitle,
        translucent,
        outline: isOutline,
        fontSizeIos,
        fontSizeMaterial,
        titleFontSizeIos,
        titleFontSizeMaterial,
        titleMediumFontSizeIos,
        titleMediumFontSizeMaterial,
        titleLargeFontSizeIos,
        titleLargeFontSizeMaterial,
        bgClassName,
        innerClassName,
        leftClassName,
        titleClassName,
        subtitleClassName,
        rightClassName,
        subnavbarClassName,
      },
      colors,
      className
    ),
    className
  );

  return (
    <Component ref={elRef} className={c.base} {...attrs}>
      <div className={c.bg} ref={bgElRef} />
      <div className={c.inner} ref={innerElRef}>
        {left && <div className={c.left}>{left}</div>}
        {(title || subtitle) && (
          <div className={c.title} ref={titleElRef}>
            {title}
            {subtitle && <div className={c.subtitle}>{subtitle}</div>}
          </div>
        )}
        {right && <div className={c.right}>{right}</div>}
        {children}
      </div>
      {(large || medium) && (
        <div className={c.titleContainer} ref={titleContainerElRef}>
          {title}
        </div>
      )}
      {subnavbar && (
        <div className={c.subnavbar} ref={subnavbarElRef}>
          {subnavbar}
        </div>
      )}
    </Component>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;

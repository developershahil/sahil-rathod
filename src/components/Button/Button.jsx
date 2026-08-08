import './Button.css';

/**
 * Button — reusable CTA component
 *
 * @param {string}  variant    - 'primary' | 'outline' | 'ghost'
 * @param {string}  href       - If provided, renders an <a> tag
 * @param {boolean} external   - Opens href in new tab
 * @param {string}  className  - Extra CSS classes
 * @param {node}    icon       - Optional icon (rendered before children)
 * @param {node}    iconRight  - Optional icon (rendered after children)
 */
const Button = ({
  children,
  variant = 'primary',
  href,
  external = false,
  className = '',
  icon,
  iconRight,
  onClick,
  ...rest
}) => {
  const classes = `btn btn--${variant} ${className}`.trim();

  const content = (
    <>
      {icon && <span className="btn__icon btn__icon--left">{icon}</span>}
      <span>{children}</span>
      {iconRight && <span className="btn__icon btn__icon--right">{iconRight}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
};

export default Button;

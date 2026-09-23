
interface SectionHeadingProps {
  title: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export default function SectionHeading({
  title,
  as: Component = "h2",
  className = "",
}: SectionHeadingProps) {
  const baseStyles = "font-bold text-hero-title tracking-tight";
  
  const sizeStyles = {
    h1: "text-3xl sm:text-5xl",
    h2: "text-2xl sm:text-4xl",
    h3: "text-xl sm:text-2xl",
  };

  return (
    <Component className={`${baseStyles} ${sizeStyles[Component]} ${className}`}>
      {title}
    </Component>
  );
}
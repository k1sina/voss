import React from "react";
import { cn } from "./utils";

// Typography Components
interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

// Heading Components
export function H1({ children, className, ...props }: TypographyProps) {
  return (
    <h1
      className={cn(
        "font-myriad-pro text-[28px] leading-[28px] font-bold uppercase tracking-[0px] lg:text-[72px] lg:leading-[72px]",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className, ...props }: TypographyProps) {
  return (
    <h2
      className={cn(
        "font-bitter text-[24px] leading-[28.8px] font-medium tracking-[0px] lg:text-[36px] lg:leading-[44px] lg:tracking-[1.08px]",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className, ...props }: TypographyProps) {
  return (
    <h3
      className={cn(
        "font-bitter text-[20px] leading-[24px] font-medium tracking-[0px] lg:text-[30px] lg:leading-[40px]",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function H3Uppercase({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <h3
      className={cn(
        "font-bitter text-[20px] leading-[24px] font-medium uppercase tracking-[0px] lg:text-[30px] lg:leading-[40px] lg:tracking-[3px]",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className, ...props }: TypographyProps) {
  return (
    <h4
      className={cn(
        "font-bitter text-[18px] leading-[21.6px] font-medium tracking-[0px] lg:text-[24px] lg:leading-[32px] lg:tracking-[0.48px]",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
}

export function H4Uppercase({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <h4
      className={cn(
        "font-myriad-pro text-[18px] leading-[21.6px] font-bold uppercase tracking-[0px] lg:text-[24px] lg:leading-[28.8px]",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
}

// Paragraph Components
export function Paragraph({ children, className, ...props }: TypographyProps) {
  return (
    <p
      className={cn(
        "font-myriad-pro text-[14px] leading-[18px] font-normal tracking-[0px] lg:text-[16px] lg:leading-[24px]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function Introduction({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <p
      className={cn(
        "font-myriad-pro text-[16px] leading-[19.2px] font-normal tracking-[0px] lg:text-[36px] lg:leading-[48px]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function ParagraphUppercase({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <p
      className={cn(
        "font-myriad-pro text-[14px] leading-[16.8px] font-normal uppercase tracking-[0.98px] lg:text-[16px] lg:leading-[20px] lg:tracking-[1.12px]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function ParagraphBold({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <p
      className={cn(
        "font-myriad-pro text-[14px] leading-[16.8px] font-bold tracking-[0px] lg:text-[16px] lg:leading-[24px]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function ParagraphBoldUppercase({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <p
      className={cn(
        "font-myriad-pro text-[14px] leading-[16.8px] font-bold uppercase tracking-[0.98px] lg:text-[16px] lg:leading-[20px] lg:tracking-[1.12px]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function ParagraphItalic({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <p
      className={cn(
        "font-myriad-pro text-[14px] leading-[16px] font-normal italic tracking-[0px] lg:text-[16px] lg:leading-[24px]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function ParagraphSmall({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <p
      className={cn(
        "font-myriad-pro text-[12px] leading-[14.4px] font-normal uppercase tracking-[0.84px] lg:text-[14px] lg:leading-[16px]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function ParagraphSmallUppercaseBold({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <p
      className={cn(
        "font-myriad-pro text-[12px] leading-[14.4px] font-bold uppercase tracking-[0.84px] lg:text-[14px] lg:leading-[16.8px] lg:tracking-[0.7px]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function ButtonText({ children, className, ...props }: TypographyProps) {
  return (
    <span
      className={cn(
        "font-myriad-pro text-[14px] leading-[16px] font-semibold tracking-[0px] lg:text-[16px] lg:leading-[18px] transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export function MenuText({ children, className, ...props }: TypographyProps) {
  return (
    <span
      className={cn(
        "font-myriad-pro text-[14px] leading-[16px] font-normal tracking-[0px] lg:text-[18px] lg:leading-[18px]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export function Link({ children, className, ...props }: TypographyProps) {
  return (
    <a
      className={cn(
        "font-myriad-pro text-[14px] leading-[16.8px] font-normal tracking-[0px] lg:text-[16px] lg:leading-[24px]",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

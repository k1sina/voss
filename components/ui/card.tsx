import * as React from "react";
import { H4, Paragraph } from "@/lib/typography";
import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({
  className,
  children,
  as = "h4",
  ...props
}: React.ComponentProps<"div"> & {
  as?: "h2" | "h3" | "h4" | "h5" | "h6";
}) {
  // If children is a simple string and not already a typography component, wrap it in H4
  const isSimpleText = typeof children === "string";
  const hasTypographyComponent = React.Children.toArray(children).some(
    (child) =>
      React.isValidElement(child) &&
      (child.type === H4 ||
        (typeof child.type === "function" && child.type.name?.startsWith("H")))
  );

  const content =
    isSimpleText && !hasTypographyComponent ? <H4>{children}</H4> : children;

  return (
    <div
      data-slot="card-title"
      className={cn("leading-none", className)}
      {...props}
    >
      {content}
    </div>
  );
}

function CardDescription({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  // If children is a simple string and not already a typography component, wrap it in Paragraph
  const isSimpleText = typeof children === "string";
  const hasTypographyComponent = React.Children.toArray(children).some(
    (child) =>
      React.isValidElement(child) &&
      (child.type === Paragraph ||
        (typeof child.type === "function" &&
          child.type.name?.startsWith("Paragraph")))
  );

  const content =
    isSimpleText && !hasTypographyComponent ? (
      <Paragraph className="text-muted-foreground">{children}</Paragraph>
    ) : (
      children
    );

  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    >
      {content}
    </div>
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};

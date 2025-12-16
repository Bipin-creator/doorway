// Shared types
export type Direction = "expand" | "collapse";

export interface SectionBlockProps {
    title: string;
    text: string;
}

export interface AnimatedSectionBlockProps extends SectionBlockProps {
    direction?: Direction;
}
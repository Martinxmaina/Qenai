import Image from "next/image";
import Link from "next/link";
import { highlight } from "sugar-high";

function Code({ children, ...props }: any) {
    let codeHTML = highlight(children);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

export function MDXComponents(components: any) {
    return {
        h1: ({ className, ...props }: any) => (
            <h1
                className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight"
                {...props}
            />
        ),
        h2: ({ className, ...props }: any) => (
            <h2
                className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0"
                {...props}
            />
        ),
        h3: ({ className, ...props }: any) => (
            <h3
                className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
                {...props}
            />
        ),
        h4: ({ className, ...props }: any) => (
            <h4
                className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                {...props}
            />
        ),
        h5: ({ className, ...props }: any) => (
            <h5
                className="mt-8 scroll-m-20 text-lg font-semibold tracking-tight"
                {...props}
            />
        ),
        h6: ({ className, ...props }: any) => (
            <h6
                className="mt-8 scroll-m-20 text-base font-semibold tracking-tight"
                {...props}
            />
        ),
        a: ({ className, ...props }: any) => (
            <Link
                className="font-medium underline underline-offset-4"
                {...props}
            />
        ),
        p: ({ className, ...props }: any) => (
            <p
                className="leading-7 [&:not(:first-child)]:mt-6"
                {...props}
            />
        ),
        ul: ({ className, ...props }: any) => (
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />
        ),
        ol: ({ className, ...props }: any) => (
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />
        ),
        li: ({ className, ...props }: any) => (
            <li className="mt-2" {...props} />
        ),
        blockquote: ({ className, ...props }: any) => (
            <blockquote
                className="mt-6 border-l-2 pl-6 italic"
                {...props}
            />
        ),
        img: ({
            className,
            alt,
            ...props
        }: React.ImgHTMLAttributes<HTMLImageElement>) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                className="rounded-md border"
                alt={alt}
                {...props}
            />
        ),
        hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
        table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
            <div className="my-6 w-full overflow-y-auto">
                <table className="w-full" {...props} />
            </div>
        ),
        tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
            <tr className="m-0 border-t p-0 even:bg-muted" {...props} />
        ),
        th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
            <th
                className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
                {...props}
            />
        ),
        td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
            <td
                className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
                {...props}
            />
        ),
        pre: ({ className, ...props }: any) => (
            <pre
                className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4"
                {...props}
            />
        ),
        code: ({ className, ...props }: any) => (
            <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
                {...props}
            />
        ),
        Image,
        ...components,
    };
}

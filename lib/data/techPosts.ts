import { BlogPost } from "../types";

// Tech
export const techPosts: BlogPost[] = [
  {
    slug: 'mastering-nextjs-server-components',
    imageUrl: '/images/next.png',
    category: 'Tech',
    title: 'Mastering Next.js 15 Server Components',
    excerpt: 'A deep dive into the latest patterns for building high-performance web apps with React Server Components.',
    content: `
For years, the React ecosystem has been dominated by client-side rendering (CSR), where a minimal HTML file is sent to the browser, which then downloads and runs a large JavaScript bundle to render the application. With the introduction of **React Server Components (RSCs)**, Next.js is leading a paradigm shift back to a server-centric model that promises better performance, simpler data fetching, and smaller client bundles.

### ## What Are Server Components? 🤔
The simplest way to think about Server Components is to compare them to Client Components.
-   **Client Components** are the traditional React components you're used to. They can use state ('useState') and effects ('useEffect'), handle user interactions ('onClick'), and are rendered in the browser.
-   **Server Components** are the new default in the Next.js App Router. They run **exclusively on the server** during the request-response lifecycle. Their code is never sent to the browser, and they cannot use hooks like 'useState' or handle user events.

Think of it like this: a Server Component is a chef who prepares a complex dish entirely in the kitchen (the server) and sends the finished plate (the HTML) out to the customer. A Client Component is like a meal kit delivered to the table, which the customer (the browser) assembles themselves.

### ## The "use client" Directive: Defining the Boundary 
Since Server Components are the default, how do you specify that a component needs to be interactive? You use the **\`"use client"\`** directive. By placing this at the very top of a file, you are telling Next.js that this component and any components it imports are Client Components. This creates a clear boundary between your server-side logic and your client-side interactivity.

### ## Data Fetching, Simplified 🚀
One of the biggest advantages of Server Components is a radically simplified data-fetching model. You can use \`async/await\` directly within your component, just like in a Node.js environment. 
\`\`\`jsx
// app/posts/page.tsx
async function getPosts() {
  const res = await fetch('https://api.example.com/posts');
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
\`\`\`
There's no need for \`useEffect\`, \`useState\`, or client-side fetching libraries for server data. This co-location of data fetching and rendering makes components easier to reason about and maintain.

### ## Best Practices in 2025
As the ecosystem matures, several best practices have emerged:
-   **Keep Client Components Small:** Push your interactive components as far down the component tree as possible (to the "leaves"). This minimizes the amount of JavaScript sent to the browser.
-   **Pass Server Components as Children:** You can pass a Server Component as a child or prop to a Client Component. This allows you to have a static "hole" of server-rendered content inside a dynamic client component, combining the best of both worlds.

Server Components are not just a new feature; they represent a fundamental evolution in how we build web applications with React, leading to faster, lighter, and more maintainable sites.
    `,
    authorAvatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    authorName: 'Alex Johnson',
    date: 'Aug 20, 2025',
  },
  {
    slug: 'webassembly-the-future-of-web-performance',
    imageUrl: '/images/webAssembly.png',
    category: 'Tech',
    title: 'WebAssembly: The Future of Web Performance',
    excerpt: 'Learn how WASM is enabling near-native speed for complex applications directly in the browser.',
    content: `
For decades, the web has run on three core languages: HTML for structure, CSS for style, and JavaScript for logic. But a fourth is rapidly rising to prominence: **WebAssembly (WASM)**. It's not a replacement for JavaScript, but a powerful partner that unlocks a new tier of performance for web applications.

### ## What is WebAssembly? ⚙️
WebAssembly is a **binary instruction format** for a stack-based virtual machine. That's a technical mouthful, but what it means is that it's a way to run code written in high-performance languages like **C++, Rust, and Go** directly in the browser at near-native speed. Unlike JavaScript, which is an interpreted language, WebAssembly is a compilation target, meaning the code is already optimized before it ever reaches the browser.

### ## Why Not Just Use JavaScript?
JavaScript is fantastic for what it was designed for: manipulating web pages, handling user interactions, and orchestrating application logic. However, for computationally intensive tasks—like 3D graphics rendering, video editing, scientific simulations, or complex cryptography—the overhead of an interpreted language can be a significant bottleneck. WebAssembly bypasses this by providing a highly efficient, low-level bytecode that the browser's engine can execute much faster.

### ## Real-World Use Cases 🌍
WebAssembly is already powering some of the most impressive applications on the web. 
-   **Figma:** The popular design tool uses WebAssembly for its high-performance rendering engine, allowing it to handle complex vector graphics smoothly in the browser.
-   **Google Earth:** The web version of Google Earth leverages WASM to render the entire globe with 3D models and textures.
-   **AutoCAD Web:** Autodesk was able to port its 30-year-old C++ codebase for AutoCAD to the web using WebAssembly, bringing a full-featured CAD program into the browser.
-   **Video and Audio Processing:** Libraries like FFmpeg have been compiled to WASM, allowing for in-browser video and audio transcoding without ever sending data to a server.

### ## How to Use It
You don't typically write WebAssembly by hand. The workflow is:
1.  Write code in a language like Rust or C++.
2.  Use a toolchain (like Emscripten for C++ or wasm-pack for Rust) to compile that code into a **\`.wasm\`** module.
3.  Load that module in your JavaScript code and call its exported functions.

JavaScript acts as the controller, managing the DOM and user events, while WebAssembly acts as the supercharged engine, handling the heavy computational lifting. As the web platform continues to evolve, the partnership between JavaScript and WebAssembly will be at the heart of the next generation of powerful, browser-based applications.
    `,
    authorAvatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    authorName: 'Samantha Lee',
    date: 'Aug 18, 2025',
  },
  {
    slug: 'css-in-2025-container-queries-and-nesting',
    imageUrl: '/images/css.png',
    category: 'Tech',
    title: 'CSS in 2025: Beyond Media Queries',
    excerpt: 'Explore the power of CSS Container Queries, Nesting, and other new features changing how we write styles.',
    content: `
For over a decade, responsive design has been synonymous with one core CSS feature: **media queries**. We've designed our layouts based on the size of the viewport, but this approach has always had limitations. A component that looks great in a wide layout might break in a narrow sidebar, even on the same screen. In 2025, a new suite of CSS features, now fully supported in all major browsers, is fundamentally changing how we build responsive and maintainable styles.

### ## The Revolution of Container Queries 📦
Container queries are arguably the biggest shift in responsive design since media queries. Instead of styling an element based on the size of the entire **viewport**, container queries allow you to style an element based on the size of its **parent container**.

This unlocks true component-based design. You can create a self-contained card component that adapts its layout based on the space it's given. For example, it might show an image next to text in a wide container, but stack the image on top of the text in a narrow one.
\`\`\`css
/* Define an element as a query container */
.card-container {
  container-type: inline-size;
  container-name: card;
}

/* Style the card's title based on the container's width */
@container card (min-width: 400px) {
  .card-title {
    font-size: 1.5rem;
  }
}
\`\`\`
This makes components more reusable and robust, as their styling logic is entirely self-contained.

### ## Native CSS Nesting (Goodbye, BEM!) 👋
If you've ever used a preprocessor like SASS or SCSS, you'll feel right at home with native CSS nesting. This feature allows you to nest style rules inside one another, just like in HTML, making your CSS more organized and readable. 

**Before Nesting:**
\`\`\`css
.card {
  background-color: white;
}
.card .card-title {
  font-size: 1.25rem;
}
.card .card-title:hover {
  text-decoration: underline;
}
\`\`\`
**With Nesting:**
\`\`\`css
.card {
  background-color: white;

  .card-title {
    font-size: 1.25rem;

    &:hover {
      text-decoration: underline;
    }
  }
}
\`\`\`
This dramatically reduces repetition and makes the relationship between selectors much clearer.

### ## Other Game-Changing Features ✨
Beyond these two headliners, other powerful features are now at your disposal:
-   **\`:has()\` Selector:** Often called the "parent selector," \`:has()\` lets you style an element based on its children. For example, \`figure:has(figcaption)\` could style a figure element only if it contains a caption.
-   **\`subgrid\`:** A new value for \`grid-template-columns\` and \`grid-template-rows\`, \`subgrid\` allows a nested grid item to align with its parent grid, making complex, multi-column layouts much easier to manage.
-   **New Color Spaces:** Functions like \`lch()\` and \`oklch()\` give developers access to a much wider range of colors than traditional RGB or HSL, allowing for more vibrant and perceptually uniform designs.

These advancements are making CSS more powerful and expressive than ever before. By embracing them, you can write cleaner, more maintainable, and truly component-driven stylesheets.
    `,
    authorAvatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    authorName: 'Chris Patel',
    date: 'Aug 15, 2025',
  },
  {
    slug: 'the-state-of-react-state-management',
    imageUrl: '/images/react.png',
    category: 'Tech',
    title: 'The State of React State Management in 2025',
    excerpt: 'A comprehensive comparison of modern state management libraries like Zustand, Jotai, and Signals.',
    content: `
For as long as React has existed, the question of "how do I manage my state?" has followed closely behind. For years, **Redux** was the undisputed champion, but its complexity and boilerplate often felt like overkill for many applications. The modern state management landscape in 2025 has shifted dramatically towards simplicity, minimalism, and better integration with React's concurrent features.

### ## The Rise of Atomic State: Jotai ⚛️
One of the most powerful modern paradigms is **atomic state management**, championed by libraries like **Jotai** and Recoil. Instead of a single, monolithic store, state is broken down into tiny, independent pieces called "atoms."

An atom might hold a single value, like a boolean for a modal's visibility or a string for a search query. Components subscribe *only* to the specific atoms they need. This fine-grained approach solves a classic problem with context-based state: when one part of a large state object changes, all components consuming that context re-render. With atoms, only the components subscribed to the specific atom that changed will update, leading to significant performance gains.

### ## The Minimalist Flux: Zustand 🐻
For those who like the centralized store pattern of Redux but hate the boilerplate, **Zustand** has become a community favorite. It provides a simple, hook-based API for creating a central store without the need for reducers, action creators, or dispatch functions.

Creating a store is incredibly simple:
\`\`\`javascript
import { create } from 'zustand';

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
\`\`\`
You can then use the \`useBearStore\` hook directly in any component to access and update the state. It's fast, unopinionated, and easy to integrate into any project.

### ## The New Wave: Signals ✨
The latest evolution in state management is the concept of **Signals**, popularized by frameworks like Solid.js and Preact. Signals represent a move towards even more fine-grained reactivity. Instead of re-rendering a component when state changes, a signal can update the DOM directly where the state is used. While this isn't native to React's rendering model, libraries are emerging to bring signal-like reactivity to the React ecosystem, promising to eliminate unnecessary re-renders almost entirely.

### ## Don't Forget the Basics!
With all these exciting new libraries, it's easy to forget that **React's built-in hooks are more powerful than ever.** With the combination of Server Components handling server state and client hooks like \`useState\`, \`useReducer\`, and \`useContext\` for client state, many applications don't need an external state management library at all. The best advice for 2025 is to start with the built-in tools and only reach for a library like Zustand or Jotai when you feel the "pain" of prop-drilling or managing complex, shared client state.
    `,
    authorAvatar: 'https://randomuser.me/api/portraits/women/50.jpg',
    authorName: 'Maria Garcia',
    date: 'Aug 11, 2025',
  },
];